(function() {
})();

var coffeeMachine= {
    makeCoffee: function(onFinish){
        console.log('Making coffee...');
        onFinish();
    }
}

var onMessages = function(){
    console.log('message affter makeCoffee');
}
coffeeMachine.makeCoffee(onMessages);




  