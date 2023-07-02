"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class book {
    constructor(id, title, dataPublished, authors = {}) {
        this.id = id;
        this.title = title;
        this.dataPublished = dataPublished;
        this.authors = authors;
    }
}
exports.default = book;
