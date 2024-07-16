/* eslint-disable no-case-declarations */
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Iproduct } from "../interfaces/product"
import axios from "axios"


const useProductMutation = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationKey: ['PRODUCTS'],
        mutationFn: async (option: { action: string, product: Iproduct }) => {
            try {
                switch (option.action) {
                    case 'add':
                        const data = await axios.post('http://localhost:3000/products', option.product)
                        alert('Thêm thành công')
                        return data
                        break;
                    case 'delete':
                         await axios.delete(`http://localhost:3000/products/${option.product.id}`)
                        alert('Xóa thành công')
                        break;
                    case 'update':
                        await axios.put(`http://localhost:3000/products/${option.product.id}`,option.product)
                        alert('Cập nhật thành công')
                        break;
                    default:
                        break;
                }
            } catch (error) {
                console.log(error)
            }
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey:['PRODUCTS']})
        }
    })
    return mutation
}

export default useProductMutation