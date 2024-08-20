const Entity = require('./Entity');

class AuthorBook extends Entity {
    constructor(id, authorId, bookId) {
        super(id);
        this._authorId = authorId;
        this._bookId = bookId;
    }

    get authorId() {
        return this._authorId;
    }

    get bookId() {
        return this._bookId;
    }
}

module.exports = AuthorBook;
