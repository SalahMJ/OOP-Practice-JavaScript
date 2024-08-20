const Entity = require('./Entity');

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

    getInfo() {
        console.log(`Name of Librarian with ID ${this.id} is ${this._firstName} ${this._lastName}`);
    }
}

module.exports = Librarian;
