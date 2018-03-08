const express = require('express');
const app = express();
const port =  5000;
const data = require('./data.json');

app.get('/api/hello', (req, res) => {
  res.send({ express: "dostałem się do endpointa" });
});

app.get('/todos', (req, res) => {
  res.send({ todos: data.todos });
})

app.listen(port, () => console.log(`Listening on port ${port}`));