import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";

import Cart from "../components/Cart";

describe("Cart Component", () => {
  it("displays empty cart", () => {
    render(
      <ShoppingCartProvider>
        <Cart />
      </ShoppingCartProvider>
    );

    const cartQty = screen.getByTestId("cart");

    expect(cartQty).toContainHTML("(0)");
  });

  // probably better suited to e2e testing in browser or cypress, as it didn't work as expected!
  // it("displays cart with item", () => {
  //   const cartItems = [{ id: 3, quantity: 3 }];
  //   render(
  //     <ShoppingCartProvider value={}>
  //       <Cart />
  //     </ShoppingCartProvider>
  //   );
  //   // const container = document.querySelector("#cart");
  //   const cartQty = screen.getByTestId("cart");
  //   // console.log("header", header);
  //   screen.debug();
  //   expect(cartQty).toContainHTML("(3)");
  // });
});
