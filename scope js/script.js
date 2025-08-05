function test(callback) {
    let a = 1;
    let b = 2;
    console.log(a);
    console.log(b);

}
let x = 20;
console.log(x);
//  thehow to use fetch

// test();
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => console.log(data));

var container = document.getElementById('container');
console.log(container);
async function fetchData() {
    var result = await fetch('https://asyut-eng-synd.vercel.app/api/products')
    var response = await result.json();
    console.log(result);
    console.log(response);
    let products = response.data;
    console.log(products);
   
    let html = '';
    products.forEach(product => {
        html += `

        <div id="product">
                <img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <p>${product.price}</p>
                <p>${product.description}</p>
                <button>Buy</button>
            </div>
        
        `;
    });
    container.innerHTML = html; 
    if (result.ok) {
        console.log('success');
    }
    else {
        console.log('error');
    }

    console.log(response);

}
// form js
fetchData();
let form = document.getElementById('form');
console.log(form);
form.addEventListener('submit', function(e){
    console.log('submit');
    e.preventDefault();
    let name = form.name.value;
    let price = form.price.value;
    let description = form.description.value;
    let image = form.image.value;
    let product = {
        name: name,
        price: price,
        description: description,
        image: image
    }
    let stringData = JSON.stringify(product);
    fetch('https://asyut-eng-synd.vercel.app/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: stringData

    }).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
    })

   
    console.log(name, price, description, image);
}) 
