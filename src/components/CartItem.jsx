import storeItems from "../data/data.json";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/currencyFormatter";

const CartItem = (item) => {
  // item consistes of id and quantity in cart, match that up to data.json
  const { removeFromCart } = useShoppingCart();

  // match the json data to id in props
  const matchedItem = storeItems.find(function (i) {
    return i.id === item.id;
  });

  //   escape early if null
  if (item == null) return null;

  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <p>{matchedItem.name}</p>
        <p>
          <span className="cart-item-quantity">{item.quantity}x</span>
          &nbsp;@{formatCurrency(matchedItem.price)}&nbsp;
          {formatCurrency(matchedItem.price * item.quantity)}
        </p>
      </div>

      <button
        className="item-remove"
        onClick={() => removeFromCart(matchedItem.id)}
      >
        &times;
      </button>
    </div>
  );
};

export default CartItem;
