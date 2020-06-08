/*
text-cleaner.js

var string = 'HEHEH fuk u wots up???'

var Text = new TextCleaner(string)

console.log(Text.clean)

*/

function TextCleaner(input, dictionary) {
if (input == undefined) return
  var default_dict = {
    "u": "you",
    "r": "are",
    "wot": "what",
    "wut": "what",
    "wots": "whats",
    "fuk": "fuck",
    "suk": "suck",
    "suks": "sucks",
    "wat": "what",
    "o": "oh",
    "k": "ok",
    "kk": "ok",
    "hehe": "haha",
    "heh": "haha",
    "nah": "no",
    "ye": "yes",
    "yea": "yes",
    "sik": "sick",
    "thx": "thanks",
    "ur": "your"
  }

  this.dictionary = dictionary || default_dict
  var words = input.trim()
    .toLowerCase()
    .replace(/[^\w\s]|_/g, '')
    .replace(/\s+/g, ' ') 
    .split(" ");
  var newstring = [];

  for (let x of words) {
    if (x in this.dictionary) {
      x = this.dictionary[x]
    };
    newstring.push(x);
  };
  
  this.raw = input
  this.clean = newstring.join(" ")

};

module.exports = TextCleaner
