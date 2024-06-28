import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
  let [buscador, setBuscador] = useState('')
  const navigate = useNavigate()

  const handleChange = (event) => {
    const value = event.target.value;
    setBuscador(value);
  };

  const handleSubmit = (event) =>{
    if (buscador != ''){
      navigate('/search/' + buscador)
    }
    else{
      event.preventDefault()
    }
  }

  return (
    <div className="w-2/5 relative mt-2 rounded-md">
      <form onSubmit={handleSubmit}>
        <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Productos' onChange={handleChange} value={buscador}/>
        <button type='submit' className="absolute inset-y-0 right-0 pr-2"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </form>
    </div>
  )
}
