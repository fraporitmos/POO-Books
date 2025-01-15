//Instanciar un objeto
const book1 = new Book(
    1,
    "La Fortaleza Digital",
    "Dan Brown",
    'Umbriel',
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sapiente minima numquam unde natus quis aut, praesentium repudiandae atque quod reprehenderit consequatur repellat necessitatibus similique assumenda beatae voluptate quasi possimus. Necessitatibus esse debitis eligendi. Ipsa tempore laboriosam ducimus ut dolorem",
    30.5,
    "https://images.cdn3.buscalibre.com/fit-in/360x360/46/f5/46f5ff901c5ce8ef42536784187872f2.jpg"
)


const book2 = new Book(
    2,
    "Hábitos atómicos",
    "James Clear",
    "Paidós",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sapiente minima numquam unde natus quis aut, praesentium repudiandae atque quod reprehenderit consequatur repellat necessitatibus similique assumenda beatae voluptate quasi possimus. Necessitatibus esse debitis eligendi. Ipsa tempore laboriosam ducimus ut dolorem",
    40.8,
    "https://www.crisol.com.pe/media/catalog/product/cache/f6d2c62455a42b0d712f6c919e880845/9/7/9786287578364.jpg"
)

const comic1 = new Comic(
    1, 
    "Batman: Year One Deluxe",
    "Frank Miller ",
    "Marvel",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sapiente minima numquam unde natus quis aut, praesentium repudiandae atque quod reprehenderit consequatur repellat necessitatibus similique assumenda beatae voluptate quasi possimus. Necessitatibus esse debitis eligendi. Ipsa tempore laboriosam ducimus ut dolorem",
     25,
    "https://m.media-amazon.com/images/I/61+hFGCapwL._SY522_.jpg",
    "David Mazzucchelli"
)


const productsCart = new Cart()
productsCart.addToCart(book1)
productsCart.addToCart(book2)
productsCart.addToCart(comic1)




const containerBooks = document.getElementById("containerBooks")
const containerCart = document.getElementById("containerCart")
const logoName = document.getElementById("logoName")
const cartIcon = document.getElementById("cartIcon")
const containerProductCart = document.getElementById("containerProductCart")

containerBooks.innerHTML = book1.drawCardBook()
containerBooks.innerHTML += book2.drawCardBook()
containerBooks.innerHTML += comic1.drawCardBook()


cartIcon.addEventListener('click', ()=>{
    //agregar clase desde js
    containerBooks.classList.add("hidden")
    containerCart.classList.remove("hidden")
})

logoName.addEventListener('click', ()=>{
    //agregar clase desde js
    containerCart.classList.add("hidden")
    containerBooks.classList.remove("hidden")
})

productsCart.cart.forEach(item=>{
    containerProductCart.innerHTML += productsCart.drawOrderCard(item)
})