function getCartItems() {
  const cart = JSON.parse(localStorage.getItem('cart'))

  if (cart) {
    return cart 
  } else {
    return []
  }
}

function createCard(itemObj) {
  const card = $('<div>')
  card.attr('class', 'flex py-10')

  const img = $('<img>')
  img.attr('src', `${itemObj.img}` )
  img.attr('width', '200')

  const item = $('<div>')
  item.attr('class', 'flex flex-col pl-10')

  const itemName = $('<h3>')
  itemName.html(`${itemObj.name}`)
  itemName.attr('class', 'text-2xl')

  const price = $('<p>')
  price.html(`${itemObj.price} x ${itemObj.quantity}`)

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
}

displayCards();