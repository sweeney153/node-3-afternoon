require('dotenv').config();
const express = require('express');
      massive = require('massive');
      ctrl = require('./products_controller')

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    })
    .catch(err => console.log(err));

app.use(express.json());

app.post('/api/products', ctrl.create);
app.get('/api/products', ctrl.getAll);
app.get('/api/products/:id', ctrl.getOne);
app.put('/api/products/:id', ctrl.update);
app.delete('/api/products/:id', ctrl.delete);

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}.`);
});
