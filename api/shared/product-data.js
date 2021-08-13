const data = {
  products: [
    {
      id: 10,
      name: '노력, 흔글',
      description: '더 잘할 수 없어도 더 노력하는 거라면 그게 더 아름다운게 아닐까',
      quantity: '1',
    },
    {
      id: 20,
      name: '양광모, 비상',
      description: '때문에 라고 말하는 사람보다 덕분에 라고 말하는 사람이 성공한다',
      quantity: 1,
    },
    {
      id: 30,
      name: '파올로 코엘료 마법의 순간',
      description: '거짓말이 달아준 날개로 당신은 얼마든지 멀리 갈 수 있습니다. 그렇지만 다시 돌아오는 길은 어디에도 없어요.',
      quantity: 1,
    },
  ],
};

const getRandomInt = () => {
  const max = 1000;
  const min = 100;
  return Math.floor(Math.random() * Math.floor(max) + min);
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
  return data.products;
};

module.exports = { addProduct, updateProduct, deleteProduct, getProducts };
