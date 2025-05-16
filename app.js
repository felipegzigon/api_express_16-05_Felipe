const express = require('express');

const app = express();
const port = 3000;

const lista = [
    { id: 1, name: 'John Doe'},
    { id: 2, name: 'Jane Doe'}
];

app.use(express.json());
app.get('/', (req, res) => {
    res.send(lista)
}
);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});