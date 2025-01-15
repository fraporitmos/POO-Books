class Comic extends Book {

    constructor(_id, _name, _author, _editorial,_description,_price, _img, _ilustrator){
        //Super indica la invocación al metodo constructor de la clase Book
        super(_id, _name, _author, _editorial,_description,_price, _img)

        this.ilustrator = _ilustrator
        this.type = "Comic",
        this.discount = 10
    }


}