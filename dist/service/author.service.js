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
exports.createAuthors = exports.listAuthors = void 0;
const luxon_1 = require("luxon");
const seek_1 = require("../src/seek");
const author_1 = __importDefault(require("../src/class/author"));
const listAuthors = () => __awaiter(void 0, void 0, void 0, function* () {
    const authorsRaw = yield seek_1.db.author.findMany({
        select: {
            id: true,
            firstName: true,
            lastName: true,
            authorBook: {
                select: {
                    book: {
                        select: {
                            id: true,
                            title: true,
                        },
                    },
                },
            },
        },
    });
    const authors = authorsRaw.map((authorRaw) => {
        return new author_1.default(authorRaw.id, authorRaw.firstName, authorRaw.lastName, authorRaw.authorBook);
    });
    return authors;
});
exports.listAuthors = listAuthors;
const createAuthors = (lastName, firstName) => __awaiter(void 0, void 0, void 0, function* () {
    const rawAuthor = yield seek_1.db.author.create({
        data: {
            lastName: lastName,
            firstName: firstName,
            createAt: (luxon_1.DateTime.now()).toJSDate(),
            updareAt: (luxon_1.DateTime.now()).toJSDate(),
        },
    });
    const newAuthor = new author_1.default(rawAuthor.id, rawAuthor.firstName, rawAuthor.lastName, {});
    return newAuthor;
});
exports.createAuthors = createAuthors;
