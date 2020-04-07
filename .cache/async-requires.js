// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("./../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-blog-js": () => import("./../src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-cart-js": () => import("./../src/pages/cart.js" /* webpackChunkName: "component---src-pages-cart-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-ourwork-js": () => import("./../src/pages/ourwork.js" /* webpackChunkName: "component---src-pages-ourwork-js" */),
  "component---src-pages-shop-js": () => import("./../src/pages/shop.js" /* webpackChunkName: "component---src-pages-shop-js" */),
  "component---src-pages-shop-neldolight-js": () => import("./../src/pages/shop/neldolight.js" /* webpackChunkName: "component---src-pages-shop-neldolight-js" */),
  "component---src-pages-shop-neldo-js": () => import("./../src/pages/shop/neldo.js" /* webpackChunkName: "component---src-pages-shop-neldo-js" */),
  "component---src-pages-shop-neldochamp-js": () => import("./../src/pages/shop/neldochamp.js" /* webpackChunkName: "component---src-pages-shop-neldochamp-js" */)
}
