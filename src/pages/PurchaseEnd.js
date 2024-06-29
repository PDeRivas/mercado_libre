import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
export default function PurchaseEnd() {
  return (
    <div className="App">
      <Navbar />
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-20 mb-0">Gracias por su compra</h2>
        <Link to='/'>Presione aqui para seguir buscando productos</Link>
    </div>
  )
}