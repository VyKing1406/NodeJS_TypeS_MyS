import express, { Express, Request, Response } from 'express';
import cors from "cors";

//////////////////////////////////////////////////////////////////////////
import { authorRouter } from './router/author.router';
import { bookRouter } from './router/book.router';
import { authorBookRouter } from './router/authorBook.router'

//////////////////////////////////////////////////////////////////////////



const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/authors", authorRouter);
app.use("/api/books", bookRouter);
app.use("/api/authorBook", authorBookRouter);
app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
});
