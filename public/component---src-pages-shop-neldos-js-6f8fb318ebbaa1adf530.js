(window.webpackJsonp=window.webpackJsonp||[]).push([[23,17],{ZiR7:function(t,e,n){"use strict";n.r(e);n("KKXr");var r=n("q1tI"),a=n.n(r),o=n("XjSt");e.default=function(){var t,e=Object(r.useContext)(o.a).dispatch,n=Object(r.useState)(""),i=(n[0],n[1]),c=Object(r.useState)(""),u=(c[0],c[1]);return a.a.createElement("form",{onSubmit:function(t){var n;t.preventDefault();var r=window.location.href.split("/")[4];"neldo"===r?(n=2999,u(2999)):"neldochamp"===r?(n=4999,u(4999)):(u(699),n=699),e({type:"ADD_PRODUCT",product:{package:r,price:n}})}},a.a.createElement("input",{className:"btn text-white btn-lg ctabtn",type:"submit",style:(t={textTransform:"capitalize",float:"right",backgroundColor:"#ff9000",color:"white",borderRadius:"25px",marginLeft:"25px",marginRight:"25px",paddingLeft:"25px",paddingRight:"25px",marginBottom:"50px"},t.textTransform="uppercase",t.fontSize="14px",t.fontWeight="medium",t.marginTop="25px",t.boxShadow="0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",t),onClick:function(t){return i(t.target.value)},value:"Add "+("undefined"!=typeof window?window.location.href.split("/")[4]:"")+" Package To Cart"}))}},beFU:function(t,e,n){"use strict";n.r(e);n("f3/d"),n("a1Th"),n("Btvt"),n("XfO3"),n("HEwt"),n("rGqo"),n("rE2o"),n("ioFf");var r=n("q1tI"),a=n.n(r),o=n("xDdU"),i=n.n(o),c=n("ZiR7");function u(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.default=function(){var t=Object(r.useState)([{package:"neldo",price:699,id:1}]),e=t[0],n=t[1];return Object(r.useEffect)((function(){console.log("useeffect hook run",e)})),a.a.createElement("div",null,a.a.createElement("ul",{style:{display:"none"}},e.map((function(t){return a.a.createElement("li",{key:t.id},t.package)}))),a.a.createElement(c.default,{addProduct:function(t){n([].concat(u(e),[{package:t,id:i()()}]))}}))}}}]);
//# sourceMappingURL=component---src-pages-shop-neldos-js-6f8fb318ebbaa1adf530.js.map