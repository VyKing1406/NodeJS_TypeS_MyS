"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const create_1 = require("./create");
const app = (0, express_1.default)();
const myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
};
app.post('/Id/:id/Name/:name', (req, res) => {
    (0, create_1.main)(parseInt(req.params.id), req.params.name);
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
});
