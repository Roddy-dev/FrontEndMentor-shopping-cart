import storeItems from "../data/data.json";
import { formatCurrency } from "../utilities/currencyFormatter";
import getImageUrl from "../utilities/getImageUrl";
import CartIcon from "../assets/images/icon-add-to-cart.svg?react";
import DecrementIcon from "../assets/images/icon-decrement-quantity.svg?react";
import IncrementIcon from "../assets/images/icon-increment-quantity.svg?react";
import { useShoppingCart } from "../context/ShoppingCartContext";

// products listed on left side of page
const Products = () => {
  return (
    <div className="store-items-table">
      <div className="products" data-testid="products">
        {storeItems.map(function (item) {
          return (
            <article key={item.id} className="product-item">
              <div className="product-img" alt={`image of ${item.category}`}>
                {getImageUrl(item.image)}
              </div>
              <ProductSelector {...item} />
              <div className="item-details">
                <p>{item.category}</p>
                <p>{item.name}</p>
                <p>{formatCurrency(item.price)}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

// the button to add to cart
const ProductSelector = (item) => {
  //    if quantity is 0 render add to cart and cart icon
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const quantity = getItemQuantity(item.id);

  return (
    <div>
      {quantity == 0 ? (
        <div className="product-selector">
          <button onClick={() => increaseCartQuantity(item.id)}>
            <CartIcon />
            <span>Add to Cart</span>
          </button>
        </div>
      ) : (
        <div className="product-selector product-selector--selected">
          <button
            data-testid="product-decrement"
            onClick={() => decreaseCartQuantity(item.id)}
          >
            <DecrementIcon />
          </button>
          <span data-testid="qty-in-cart" className="product-selector-qty">
            {getItemQuantity(item.id)}
          </span>
          <button
            data-testid="product-increment"
            onClick={() => increaseCartQuantity(item.id)}
          >
            <IncrementIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;

export { ProductSelector };
