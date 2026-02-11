camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
function camelize(str) {
  return str
    .split('-') 
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); 
}


function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

let arr1 = [5, 3, 8, 1];
let filtered = filterRange(arr1, 1, 4);
alert( filtered ); 
alert( arr1 ); 



function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); 

alert( arr );



let arr2 = [5, 2, 1, -10, 8];
arr2.sort((a, b) => b - a);
alert( arr2 );


function copySorted(arr) {
  return arr.slice().sort();
}

let arr3 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr3);
alert( sorted );
alert( arr3 );



function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}



let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names );



function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let john1 = { name: "John", age: 25 };
let pete1 = { name: "Pete", age: 30 };
let mary1 = { name: "Mary", age: 28 };

let arr4 = [ pete, john, mary ];

sortByAge(arr4);


alert(arr4[0].name); 
alert(arr4[1].name); 
alert(arr4[2].name);