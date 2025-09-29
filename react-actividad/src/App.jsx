import Producto from "./components/Producto";

function App() {
  return (
    <div>
      <h2>Lista de Productos (Propuesta 3)</h2>

      <Producto
        name="Teclado mecanico"
        price={40000}
        discount={25}
        category="Tecnología"
      />

      <Producto
        name="Botines de futbol"
        price={40000}
        category="Calzado"
      />

      <Producto
        name="Mochila"
        price={20000}
        discount={10}
        category="Accesorios"
      />
    </div>
  );
}

export default App
