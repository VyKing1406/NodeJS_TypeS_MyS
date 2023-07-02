import express, { Request, Response } from 'express';

import * as authorService from '../service/author.service';
import author from '../src/class/author';

export const authorRouter = express.Router();

authorRouter.get('/', async (req: Request, res: Response) => {
    try {
        const authors:author[] = await authorService.listAuthors();
        return res.status(200).json(authors);
    } catch (error) {}
});
authorRouter.post('/create/firstName/:firstName/lastName/:lastName', async (req: Request, res: Response) => {
    try {
        const author: author = await authorService.createAuthors(
            req.params.firstName, req.params.lastName);
        return res.status(200).json(author);
    } catch (error) {}
});