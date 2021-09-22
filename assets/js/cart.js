function createCard() {
  const card = $('<div>')
  card.attr('class', 'flex p-10')

  const img = $('<img>')
  img.attr('src', './assets/images/PlaceholderLC_1.png')
  img.attr('width', '200')

  const item = $('<div>')
  item.attr('class', 'flex flex-col')

  const itemName = $('<p>')
  itemName.html('item')

  const price = $('<p>')
  price.html('$88')

  item.append(itemName)
  item.append(price)

  card.append(img)
  card.append(item)

  return card
}

function displayCards() {
  const cart = $('#cart')

  for (let i = 0; i < 4; i++) {
    cart.append(createCard())
  }
}

displayCards();