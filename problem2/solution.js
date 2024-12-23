const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "input.txt");
const checkSequenceForSafe = (row) => {
  const isIncreasing = row[1] > row[0];
  const isDecreasing = row[1] < row[0];

  for (let i = 0; i < row.length - 1; i++) {
    const diff = row[i + 1] - row[i];
    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }
    if (isIncreasing && diff <= 0) {
      return false;
    }
    if (isDecreasing && diff >= 0) {
      return false;
    }
  }
  return true;
};

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  const listItem = data.split("\n").map((line) => line.split(" ").map(Number));
  let safe = 0;

  listItem.forEach((row) => {
    if (checkSequenceForSafe(row)) {
      safe++;
      return;
    } else {
      for (let i = 0; i < row.length; i++) {
        const modifiedArray = [...row];
        modifiedArray.splice(i, 1);
        if (checkSequenceForSafe(modifiedArray)) {
          safe++;
          return;
        }
      }
    }
  });
  console.log(safe);
});
