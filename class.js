// function Mouse(name){
//     this.name = name;
// };

// Mouse.prototype.run = function(){
//     console.log(`${this.name} is runing`);
// };

// const mouse = new Mouse('Jerry');
// mouse.run();

// Dung class de khai bao function
class Mouse {
    constructor(name){
        this.name = name;
    }
    run(){
        console.log(`${this.name} is runing`);
    }
}
const mouse = new Mouse('Jerry');
mouse.run();