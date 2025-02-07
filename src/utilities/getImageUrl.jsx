// helper function to extract the path
const shortenImageString = (url, key) => {
  return url[key].substring(
    url.desktop.lastIndexOf("/images"),
    url.desktop.lastIndexOf(".jpg") + 4
  );
};

const getImageUrl = (url) => {
  // console.log("url", url);
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
    // might change when in containning element
    <img
      src={desktopImg}
      srcSet={srcSetPath}
      sizes="(max-width: 375px) 375px, (max-width: 768px) 768px, 1440px"
      className="product-image"
    />
  );
};

export default getImageUrl;
