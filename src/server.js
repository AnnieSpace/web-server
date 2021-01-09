import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let object = {};

app.get('/', (req, res) => {
    if (Object.keys(object).length !== 0) {
        res.status(200).json(object);
    } else {
        res.status(200).json({ object: null });
    }
})

app.post('/', (req, res) => {
    if (Object.keys(object).length !== 0) {
        object = JSON.parse(JSON.stringify(req.body));
        res.status(200).json({ status: "New object is created" });
    } else {
        res.status(400).json({ status: "Object does not exist" });
    }
})


app.put('/', (req, res) => {
    if (Object.keys(object).length !== 0) {
        object = req.body;
        res.status(200).json({ status: "New object is created" });
    } else {
        res.status(400).json({ status: "Object does not exist" });
    }
})

app.patch('/', (req, res) => {
    if (Object.keys(object).length !== 0) {
        object = Object.assign(object, req.body);
        res.status(200).json({ status: "Object is updated" });
    } else {
        res.status(400).json({ status: "Object does not exist" });
    }
})

app.listen(8080, 'localhost');