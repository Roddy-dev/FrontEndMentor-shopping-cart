import { useEffect, useState } from "react";
// import useLocalStorageState from "use-local-storage-state";
import CartIcon from "../assets/images/icon-carbon-neutral.svg?react";
import EmptyCartIcon from "../assets/images/illustration-empty-cart.svg?react";

import storeItems from "../data/data.json";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/currencyFormatter";
import CartItem from "./CartItem";
import Modal from "./Modal";

const Cart = () => {
  const { cartItems, cartQuantity, removeFromCart, removeAllFromCart } =
    useShoppingCart();
  const [modalOpen, setModalOpen] = useState(false);
  // const [cart, setCart] = useLocalStorageState("cart", {});
  // {cartItems.map((item) => (
  //   return console.log('item', item)
  // ))};
  //Function to toggle state for opening and closing modal
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleCartEmpty = () => {
    // map trash and call removeFromCart
    // console.log("trashItems", trashItems);
    // trashItems.map((item) => {
    //   console.log("item.id", item.id);
    //   removeFromCart(item.id);
    // });
    return removeAllFromCart();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="cart">
      <h1>Your Cart ({cartQuantity})</h1>
      {/* map the cart contents here */}

      {cartQuantity == 0 ? (
        <EmptyCartIcon />
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          {/* spit out the total of the cart */}
          <div className="cart-total">
            <div className="cart-total-label">Order total</div>
            <div className="cart-total-cost">
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          </div>
          <div className="neutral-delivery">
            <span>
              <CartIcon />
              This is a&nbsp;
              <span className="cart-text-dark">&nbsp;carbon-neutral</span>{" "}
              delivery.
            </span>
          </div>
          <div className="confirm-order">
            {/* <button>Confirm Order</button> */}
            <button onClick={handleModal}>Confirm Order</button>
            {modalOpen && (
              <Modal
                closeModal={() => {
                  setModalOpen(false);
                  handleCartEmpty(cartItems);
                }}
                buttonText={"Place Order"}
              >
                children props hear
              </Modal>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
