const Entity = require('./Entity');

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

    getInfo() {
        console.log(`This is a Book Titled: ${this._title} with publishment date: ${this._publishedDate}`);
    }
}

module.exports = Book;
