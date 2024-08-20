class Entity {
    constructor(id) {
        this._id = id;
    }

    get id() {
        return this._id;
    }
}

class Book extends Entity {
    constructor(id, title, genreId, publisherId, languageId, pages, publishedDate) {
        super(id);
        this._title = title;
        this._genreId = genreId;
        this._publisherId = publisherId;
        this._languageId = languageId;
        this._pages = pages;
        this._publishedDate = publishedDate;
    }

    get title() {
        return this._title;
    }

    get genreId() {
        return this._genreId;
    }

    get publisherId() {
        return this._publisherId;
    }

    get languageId() {
        return this._languageId;
    }

    get pages() {
        return this._pages;
    }
	

    get publishedDate() {
        return this._publishedDate;
    }

    getInfo(){
        console.log(`This is a Book Titled : ${this._title} with publishment date : ${this._publishedDate}`)
    }
}       

const book = new Book(1, "Harry Potter 💀💀", 1, 1, 1, 255, new Date(1951, 5, 1));
book.getInfo();

class Author extends Entity {
    constructor(id, firstName, lastName) {
        super(id);
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }
}

class Member extends Entity {
    constructor(id, firstName, lastName, joinDate) {
        super(id);
        this._firstName = firstName;
        this._lastName = lastName;
        this._joinDate = joinDate;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get joinDate() {
        return this._joinDate;
    }
}

class Loan extends Entity {
    constructor(id, bookId, memberId, loanDate, returnDate, lateFee, librarianId) {
        super(id);
        this._bookId = bookId;
        this._memberId = memberId;
        this._loanDate = loanDate;
        this._returnDate = returnDate;
        this._lateFee = lateFee;
        this._librarianId = librarianId;
    }

    get bookId() {
        return this._bookId;
    }

    get memberId() {
        return this._memberId;
    }

    get loanDate() {
        return this._loanDate;
    }

    get returnDate() {
        return this._returnDate;
    }

    get lateFee() {
        return this._lateFee;
    }

    get librarianId() {
        return this._librarianId;
    }

}

class Genre extends Entity {
    constructor(id, genreName) {
        super(id);
        this._genreName = genreName;
    }

    get genreName() {
        return this._genreName;
    }
}

class Publisher extends Entity {
    constructor(id, publisherName) {
        super(id);
        this._publisherName = publisherName;
    }

    get publisherName() {
        return this._publisherName;
    }
}

class Language extends Entity {
    constructor(id, languageName) {
        super(id);
        this._languageName = languageName;
    }

    get languageName() {
        return this._languageName;
    }
}

class Librarian extends Entity {
    constructor(id, firstName, lastName) {
        super(id);
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    getInfo(){
        console.log(`Name of Librarian with ID ${this.id} is ${this._firstName} ${this._lastName}`)
    }
}

/////////////////////////////////////////////////////////// Example of Polymorphism /////////////////////////////////////////////////////////
function printEntityDetails(entity) {
    console.log(`ID: ${entity.id}`);
    if (entity instanceof Book) {
        console.log(`Title: ${entity.title}`);
        console.log(`Pages: ${entity.pages}`);
    } else if (entity instanceof Author) {
        console.log(`Author: ${entity.firstName} ${entity.lastName}`);
    } else if (entity instanceof Member) {
        console.log(`Member: ${entity.firstName} ${entity.lastName}`);
    } else if (entity instanceof Loan) {
        console.log(`Loan Date: ${entity.loanDate}`);
        console.log(`Return Date: ${entity.returnDate}`);
    } else if (entity instanceof Genre) {
        console.log(`Genre: ${entity.genreName}`);
    } else if (entity instanceof Publisher) {
        console.log(`Publisher: ${entity.publisherName}`);
    } else if (entity instanceof Language) {
        console.log(`Language: ${entity.languageName}`);
    } else if (entity instanceof Librarian) {
        console.log(`Librarian: ${entity.firstName} ${entity.lastName}`);
    }
}



const author = new Author(1, "Isaac", "Asimov");
const member = new Member(1, "John", "Doe", new Date(2023, 0, 15));
const loan = new Loan(1, 1, 1, new Date(2024, 11, 1), new Date(2024, 11, 15), 0.00, 1);
const librarian = new Librarian(23, "Lisa","Milton")

printEntityDetails(book);
console.log("----------------------------------------------------------------------------------------")
printEntityDetails(author);
console.log("----------------------------------------------------------------------------------------")
printEntityDetails(member);
console.log("----------------------------------------------------------------------------------------")
printEntityDetails(loan);
console.log("----------------------------------------------------------------------------------------")

librarian.getInfo()
console.log("----------------------------------------------------------------------------------------")

/////////////////////////////////////////////////////// INTERFACE EXAMPLE ///////////////////////////////////////////////////////////////////////////


const BookInterface = {
    title: function() {},
    genreId: function() {},
    publisherId: function() {},
};

function implementsInterface(object, interface) {
    Object.keys(interface).forEach((method) => {
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