// if sort function 
// 1. return a value < 0(a will come befor b)
// 2.return a value  > 0 (a will come affer b)
// 3. return 0 (a and b will stay unchange)


var arrNumbers = [1, 3, 5, 2, 4, 7, 6, 9, 8];
var ascendingNumbers = arrNumbers.sort(function(a,b){
    return a-b;
});

ascendingNumbers;

var descendingNumbers = arrNumbers.sort(function(a,b){
    return b-a;
});

ascendingNumbers;

var employees =[
    {name: 'Tý', age: 18},
    {name: 'Tèo', age: 20},
    {name: 'Heo', age: 16},
]

var ascendingAge = employees.sort(function(a,b){
    return a.age - b.age;
});

ascendingAge;

function rollADie(){
   return Math.floor((Math.random()*6) + 1); 
}

console.log(rollADie());