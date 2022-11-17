// words-alpha.txt courtesy of https://github.com/dwyl/english-words

const words = require('words');

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // use json middleware! This is a middleware that parses the return body from json into an object

app.listen (
    PORT,
    () => console.log('server live on http://localhost:${' + PORT + '}')
);

// assign server behaviour on the particular get html command
// app.get(endpoint URI, handler(request, response))
app.get('/random', (req, res) => {
    res.status(200).send({
        word: words.getRandom()
    });
});