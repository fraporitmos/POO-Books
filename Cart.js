class Cart{

    constructor(){
        this.cart = []
    }

    addToCart(product){
        const existId = this.cart.some( item => item.id === product.id )
        if(!existId){
          this.cart.push(product) 
        }
    }

    removeToCart(id){
        const index = this.cart.findIndex( item => item.id === id )
        if(index !== -1 ){
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
                  <button 
                    attr-custom-cart=${product.id}
                    class="text-xs text-red-500 cursor-pointer mt-0.5">
                    Remove
                  </button>
                </div>
              </div>
              <div class="ml-auto">
                <h4 class="text-base font-bold text-gray-800">S/${product.price}</h4>
              </div>
            </div>
          </div> `
    }


    
    



}