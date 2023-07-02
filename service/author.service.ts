import {DateTime} from 'luxon';
import { db } from '../src/seek';
import book from '../src/class/book';
import author from '../src/class/author';

export const listAuthors = async (): Promise<author[]> => {
    const authorsRaw = await db.author.findMany({
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
    const authors: author[] = authorsRaw.map((authorRaw) => {
        return new author(authorRaw.id, authorRaw.firstName, authorRaw.lastName, authorRaw.authorBook);
    });
    return authors;
};

export const createAuthors = async (lastName: string, firstName: string): Promise<author> => {
    const rawAuthor = await db.author.create({
        data: {
            lastName: lastName,
            firstName: firstName,
            createAt: (DateTime.now()).toJSDate(),
            updareAt: (DateTime.now()).toJSDate(),
    },},
    );
    const newAuthor: author = new author(rawAuthor.id, rawAuthor.firstName, rawAuthor.lastName, {});
    return newAuthor;
};
