//This code works for API that servers the worst possible array
//this is an unsorted array with products that have duplicates
//To make it worse we can only ask the API to filter by price.

//importing and dummy array and dummy fetch function for testing puposes
import { productsArr, fetch } from './dummyData.js';

let products = []; //for saving results from the request
const size = productsArr.length; // total products by the API
const limit = 3; //limit on results per request
const maxPrice = 10; // max price of a product
const minPrice = 1; //min price of a product

let min = minPrice - 1; //send to API for filtering; starts lower then minPrice

//sends a request with min required parameter and max optional
//and converds the response to a list of prices
async function getPricesBetween(min, max = min + limit + 1) {
    let response = await fetch(min, max);
    let prices = response.map((x) => x.price);
    return prices;
}

//recursive function
async function main() {
    //2 condition for breaking the recursion and
    //retuns a message if scraping was successful or
    //number of products where not reached due to API limit
    if (products.length >= size || min > maxPrice) {
        console.log(
            products.length < size
                ? `${size - products.length} producsts not reached`
                : 'All product prices collected!'
        );
        console.log(products);
        return;
    }

    //starts from the lowest price
    let prices = await getPricesBetween(min);

    //if the response limit is not reached, all prices in this range are
    //exhausted and we can continue with the next range.
    //In case the respnse has reach a limit we send a individual request
    //for every price to make sure we get as many duplicates as possible.
    if (!(prices.length < limit)) {
        let unique = new Set(prices);
        for (const i of unique) {
            let pricesDublicates = await getPricesBetween(i - 1, i + 1);
            products = products.concat(pricesDublicates);
        }
    } else {
        products = products.concat(prices);
    }

    //new minimum is set for the next recursion
    min = min + limit;

    // console.log(products);
    await main();
}

main();
