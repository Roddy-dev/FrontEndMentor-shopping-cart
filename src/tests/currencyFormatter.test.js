import { describe, it, expect } from "vitest";
import { formatCurrency } from "../utilities/currencyFormatter";

describe("Format currency helper", () => {
  it("returns a number with a £ symbol", () => {
    const sampleField = formatCurrency(2.99);
    expect(sampleField).toContain("£2.99");
  });
  it("it can handle a zero value", () => {
    const sampleField = formatCurrency(0);
    expect(sampleField).toContain("£0.00");
  });
});
