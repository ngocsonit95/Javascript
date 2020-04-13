var arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var numbersReduce= arrNumbers.reduce(function(x1, x2){
    return x1+x2;
});

numbersReduce;

//Cách 2 dùng reduce

var numbersReduceInit = arrNumbers.reduce(function(z1, z2){
    console.log(z1, z2);
    return z1+z2;
}, 0);

numbersReduceInit;

// Cho 1 array như sau
var items =['Tom', 'Bill', 'Kim'];
//Hãy sử dụng reduce để in ra kết quả như sau: <Tom><Bill><Kim>
var result = items.reduce(function(a,b){
     return "<"+a+">"+"<"+b+">";
});

result;