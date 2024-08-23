import React from 'react';
import { FaShoppingCart } from '@react-icons/all-files/fa/FaShoppingCart';
import { FaCreditCard } from '@react-icons/all-files/fa/FaCreditCard';

interface CardProductProps {
  image: string;
  name: string;
  price: number;
}

/*
{products.map((product) => (
    <CardProduct
      image={product.image}
      name={product.name}                     "inge agregar esto a section para simular como se veria la card
      price={product.Price}       ya que todavia no tenemos la conexion"
    />
  ))}
    */
   
const CardProduct: React.FC<CardProductProps> = ({ image, name, price }) => {

    /* Aca dejare un poco la estructura para llamar al front, no recuerdo si estan usando axios
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      axios.get<Product>('https://api.ejemplo.com/product/1')  
        .then(response => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch(error => {
          setError('Error');
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }
  
    if (!product) {
      return <div>No product found</div>;
    }
      */

    return (
        <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
          </div>
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <span className="text-black text-base"> ★ 5.0</span>
              <span className="ml-1 text-gray-600 text-base">(0 reseñas)</span>
            </div>
            <span className="text-lg font-bold ml-2">${price.toFixed(2)} MXN</span>
          </div>
          <div className="flex justify-between space-x-2">
            <button className="w-44 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium py-2 px-4 rounded flex items-center justify-center">
              <FaShoppingCart className="mr-2" /> Agregar al carrito
            </button>
            <button className="w-44 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-4 rounded flex items-center justify-center">
              <FaCreditCard className="mr-2" /> Comprar ahora
            </button>
          </div>
        </div>
      );
    
      
};

export default CardProduct;
