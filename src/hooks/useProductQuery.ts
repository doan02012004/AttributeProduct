
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


const useProductQuery = () => {
    const query = useQuery({
        queryKey:['PRODUCTS'],
        queryFn: async()=>{
            try {
                const products = await axios.get('http://localhost:3000/products')
                return products.data
            } catch (error) {
                console.log(error)
            }
        }
    })
  return query 
}

export default useProductQuery