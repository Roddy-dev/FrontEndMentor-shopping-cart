// helper function to extract the path data.json to a relative path
const shortenImageString = (url, key) => {
  const BASE_URL = import.meta.env.BASE_URL;
  // base url is some base name in production set in vite config
  console.log("BASE_URL", BASE_URL);
  const resultString = url[key].substring(
    url[key].lastIndexOf("images"),
    url[key].lastIndexOf(".jpg") + 4
  );
  return BASE_URL.concat(resultString);
};

const getImageUrl = (url) => {
  console.log("url", url);
  // get each of the paths and populate the srcsetpath
  // return the <img> with various img paths
  // numbers could be tweeked later when layout is completed
  const desktopImg = shortenImageString(url, "desktop");
  const tabletImg = shortenImageString(url, "tablet");
  const mobileImg = shortenImageString(url, "mobile");
  const thumbnailImg = shortenImageString(url, "thumbnail");
  const srcSetPath = `${mobileImg} 375w,${tabletImg} 768w, ${desktopImg} 1440w`;
  // console.log("srcSetPath", srcSetPath);

  return (
    // tested by clearing cache narrowing page and reload, works for tablet and desktop
    // might change when in containning element, so far so good.
    <img
      data-testid="image-url"
      src={desktopImg}
      srcSet={srcSetPath}
      sizes="(max-width: 50px)(max-width: 375px) 375px, (max-width: 768px) 768px, 1440px"
      className="product-image"
    />
  );
};

export default getImageUrl;

export { shortenImageString };
