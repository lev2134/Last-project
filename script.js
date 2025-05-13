async function getProducts() {
    let response = await fetch("store_db.json");
    let products = await response.json();
    return products;
};

function getCardHTML(product) {
    let productData = JSON.stringify(product)

    return `
    <div class="my-card" style="">
    <img src="img/${product.image}">
    <h5 class=>"text-my-card">${product.title}</h5>
    </div>
    `
}