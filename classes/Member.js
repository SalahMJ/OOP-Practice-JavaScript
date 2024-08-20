const Entity = require('./Entity');

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

module.exports = Member;
