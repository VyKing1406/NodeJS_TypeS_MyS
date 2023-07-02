import { author } from "@prisma/client";

export default class book {
    id: Number;
    title: string;
    dataPublished: string;
    authors: object;
    constructor(id: number, title: string, dataPublished: string, authors: object = {}){
        this.id = id;
        this.title = title;
        this.dataPublished = dataPublished;
        this.authors = authors;
    }
}




