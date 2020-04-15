
function sayHi(){
    return `Hi ${this.name}, I am ${this.age}`;
};

var cat ={
    name:'Jerry',
    age:1
}


sayHi.call(cat);