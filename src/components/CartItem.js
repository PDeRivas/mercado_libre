import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import addProduct from './addProduct'
import minusProduct from './minusProduct'
import removeProduct from './removeProduct'
import { useState } from 'react'

export default function CartItem(item) {
    item = item.item
    let [quantity, setQuantity] = useState(item.quantity)
    let [showElement, setShowElement] = useState(true)

    let getItemQuantity = () => {
        let cart = localStorage.getItem('cart')
        cart = JSON.parse(cart)
        cart.forEach((cartItem) => {
            if (cartItem.id === item.id) {
                setQuantity(cartItem.quantity)
            }
        })
    }

    return (
        <>
            {showElement ?
                <tr className="bg-gray-50 border-b border-t border-gray-700">
                    <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <img src={item.thumbnail} alt={item.title} />
                        <p className="ml-4">{item.title}</p>
                    </th>

                    <td className="px-6 py-4 text-gray-900">
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-3 mr-2 text-center inline-flex items-center"
                            onClick={(e) => {
                                if (quantity === 1) {
                                    removeProduct(item.id)
                                    setShowElement(false)
                                }
                                else {
                                    minusProduct(item.id)
                                    getItemQuantity()
                                }
                            }}>
                            <FontAwesomeIcon icon={faMinus} /></button>
                        {quantity}
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-3 ml-2 text-center inline-flex items-center"
                            onClick={(e) => {
                                addProduct(item.id)
                                getItemQuantity()
                            }}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                        {(item.price * quantity).toFixed(2)}
                    </td>
                    <td className='text-gray-900'>
                        <button onClick={(e) => {
                            removeProduct(item.id)
                            setShowElement(false)
                        }}> <FontAwesomeIcon icon={faTrash} className='mr-2' /> </button>
                    </td>
                </tr> : <></>}
        </>
    )
}