
//created properties with values
let items = [
    {
        name: "The shark",
        description: "etcetcetc",
        img: "hai.jpg",
        price: 50,
        qitty: 1
    },
    {
        name: "The ocean",
        description: "etcetcetc",
        img: "ocean.jpg",
        price: 124.99,
        qitty: 1
    },
    {
        name: "The jellyfish",
        description: "etcetcetc",
        img: "qualle.jpg",
        price: 200,
        qitty: 1
    },
    {
        name: "The white bird",
        description: "etcetcetc",
        img: "vogel.jpg",
        price: 60,
        qitty: 1
    },
    {
        name: "The desert",
        description: "etcetcetc",
        img: "wueste.jpg",
        price: 85.99,
        qitty: 1
    },
    {
        name: "The wind turbine",
        description: "Stalled wind turbines cost hundreds of millions of euros.",
        img: "windkraft.jpg",
        price: 75,
        qitty: 1
    }
]

const currencyFormater = new Intl.NumberFormat("de-AT", {
    style: "currency",
    currency: "EUR",
});


//print the items
for (let item of items) {
    document.getElementById("merlin").innerHTML += `
    <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 25rem;">
  <img src="/shop/images/${item.img}" class="card-img-top" alt="" style="width: 100%; text-align: center" >
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${currencyFormater.format(item.price)}</li>
  </ul>
  <div class="card-body">
  <button class = "button product-button">Buy</button>
  </div>
</div>`
};

const addToCartBtn = document.querySelectorAll(".product-button");
// console.log(addToCartBtn);

// choose every button
addToCartBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        addToCart (items[index]);
    })
});

// in the cart comes the products
const cart = [];

const addToCart = (item) => {
    // console.table (cart);
    // check if the product exists more than once, if yes quanity increases by one
    if (cart.find((product) => product.name == item.name)){
        item.qitty++;
    } else  {
        cart.push(item);
    }
    // console.table (cart);
    createRows();
    cartTotal ();
};

// shooping basket/cart
const createRows = () => {
    let result = "";
    for (let product of cart) {
        document.querySelector(".cart-products").innerHTML += result = `
        <div class="cart-row row gx-0">
        <div class="cart-item col-6 ps-md-5 my-2 d-flex align-items-center justify-content-start">
            <img class="cart-item-image" src="/shop/images/${product.img}" width="250px" height="250px" alt="${product.name}">
                <div class="cart-item-title h5 ms-2">${product.name}</div>
        </div>
            <div class="cart-qtty-action col-2 d-flex justify-content-center align-items-center">
             
                 <div class="text-center m-0 cart-quantity h4 w-25">${product.qitty}</div>
                </div>
             <div class="col-1 d-flex justify-content-start align-items-center">
            <i class="del fs-4 bi bi-trash3-fill text-danger"></i>
            </div>
        <div class="cart-price col-3 h5 my-auto text-end p-2 pe-sm-5">
        ${currencyFormater.format(product.price)}</div>
            </div>                    
            </div>`;

    }
};

const cartTotal = () => {
    let total = 0;
    for (let product of cart ) {
        total += product.price * product.qitty;
    }
    document.getElementById("price").innerHTML = currencyFormater.format (total);
};