/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/store_stripe.js":
/*!***********************************!*\
  !*** ./assets/js/store_stripe.js ***!
  \***********************************/
/***/ (() => {

eval("// import products from './products.js'\r\n\r\n// console.log(process.env.API_KEY)\r\n// let productData = products;\r\nconst stripeBaseUrl = 'https://api.stripe.com/v1/'\r\nasync function getProductData() {\r\n  const response = await fetch(stripeBaseUrl + 'products', {\r\n    method: 'GET',\r\n    headers: {Authorization: `Bearer ${\"sk_test_51JULPNDtO8rr0owBKw2X0ktZl2QQViWL8wXF6XCNSqjnyhGvNcVbbMu7GZSjAI2BosnOZ6P2wLfWyo0ciNHJ9Lsz00ObKIpwAK\"}`}\r\n  })\r\n\r\n  const priceResponse = await fetch(stripeBaseUrl + 'prices', {\r\n    method: 'GET',\r\n    headers: {Authorization: `Bearer ${\"sk_test_51JULPNDtO8rr0owBKw2X0ktZl2QQViWL8wXF6XCNSqjnyhGvNcVbbMu7GZSjAI2BosnOZ6P2wLfWyo0ciNHJ9Lsz00ObKIpwAK\"}`}\r\n  })\r\n\r\n  const prices = (await priceResponse.json()).data\r\n  const products = (await response.json()).data\r\n\r\n  const mappedPrices = {}\r\n  for (let i = 0; i < prices.length; i++) {\r\n    mappedPrices[prices[i].product] = {\r\n      priceID: prices[i].id,\r\n      price: prices[i].unit_amount/100\r\n    }\r\n  }\r\n  const mappedProducts = products.map((product) => {\r\n    if (mappedPrices[product.id]) {\r\n      product.priceID = mappedPrices[product.id].priceID,\r\n      product.price = mappedPrices[product.id].price\r\n    }\r\n\r\n    return product\r\n  })\r\n\r\n  return mappedProducts\r\n\r\n}\r\n\r\n\r\n//Create error msg if user enters a invalid number for quantity\r\nfunction displayError() {\r\n  const errorMsg = $('<p>')\r\n  errorMsg.html('Quantity must be between 1 and 100')\r\n  return errorMsg\r\n}\r\n\r\n//handle adding items to the cart\r\nfunction addToCart(addBtn) {\r\n  const cart = JSON.parse(localStorage.getItem('cart'))\r\n  const product = productData[addBtn.parent()[\"0\"].id]\r\n  \r\n  const quantity = $('<div>')\r\n  quantity.attr('class', 'flex items-center justify-evenly')\r\n\r\n  const multipleInput = $('<input>')\r\n  multipleInput.attr('class', 'w-1/4 pl-2 m-2 border-2 border-black')\r\n  multipleInput.attr('type','number')\r\n  multipleInput.attr('value', 1)\r\n  multipleInput.attr('min', 1)\r\n  multipleInput.attr('max', 100)\r\n\r\n  const context = $('<p>')\r\n  context.html('Quantity')\r\n\r\n  const confirm = $('<button>')\r\n  confirm.html('Add')\r\n\r\n  const cancel = $('<button>')\r\n  cancel.html('Cancel')\r\n\r\n  addBtn.hide()\r\n\r\n  quantity.append(context)\r\n  quantity.append(multipleInput)\r\n  quantity.append(confirm)\r\n  quantity.append(cancel)\r\n\r\n  // addBtn.off('click')\r\n  confirm.click(e => {\r\n    const numQuantity = Number(multipleInput[\"0\"].value)\r\n    let itemExists = false\r\n\r\n    if (cart && numQuantity <= 100 && numQuantity >= 1) {\r\n      for(let item of cart){\r\n        if (item.name === product.name) {\r\n          item.quantity += numQuantity\r\n          itemExists = true\r\n        }\r\n      }\r\n      \r\n      if (!itemExists) {\r\n        product.quantity = numQuantity\r\n        cart.push(product)\r\n      }\r\n      localStorage.setItem('cart', JSON.stringify(cart))\r\n\r\n    } else if (numQuantity >= 1  && numQuantity <= 100) {\r\n      product.quantity = numQuantity\r\n      localStorage.setItem('cart', JSON.stringify([product]))\r\n    } else {\r\n      quantity.parent().append(displayError())\r\n    }\r\n    quantity.remove()\r\n    addBtn.show()\r\n  })\r\n\r\n  cancel.click(() => {\r\n    quantity.remove()\r\n    addBtn.show()\r\n  })\r\n\r\n  return quantity\r\n}\r\n\r\n//create individual cards for each product\r\nfunction createCard(product, i) {\r\n  const container = $('<div>')\r\n  \r\n  const img = $('<img>')\r\n  img.attr('src',`${product.images[0]}`)\r\n  img.attr('width', '400')\r\n\r\n  const detailContainer = $('<div>')\r\n  const priceEl = $('<p>')\r\n  const nameEl = $('<h2>')\r\n  priceEl.html(`$${product.price.toFixed(2)}`)\r\n  nameEl.html(`${product.name}`)\r\n  detailContainer.attr('class', 'flex flex-col content-evenly items-center')\r\n  detailContainer.append(nameEl)\r\n  detailContainer.append(priceEl)\r\n\r\n  container.attr('class', 'flex flex-col p-10 border-1 border-black shadow-xl')\r\n  container.attr('id', `${i}`)\r\n  container.append(img)\r\n  container.append(detailContainer)\r\n\r\n  const addBtn = $('<button>')\r\n  addBtn.html('Add To Cart')\r\n  addBtn.attr('class', 'border-2 border-black rounded-lg hover:bg-black hover:text-white')\r\n  addBtn.click(() => {\r\n    container.append(addToCart(addBtn, container))\r\n  })\r\n  container.append(addBtn)\r\n\r\n  return container[0]\r\n}\r\n\r\nasync function displayCards() {\r\n  const productContainer = $('#product-container')\r\n  const products = await getProductData()\r\n\r\n  for (let i = 0; i < products.length; i++) {\r\n    const card = createCard(products[i], i)\r\n    productContainer.append(card)\r\n  }\r\n}\r\n\r\nconst location = window.location.pathname.split('/'); \r\n\r\n//Display cards only if product-container exists\r\nif (location[location.length - 1] === 'store_prod.php') {\r\n  displayCards();\r\n}\n\n//# sourceURL=webpack://superlitive/./assets/js/store_stripe.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/store_stripe.js"]();
/******/ 	
/******/ })()
;