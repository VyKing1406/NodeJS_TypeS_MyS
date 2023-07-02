"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class author {
    constructor(id, firstName, lastName, bookList = {}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.bookList = bookList;
    }
}
exports.default = author;
