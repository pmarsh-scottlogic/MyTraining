// words-alpha.txt courtesy of https://github.com/dwyl/english-words

const words = require('./words.js');

const express = require('express');
const app = express();
const PORT = 3000;

//const crypto = require('crypto');

app.use(express.json()); // use json middleware! This is a middleware that parses the return body from json into an object

app.listen (
    PORT,
    () => console.log('server live on http://localhost:${' + PORT + '}')
);

// assign server behaviour on the particular get html command
// app.get(endpoint URI, handler(request, response))
app.get("/", (req, res) => {
    res.status(200).send("Hello!");
});

app.get('/words/random', (req, res) => {
    res.status(200).send({
        word: words.getRandomWord()
    });
});

app.get('/definition/random', (req, res) => {
    // getRandomDefinition takes some time, so we provide a callback function that runs when the operation is complete.
    words.getRandomDefinition((definition) => {
        res.status(200).send(definition);
    });
});

app.get('/definition/[a-z]+', (req, res) => {
    const searchWord = req.url.split('/').at(-1);

    // getDefinition takes some time, so we provide a callback function that runs when the operation is complete.
    words.getDefinition(searchWord, (definition) => {
        res.status(200).send(definition);
    });
});

app.post('/words/favourites', (req, res) => {
    //const id = crypto.randomBytes(16).toString("hex");
    console.log(uuid);
})