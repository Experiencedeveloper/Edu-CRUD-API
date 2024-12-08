const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(express.json());

let items = {};

app.get('/', (req, res) => {
    res.send('Welcome to the CRUD API!');
});

app.get('/items', (req, res) => {
    res.json(Object.values(items));
});

app.get('/items/:id', (req, res) => {
    const item = items[req.params.id];
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

app.post('/items', (req, res) => {
    const id = uuidv4();
    const item = { id, ...req.body };
    items[id] = item;
    res.status(201).json(item);
});

app.put('/items/:id', (req, res) => {
    const { id } = req.params;
    if (!items[id]) {
        return res.status(404).send('Item not found');
    }

    items[id] = { id, ...req.body };
    res.json(items[id]);
});

app.delete('/items/:id', (req, res) => {
    if (items[req.params.id]) {
        delete items[req.params.id];
        res.status(204).send();
    } else {
        res.status(404).send('Item not found');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
