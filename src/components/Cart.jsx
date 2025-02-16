import { useEffect, useState } from "react";
import CartIcon from "../assets/images/icon-carbon-neutral.svg?react";
import EmptyCartIcon from "../assets/images/illustration-empty-cart.svg?react";
import OrderConfirmedIcon from "../assets/images/icon-order-confirmed.svg?react";
import storeItems from "../data/data.json";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/currencyFormatter";
import CartItem from "./CartItem";
import { shortenImageString } from "../utilities/getImageUrl";
import Modal from "./Modal";

const Cart = () => {
  const { cartItems, cartQuantity, removeAllFromCart } = useShoppingCart();

  const [modalOpen, setModalOpen] = useState(false);
  //Function to toggle state for opening and closing modal
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleCartEmpty = () => {
    return removeAllFromCart();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="cart">
      <h1 data-testid="cart">Your Cart ({cartQuantity})</h1>
      {/* map the cart contents here, depending in any selected */}

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
            <button onClick={handleModal}>Confirm Order</button>
            {modalOpen && (
              <Modal
                closeModal={() => {
                  setModalOpen(false);
                  handleCartEmpty(cartItems);
                }}
                buttonText={"Start New Order"}
              >
                <div className="modal-confirmation flow-space">
                  <OrderConfirmedIcon />
                  <p className="modal-confirmation--title">Order Confirmed</p>
                  <p>We hope you endjoy your food</p>
                </div>
                {cartItems.map((item) => (
                  <BuildModalList key={item.id} {...item} />
                ))}
                {/* spit out the total of the cart into modal */}
                <div className="cart-total">
                  <div className="cart-total-label">Order total</div>
                  <div className="modal-total-cost">
                    {formatCurrency(
                      cartItems.reduce((total, cartItem) => {
                        const item = storeItems.find(
                          (i) => i.id === cartItem.id
                        );
                        return total + (item?.price || 0) * cartItem.quantity;
                      }, 0)
                    )}
                  </div>
                </div>
              </Modal>
            )}
          </div>
        </>
      )}
    </div>
  );
};

// build modal list was like cartitems, but caused problems rendering correctly
// so was seperated out.
const BuildModalList = (item) => {
  const matchedItem = storeItems.find(function (i) {
    return i.id === item.id;
  });
  if (item == null) return null;
  return (
    <div className="modal-item-details">
      <div className="">
        {<img src={shortenImageString(matchedItem.image, "thumbnail")} />}
      </div>
      <div>
        <p>{matchedItem.name}</p>

        <p>
          <span className="modal-item-quantity">{item.quantity}x</span>
          <span className="modal-item-price">
            &nbsp;@{formatCurrency(matchedItem.price)}&nbsp;
          </span>
        </p>
      </div>
      <div className="modal-item-total">
        {formatCurrency(matchedItem.price * item.quantity)}
      </div>
    </div>
  );
};

export default Cart;
