let name: string = "Rafay";
let marks: number = 400;
let percentage: number = (marks / 600) * 100;

if (percentage >= 80) {
  console.log(`Congratulations, ${name}! You got ${marks} marks with an A+ percentage.`);
} else if (percentage >= 70) {
  console.log(`Good job, ${name}! You got ${marks} marks with a B+ percentage.`);
} else {
  console.log(`${name}, you got ${marks} marks, and unfortunately, you have failed.`);
}
>