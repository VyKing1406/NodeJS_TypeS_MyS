import {DateTime} from 'luxon';
import { db } from '../src/seek';
import book from '../src/class/book';
import author from '../src/class/author';

export const listBooks = async (): Promise<book[]> => {
    const booksRaw = await db.book.findMany({
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
                            lastName:true,
                        },
                    },
                },
            },
        },
    });
    const books: book[] = booksRaw.map((bookRaw) => {
        return new book(bookRaw.id, bookRaw.title, bookRaw.dataPublished.toISOString(), bookRaw.authorBook);
    });
    return books;
};

export const createBooks = async (title: string, dataPublished: string, isFiction: boolean, authorId: number): Promise<book> => {
    const rawBook = await db.book.create({
        data: {
            title: title,
            dataPublished: new Date(dataPublished),
            createAt: (DateTime.now()).toJSDate(),
            updareAt: (DateTime.now()).toJSDate(),
            isFiction: isFiction,
            authorId: authorId,
    },},
    );

    const newBook: book = new book(rawBook.id, rawBook.title, rawBook.dataPublished.toISOString());
    return newBook;
};
