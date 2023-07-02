import express, { Request, Response } from 'express';

import * as bookService from '../service/book.service';
import book from '../src/class/book';

export const bookRouter = express.Router();

bookRouter.get('/', async (req: Request, res: Response) => {
    try {
        const books:book[] = await bookService.listBooks();
        return res.status(200).json(books);
    } catch (error) {}
});
bookRouter.post('/create/title/:title/dataPublished/:dataPublished/isFiction/:isFiction/authorId/:authorId', async (req: Request, res: Response) => {
    try {
        const book: book = await bookService.createBooks(
            req.params.title, req.params.dataPublished, parseInt(req.params.isFiction) == 1 ? true:false, parseInt(req.params.authorId));
        return res.status(200).json(book);
    } catch (error) {}
});