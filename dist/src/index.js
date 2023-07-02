"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//////////////////////////////////////////////////////////////////////////
const app = (0, express_1.default)();
// app.use(cors());
// app.use(express.json());
// app.use("/api/authors", authorRouter);
// app.use("/api/books", bookRouter);
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.listen(3000, () => {
    console.log(`Example app listening on port 3000`);
});
