//================================Objects===============================//
//Có 3 cách thông thường khi khởi tạo một
///Cách 1:
var newObject_1 = {};
///Cách 2
var newObject_2 = Object.create();
///Cách 3
var newObject_3 = new Object();

// Và có 4 trong keys and values có thể để gán đối tượng cho Object
// 1. Dot syntax

// Set properties
newObject_1.someKey = "Hello World";

// Get properties
var value = newObject_1.someKey;

// 2. Square bracket syntax
 
// Set properties
newObject_2["someKey"] = "Hello World";

// ECMAScript 5 only compatible approaches
// For more information see: http://kangax.github.com/es5-compat-table/
 
// 3. Object.defineProperty
// Set properties
Object.defineProperties(newObject_3, "someKey", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true 
});

newObject_3.value
///Hoặc có thể viết lại như sau:
var defineProp = function ( obj, key, value ){
    var config = {
      value: value,
      writable: true,
      enumerable: true,
      configurable: true
    };
    Object.defineProperty( obj, key, config );
  };

  //Ex: Tạo một Object "person" rỗng
  var person = Object.create(Object.prototype);
  defineProp(person, "name", "Ngoc Son1", "age", 25);
  defineProp(person, "name", "Ngoc Son2", "age", 26);
  defineProp(person, "name", "Ngoc Son3", "age", 27);
  console.log(person);

//================================Objects===============================//

var myDog = {
  name: "Mickey",
  age: 1,
  isActive: false,
};

console.log(myDog.name);

console.log(myDog["name"]);
