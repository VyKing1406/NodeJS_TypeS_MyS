import express, { Request, Response } from 'express';

import * as authorBookService from '../service/authorBook.service';
import author from '../src/class/author';

export const authorBookRouter = express.Router();

authorBookRouter.get('/authorId/:authorId/bookId/:bookId', async (req: Request, res: Response) => {
    try {
        const author: author | undefined = await authorBookService.linkAuthorBook(
            parseInt(req.params.authorId),
            parseInt(req.params.bookId),
        );
        if (author) {
            return res.status(200).json(author);
        }
        else {
            return res.status(400);
        }
    } catch (error) {}
});
