import { describe, it, expect } from "vitest";
import shortenImageString from "../utilities/getImageUrl";

describe("helper to convert image src from json to this projects file structure", () => {
  const sampleData = {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
  };
  const expectedUrl = "/images/image-waffle-desktop.jpg";
  it("returns expected url", () => {
    const result = shortenImageString(sampleData.image, "desktop");
    // console.log("result", result.props.src);
    expect(result.props.src).toEqual(expectedUrl);
  });
});
