//1..string in alphabetical order
 function alphabet_order(str)
  {
    return str.split('').sort().join('');
  }
      console.log(alphabet_order("rajesh"));


//2..In a sentence find longest word In string
function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
console.log(longestWord("He occupied a portion of his leisure in writing a book, entitled This Country of Ours (1897), treating of the organization and administration of the government of the United States, and a collection of essays by him was published posthumously, in 1901, under the title Views of an Ex-President."));