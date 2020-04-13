function sum(){
    //Dùng arguments để lấy số lượng đầu vào của hàm
    ///CÁCH 1 DÙNG FOR
    //const result = 0
    // for(let i = 0; i < arguments.length; i++){
    //     result += arguments[i];
    // }

    //CÁCH 2 DÙNG ARRAY
    const numbers = Array.from(arguments);
   return  numbers.reduce((sum, num)=>sum +num, 0);// 0 ở đây là giá trị đầu tiên
}

sum(1,2,3,4,5);


///Default parameter

//Nếu name không truyền vào(name ===underfine) thì name sẽ tự động nhật giá trị name ='friend'
function greeting (name ='Friend'){
    return `Hi ${name}`;//Dùng template String
}

greeting('Ngoc Son');


// function animal(name){
//  this.name = name;
// }

// animal.prototype.eat= function(){
//     console.log("Animal eating...");
// }

// function bird(name){
//     animal.apply(this, arguments);
// }

// Bird.prototype = new animal();
//console.log(Bird.prototype.name="Chim");

//Hoặc kế thừa theo cách thông thường

class Animal{
    constructor(name){
        this.name = name;
    }

    eat(){
        console.log("Animal eating...");
    }
}

class Bird extends Animal{
    fly(){
        console.log("Flying....");
    }
}

const bird = new Bird("Bồ câu trắng");

bird.eat();
bird.fly();


//Method override
class CoffeeMachine{
    makeCoffee(){
        console.log('making coffee...');
    }
}

class SpecialCoffeeMachine extends CoffeeMachine{
    makeCoffee(){
        console.log('override making coffeee machine');
    }
}

const coffeeMachine = new SpecialCoffeeMachine();
coffeeMachine.makeCoffee();

class ClassWithStaticMethod {
    static staticMethod() {
      return 'static method has been called.';
    }

    methodNomal(){
        return 'This is nomal method';
    }
  }
  
const staticClass = new ClassWithStaticMethod();

  console.log(ClassWithStaticMethod.staticMethod());
  console.log(staticClass.methodNomal());
  // expected output: "static method has been called."

//Rest javacripts
//Rest sẽ retturn về array còn argument thì return về object
  function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }
  
  console.log(sum(1, 2, 3));
  // expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // expected output: 1
  