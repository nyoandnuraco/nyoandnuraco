(window.webpackJsonp=window.webpackJsonp||[]).push([[24,16,20],{"20+6":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l}));var n=a("q1tI"),r=a.n(n);a("EDuE");var c=a("TSYQ"),l=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={colorSelected:!1,sc:a.props.initialSelectedColor},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.changeSelectedColor=function(e){this.setState({colorSelected:!0,sc:e.target.style.backgroundColor})},l.render=function(){var e=this,t=this.state.sc;return r.a.createElement("div",null,r.a.createElement("div",{className:"layout-row justify-content-center"},r.a.createElement("div",{className:"card mt-75"},r.a.createElement("div",{style:{backgroundColor:this.state.sc},className:"canvas","data-testid":"selectedColor"},r.a.createElement("p",{style:{backgroundColor:this.state.sc},className:"text-center mx-auto px-5"},t)),r.a.createElement("div",{className:"card-actions"},r.a.createElement("div",{className:"layout-row justify-content-center align-items-center","data-testid":"colorPickerOptions"},this.props.colorPickerOptions.map((function(a,n){return r.a.createElement("div",{onClick:function(t){return e.changeSelectedColor(t)},style:{backgroundColor:a},className:c({"color-box":!0,"mx-8":!0,"my-15":!0,selected:t===a}),key:a})})))))))},n}(n.Component)},EDuE:function(e,t,a){},MWeN:function(e,t,a){"use strict";a.r(t),a.d(t,"productCallBack",(function(){return m})),a.d(t,"typeCallBack",(function(){return p})),a.d(t,"ShoppingCart",(function(){return h})),a.d(t,"ProductDisplay",(function(){return f})),a.d(t,"Display",(function(){return v}));a("VRzm"),a("Btvt"),a("f3/d");var n=a("o0o1"),r=a.n(n),c=(a("ls82"),a("q1tI")),l=a.n(c),o=(a("icX0"),void 0);function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function s(e,t,a,n,r,c,l){try{var o=e[c](l),i=o.value}catch(s){return void a(s)}o.done?t(i):Promise.resolve(i).then(n,r)}function u(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var c=e.apply(t,a);function l(e){s(c,n,r,l,o,"next",e)}function o(e){s(c,n,r,l,o,"throw",e)}l(void 0)}))}}var d=["Neldo Light Package","Neldo Package","Neldo Champ Package"],m=function(){var e=u(r.a.mark((function e(t,a){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.state.products,c=n[a].currImg,n[a]={currImg:c,order:t},e.next=5,o.setState({products:n});case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),p=function(e){o.setState({type:e}),o.props.productCallBack(o.state,o.props.index)},h=function(e){return 0===e.items.length?l.a.createElement("div",{className:"scEmptyCart"},"Nothing In Cart"):l.a.createElement("div",{className:"scShoppingCart",id:"shoppingCartScroll"},l.a.createElement("div",null,"Your Items"),l.a.createElement("p",null,e.items.length),l.a.createElement(f,{items:e.items}))},f=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))||this).componentDidMount=u(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,t.props.items.map((function(e){return a.push({currImg:e,order:{type:d[0],quantity:1}})}));case 3:t.setState({products:a});case 4:case"end":return e.stop()}}),e)}))),t}return i(t,e),t.prototype.render=function(){var e=this;return this.props.items.map((function(t,a){return l.a.createElement(v,{image:t,index:a,key:a,productCallBack:e.productCallBack})}))},t}(l.a.Component),v=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){return l.a.createElement("div",{key:this.props.index},l.a.createElement("figure",null,l.a.createElement("img",{src:this.props.image.src,alt:this.props.image.name,id:this.props.index})),l.a.createElement("form",null,l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("b",null,"Image Description:")),l.a.createElement("td",null,this.props.image.description))))))},t}(l.a.Component),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleClick=function(){var e=u(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({type:t.target.value});case 2:a.props.typeCallBack(a.state.type);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={cart:0,type:"Neldo Package"},a.handleClick=a.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}return i(t,e),t.prototype.render=function(){var e=this;return l.a.createElement("section",{style:{backgroundColor:"purple",height:"100vh",width:"44vw",float:"right"}},l.a.createElement(h,{items:[this.state.type]}),l.a.createElement("h3",null,this.state.type),l.a.createElement("button",{value:"Neldo Light Package",onClick:function(t){return e.handleClick(t)}},"Add to Cart"),l.a.createElement("button",{value:"Neldo Package",onClick:function(t){return e.handleClick(t)}},"Add to Cart"),l.a.createElement("button",{value:"Neldo Champ Package",onClick:function(t){return e.handleClick(t)}},"Add to Cart"))},t}(l.a.Component);t.default=E},OcqW:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("aTTt"),l=a.n(c),o=a("TsFS"),i=a.n(o),s=a("P8oz"),u=a.n(s),d=a("o88o"),m=a.n(d),p=a("cOSo"),h=a.n(p),f=a("TWCO"),v=a.n(f);function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.a.Component},P8oz:function(e,t,a){e.exports=a.p+"static/black-pencils-and-design-word-fa3fcd547957f8218262acb10f86a203.jpg"},TSYQ:function(e,t,a){var n;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===c)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},TWCO:function(e,t,a){e.exports=a.p+"static/abstract-art-cobweb-connection-0efcdf6bad7e92293347ec559a7c222a.jpg"},TsFS:function(e,t,a){e.exports=a.p+"static/geometric-decoration-d5a5656e24c88a322c4ce1868e4a5cd1.jpg"},YjHR:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("XjSt"),l=a("dBd+"),o=a.n(l),i=a("hBfX"),s=a.n(i);t.a=function(e){var t=e.product,a=Object(n.useContext)(c.a).dispatch;return r.a.createElement("li",{className:o.a.cartitem},r.a.createElement("div",{className:o.a.cc},r.a.createElement("h6",{className:o.a.cartitemdesc},t.package),r.a.createElement("img",{alt:"logo",className:o.a.cartitemimg,src:s.a})),r.a.createElement("div",{className:o.a.cc},r.a.createElement("p",{className:o.a.cartitemqty},r.a.createElement("span",null,r.a.createElement("strong",null,"Quantity: ")),r.a.createElement("select",{className:o.a.cartitemselect},r.a.createElement("option",null," 1"))),r.a.createElement("p",{className:o.a.pricelabel},r.a.createElement("span",null,r.a.createElement("i",null," ",r.a.createElement("div",{className:"price"},r.a.createElement("strong",null,"Price: "),"$",t.price))))),r.a.createElement("button",{onClick:function(){return a({type:"REMOVE_PRODUCT",id:t.id})},className:o.a.removecta},"Remove Item"),"  ",r.a.createElement("hr",{className:o.a.hr}))}},cOSo:function(e,t,a){e.exports=a.p+"static/web-af4683fb9da141e8556aa671ac1d3f25.jpg"},"dBd+":function(e,t,a){e.exports={cartlist:"slidenav-module--cartlist--3IL6e",checkout:"slidenav-module--checkout--3yXfy",step:"slidenav-module--step--1Bfx_",active:"slidenav-module--active--3uQ5e",progressbar:"slidenav-module--progressbar--3BsQ5",header:"slidenav-module--header--2c8nO",secondarycta:"slidenav-module--secondarycta--3znsR",cartitemimg:"slidenav-module--cartitemimg--3MyXN",cartitemdesc:"slidenav-module--cartitemdesc--2Av0n",cartitem:"slidenav-module--cartitem--9tiQ1",cartitemqty:"slidenav-module--cartitemqty--2JnoY",cartitemselect:"slidenav-module--cartitemselect--89MmI",pricelabel:"slidenav-module--pricelabel--woFmL",removecta:"slidenav-module--removecta--1LJs5",sidebyside:"slidenav-module--sidebyside--3_nYO",headercart:"slidenav-module--headercart--3Z95m",itemnumber:"slidenav-module--itemnumber--1IJ9U",cc:"slidenav-module--cc--2RG2e",hr:"slidenav-module--hr--2NdkW",total:"slidenav-module--total--6aG-3",container:"slidenav-module--container--2ZHAp",show:"slidenav-module--show--2Txv1"}},icX0:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("Wbzz"),l=a("Bl7J"),o=a("aTTt"),i=a.n(o),s=(a("q4sD"),a("q9vo")),u=(a("lD8L"),a("OcqW"),a("beFU")),d=(a("tiIK"),a("20+6"));var m=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={count:1},a.handleClick=a.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.handleClick=function(e){e.preventDefault();localStorage.setItem("item","neldo"),this.setState({count:this.state.count+1}),document.getElementById("shows").classList.add("nostyle")},o.render=function(){var e=this;return r.a.createElement(l.a,{location:this.props.location},r.a.createElement(s.a,null),r.a.createElement(d.default,{colorPickerOptions:["#5d77f5","#0fd085","#ffba5b","#f95e62","lightpink"],initialSelectedColor:"black"}),r.a.createElement("div",{class:"wrapper"},r.a.createElement("h1",{className:i.a.detailheader},"Neldo"),r.a.createElement("br",null),r.a.createElement("span",null,"Price: ",r.a.createElement("i",null,"$2,999")),r.a.createElement(c.a,{to:"/cart/"},r.a.createElement("button",{onClick:function(t){return e.handleClick(t)},id:i.a.ctabtn,className:"btn text-white btn-lg"},"Add to Cart")),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(u.default,null),r.a.createElement("h4",{className:i.a.detailssubheader},"Details:"),r.a.createElement("br",null),r.a.createElement("p",null,"Complete Custom made Brand Style Guide, Mockup and Website Development which includes:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Mission Statement"),r.a.createElement("li",null,"Typography"),r.a.createElement("li",null,"Logo Design"),r.a.createElement("li",null,"Color Palette"),r.a.createElement("li",null,"Iconography"),r.a.createElement("li",null,"Hierarchy"),r.a.createElement("li",null,"Photography Guidelines"),r.a.createElement("li",null,"Full Website Development"))))},n}(r.a.Component);t.default=m},lD8L:function(e,t,a){"use strict";a("KKXr");var n=a("q1tI"),r=a.n(n),c=(a("OcqW"),a("TsFS")),l=a.n(c),o=a("P8oz"),i=a.n(o),s=a("cOSo"),u=a.n(s),d=a("hBfX"),m=a.n(d),p=a("o88o"),h=a.n(p),f=a("aTTt"),v=a.n(f);r.a.Component},o88o:function(e,t,a){e.exports=a.p+"static/notebook-beside-the-iphone-on-table-20d40ea8583d6a16be68425baa15d053.jpg"},tiIK:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("dBd+"),l=a.n(c),o=a("XjSt"),i=a("YjHR"),s=a("Wbzz");t.a=function(){var e=Object(n.useContext)(o.a).products,t=0;return"undefined"!=typeof window?e.length?r.a.createElement("div",{id:l.a.show,className:"container"},r.a.createElement("h1",{className:l.a.header},"Checkout"),r.a.createElement("div",{className:l.a.checkout},r.a.createElement("span",{id:l.a.active,className:l.a.step},"1"),r.a.createElement("div",{className:l.a.progressbar}),r.a.createElement("span",{className:l.a.step},"2")),r.a.createElement("div",{className:l.a.sidebyside},r.a.createElement("h2",{className:l.a.headercart},"Your Cart"),r.a.createElement("h4",{className:l.a.itemnumber}," ","undefined"!=typeof window?e.length:""," Items")),r.a.createElement("hr",null),r.a.createElement("ul",{className:l.a.cartlist},e.map((function(e){return r.a.createElement(i.a,{product:e,key:e.id})}))),r.a.createElement("p",{className:l.a.total},"Total:",r.a.createElement("span",null,r.a.createElement("i",null,"$",(function(){for(var a=0;a<e.length;a++)if(null===e[a].price||void 0===e[a].price)e[a].price=0;else{if(a===e.length)return t;t+=e[a].price}}(),t)))),r.a.createElement(s.a,{to:"/book/"},r.a.createElement("button",{className:l.a.secondarycta},"Continue to Checkout"))):r.a.createElement("div",{styles:{cartlist:{height:"100%",width:"33vw",position:"absolute",color:"red"}}},"There are No items in your cart..."):""}}}]);
//# sourceMappingURL=component---src-pages-shoppingcartpage-js-c323aa27f81bbbf9987c.js.map