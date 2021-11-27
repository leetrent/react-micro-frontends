import faker from 'faker';

const mount = (el) => {
    let products = "";

    for (let ii = 0; ii < 5; ii++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }
    
    el.innerHTML = products;
};

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#products-dev-isolated');
    if (el) {
        mount(el);
    }
}

export { mount };
