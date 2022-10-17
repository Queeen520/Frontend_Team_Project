
//created properties with values
let items = [
    {
        name: "The shark",
        description: "etcetcetc",
        img: "hai.jpg",
        price: 50
    },
    {
        name: "The ocean",
        description: "etcetcetc",
        img: "ocean.jpg",
        price: 124
    },
    {
        name: "The jellyfish",
        description: "etcetcetc",
        img: "qualle.jpg",
        price: 200
    },
    {
        name: "The white bird",
        description: "etcetcetc",
        img: "vogel.jpg",
        price: 60
    },
    {
        name: "The desert",
        description: "etcetcetc",
        img: "wueste.jpg",
        price: 85
    },
    {
        name: "The wind turbine",
        description: "Stalled wind turbines cost hundreds of millions of euros.",
        img: "windkraft.jpg",
        price: 75
    }
]
//print the items
for (let item of items) {
    document.getElementById("merlin").innerHTML += `
    <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 25rem;">
  <img src="/shop/images/${item.img}" class="card-img-top" alt="" style="width: 100%; text-align: center" >
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${item.price}.00€</li>
  </ul>
  <div class="card-body">
  <button class = "button">Buy</button>
  </div>
</div>`
};