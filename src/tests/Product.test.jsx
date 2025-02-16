import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";
import storeItems from "../data/data.json";
import Products, { ProductSelector } from "../components/Products";

describe("Product Component", () => {
  beforeEach(() => {
    render(
      <ShoppingCartProvider>
        <Products />
      </ShoppingCartProvider>
    );
  });

  it("display all products", () => {
    const amountOfProducts = storeItems.length;
    const products = screen.getByTestId("products");
    expect(products.children).toHaveLength(amountOfProducts);
  });

  it("displays a particular product", () => {
    const productName = storeItems[3].name;
    expect(screen.getByText(productName)).toBeInTheDocument();
  });
});

describe("product selector", () => {
  beforeEach(() => {
    const item = {
      id: 1,
      image: {
        thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
        mobile: "./assets/images/image-waffle-mobile.jpg",
        tablet: "./assets/images/image-waffle-tablet.jpg",
        desktop: "./assets/images/image-waffle-desktop.jpg",
      },
      name: "Waffle with Berries",
      category: "Waffle",
      price: 6.5,
    };
    render(
      <ShoppingCartProvider>
        <ProductSelector item={item} />
      </ShoppingCartProvider>
    );
  });

  it("has empty cart", () => {
    expect(screen.getByText(/Add to Cart/i)).toBeInTheDocument();
    // screen.debug();
  });

  it("can add and subtract to cart", () => {
    const initalCartToOne = screen.getByText(/add to cart/i);
    fireEvent.click(initalCartToOne);
    const cartQuantity = screen.getByTestId("qty-in-cart");
    const increaseCart = screen.getByTestId("product-increment");
    const decreaseCart = screen.getByTestId("product-decrement");
    expect(cartQuantity).toContainHTML("1");
    fireEvent.click(increaseCart);
    expect(cartQuantity).toContainHTML("2");
    fireEvent.click(decreaseCart);
    expect(cartQuantity).toContainHTML("1");
  });
});
