/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/cart.js":
/*!***************************!*\
  !*** ./assets/js/cart.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dmartin4820_html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dmartin4820/html-element */ \"./node_modules/@dmartin4820/html-element/src/index.js\");\n\r\n\r\n\r\nfunction getCartItems() {\r\n  const cart = JSON.parse(localStorage.getItem('cart'))\r\n\r\n  if (cart) {\r\n    return cart \r\n  } else {\r\n    return []\r\n  }\r\n}\r\n\r\nfunction createCard(itemObj) {\r\n  const {element: card} = new _dmartin4820_html_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('div', {\r\n    class: 'flex py-10'\r\n  })\r\n\r\n  const {element: img} = new _dmartin4820_html_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('img', {\r\n    src: `${itemObj.img}`,\r\n    width: '200',\r\n  })\r\n\r\n  const {element: item} = new _dmartin4820_html_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('div', {\r\n    class: \"flex flex-col pl-10\"\r\n  })\r\n\r\n  const {element: itemName} = new _dmartin4820_html_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('h3', {\r\n    class: \"text-2xl\"\r\n  })\r\n  itemName.innerHTML = `${itemObj.name}`\r\n\r\n  const {element: price} = new _dmartin4820_html_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('p')\r\n  price.innerHTML = `${itemObj.price} x ${itemObj.quantity}` \r\n  // const price = $('<p>')\r\n  // price.html(`${itemObj.price} x ${itemObj.quantity}`)\r\n\r\n  item.append(itemName)\r\n  item.append(price)\r\n\r\n  card.append(img)\r\n  card.append(item)\r\n\r\n\r\n  return card\r\n}\r\n\r\nfunction displayCards() {\r\n  const cartEl = $('#cart')\r\n  const items = getCartItems()\r\n  let total = 0\r\n\r\n  for (let i = 0; i < items.length; i++) {\r\n    cartEl.append(createCard(items[i]))\r\n\r\n    total += items[i].quantity * items[i].price\r\n  }\r\n\r\n  const cartTotal = $('#cart-total')\r\n  cartTotal.html(`Total: $ ${total.toFixed(2)}`)\r\n\r\n  const checkoutBtn = $('#checkout-btn')\r\n  checkoutBtn.click(() => {\r\n    const message = goToCheckout()\r\n    if (message) {\r\n      cartEl.parent().append(message)\r\n    }\r\n  })\r\n}\r\n\r\nfunction goToCheckout() {\r\n  //TODO: Retrieve products from local storage\r\n  const products = JSON.parse(localStorage.getItem('cart'))\r\n  //TODO: Check if there are any products in the cart\r\n  //if not return message \r\n  if (!products) {\r\n    const {element: message} = new _dmartin4820_html_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('h1', {\r\n      class: 'text-2xl m-20'\r\n    })\r\n    message.innerHTML = 'No products in cart!'\r\n    return message\r\n  }\r\n  //TODO: make a fetch request to server to checkout items\r\n  // fetch('')   \r\n  console.log('success') \r\n}\r\n\r\ndisplayCards();\n\n//# sourceURL=webpack://superlitive/./assets/js/cart.js?");

/***/ }),

/***/ "./node_modules/@dmartin4820/html-element/src/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@dmartin4820/html-element/src/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Element {\r\n  constructor(tag = '', attrs = {}) {\r\n    this.tag = tag\r\n    this._attrs = attrs\r\n    this._element = null\r\n\r\n    this.element = this.tag\r\n    this.attrs = this._attrs\r\n  }\r\n\r\n  set element(tag) {\r\n    this._element = document.createElement(tag) \r\n  }\r\n  get element() {\r\n    return this._element\r\n  }\r\n\r\n\r\n  set attrs(o) {\r\n    for (let attr in o) {\r\n      this._element.setAttribute(attr, this._attrs[attr])\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Element);\n\n//# sourceURL=webpack://superlitive/./node_modules/@dmartin4820/html-element/src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/cart.js");
/******/ 	
/******/ })()
;