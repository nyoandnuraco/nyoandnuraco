const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/nyeraeldomiaty/Documents/GitHub/nn/nyoandnuraco/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/nyeraeldomiaty/Documents/GitHub/nn/nyoandnuraco/.cache/dev-404-page.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/nyeraeldomiaty/Documents/GitHub/nn/nyoandnuraco/src/pages/blog.js"))),
  "component---src-pages-cart-js": hot(preferDefault(require("/Users/nyeraeldomiaty/Documents/GitHub/nn/nyoandnuraco/src/pages/cart.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/nyeraeldomiaty/Documents/GitHub/nn/nyoandnuraco/src/pages/index.js"))),
  "component---src-pages-ourwork-js": hot(preferDefault(require("/Users/nyeraeldomiaty/Documents/GitHub/nn/nyoandnuraco/src/pages/ourwork.js"))),
  "component---src-pages-shop-js": hot(preferDefault(require("/Users/nyeraeldomiaty/Documents/GitHub/nn/nyoandnuraco/src/pages/shop.js"))),
  "component---src-pages-shop-neldolight-js": hot(preferDefault(require("/Users/nyeraeldomiaty/Documents/GitHub/nn/nyoandnuraco/src/pages/shop/neldolight.js"))),
  "component---src-pages-shop-neldo-js": hot(preferDefault(require("/Users/nyeraeldomiaty/Documents/GitHub/nn/nyoandnuraco/src/pages/shop/neldo.js"))),
  "component---src-pages-shop-neldochamp-js": hot(preferDefault(require("/Users/nyeraeldomiaty/Documents/GitHub/nn/nyoandnuraco/src/pages/shop/neldochamp.js")))
}
