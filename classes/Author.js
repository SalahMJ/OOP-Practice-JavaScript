const Entity = require('./Entity');

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

module.exports = Author;
