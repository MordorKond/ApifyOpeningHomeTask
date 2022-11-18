import { productsArr, fetch } from './dummyData.js';
// sorted and unique vals
// [1,2,3,4,5,6,7,8]
let products = [];
// const size = 8;
let max = 9;
let min = 0;

async function main() {
    if (products.length >= 8) return;
    //console.log(await fetch(3, 5));

    const response = await fetch(min, max); ///

    const prices = response.map((x) => x.price);
    min = prices.slice(-1);

    products = products.concat(prices);
    console.log(products);
    await main();
}

main();
