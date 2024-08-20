const Book = require('./classes/Book');
const Author = require('./classes/Author');
const Member = require('./classes/Member');
const Loan = require('./classes/Loan');
const Librarian = require('./classes/Librarian');

const book = new Book(1, "Harry Potter 💀💀", 1, 1, 1, 255, new Date(1951, 5, 1));
book.getInfo();

const author = new Author(1, "Isaac", "Asimov");
const member = new Member(1, "John", "Doe", new Date(2023, 0, 15));
const loan = new Loan(1, 1, 1, new Date(2024, 11, 1), new Date(2024, 11, 15), 0.00, 1);
const librarian = new Librarian(23, "Lisa", "Milton");

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
    } else if (entity instanceof Librarian) {
        console.log(`Librarian: ${entity.firstName} ${entity.lastName}`);
    }
}

printEntityDetails(book);
console.log("----------------------------------------------------------------------------------------")
printEntityDetails(author);
console.log("----------------------------------------------------------------------------------------")
printEntityDetails(member);
console.log("----------------------------------------------------------------------------------------")
printEntityDetails(loan);
console.log("----------------------------------------------------------------------------------------")

librarian.getInfo();
console.log("----------------------------------------------------------------------------------------")
