// Print ODD NUMBERS

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var odd = function () {
  for (var i = 0; i < array.length; i++)
    if (array[i] % 2 !== 0){
        console.log(array[i]);
    } 
};

odd();

// Title Caps



var a = ["sree", "cherry", "tony", "virat"];

var titlecaps = function () {
  for (i = 0; i < a.length; i++) {
    b = [i][0];
    c = a[i].slice(-(a[i].length - 1));
    console.log(c.toUppercase);
  }
};
titlecaps();

// Sum of Arrays

var arr=[1, 2, 3, 4, 5, 6]

var S=function() {
var sum=0;
for(i=0;i<arr.length;i++) {
	sum=sum+arr[i]
}
console.log(sum)
} 
S()

// Prime Numbers

var a=[1, 2, 3, 4, 5, 6]
var Prime=function(){
var b=[]
for(i=0;i<a.length;i++){
    for(j=2;j<=a[i];j++){
        if(a[i]%j===0){
           break;
        }
        
    }
    if(a[i]===j){
        b.push(a[i])
    }
}
console.log(b)
}
 Prime()

//  Pallindrome

var array = ["pop", "abc", "112211"];
var b = [];

var palindrome = function () {
  for (var i = 0; i < array.length; i++) {
    var count = 0;
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] !== array[i][array[i].length - 1 - j]) {
        break;
      }
      count++;
    }
    if (count === array[i].length) {
      b.push(array[i]);
    }
  }

  console.log(b);
};
palindrome();


// Median 

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];

var median = function () {
  var newarray = arr1.concat(arr2);
  if (newarray.length % 2 === 0) {
    console.log(
      (newarray[newarray.length / 2] + newarray[newarray.length / 2 - 1]) / 2
    );
  } else {
    console.log(newarray[Math.floor(newarray.length / 2)]);
  }
};
median();

// Duplicates

var arr = [1, 2, 1, 3, 1];
var removeDuplicate = function () {
  console.log(...new Set(arr));
};
removeDuplicate();

// Rotate

var a = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var k = 1;
var Rotatearray = function () {
  for (j = 1; j <= k; j++) {
    temp = a[0];
    for (i = 0; i < a.length - 1; i++) {
      a[i] = a[i + 1];
    }
    a[i] = temp;
  }
  console.log(a);
};
Rotatearray();
