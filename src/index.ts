import express, { Express, Request, Response } from 'express';
import cors from "cors";

//////////////////////////////////////////////////////////////////////////
import { authorRouter } from '../router/author.router';
import { bookRouter } from '../router/book.router';


//////////////////////////////////////////////////////////////////////////



const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/authors", authorRouter);
app.use("/api/books", bookRouter);


app.listen(3000, () => {
    
});
