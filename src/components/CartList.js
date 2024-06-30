import React from "react"
import CartItem from "./CartItem"

export default function CartList() {
    let cart = localStorage.getItem('cart')
    if (cart === null) {
        cart = []
    }
    else {
        cart = JSON.parse(cart)
    }

    let total = 0

    return (
        <div className='flex justify-center'>
            <div className='w-11/12'>
                {cart.length !== 0 ?
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 shadow">
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => {
                                total += item.price * item.quantity
                                return (
                                    <CartItem key={index} item={item} />
                                )
                            })}
                            <tr className="bg-white">
                                <th scope="row" className="px-6 py-4">
                                </th>
                                <td className="px-6 py-4">
                                </td>
                                <td className="px-6 py-4">
                                    {total.toFixed(2)}
                                </td>
                                <td>
                                </td>
                            </tr>
                        </tbody>
                    </table> : []}
            </div>
        </div>
    )
}

