//`new` keyword
var today = new Date();
console.log(today);

//Create a new object, object literal
var mouse ={
    weight: 0.5,
    age: 1
}

//contructor funcction
function Mouse(color,age){
    this.type ='mouse',
    this.color =color,
    this.age =age
}

var mouse_1 = new Mouse('yellow', 1);
var mouse_2 = new Mouse('black', 2);
console.log(mouse_1);
console.log(mouse_2);

// Tom Eat Mouse
function objMouse(name, weight){
    this.name =name,
    this.weight = weight
}

var m1 = new objMouse('m1', 0.3);
var m2 = new objMouse('m2', 0.5);
var m3 = new objMouse('m3', 0.9);

var tom = {
    name: 'Tom',
    stomach:[],
    eat: function(mouse){
        this.stomach.push(mouse);
        return this;
    }
}

tom.eat(m1).eat(m2).eat(m3);

//