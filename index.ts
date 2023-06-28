import express, { Express, Request, Response } from 'express';
import mysql from 'mysql';
const app = express();

// const myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/Id/:id', (req: Request, res: Response) => {
    const connectfion = mysql.createConnection({
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

app.post('/Id/:id/Name/:name', (req: Request, res: Response) => {
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
