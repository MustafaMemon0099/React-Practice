import React from 'react'; 
import { useQuery, QueryClient} from '@tanstack/react-query'; 
import axios from 'axios'; 
import './index.css';
const queryClient = new QueryClient(); 
function App() {

  const fetchProducts = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products`); 
    return res.data; 
  }

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['products'], 
    queryFn: fetchProducts,  
    enabled: false,         
  });

  if (isLoading) return <h1>Loading...</h1>; 
  if (isError) return <h1>Error occurred</h1>; 

  const updateProduct = async (productId, updatedData) => {
    const res = await axios.put(`https://fakestoreapi.com/products/${productId}`, updatedData);
    return res.data;
  }
  
  return (
    <div>
      <button onClick={refetch}>Fetch Products</button>
     

      {data && data.map(product => (
     
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
     <img src={product.image} alt={product.title} />

        </div>
      ))}
    </div>
  )
}

export default App

  