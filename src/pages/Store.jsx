import Cart from "../components/Cart";
import Products from "../components/Products";

// main Shopping page
const Store = () => {
  return (
    <>
      <div className="container">
        <div className="split">
          <div className="store">
            <h1>Dessert</h1>
            <Products />
          </div>
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Store;
