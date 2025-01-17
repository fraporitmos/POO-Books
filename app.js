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
    3, 
    "Batman: Year One Deluxe",
    "Frank Miller ",
    "Marvel",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sapiente minima numquam unde natus quis aut, praesentium repudiandae atque quod reprehenderit consequatur repellat necessitatibus similique assumenda beatae voluptate quasi possimus. Necessitatibus esse debitis eligendi. Ipsa tempore laboriosam ducimus ut dolorem",
     25,
    "https://m.media-amazon.com/images/I/61+hFGCapwL._SY522_.jpg",
    "David Mazzucchelli"
)

const arrayBooks = [book1, book2, comic1]

const productsCart = new Cart()


const pageBooks = document.getElementById("pageBooks")
const pageCart = document.getElementById("pageCart")
const pageCartEmpty = document.getElementById("pageCartEmpty")


const logoName = document.getElementById("logoName")
const cartIcon = document.getElementById("cartIcon")
const containerProductCart = document.getElementById("containerProductCart")
const countCart = document.getElementById("countCart")


const showBooksPage = () => {
    //ocultamos las dos paginas de carrito
    pageCartEmpty.classList.add("hidden")
    pageCart.classList.add("hidden")
    //mostrar la pagina de libros
    pageBooks.classList.remove("hidden")
}

const showCartPageEmtpy = () => {
    //ocultamos la pagina de libros y del carrito
    pageCart.classList.add("hidden")
    pageBooks.classList.add("hidden")
    //mostrar pagina del carrito vacio
    pageCartEmpty.classList.remove("hidden")
}


const showCartPage = () => {
    //ocultamos la pagina de libros y del carrito vacio
    pageBooks.classList.add("hidden")
    pageCartEmpty.classList.add("hidden")
    //mostrar pagina del carrito 
    pageCart.classList.remove("hidden")
}

pageBooks.innerHTML = book1.drawCardBook()
pageBooks.innerHTML += book2.drawCardBook()
pageBooks.innerHTML += comic1.drawCardBook()


cartIcon.addEventListener('click', ()=>{
    //agregar clase desde js
    showBooksCart()
})

logoName.addEventListener('click', ()=>{
    //agregar clase desde js
    showBooksPage()
})

const showBooksCart = () => {
    if(productsCart.cart.length > 0){
        showCartPage()
        showOrderCart()
    }else{
        showCartPageEmtpy()
    }
}


const showOrderCart = () =>{
    containerProductCart.innerHTML = ""
    productsCart.cart.forEach(item=>{
        containerProductCart.innerHTML += productsCart.drawOrderCard(item)
    })
}

//Detectar un evento de manera general
document.addEventListener('click', (event) =>{
    if(event.target.getAttribute("attr-custom-btn")){
        const idBook = parseInt(event.target.getAttribute("attr-custom-btn"))
        const book = arrayBooks.find( item => item.id === idBook)
        productsCart.addToCart(book)
        countCart.innerHTML = productsCart.cart.length
    }

    if(event.target.getAttribute("attr-custom-cart")){
       const idBook = parseInt(event.target.getAttribute("attr-custom-cart"))
       productsCart.removeToCart(idBook)
       showOrderCart()
       countCart.innerHTML = productsCart.cart.length
       showBooksCart()
    }
})