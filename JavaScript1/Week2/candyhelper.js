let boughtCandyPrices = [];
let amountToSpend = Math.random() * 100;
const addCandy = (candyType, weight) => {
  if (candyType == "sweet") {
    boughtCandyPrices.push(weight * 0.5);
  } else if (candyType == "chocolate") {
    boughtCandyPrices.push(weight * 0.7);
  } else if (candyType == "toffee") {
    boughtCandyPrices.push(weight * 1.1);
  } else if (candyType == "chewing-gum") {
    boughtCandyPrices.push(weight * 0.03);
  } else {
    console.log(`Sorry we don't sell this candy!`);
  }
};

const canBuyMoreCandy = (amountArray) => {
  let totalSpent = 0;
  for (let price = 0; price < amountArray.length; price++) {
    totalSpent += amountArray[price];
  }
  console.log(amountToSpend);
  console.log(totalSpent);
  if (amountToSpend < totalSpent) {
    return `You can buy more, so please do!`;
  } else {
    return `Enough candy for you!`;
  }
};

addCandy("sweet", 20);
addCandy("chocolate", 30);
addCandy("chocolate", 25);
addCandy("toffee", 5);
addCandy("chewing-gum", 10);
addCandy("chewing-gum", 10);
addCandy("bueno", 15);

console.log(canBuyMoreCandy(boughtCandyPrices));
