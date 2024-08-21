import React, { useState, useEffect } from "react";

const UpdateForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    rfc: "",
  });

  const [errors, setErrors] = useState({
    rfc: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("URL_DEL_BACKEND");
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
        setErrorMessage(
          "Hubo un error al cargar los datos. Por favor, intenta de nuevo."
        );
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "rfc") {
      validateRFC(value);
    }
  };

  const validateRFC = (rfc: string) => {
    const rfcPattern =
      /^([A-Z&Ñ]{3,4})?(?:-?)(\d{2})(\d{2})(\d{2})([A-Z\d]{2})([A\d])$/;

    if (!rfcPattern.test(rfc)) {
      setErrors({
        ...errors,
        rfc: "RFC no válido. Debe contener 13 caracteres alfanuméricos en el formato correcto.",
      });
    } else {
      setErrors({
        ...errors,
        rfc: "",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (errors.rfc) {
      console.error("Formulario contiene errores.");
      return;
    }

    try {
      const response = await fetch("URL_DEL_BACKEND", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      const data = await response.json();
      console.log("Perfil actualizado:", data);
      setSuccessMessage("Perfil actualizado exitosamente.");
      setErrorMessage("");
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      setErrorMessage(
        "Hubo un error al actualizar el perfil. Por favor, intenta de nuevo."
      );
      setSuccessMessage("");
    }
  };

  const handleCancel = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col md:flex-row w-full max-w-5xl h-auto bg-white shadow-lg rounded-none overflow-hidden">
        <div className="w-full md:w-1/2 p-6 space-y-4 flex flex-col justify-center">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Actualizar Perfil
            </h2>
          </div>
          <form className="space-y-10" onSubmit={handleSubmit} method="PUT">
            {successMessage && (
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline">{successMessage}</span>
              </div>
            )}
            {errorMessage && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline">{errorMessage}</span>
              </div>
            )}
            <div className="rounded-md shadow-sm space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-900"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="text-sm font-semibold text-gray-900"
                >
                  Apellidos
                </label>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Apellidos"
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email-address"
                  className="text-sm font-semibold text-gray-900"
                >
                  Correo
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-900"
                >
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="rfc"
                  className="text-sm font-semibold text-gray-900"
                >
                  RFC
                </label>
                <input
                  id="rfc"
                  name="rfc"
                  type="text"
                  autoComplete="off"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="RFC"
                  value={formData.rfc}
                  onChange={handleChange}
                />
                {errors.rfc && (
                  <p className="text-red-500 text-xs mt-2">{errors.rfc}</p>
                )}
              </div>
            </div>
            <div className="">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
              >
                Actualizar
              </button>
              <button
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 mt-4"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img
            className="object-cover w-full h-full"
            src="../../../public/fondo-geomodule.jpg"
            alt="Imagen de fondo para el formulario"
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
