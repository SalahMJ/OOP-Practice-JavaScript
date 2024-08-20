const Entity = require('./Entity');

class Publisher extends Entity {
    constructor(id, publisherName) {
        super(id);
        this._publisherName = publisherName;
    }

    get publisherName() {
        return this._publisherName;
    }
}

module.exports = Publisher;
