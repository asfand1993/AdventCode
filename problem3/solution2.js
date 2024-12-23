const path = require("path");
const fs = require("fs");
const filePath = path.join(__dirname, "input2.txt");
let text = fs.readFileSync(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  return data.trim();
});

 function part2 () {
    const regex = /do\(\)|don't\(\)|mul\([0-9]{1,3},[0-9]{1,3}\)/g;
    var matches = text.match(regex);
    let isEnabled = true;
    let total =0;
    matches.forEach((match) => {
        if (match === "do()") {
            isEnabled = true;
        } else if (match === "don't()") {
            isEnabled = false;
        } else {
            if (isEnabled) {
                const numbers = match.match(/[0-9]{1,3}/g);
                console.log('numbers', numbers);
                total += numbers[0] * numbers[1];
            }
        }
    });
}

part2();