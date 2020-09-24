// Question
// Create a basic Shopping website as done in the class and enhance the website by adding the following functionalities
// 1. Add 6 new products so that count of products become 12
// 2. A price filter where you have to add two input boxes one for mininmum and one for maximum price
// 3. A place which counts number of products added in cart
// 4. If a product is already added in cart then it should show a message that this product is already in cart


let products = [



    {
        id: 1,
        name: "White Tshirt",
        size: "L",
        color: "white",
        price: 1200,
        image: "product1.jpg",
        description: "Good looking white tshirt",
      },
      {
        id: 2,
        name: "Black Shirt",
        size: "M",
        color: "Black",
        price: 1500,
        image: "product2.jpg",
        description: "Good looking black shirt",
      },
    
      {
        id: 3,
        name: "Checked Shirt",
        size: "S",
        color: "White & Black",
        price: 900,
        image: "product3.png",
        description: "Good looking Checked Shirt",
      },
    
      {
        id: 4,
        name: "Black Female Blazer",
        size: "M",
        color: "Black",
        price: 3000,
        image: "product4.jpeg",
        description: "Beautifull Blazer",
      },
    
      {
        id: 5,
        name: "Navy Blue Top",
        size: "S",
        color: "Blue",
        price: 1300,
        image: "product5.jpg",
        description: "Good looking Top",
      },
    
      {
        id: 6,
        name: "Indian Dress",
        size: "M",
        color: "Henna",
        price: 1500,
        image: "product6.jpg",
        description: "Good looking Traditional Dress",
      },

{
    id: 7,
    name:"pink tshirt",
    size: "M",
    color: "pink",
    price: 800,
    image: "product7.jpg",
    description: "good looking men wear tshirt",
},
{
    id: 8,
    name:"white tshirt",
    size: "L",
    color: "white",
    price: 1200,
    image: "product8.jpg",
    description: "good looking men wear white tshirt",
},
{
    id: 9,
    name:"navy checked shirt",
    size: "s",
    color: "navy blue",
    price: 1400,
    image: "product9.jpg",
    description: "good looking men wear navy blue checked shirt",
},
{
    id: 10,
    name:"black women dress",
    size: "M",
    color: "black",
    price: 2500,
    image: "product10.jpg",
    description: "beautiful black women dress",
},
{
    id: 11,
    name:"black saree",
    size: "L",
    color: "black",
    price: 4000,
    image: "product11.jpg",
    description: "beautiful black saree",
},
{
    id: 12,
    name:"pink saree",
    size: "L",
    color: "pink",
    price: 6000,
    image: "product12.jpg",
    description: "beautiful pink saree",
},
];

cart = [];
count=0;

function displayProducts(productsData,who="productwrapper")
{
    let productsString="";

    productsData.forEach(function(product,index){

        let {id,name,image,color,description,price,size}=product;


        if(who=="productwrapper"){
            productsString+=`<div class="product">
            <div class="prodimg">
                <img src="pics/${image}" width="100%"/>
            </div>
            <h3>${name}</h3>
            <p>price: ${price}</p>
            <p>size: ${size}</p>
            <p>color: ${color}</p>
            <p>${description}</p>
            <p>
                <button onclick="addToCart(${id})">Add to cart</button>
            </p>
        
        </div>`;

        }
        else if(who=="cart"){
    productsString+=`<div class="product">
    <div class="prodimg">
        <img src="pics/${image}" width="100%"/>
    </div>
    <h3>${name}</h3>
    <p>price: ${price}</p>
    <p>size: ${size}</p>
    <p>color: ${color}</p>
    <p>${description}</p>
    <p>
        <button onclick="removeFromCart(${id})">Remove from cart</button>
    </p>

</div>`;
        }
})
document.getElementById(who).innerHTML=productsString;

}

displayProducts(products);




function searchProduct(searchValue){
 
    let searchedProducts = products.filter(function(product, index){
        let searchString = 
        product.name +" " + product.color +" " + product.description;
        return searchString.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
    })
displayProducts(searchedProducts);
}



function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }




function addToCart(id){
    let pro = getProductByID(products, id);

    const existing = cart.find(item => item.id === pro.id) //line1

       if(existing){ 
       alert('This product is already in the cart'); 
        } 
    else {
    cart.push(pro);
    displayProducts(cart,"cart");
    count += 1;
  document.getElementById('count').innerText=count;
  
}
}


function removeFromCart(id){
    let index = cart.findIndex(function (product) {
        return product.id == id;
    });
    cart.splice(index,1);
    displayProducts(cart,"cart");
  count-=1;

   document.getElementById('count').innerText = count;
    }



    function searchBy()
    {
        let max=document.getElementById('max').value;
        let min=document.getElementById('min').value;

        let arr=products.filter((ele,i)=>{
            return ele.price>=min && ele.price<=max;
        })

displayProducts(arr)
    }