const fs = require('fs');
const https = require('https');

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }

function getRandomWord() {
    const wordList = fs.readFileSync('words_alpha.txt').toString().split('\n');
    return wordList.random().replace('\r', '');
}

function getRandomDefinition(callback) {
    const wordList = fs.readFileSync('words_alpha.txt').toString().split('\n');
    const randomWord = wordList.random().replace('\r', '');

    getDefinition(randomWord, (definition) => {
        if (definition.title == 'No Definitions Found') {
            getRandomDefinition(callback);
        }
        else callback(definition);
    });
}

function getDefinition(word, callback) {
    const dictURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

    https.get(dictURL+word, (resp) => {
        let data = '';
        
        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            const returnDef = JSON.parse(data);
            callback(returnDef);
        });
    }).on("error", (err) => {
        console.log("error: " + err.message);
    });
}

module.exports.getRandomWord = getRandomWord;
module.exports.getRandomDefinition = getRandomDefinition;
module.exports.getDefinition = getDefinition;