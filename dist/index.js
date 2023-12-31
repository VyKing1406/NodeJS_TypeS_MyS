"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//////////////////////////////////////////////////////////////////////////
const author_router_1 = require("./router/author.router");
const book_router_1 = require("./router/book.router");
const authorBook_router_1 = require("./router/authorBook.router");
//////////////////////////////////////////////////////////////////////////
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/authors", author_router_1.authorRouter);
app.use("/api/books", book_router_1.bookRouter);
app.use("/api/authorBook", authorBook_router_1.authorBookRouter);
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
});
