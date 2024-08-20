const Entity = require('./Entity');

class Genre extends Entity {
    constructor(id, genreName) {
        super(id);
        this._genreName = genreName;
    }

    get genreName() {
        return this._genreName;
    }
}

module.exports = Genre;
