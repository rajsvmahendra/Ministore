
// function getUser(callback) {
//     setTimeout(() => {
//         console.log("User Fetched");
//         callback();
//     }, 2000)
// }

// function getPosts(callback) {
//     setTimeout(() => {
//         console.log("Posts Fetched");
//         callback();
//     }, 1000)
// }

// function getComment(callback) {
//     setTimeout(() => {
//         console.log("Comments Fetched");
//         callback();
//     }, 1000)
// }

// getUser(() => {
//     getPosts(() => {
//         getComment(() => {
//             console.log("all data fetched");
//         });
//     });
// });
// fetch is a function which returns a promise

// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("asyc task is created");
//         resolve();
//     }, 2000)
// })
// promiseOne.then(() => {
//     console.log("promise consumed")
// })

// //. then means when a promise is fullfiled run this function

// promiseTwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("async");
//         resolve();
//     })
// })

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("task three");
//         resolve({ name: "Rajsv", city: "Delhi" });
//     }, 1000)
// });

// promiseThree.then((user) => {
//     console.log(user);
// });

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({ name: "raj", city: "delhi" })
//         }
//         else {
//             reject("ERROR something went wrong")
//         }
//     }, 2000)
// });

// promiseFour.then((user) => {
//     console.log(user);
//     return user.name;
// }).then((name) => {
//     console.log(name);
// }).catch((err) => {
//     console.log(err);
// });


// async: task that take time but dont block the code
// sync: task that take time and block the code
// callback: function that is passed as an argument to another function
// await: keyword used with async function to wait for a promise to resolve



// fetch("https://jsonplaceholder.typicode.com/users").then(response => {
//     return response.json();
// }).then(data => {
//     // console.log(data);
//     console.log(data.name);
// }).catch(error => {
//     console.log(error);
// })
// json.stringfy and json.parse: used to convert json to string and string to json

// function fetchData() {
//     fetch("https://dummyjson.com/products")
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             displayData(data.products);
//         })
//         .catch(error => {
//             console.log("Error:", error);
//         });
// }

// function displayData(category) {
//     let container = document.getElementById("data");
//     container.innerHTML = "";

//     category.forEach(category => {
//         let p = document.createElement("p");
//         p.innerText = category.category;
//         container.appendChild(p);
//     });
// }

// let button = document.getElementById("btn");
// button.addEventListener("click", fetchData);


// const btn = document.getElementById("btn");
// const container = document.getElementById("product-container");

// btn.addEventListener("click", loadProducts);

// async function loadProducts() {
//     console.log("Button clicked");

//     let response = await fetch("https://dummyjson.com/products");
//     let data = await response.json();

//     console.log(data);

//     container.innerHTML = "";
//     data.products.forEach(product => {
//         let div = document.createElement("div");
//         div.innerText = product.title;
//         container.appendChild(div);
//     });
// }

// let allProducts = [];


// function fetchData() {
//     fetch("https://dummyjson.com/products")
//         .then(response => response.json())
//         .then(data => {
//             allProducts = data.products;
//             displayProducts(allProducts);
//         })
//         .catch(error => {
//             console.log("Error:", error);
//         });
// }

// function displayProducts(products) {
//     let container = document.getElementById("product-container");
//     container.innerHTML = "";


//     products.forEach(product => {

//         let div = document.createElement("div");
//         div.classList.add("product-card");

//         div.id = `product-${product.id}`;



//         let title = document.createElement("h3");
//         title.innerText = product.title;
//         div.appendChild(title);

//         let price = document.createElement("p");
//         price.innerText = "₹ " + product.price;
//         div.appendChild(price);

//         let category = document.createElement("p");
//         category.innerText = product.category;
//         div.appendChild(category);

//         let img = document.createElement("img");
//         img.src = product.thumbnail;
//         div.appendChild(img);

//         let desc = document.createElement("p");
//         desc.innerText = product.description;
//         div.appendChild(desc);

//         container.appendChild(div);
//     });
// }


// const searchBtn = document.getElementById("btn");
// // const searchInput = document.getElementById("search");


