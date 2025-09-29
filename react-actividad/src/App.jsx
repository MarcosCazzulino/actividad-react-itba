import Producto from "./components/Producto";
import UserCard from "./components/UserCard";

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

      <h2>Tarjeta de Usuario</h2>

      <UserCard
        name="Juan Pérez"
        email="juan@example.com"
        age={30}
        online={true}
      />
      <UserCard
        name="Emma Gómez"
        email="Emma@example.com"
        age={21}
        online={false}
      />
    </div>
  );
}

export default App
