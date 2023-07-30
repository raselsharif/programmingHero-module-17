// finding biggest number

var num1 = 13;
var num2 = 45;
var num3 = 79;

if (num1 > num2) {
    console.log("Biggest number is: ", num1);
} else if (num2 > num3) {
    console.log("Biggest number is: ", num2);
} else {
    console.log("Biggest number is: ", num3);
}

var line1 = 10;
var line2 = 9;
var line3 = 9;

if ((line1 == line2 && line2 == line3) || (line3 == line1 && line2 == line3 || line2==line3 && line3==line1)) {
    console.log("this is Isosceles");
} else {
    console.log("this is not Isosceles");

}
