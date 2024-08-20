const Entity = require('./Entity');

class Language extends Entity {
    constructor(id, languageName) {
        super(id);
        this._languageName = languageName;
    }

    get languageName() {
        return this._languageName;
    }
}

module.exports = Language;
