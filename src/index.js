module.exports = function toReadable(number) {
    const numWords = require('num-words');
    return numWords(number).replace(' and', '');
}