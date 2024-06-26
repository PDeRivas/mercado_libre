import Navbar from "../components/Navbar"
import React from "react"

export default function Cart(){
  return (
    <div className="App">
      <Navbar />
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 mt-20 mb-0">Recomendados para vos</h2>
      <List searchValue={recomendado}/>
    </div>
  )
}