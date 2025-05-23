const div = document.querySelector ('.contentsCards')

function getBasketData() {
    div.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.forEach((item, index) => {
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
                    <button onclick="getDeleteItem(${index})">Delete</button> 
                    <button><i class="fa-solid fa-heart"></i></button>
                </div>
            </div>
            `
            div.appendChild(box)
    })
}

function getDeleteItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice (index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getBasketData()
}


getBasketData()

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