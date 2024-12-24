const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "input.txt");

const fileData = fs.readFileSync(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  return data;
});

const isOrderValue = (update, rules) => {
  for (let i = 0; i < update.length - 1; i++) {
    if (!rules.find((rule) => rule[0] == update[i] && rule[1] == update[i + 1]))
      return false;
  }
  return true;
};
let [rules, updates] = fileData.split("\r\n\r\n");

rules = rules.split("\n").map((rule) => rule.trim().split("|"));
updates = updates.split("\n").map((update) => update.trim().split(","));

const solution = updates.reduce((acc, curr) => {
  if (!isOrderValue(curr, rules)) {
    return acc;
  }

  const midItemIndex = parseInt(Math.floor(curr.length / 2));
  const mid = parseInt(curr[midItemIndex]);
  acc += mid;
  return acc;
}, 0);

const correctOrder = (order, rules) => {
  let finalArray = [];
  const dict = {};
  order.forEach((element) => {
    dict[element] = rules
      .filter((rule) => rule[0] === element)
      .map((rule) => rule[1])
      .filter((rule) => order.includes(rule));
  });

  while (Object.keys(dict).length) {
    const lastElement = Object.keys(dict).find((key) => dict[key].length === 0);

    for (const key in dict) {
      dict[key] = dict[key].filter((value) => value !== lastElement);
    }
    delete dict[lastElement];
    finalArray.unshift(lastElement);
  }

  return finalArray;
};

const solution2 = updates.reduce((acc, curr) => {
  if (isOrderValue(curr, rules)) {
    return acc;
  }

  curr = correctOrder(curr, rules);
  const midItemIndex = parseInt(Math.floor(curr.length / 2));
  const mid = parseInt(curr[midItemIndex]);
  acc += mid;
  return acc;
}, 0);
console.log({ solution2 });
