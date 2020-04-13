//contructor funcction
function Mouse(color,age){
    this.type ='mouse',
    this.color =color,
    this.age =age
}

//cách này chỉ khai báo 1 lần tiết kiệm được bộ nhớ hơn cách khai báo
// trực tiếp function trong  Mouse
Mouse.prototype.Sleep= function(){
    console.log('Sleeping...');
}

console.log(Mouse.prototype.contructor ===Mouse);

var jerry = new Mouse('Orange', 2);
jerry.Sleep();