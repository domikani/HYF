const whatToWear = (temp) => {
  let clothes;
  if (temp < 0) {
    clothes = `scarf, gloves, warm boots and a warm jacket!`;
    return clothes;
  } else if (temp >= 0 && temp < 10) {
    clothes = `scarf and a warm jacket!`;
    return clothes;
  } else if (temp >= 10 && temp < 15) {
    clothes = `a warm jacket!`;
    return clothes;
  } else if (temp >= 15 && temp <= 20) {
    clothes = `trouser and a jean jacket`;
    return clothes;
  } else if (temp > 20 && temp <= 30) {
    clothes = `shorts and a t-shirt`;
    return clothes;
  } else if (temp > 30 && temp <= 40) {
    clothes = `a bikini!`;
    return clothes;
  } else {
    clothes = `go outside naked!`;
    return clothes;
  }
};

//example
console.log(whatToWear(-5));
