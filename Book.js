class Book {

    constructor(_id, _name, _author, _editorial,_description,_price, _img){
        //Arguments
        this.id = _id
        this.name = _name
        this.author = _author
        this.editorial = _editorial
        this.description = _description
        this.price = _price
        this.img = _img
        this.discount = 0

    }

    //Métodos
    drawCardBook(){
       return `
          <div
        class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
        <a href="#" class="block w-full h-full">
          <img
            alt="blog photo"
            src=${this.img}
            class="object-contain w-full max-h-64 dark:bg-gray-800"
          />
          <div class="w-full p-4 bg-white dark:bg-gray-800">
            <p class="font-medium text-indigo-500 text-2xl">S/${this.price}</p>
            <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
              ${this.name}
            </p>
            <p class="font-light text-gray-400 dark:text-gray-300 text-md line-clamp-4">
              ${this.description}
            </p>
            <div class="flex items-center mt-4">
              <div class="flex flex-col justify-between text-sm">
                <p class="text-gray-800 dark:text-white">${this.author}</p>
              </div>
            </div>


             <button
              type="button"
              attr-custom-btn=${this.id}
              class="py-2 px-4 mt-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              Agregar al carrito
            </button>
        

          </div>
        </a>
      </div>
       `
    }

    getPrice(){
        return this.price - this.discount
    }

}
