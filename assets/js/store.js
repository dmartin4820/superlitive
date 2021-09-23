import products from './products.js'

let productData = products;

//Create error msg if user enters a invalid number for quantity
function displayError() {
  const errorMsg = $('<p>')
  errorMsg.html('Quantity must be between 1 and 100')
  return errorMsg
}

//handle adding items to the cart
function addToCart(addBtn) {
  const cart = JSON.parse(localStorage.getItem('cart'))
  const product = productData[addBtn.parent()["0"].id]
  
  const quantity = $('<div>')
  quantity.attr('class', 'flex items-center justify-evenly')

  const multipleInput = $('<input>')
  multipleInput.attr('class', 'w-1/4 pl-2 m-2 border-2 border-black')
  multipleInput.attr('type','number')
  multipleInput.attr('value', 1)
  multipleInput.attr('min', 1)
  multipleInput.attr('max', 100)

  const context = $('<p>')
  context.html('Quantity')

  const confirm = $('<button>')
  confirm.html('Add')

  const cancel = $('<button>')
  cancel.html('Cancel')

  addBtn.hide()

  quantity.append(context)
  quantity.append(multipleInput)
  quantity.append(confirm)
  quantity.append(cancel)

  // addBtn.off('click')
  confirm.click(e => {
    const numQuantity = Number(multipleInput["0"].value)
    let itemExists = false

    if (cart && numQuantity <= 100 && numQuantity >= 1) {
      for(let item of cart){
        if (item.name === product.name) {
          item.quantity += numQuantity
          itemExists = true
        }
      }
      
      if (!itemExists) {
        product.quantity = numQuantity
        cart.push(product)
      }
      localStorage.setItem('cart', JSON.stringify(cart))

    } else if (numQuantity >= 1  && numQuantity <= 100) {
      product.quantity = numQuantity
      localStorage.setItem('cart', JSON.stringify([product]))
    } else {
      quantity.parent().append(displayError())
    }
    quantity.remove()
    addBtn.show()
  })

  cancel.click(() => {
    quantity.remove()
    addBtn.show()
  })

  return quantity
}

//create individual cards for each product
function createCard(product, i) {
  const container = $('<div>')
  
  const img = $('<img>')
  img.attr('src',`${product.img}`)
  img.attr('width', '400')

  const detailContainer = $('<div>')
  const priceEl = $('<p>')
  const nameEl = $('<h2>')
  priceEl.html(`$${product.price}`)
  nameEl.html(`${product.name}`)
  detailContainer.attr('class', 'flex flex-col content-evenly items-center')
  detailContainer.append(nameEl)
  detailContainer.append(priceEl)

  container.attr('class', 'flex flex-col p-10 border-1 border-black shadow-xl')
  container.attr('id', `${i}`)
  container.append(img)
  container.append(detailContainer)

  const addBtn = $('<button>')
  addBtn.html('Add To Cart')
  addBtn.attr('class', 'border-2 border-black rounded-lg hover:bg-black hover:text-white')
  addBtn.click(() => {
    container.append(addToCart(addBtn, container))
  })
  container.append(addBtn)

  return container[0]
}

function displayCards() {
  const productContainer = $('#product-container')
 
  for (let i = 0; i < products.length; i++) {
    const card = createCard(products[i], i)
    productContainer.append(card)
  }
}

const location = window.location.pathname.split('/'); 

//Display cards only if product-container exists
if (location[location.length - 1] === 'store_prod.php') {
  displayCards();
}