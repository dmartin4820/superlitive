import Element from '@dmartin4820/html-element'


function getCartItems() {
  const cart = JSON.parse(localStorage.getItem('cart'))

  if (cart) {
    return cart 
  } else {
    return []
  }
}

function createCard(itemObj) {
  const {element: card} = new Element('div', {
    class: 'flex py-10'
  })

  const {element: img} = new Element('img', {
    src: `${itemObj.img}`,
    width: '200',
  })

  const {element: item} = new Element('div', {
    class: "flex flex-col pl-10"
  })

  const {element: itemName} = new Element('h3', {
    class: "text-2xl"
  })
  itemName.innerHTML = `${itemObj.name}`

  const {element: price} = new Element('p')
  price.innerHTML = `${itemObj.price} x ${itemObj.quantity}` 
  // const price = $('<p>')
  // price.html(`${itemObj.price} x ${itemObj.quantity}`)

  item.append(itemName)
  item.append(price)

  card.append(img)
  card.append(item)


  return card
}

function displayCards() {
  const cartEl = $('#cart')
  const items = getCartItems()
  let total = 0

  for (let i = 0; i < items.length; i++) {
    cartEl.append(createCard(items[i]))

    total += items[i].quantity * items[i].price
  }

  const cartTotal = $('#cart-total')
  cartTotal.html(`Total: $ ${total.toFixed(2)}`)

  const checkoutBtn = $('#checkout-btn')
  checkoutBtn.click(() => {
    const message = goToCheckout()
    if (message) {
      cartEl.parent().append(message)
    }
  })
}

function goToCheckout() {
  //TODO: Retrieve products from local storage
  const products = JSON.parse(localStorage.getItem('cart'))
  //TODO: Check if there are any products in the cart
  //if not return message 
  if (!products) {
    const {element: message} = new Element('h1', {
      class: 'text-2xl m-20'
    })
    message.innerHTML = 'No products in cart!'
    return message
  }
  //TODO: make a fetch request to server to checkout items
  // fetch('')   
  console.log('success') 
}

displayCards();