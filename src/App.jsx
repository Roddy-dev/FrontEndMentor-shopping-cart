import Store from "./pages/Store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      {/* if we wanted to add routing or header do it here, not neccessary in this case */}
      <Store />
    </ShoppingCartProvider>
  );
}

export default App;
