"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBooks = exports.listBooks = void 0;
const luxon_1 = require("luxon");
const seek_1 = require("../src/seek");
const book_1 = __importDefault(require("../src/class/book"));
const listBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const booksRaw = yield seek_1.db.book.findMany({
        select: {
            id: true,
            createAt: true,
            title: true,
            authorId: true,
            dataPublished: true,
            authorBook: {
                select: {
                    author: {
                        select: {
                            firstName: true,
                            lastName: true,
                        },
                    },
                },
            },
        },
    });
    const books = booksRaw.map((bookRaw) => {
        return new book_1.default(bookRaw.id, bookRaw.title, bookRaw.dataPublished.toISOString(), bookRaw.authorBook);
    });
    return books;
});
exports.listBooks = listBooks;
const createBooks = (title, dataPublished, isFiction, authorId) => __awaiter(void 0, void 0, void 0, function* () {
    const rawBook = yield seek_1.db.book.create({
        data: {
            title: title,
            dataPublished: new Date(dataPublished),
            createAt: (luxon_1.DateTime.now()).toJSDate(),
            updareAt: (luxon_1.DateTime.now()).toJSDate(),
            isFiction: isFiction,
            authorId: authorId,
        },
    });
    const newBook = new book_1.default(rawBook.id, rawBook.title, rawBook.dataPublished.toISOString());
    return newBook;
});
exports.createBooks = createBooks;
