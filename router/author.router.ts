import express, { Request, Response } from 'express';

import * as authorService from '../service/author.service';
import author from '../src/interface/author';

export const authorRouter = express.Router();

authorRouter.get('/', async (req: Request, res: Response) => {
    try {
        const authors:author[] = await authorService.listAuthors();
        return res.status(200).json(authors);
    } catch (error) {}
});
