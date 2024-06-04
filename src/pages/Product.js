const fetchApi = async () => {
    try {
        let respuesta = await fetch('aca va la api')
        let json = await respuesta.json()

        return json
    } catch (error) {
        console.error('Error:', error)
    }
}

export default function Product() {
    return (
      <div className="App">
        <p>Producto</p>
      </div>
    );
  }