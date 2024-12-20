const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "input.txt");


fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  const list = data.split("\n").map((line) => line.split("   "));


  const left = list.map(([leftItem]) => +leftItem).sort((a, b) => a - b);
  const right = list.map(([, rightItem]) => +rightItem).sort((a, b) => a - b);

  let sum = [];
  for (let i = 0; i < left.length; i++) {
    const diff = Math.abs(left[i] - right[i]);
    sum.push(diff);
  }
 let  totalSum = sum.reduce((a, b) => a + b, 0);  
  console.log(totalSum)


  //part two

    let sum2 = 0;

    for (let i = 0; i < left.length; i++) {
        const listItem = left[i];

        const findLeftIndex = right.indexOf(listItem);
        
        if (findLeftIndex === -1) {
           continue;
        } 
       

        const rightIndex = right.lastIndexOf(listItem);

        sum2 += (rightIndex -findLeftIndex + 1) * listItem;
    }

    console.log('sum2',sum2);
});
