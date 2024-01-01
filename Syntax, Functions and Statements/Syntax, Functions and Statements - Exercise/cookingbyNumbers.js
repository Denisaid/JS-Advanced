function cookingbyNumbers(...arguments) {
  let number = Number(arguments[0]);

  const operations = {
    chop: () => number / 2,
    dice: () => Math.sqrt(number),
    spice: () => number + 1,
    bake: () => number * 3,
    fillet: () => number * 0.8,
  };

  for (let i = 1; i < arguments.length; i++) {
    number = operations[arguments[i]]();
    console.log(number);
  }
}

cookingbyNumbers("32", "chop", "chop", "chop", "chop", "chop");
