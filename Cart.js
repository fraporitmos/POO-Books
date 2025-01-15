class Cart{

    constructor(){
        this.cart = []
    }

    addToCart(product){
        this.cart.push(product) 
    }

    removeToCart(product){
        const index = this.cart.indexOf(product)
        if(index > -1){
            this.cart.splice(index, 1)
        }   
    }

    drawOrderCard(product){
        return `
           <div class="space-y-4">
            <div class="grid grid-cols-3 w-full items-center justify-center gap-4">
              <div class="col-span-2 flex items-center gap-4">
                <div class="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                  <img
                    src=${product.img}
                    class="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h3 class="text-base font-bold text-gray-800">${product.name}</h3>
                  <h6 class="text-xs text-red-500 cursor-pointer mt-0.5">
                    Remove
                  </h6>

                  <div class="flex gap-4 mt-4">
                    <div>
                      <button
                        type="button"
                        class="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-2.5 fill-current"
                          viewBox="0 0 124 124"
                        >
                          <path
                            d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                            data-original="#000000"
                          ></path>
                        </svg>

                        <span class="mx-2.5">1</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-2.5 fill-current"
                          viewBox="0 0 42 42"
                        >
                          <path
                            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ml-auto">
                <h4 class="text-base font-bold text-gray-800">S/${product.price}</h4>
              </div>
            </div>
            
          </div>
        

        `
    }
    



}