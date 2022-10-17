
//created properties with values
let items = [
    {
        name: "The shark",
        description: "etcetcetc",
        img: "hai.jpg",
        price: 23
    },
    {
        name: "The ocean",
        description: "etcetcetc",
        img: "ocean.jpg",
        price: 23
    },
    {
        name: "The jellyfish",
        description: "etcetcetc",
        img: "qualle.jpg",
        price: 24
    },
    {
        name: "The white bird",
        description: "etcetcetc",
        img: "vogel.jpg",
        price: 24
    },
    {
        name: "The desert",
        description: "etcetcetc",
        img: "wueste.jpg",
        price: 24
    },
    {
        name: "The wind turbine",
        description: "Stalled wind turbines cost hundreds of millions of euros.",
        img: "windkraft.jpg",
        price: 24
    }
]
//print the items
for (let item of items) {
    document.getElementById("merlin").innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="/shop/images/${item.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${item.price}€</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
  </div>
</div>`
};