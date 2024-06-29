import React from "react"
import CartItem from "./CartItem"

export default function CartList() {
    let cart = localStorage.getItem('cart')
    if (cart === null){
        cart = []
        }
        else{
        cart = JSON.parse(cart)
        }

    let total = 0
    return (
        <div className="relative overflow-x-auto">
            {cart.length != 0 ?
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Producto
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Cantidad
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total
                        </th>
                    </tr>
                </thead>
                <tbody>
                {cart.map((item, index)=>{
                    total += item.price * item.quantity
                    return(
                        <CartItem key={index} item={item} />
                    )})}
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    </th>
                    <td className="px-6 py-4">
                    </td>
                    <td className="px-6 py-4">
                        {total}
                    </td>
                </tr>
                </tbody>
            </table> : []}
        </div>
    )
}

