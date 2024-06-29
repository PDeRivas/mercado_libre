import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import addProduct from './addProduct'
import minusProduct from './minusProduct'
import { useState, useEffect } from 'react'

export default function CartItem(item){
    item = item.item
    let [quantity, setQuantity] = useState(item.quantity)
    
    let getItemQuantity = () =>{
        let cart = localStorage.getItem('cart')
        cart = JSON.parse(cart)
        cart.map((cartItem)=>{
            if (cartItem.id == item.id){
                setQuantity(cartItem.quantity)
            }
        })
    }
    return(
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img src={item.thumbnail}/>
                <p className="ml-4">{item.title}</p>
            </th>
            <td className="px-6 py-4">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-3 mr-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                 onClick={(e)=>{
                    minusProduct(item.id)
                    getItemQuantity()
                    }}>
                        <FontAwesomeIcon icon={faMinus}/></button>
                {quantity}
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-3 ml-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={(e)=>{
                    addProduct(item.id)
                    getItemQuantity()
                    }}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
            </td>
            <td className="px-6 py-4">
                {item.price * quantity}
            </td>
        </tr>
    )
}