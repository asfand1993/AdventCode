const fs = require("fs");
const path = require("path");
const filepath = path.join(__dirname, "input1.txt");

const data = fs.readFileSync(filepath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  return data.trim();
});

const word = "XMAS".split("");

const table = data.split("\n").map((row) => row.split(""));
//part 1 of problem 4
let count = 0;
for (let i = 0; i < table.length; i++) {
  for (let j = 0; j < table[0].length; j++) {
    if (word.every((letter, index) => letter === table?.[i]?.[j + index]))
      //right
      count++;
    if (word.every((letter, index) => letter === table?.[i + index]?.[j]))
      // vertical down
      count++;
    if (word.every((letter, index) => letter === table?.[i]?.[j - index]))
      // left
      count++;
    if (word.every((letter, index) => letter === table?.[i - index]?.[j]))
      // vertical up
      count++;
    if (
      word.every((letter, index) => letter === table?.[i + index]?.[j + index])
    )
      count++;

    if (
      word.every((letter, index) => letter === table?.[i + index]?.[j - index])
    )
      count++;

    if (
      word.every((letter, index) => letter === table?.[i - index]?.[j + index])
    )
      count++;
    if (
      word.every((letter, index) => letter === table?.[i - index]?.[j - index])
    )
      count++;
  }
}
console.log(count);
//part 2 of problem 4
let count2=0
  // M M     M S     S S     S M
  //  A       A       A       A
  // S S     M S     M M     S M
   

for (let i = 0; i < table.length; i++) {
  for (let j = 0; j < table[0].length; j++) {
    if (table[i][j] == "A") {
        if(table?.[i-1]?.[j-1]=="M"&& table?.[i-1][j+1]=="M"&& table[i+1]?.[j-1]=="S"&&table[i+1]?.[j+1]=="S"){
            count2++
        }
        if(table?.[i-1]?.[j-1]=="M"&& table?.[i-1][j+1]=="S"&& table[i+1]?.[j-1]=="M"&&table[i+1]?.[j+1]=="S"){
            count2++
        }
        if(table?.[i-1]?.[j-1]=="S"&& table?.[i-1][j+1]=="S"&& table[i+1]?.[j-1]=="M"&&table[i+1]?.[j+1]=="M"){
            count2++
        }
        if(table?.[i-1]?.[j-1]=="S"&& table?.[i-1][j+1]=="M"&& table[i+1]?.[j-1]=="S"&&table[i+1]?.[j+1]=="M"){
            count2++
        }

    }
  }
}
console.log(count2);
