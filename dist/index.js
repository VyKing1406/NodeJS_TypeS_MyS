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
const connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abc@1234',
    database: 'localServer',
    authPlugin: 'mysql_native_password',
    // insecureAuth: true,
    // multipleStatements: false
});
connection.connect((err, conn) => {
    if (err) {
        console.log(err);
    }
    else
        console.log("ss");
});
// app.get("/", (req: Request, res: Response) => {
//     const connection = mysql.createConnection({
//         host: 'localServer',
//         user: 'root',
//         password: 'Abc@1234',
//         database: 'testnode',
//         // insecureAuth: true,
//         // multipleStatements: false
//     });
//     connection.connect((err:any, conn:any)=> {
//         if(err) {
//             res.send({
//                 success: false,
//                 statusCode: 400,
//                 message: "Getting error during connection!!!"
//             })
//             return;
//         }
//         res.send({
//             success: false,
//             statusCode: 200,
//             message: "Zayyyy"
//         })
//     });
//     // connection.query(
//     //   "select * from testnode.user where id = ?",
//     //   [req.params.id],
//     //   function(err: any, rows: any) {
//     //     if(err) {
//     //         connection.end();
//     //         res.send({
//     //             success: false,
//     //             statusCode: 400,
//     //             message: "false SQl"
//     //         })
//     //         return;
//     //     }
//     //     res.send({
//     //         success: true,
//     //         statusCode: 200,
//     //         data: rows
//     //     });
//     // }
//     // );
// });
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
