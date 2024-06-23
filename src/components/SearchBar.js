import { useState, useEffect } from 'react'
import { ReactComponent as Lupa } from "../svg/lupa.svg"
import { setGlobalState, getGlobalState } from '../state';
import { NavLink, Link, useParams } from 'react-router-dom';


export default function SearchBar() {
  let [buscador, setBuscador] = useState('')
  let [busqueda, setBusqueda] = useState('')
  const handleChange = (event) => {
    const value = event.target.value;
    setBuscador(value);
    console.log(buscador)
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    setBusqueda(buscador)
    setBuscador('')
  }

  return (
    <div className="mx-auto w-52 relative mt-2 rounded-md shadow-sm">
      <form onSubmit={handleSubmit}>
        <input type="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Productos' onChange={handleChange} value={buscador}/>
        <button type='submit' class="absolute inset-y-0 right-0 pr-2"> <Link to='/search'><Lupa className='w-5 h-5'/></Link></button>
      </form>
    </div>
  )
}
