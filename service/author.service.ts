import { db } from '../src/seek';
import book from '../src/interface/book';
import author from '../src/interface/author';


export const listAuthors = async (): Promise<author[]> => {
    return await db.author.findMany();
};
