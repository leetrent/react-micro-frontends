import faker from 'faker';

let products = "";

for (let ii = 0; ii < 5; ii++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
}

document.querySelector('#dev-products').innerHTML = products;

