// import { _pPrices } from './main3.js';
export const productsArr = [];
export { fetch };

//a private variable for creating a test list with prices
export const _pPrices =
    //
    // [5, 2, 9, 4, 1, 10, 8, 6, 3, 7];
    // [1, 2, 3, 4, 5, 6, 7, 8];
    [10, 5, 4, 1, 6, 3, 6, 4, 7, 6];

for (const i in _pPrices) {
    const obj = {
        id: i,
        price: _pPrices[i],
    };
    productsArr.push(obj);
}

async function fetch(min, max) {
    // console.log(productsArr);
    return productsArr
        .filter((x) => x.price > min && x.price < max)
        .slice(0, 3);
}
