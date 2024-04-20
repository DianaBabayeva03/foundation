const div = document.querySelector('.contentsCards')

function getWishlistData() {
    div.innerHTML =  ``
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.forEach((item, index) => {
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
                    <button  onclick="getDeleteWishlist(${index})"><i class="fa-solid fa-heart-circle-minus"></i></button>
                </div>
            </div>
            `
            div.appendChild(box)
    })
}

function getDeleteWishlist(index) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.splice (index, 1)
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    getWishlistData()
}

getWishlistData()

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