import { productsArr, fetch, _pPrices } from './dummyData.js';
//random order no dublicated val
// l = [5, 2, 9, 4, 1, 10, 8, 6, 3, 7];
let products = [];
const size = productsArr.length;
// let max = Math.max(...productsArr.map((x) => x.price)) + 1;
let limit = 3;
let min = 0;
let max = min + limit + 1;

console.log(min, max);

async function main() {
    if (products.length >= size) return;
    //console.log(await fetch(3, 5));

    const response = await fetch(min, max);
    const prices = response.map((x) => x.price);

    min = max - 1;
    max = max + limit;
    products = products.concat(prices);

    console.log(products);
    await main();
}

main();
