class CoffeeMachine {
    makeCoffee() {
      console.log("making coffee...");
    }
  }
  
  class SpecialCoffeeMachine extends CoffeeMachine {
    makeCoffee(cb) {
      console.log("override making coffeee machine");
      cb();
    }
  }
  
  const coffeeMachine = new SpecialCoffeeMachine();
  coffeeMachine.makeCoffee(function(){
      console.log('Notify make coffee..');
  });