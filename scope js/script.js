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







function updateProduct(id){


    let product = products.find(product => product._id === id);
    console.log(product);
    document.getElementById('puloadForm').name.value = product.name;
    document.getElementById('puloadForm').price.value = product.price;
    document.getElementById('puloadForm').description.value = product.description;
    document.getElementById('puloadForm').image.value = product.image;
    document.getElementById('puloadForm').submit.value = 'Update';

}

let products=[];
var container = document.getElementById('list');
console.log(container);
async function fetchData() {
    container.innerHTML = '';
    var result = await fetch('https://asyut-eng-synd.vercel.app/api/products')
    var response = await result.json();
    console.log(result);
    console.log(response);
    products = response.data;
    console.log(products);
   
    let html = `            
            <div  class="product">
                <img src="" alt="">
                <h2 class="name"></h2>
                <p class="price"></p>
                <p class="description"></p>
                <button class="buy">Buy</button>
            </div>
    
    `;
    products.forEach(product => {
        html += `

        <div id="row">
        
            <p>${product._id}</p>
            <p>${product.name}</p>
            <p>${product.price}</p>
            <p>${product.description}</p>
            <p>${product.name}</p> 
            <p>${product.category}</p>
            <button onclick="updateProduct('${product._id}')">update</button>
            <button onclick="deleteProduct('${product._id}')">delete</button>
     
        </div>
        
        `;
    });
    container.innerHTML += html; 
    if (result.ok) {
        console.log('success');
    }
    else {
        console.log('error');
    }

    console.log(response);

}


function cleanForm(){
    document.getElementById('puloadForm').reset();
}
// form js
fetchData();
let form = document.getElementById('puloadForm');
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
        
        let res= response.json();
        console.log(res);
        fetchData();
        return res
    }).then(function(data){
        let messageDiv = document.getElementById('message');
        messageDiv.innerHTML = data.message;
        console.log(data);
        cleanForm();
    })

   
    console.log(name, price, description, image);
}) 




function deleteProduct(id){
    console.log(id);
    fetch(`https://asyut-eng-synd.vercel.app/api/products/${id}`, {
        method: 'DELETE'
    }).then(function(response){
        let res= response.json();
        console.log(res);
        return res
    }).then(function(data){
        let messageDiv = document.getElementById('message');
        messageDiv.innerHTML = data.message;
        console.log(data);
        fetchData();
    })
}