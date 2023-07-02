export default class author {
    id: Number;
    firstName: string;
    lastName: string;
    bookList: object;
    constructor(id: number, firstName: string, lastName: string, bookList: object = {}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.bookList = bookList;
    }
}
