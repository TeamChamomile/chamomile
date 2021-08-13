const quotes = require('./quotes.json'); //(with path)
const data = {
  products: quotes
}


const getRandomInt = () => {
  const rand_0_9 = Math.floor(Math.random() * quotes.length);
  return rand_0_9
};

const addProduct = (product) => {
  product.id = getRandomInt();
  data.products.push(product);
  return product;
};

const updateProduct = (product) => {
  const index = data.products.findIndex((v) => v.id === product.id);
  console.log(product);
  data.products.splice(index, 1, product);
  return product;
};

const deleteProduct = (id) => {
  const value = parseInt(id, 10);
  data.products = data.products.filter((v) => v.id !== value);
  return true;
};

const getProducts = () => {
  a = getRandomInt()
  //console.log(data.products[a]["description"])
  return data.products[a]
};

module.exports = { addProduct, updateProduct, deleteProduct, getProducts };
