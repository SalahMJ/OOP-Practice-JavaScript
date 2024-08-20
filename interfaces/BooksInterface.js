const BookInterface = {
    title: function() {},
    genreId: function() {},
    publisherId: function() {},
};

export function implementsInterface(object, bookInterface) {
    Object.keys(bookInterface).forEach((method) => {
        if (typeof object[method] !== 'function') {
            throw new Error(`Class does not implement the ${method} method`);
        }
    });
}

class Book1{
    title(){
        console.log("Harry Potter")
    }

    genreId(){
        console.log("The genreID is 234")
    }

    publisherId(){
        console.log("Publisher id is 23")
    }
}

try {
    const myBook = new Book1();
    implementsInterface(myBook, BookInterface);
    console.log("Book1 class implements Book Interface");
} catch (error) {
    console.error(error.message);
}

