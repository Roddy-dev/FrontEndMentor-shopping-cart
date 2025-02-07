import storeItems from "../data/data.json";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/currencyFormatter";

const CartItem = (item, quantity) => {
  console.log("qty", item.quantity);
  console.log(typeof item.id);
  const { removeFromCart } = useShoppingCart();

  // match the json data to id in props
  const matchedItem = storeItems.find(function (i) {
    return i.id === item.id;
  });
  console.log("matchedItem", matchedItem);
  console.log("itemobj", item);
  console.log("quantity", quantity);
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
