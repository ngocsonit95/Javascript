class Animal {
    constructor(name){
        this.name = name;
    }
    run(){
        console.log(`${this.name} is runing`);
    }
}
const mouse = new Animal('Jerry');
mouse.run();

class Bird extends Animal{
    fly(){
        console.log(`${this.name} is fly...`);
    }
}

const bird = new Bird('Bird');
bird.fly();
bird.run();
