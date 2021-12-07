// ODD Numbers

let numbers = [1, 2, 3, 4, 5, 6, 7];
let OddNumbers = numbers.filter((number) => number % 2);
console.log(OddNumbers);

// Title caps

var string = ["dHoNI", "SHREYAS", "tEJas"];
var title = string.map((a) => a.toLowerCase());
var titlecaps = title.map((a) => a[0].toUpperCase() + a.slice(1));
console.log(titlecaps);


// Sum

var a = [1, 2, 3, 4, 5, 6, 7, 8];
var r = a.reduce((acc, ele) => {
  return acc + ele;
});
console.log(r);


// Prime

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var prime = () => {
  var result = num.filter(function (a) {
    var p = 0;

    if (a > 1) {
      for (var i = 2; i <= a; i++) {
        if (a % i == 0 && a != i) {
          p = 1;
        }
      }

      if (p == 0) {
        return a;
      }
    }
  });

  console.log(result);
};
prime();

// Pallindrome

var string1 = ["pop", "abc", "112211"];
var palindromeFunction = string1.filter(
  (a) => a.split("").reverse().join("") == a
);

console.log(palindromeFunction);