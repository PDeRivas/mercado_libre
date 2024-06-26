import Navbar from "../components/Navbar"
import React from "react"
import CartList from "../components/CartList"

export default function Cart(){
  return (
    <div className="App">
      <Navbar />
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 mt-20 mb-0">Finalizar la Compra</h2>
      <CartList />
    </div>
  )
}