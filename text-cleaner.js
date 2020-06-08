var string = 'HEHEH fuk u wots up???'

var Text = new TextCleaner(string)

console.log(Text.clean)

function TextCleaner(input, dictionary) {
  
  var default_dic = {

  "u": "you",
  "wot": "what",
  "wut": "what",
  "wots": "whats",
  "fuk": "fuck",
  "suk": "suck",
  "suks": "sucks",
  "wat": "what",
  "o": "oh",
  "hehe": "haha",
  "heh": "haha",
  "nah": "no",
  "ye": "yes",
  "yea": "yes",
  "sik": "sick",
  "thx": "thanks",
  "ur": "your"
}
 
  
  this.dictionary = dictionary || default_dic
var words = input.trim()
.toLowerCase()
.split(" ");
var newstring = [];

for (let x of words) {

  if (x in this.dictionary) {
x = this.dictionary[x]:
}
newstring.push(x);
}
this.raw = input
this.clean = newstring.join(" ")

};

module.exports = TextCleaner
