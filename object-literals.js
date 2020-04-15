//================================Objects Literals===============================//
//Đây là cách khai báo Objects Literals
    var myObjectLiteral = {
        varibleKey: "Hello world",
        functionKey: function(){
            console.log("This is function in  object literals");
        }
    }
    console.log(myObjectLiteral.functionKey());

    //Enhanced object literals (Giúp khai báo 1 cách ngắn gọn hơn)
    const name ='Tom';
 let cat ={
     name, //thay vì name: name
     run(){
         console.log(`${this.name} is runing`);
     }
 }

 cat.run();

//================================Objects Literals===============================//