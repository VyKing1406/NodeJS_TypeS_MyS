import {DateTime} from 'luxon';
import { db } from '../src/seek';
import book from '../src/class/book';
import author from '../src/class/author';


export const linkAuthorBook = async (authorId: number, bookId: number): Promise<author | undefined> => {
    const rawBook = await db.authorBook.create({
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
        }, }
    );
    const rawAuthor = await db.author.findUnique({
        where: {id: rawBook.authorId},
        include: {authorBook: true}
    })
    if(rawAuthor) {
        return new author(rawAuthor.id, rawAuthor.firstName, rawAuthor.lastName, rawAuthor.authorBook);
    }
    else return undefined;
};
