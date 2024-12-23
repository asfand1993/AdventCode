const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "input.txt");
const extractNumber = () => {
  let token = "";
  while (text != "" && text[0] != ")") {
    const c = text[0];
    if (c < "0" || c > "9") {
      break;
    }
    token += c;
    text = text.substring(1);
  }
  if (token === "") return null;
  return parseInt(token);
};

let text = fs.readFileSync(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  return data.trim();
});

function main() {
  let total = 0;

  while (true) {
    const start = text.indexOf("mul(");
    if (start == -1) break;

    text = text.substring(start + 4);

    const numberA = extractNumber();

    if (numberA === null) continue;
    if (text[0] != ",") continue;

    text = text.substring(1);
   
    const numberB = extractNumber();
    if (numberB === null) continue;
    if (text[0] != ")") continue;

    total += numberA * numberB;
  }
  console.log("total", total);
}


function part1withRegex () {
    const regexPattern = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;
    const matches = text.match(regexPattern);
    let total = 0;
    matches.forEach((match) => {
        const numbers = match.match(/[0-9]{1,3}/g);
        total += numbers[0] * numbers[1];
    });

    console.log(total);
}
// main();

part1withRegex();

