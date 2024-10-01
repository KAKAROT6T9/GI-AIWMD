var name = "Rafay";
var marks = 400;
var percentage = (marks / 600) * 100;
if (percentage >= 80) {
    console.log("Congratulations, ".concat(name, "! You got ").concat(marks, " marks with an A+ percentage."));
}
else if (percentage >= 70) {
    console.log("Good job, ".concat(name, "! You got ").concat(marks, " marks with a B+ percentage."));
}
else {
    console.log("".concat(name, ", you got ").concat(marks, " marks, and unfortunately, you have failed."));
}
