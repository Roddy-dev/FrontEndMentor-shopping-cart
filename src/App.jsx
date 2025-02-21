import Store from "./pages/Store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  console.log("import.meta.env", import.meta.env);
  return (
    <div className="app">
      <ShoppingCartProvider>
        {/* if we wanted to add routing or header do it here, not neccessary in this case */}
        <Store />
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
