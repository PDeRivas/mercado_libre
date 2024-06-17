import Navbar from "../components/Navbar"

const fetchApi = async (valorBuscado) => {
  try {
      let respuesta = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${valorBuscado}`)
      let json = await respuesta.json()
 
      return json.results
  } catch (error) {
      console.error('Error:', error)
  }
}

export default function Search() {
    return (
      <div className="App bg-green-600">
        <Navbar />
        <p className="text-3xl font-bold underline">Home</p>
      </div>
    );
  }