// https://www.youtube.com/watch?v=-MTSQjw5DrM

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // use json middleware! This is a middleware that

app.listen (
    PORT,
    () => console.log('server live on http://localhost:${' + PORT + '}')
);

// assign server behaviour on the particular get html command
// app.get(endpoint URI, handler(request, response))
app.get('/resource', (req, res) => {
    res.status(200).send({
        message: 'hello!',
        author: 'Peter'
    });
});