const searchProducts = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => showDetails(data))
}


const showDetails = (products) => {
    const details = document.getElementById('display-card');
    // console.log(products)

    for (let index = 0; index < 6; index++) {
        const element = products[index];
        console.log(element)

        // products.forEach(element => {
        //     console.log(element)

        // return ratings 
        const ratingStar = ratings(element.rating.rate);

        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `

         <div class="card ms-2 border-0 shadow  h-100 product">
           <div class="p-1">
           <img src="${element.image}" class="card-img-top" alt="..."  height=150 >
           </div>
           <div class="card-body">
             <h5 class="card-title text-center">${element.title}</h5>
             <p class="card-text">
             </p>
             <h3 class="card-text text-center fw-bold">$<span class="sp fw-bold">${element.price}</span></h3>
             <h5 class="card-text text-center"><span class="sp fw-bold">${ratingStar}</span></h5>
           </div>
           <div class="footer mx-auto">
           <button class="btn btn-secondary" onclick="addToCard(${element.id},${element.price})" >Add to Card</button>
           
           </div>
         </div>
       
       `
        details.appendChild(div);


    };





}
let count = 0;
const addToCard = (id, price, newPrice) => {
    count = count + 1;
    document.getElementById('total-products').innerHTML = count;
    updatePrice(price);
    total();
}

const total = () => {
    const price = parseFloat(document.getElementById('price').innerText);
    const deliver = parseFloat(document.getElementById('delivery-charge').innerText);
    const shipping = parseFloat(document.getElementById('shipping-charge').innerText);
    const total = price + deliver + shipping;
    document.getElementById('total').innerText = total;
    tax(total);
}

const tax = (total) => {
    const taxadd= (total * 0.15);
    document.getElementById('tax').innerText = taxadd;
    document.getElementById('intotal').innerText = taxadd + total;
}


const updatePrice = (price) => {
    const oldPrice = document.getElementById('price').innerText;
    const oldPriceFloat = parseFloat(oldPrice);
    const newPrice = price + oldPriceFloat;
    document.getElementById('price').innerText = newPrice.toFixed(2);
    DeliveryCharge(newPrice);
    ShippingCharge(newPrice);
}

const DeliveryCharge = (newPrice) => {
    let DeliveryCharge;
    if (newPrice <= 500) {
        return document.getElementById('delivery-charge').innerText = 0;
    }
    if (newPrice > 500 && newPrice <= 800) {
        document.getElementById('delivery-charge').innerText = 100;
    }
    else if (newPrice > 800 && newPrice <= 1000) {
        document.getElementById('delivery-charge').innerText = 150;
    }
    else if (newPrice >= 1000) {
        document.getElementById('delivery-charge').innerText = 200;
    }
}

const ShippingCharge = (newPrice) => {
    let ShippingCharge;
    if (newPrice <= 500) {
        return document.getElementById('shipping-charge').innerText = 0;
    }
    if (newPrice > 500 && newPrice <= 800) {
        document.getElementById('shipping-charge').innerText = 100;
    }
    else if (newPrice > 800 && newPrice <= 1000) {
        document.getElementById('shipping-charge').innerText = 150;
    }
    else if (newPrice >= 1000) {
        document.getElementById('shipping-charge').innerText = 200;
    }
}

const ratings = (rate) => {
    if (rate >= 4) {
        return star = ` <h3><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> <br> ${rate}</h3>`
    }
    else if (rate >= 3 && rate < 4) {
        return star = ` <h3><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> <br> ${rate}</h3>`
    }
    else if (rate >= 2 && rate < 3) {
        return star = ` <h3><i class="fas fa-star"></i><i class="fas fa-star"></i> <br> ${rate}</h3>`
    }
    else {
        return star = ` <h3><i class="fas fa-star"></i> <br> ${rate}</h3>`
    }

}



const orderProducts = () => {
    const final= document.getElementById('intotal').innerText;
    alert("Dear Sir," + "\n" + "You have to pay: " + final + "\n" + "Thank You!" + "\n" + "Regrads-" + "\n" + "Sorowar's Shopping Zone" );
}


searchProducts();