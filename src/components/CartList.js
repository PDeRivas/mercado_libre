import React from "react"
import CartItem from "./CartItem"

export default class CartList extends React.Component {
    render(){
        let cart = localStorage.getItem('cart')
        cart = JSON.parse(cart)
        let total = 0
        return (
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Producto
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Cantidad
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {cart.map((item)=>{
                        total += item.price * item.quantity
                        return(
                            <CartItem item={item} />
                        )})}
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        </th>
                        <td class="px-6 py-4">
                        </td>
                        <td class="px-6 py-4">
                            {total}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )}
}

