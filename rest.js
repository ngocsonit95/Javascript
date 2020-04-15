// trả về 1 array chứa các phần tử được truyền vào
function log(...numbers){
    console.log(...numbers);

    //arguments trả về 1 object
    console.log(arguments);
};

log(1,2,3,4,5);

function sum(...num){
    return num.reduce(function(a, b){
        return a+b;
    });
}

console.log(sum(1,2,3,4,5));