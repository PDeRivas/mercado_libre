import { useNavigate } from "react-router-dom"

export default function CartButtons() {
    let navigate = useNavigate()
    return (
        <div className='flex flex-col justify-center w-full mt-5'>
            <div>
                <button type="button" className="w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    onClick={(e) => {
                        localStorage.clear()
                        navigate('/purchaseEnd')
                    }}>
                    Finalizar Compra
                </button>
                <button type="button" className="w-1/2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    onClick={(e) => {
                        navigate('/')
                    }}>
                    Seguir Comprando
                </button>
            </div>
        </div>
    )
}