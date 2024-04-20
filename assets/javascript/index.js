const div = document.querySelector ('.contentsCards')
const count = document.querySelector('.number')


let db

function getAllData() {
    axios.get('https://dummyjson.com/products')
    .then( res => {
        db = res.data.products
        db.forEach( item => {
            let box = document.createElement('div')
            box.className = 'contentsCard'
            box.innerHTML = `
            <div class="cardImg">
                <img src=${item.thumbnail} alt="image">
            </div>
            <div class="cardText">
                <h3>${item.title}</h3>
                <p>${item.brand}</p>
                <span>- $ ${item.price} -</span>
                <div class="btnBox">
                    <button onclick="addToBasket(${item.id})">Add To Cart</button> 
                    <button onclick="addToWishlist(${item.id})"><i class="fa-solid fa-heart"></i></button>
                </div>
            </div>
            `
            div.appendChild(box)
        })
    })
}

function getAddCount() {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if(cart.length != 0){
        count.innerHTML = cart.length
    } else{
        count.style.display = 'none'
    }
}

function addToBasket(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find( item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
    getAddCount()
}

function addToWishlist(id) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    let productsItem = wishlist.find(item => item.id == id )
    if(productsItem){
        alert('The product is available in your wishlist.')
    } else {
        let product = db.find(item => item.id == id)
        wishlist.push(product)
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
    }
}

window.onload = () => {
    getAllData()
    getAddCount()
}

document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector('.menu');
    const offScreenMenu = document.querySelector('.offScreenMenu');
  
    let menuVisible = false;
  
    menuButton.addEventListener('click', function() {
      if (!menuVisible) {
        offScreenMenu.style.display = 'flex';
        menuVisible = true;
      } else {
        offScreenMenu.style.display = 'none';
        menuVisible = false;
      }
    });
  });
  
  
