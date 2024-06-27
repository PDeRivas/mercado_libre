import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function CartIcon() {
  const navigate = useNavigate()

  let cart = localStorage.getItem('cart')
  cart = JSON.parse(cart)

  const handleSubmit = () =>{
    navigate('/cart')
  }

  return (
    <div className="w-7 flex justify-center items-center">
      <div className="relative">
      {cart.length != 0 ? 
          <div className="t-0 absolute left-3">
            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{cart.length}</p>
          </div>:{}}
        <button onClick={handleSubmit} class="file: mt-4 h-6 w-6"><FontAwesomeIcon icon={faCartShopping} /></button>
      </div>
    </div>
  )
}
