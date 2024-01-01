function fruit(type,kilo,price){

    weight=(kilo/1000);
    sum=price*weight;

    console.log(`I need $${sum.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${type}.`);

}

fruit('orange', 2500, 1.80)