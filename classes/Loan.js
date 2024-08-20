const Entity = require('./Entity');

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

module.exports = Loan;
