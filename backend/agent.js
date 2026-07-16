const fs = require("fs");

const getOpportunities = require("./opportunities");

const student = JSON.parse(
  fs.readFileSync("../resources/student.json", "utf8")
);

const opportunities = getOpportunities();

console.log("Student:");
console.log(student);

console.log("\nRecommended Opportunities:");

opportunities.forEach(item => {
  console.log("- " + item.name);
});