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
exports.linkAuthorBook = void 0;
const seek_1 = require("../src/seek");
const author_1 = __importDefault(require("../src/class/author"));
const linkAuthorBook = (authorId, bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const rawBook = yield seek_1.db.authorBook.create({
        data: {
            author: {
                connect: {
                    id: authorId
                },
            },
            book: {
                connect: {
                    id: bookId
                },
            },
        },
    });
    const rawAuthor = yield seek_1.db.author.findUnique({
        where: { id: rawBook.authorId },
        include: { authorBook: true }
    });
    if (rawAuthor) {
        return new author_1.default(rawAuthor.id, rawAuthor.firstName, rawAuthor.lastName, rawAuthor.authorBook);
    }
    else
        return undefined;
});
exports.linkAuthorBook = linkAuthorBook;
