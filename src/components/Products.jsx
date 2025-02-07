import storeItems from "../data/data.json";
import { formatCurrency } from "../utilities/currencyFormatter";
import getImageUrl from "../utilities/getImageUrl";
import CartIcon from "../assets/images/icon-add-to-cart.svg?react";
import DecrementIcon from "../assets/images/icon-decrement-quantity.svg?react";
import IncrementIcon from "../assets/images/icon-increment-quantity.svg?react";
import { useShoppingCart } from "../context/ShoppingCartContext";

// const shortenImageString = (url, key) => {
//   return url[key].substring(
//     url.desktop.lastIndexOf("/images"),
//     url.desktop.lastIndexOf(".jpg") + 4
//   );
// };

// const getImageUrl = (url) => {
//   // get each of the paths and populate the srcsetpath
//   // return the <img> with various img paths
//   // numbers could be tweeked later when layout is completed
//   const desktopImg = shortenImageString(url, "desktop");
//   const tabletImg = shortenImageString(url, "tablet");
//   const mobileImg = shortenImageString(url, "mobile");
//   const thumbnailImg = shortenImageString(url, "thumbnail");
//   const srcSetPath = `${mobileImg} 300w,${tabletImg} 768w, ${desktopImg} 1280w`;
//   // console.log("srcSetPath", srcSetPath);

//   return (
//     // tested by clearing cache narrowing page and reload, works for tablet and desktop
//     // might change when in containning element
//     <img
//       src={desktopImg}
//       srcSet={srcSetPath}
//       sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
//     />
//   );
// };

const Products = () => {
  return (
    <div className="store-items-table">
      <div className="products">
        {storeItems.map(function (item) {
          return (
            <article key={item.id} className="product-item">
              {/* <div> */}
              <div className="product-img">{getImageUrl(item.image)}</div>
              <ProductSelector {...item} />
              <div className="item-details">
                <p>{item.category}</p>
                <p>{item.name}</p>
                <p>{formatCurrency(item.price)}</p>
              </div>
              {/* </div> */}
            </article>
          );
        })}
      </div>
    </div>
  );
};

const ProductSelector = (item) => {
  // console.log("item", item);
  //    if quantity is 0 render add to cart and cart icon
  //   placeholder value, might move to cart local storeage later

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
          {/* <div> */}
          <button onClick={() => decreaseCartQuantity(item.id)}>
            <DecrementIcon />
          </button>
          {/* </div> */}
          <span className="product-selector-qty">
            {getItemQuantity(item.id)}
          </span>
          {/* <div> */}
          <button onClick={() => increaseCartQuantity(item.id)}>
            <IncrementIcon />
          </button>
          {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default Products;
