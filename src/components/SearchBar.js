import Logo from '../svg/lupa.svg';
const fetchApi = async (valorBuscado) => {
  try {
      let respuesta = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${valorBuscado}`)
      let json = await respuesta.json()

      return json
  } catch (error) {
      console.error('Error:', error)
  }
}

export default function SearchBar() {

    return (
      <div>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder='Buscar Productos'
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button>
                <img src={Logo}
                  className='mr-3'
                  style={{ height: 33, width: 26 }}
                  alt="lupaBusqueda"
                  />
            </button>
          </div>
        </div>
      </div>
    )
  }
  