// searchBtn.addEventListener("click", searchProducts);
// // searchInput.addEventListener("input", searchProducts);

// function searchProducts() {
//     let query = searchInput.value.toLowerCase();

//     let filtered = allProducts.filter(product => {
//         return product.title.toLowerCase().includes(query) ||
//             product.category.toLowerCase().includes(query);
//     });

//     if (filtered.length > 0) {
//         let productId = filtered[0].id;
//         window.location.href = `#product-${productId}`;
//     } else {
//         alert("No product found");
//     }
// }


// let button = document.getElementById("load-btn");
// button.addEventListener("click", fetchData);


// let allProducts = [];

// const searchInput = document.getElementById("search");
// const searchBtn = document.getElementById("btn");
// const loadBtn = document.getElementById("load-btn");
// const backBtn = document.getElementById("back-btn");

// searchBtn.addEventListener("click", searchProducts);
// searchInput.addEventListener("input", searchProducts);
// loadBtn.addEventListener("click", fetchData);
// backBtn.addEventListener("click", showAllProducts);

// function fetchData() {
//     fetch("https://dummyjson.com/products")
//         .then(response => response.json())
//         .then(data => {
//             allProducts = data.products;
//             displayProducts(allProducts);
//         })
//         .catch(error => console.log("Error:", error));
// }

// function displayProducts(products) {
//     const container = document.getElementById("product-container");
//     container.innerHTML = "";

//     products.forEach(product => {
//         let div = document.createElement("div");
//         div.classList.add("product-card");
//         div.id = `product-${product.id}`;

//         div.addEventListener("click", () => {
//             window.location.href = `#product-${product.id}`;
//             showOnlyProduct(product.id);
//         });

//         div.innerHTML = `
//             <h3>${product.title}</h3>
//             <p>₹ ${product.price}</p>
//             <p>${product.category}</p>
//             <img src="${product.thumbnail}">
//             <p>${product.description}</p>
//         `;

//         container.appendChild(div);
//     });
// }

// function searchProducts() {
//     let query = searchInput.value.toLowerCase();

//     let filtered = allProducts.filter(product =>
//         product.title.toLowerCase().includes(query) ||
//         product.category.toLowerCase().includes(query)
//     );

//     if (filtered.length > 0) {
//         let id = filtered[0].id;
//         window.location.href = `#product-${id}`;
//         showOnlyProduct(id);
//     }
// }

// function showOnlyProduct(id) {
//     let product = allProducts.find(p => p.id === id);
//     displayProducts([product]);
// }

// function showAllProducts() {
//     displayProducts(allProducts);
//     window.location.href = "#";
// }


let allProducts = [];

const container = document.getElementById("product-container");
const loadBtn = document.getElementById("load-btn");
const backBtn = document.getElementById("back-btn");
const searchInput = document.getElementById("search");
const status = document.getElementById("status");

loadBtn.addEventListener("click", fetchProducts);
backBtn.addEventListener("click", () => displayProducts(allProducts));
searchInput.addEventListener("input", handleSearch);

async function fetchProducts() {
    status.innerText = "Loading products...";
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    allProducts = data.products;
    displayProducts(allProducts);
    status.innerText = "";
}

function displayProducts(products) {
    container.innerHTML = "";

    if (products.length === 0) {
        status.innerText = "No products found.";
        return;
    }

    status.innerText = `${products.length} products shown`;

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.id = `product-${product.id}`;

        card.innerHTML = `
      <img src="${product.thumbnail}">
      <h3>${product.title}</h3>
      <p class="price">₹ ${product.price}</p>
      <p>${product.category}</p>
    `;

        card.addEventListener("click", () => {
            window.location.href = `#product-${product.id}`;
            showSingle(product.id);
        });

        container.appendChild(card);
    });
}

function showSingle(id) {
    const product = allProducts.find(p => p.id === id);
    displayProducts([product]);
}

function handleSearch() {
    const q = searchInput.value.toLowerCase();

    const filtered = allProducts.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );

    displayProducts(filtered);
}
