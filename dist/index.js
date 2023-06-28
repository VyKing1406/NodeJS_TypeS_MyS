"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const app = (0, express_1.default)();
// const myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.get('/Id/:id', (req, res) => {
    const connectfion = mysql_1.default.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'Abc@1234',
        database: 'testNode',
        multipleStatements: true,
    });
    // connection.connect();
    // connection.query(
    //   "select * from testnode.user where id = ?",
    //   [req.params.id],
    //   function(err: any, rows: any) {
    //     if(err) {
    //       connection.end();
    //       return res.send({
    //         success: false,
    //         statusCode: 400;
    //       })
    //     }
    //   }
    // );
    res.send({
        message: 'hello cu em',
        Id: req.params.id,
        Name: req.params.name,
    });
});
app.post('/Id/:id/Name/:name', (req, res) => {
    res.send({
        data: req.body,
        params: {
            message: 'hello cu em',
            Id: req.params.id,
            Name: req.params.name,
        },
    });
});
app.listen(3001, () => {
    {
        console.log('a');
    }
});
