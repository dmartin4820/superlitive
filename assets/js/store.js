import products from './products.js'

function createCard(product) {
  const container = $('<div>')
  
  const img = $('<img>')
  img.attr('src', 'assets/images/PlaceholderLC_1.png')
  img.attr('width', '200')

  const detailContainer = $('<div>')
  const priceEl = $('<p>')
  const nameEl = $('<p>')
  priceEl.html(`$${product.price}`)
  nameEl.html(`${product.name}`)
  detailContainer.attr('class', 'flex flex-col items-center')
  detailContainer.append(nameEl)
  detailContainer.append(priceEl)

  container.attr('class', 'flex flex-col p-10 border-1 border-black shadow-xl')
  container.append(img)
  container.append(detailContainer)

  const addBtn = $('<button>')
  addBtn.html('Add To Cart')
  addBtn.attr('class', 'border-2 border-black rounded-lg')

  container.append(addBtn)

  return container[0]
}

function displayCards() {
  const productContainer = $('#product-container')
  
  for (let i = 0; i < products.length; i++) {
    const card = createCard(products[i])
    productContainer.append(card)
  }
}

const location = window.location.pathname.split('/'); 

//Grab product-container only if it exists
if (location[location.length - 1] === 'store_.php') {
  displayCards();
}