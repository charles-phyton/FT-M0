// rea lizaremos una librerihtml

const _private = new WeakMap ()

class Book{

    constructor (title, author, price){

        const propperties = {
            _title = title,
            _author = author,
            _price = price
        }

        _private.set(this, {propperties});
        

    }
    
// Metodo get obtienen titulo
    get title(){
    return _private.get(this).properties['_title'];
    }

// Metodo Setter modifica el titulo
    set title(newTitle){
        return _private.get(this).properties['_title'] = newTitle;

    }


}

//Instanciar una clase
const book1 = new Book('1984', 'G.O', 350);



