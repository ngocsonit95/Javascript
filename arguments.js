// var arrName = ["Nguyen", "Ngoc", "Son"];
// for (let name = 0; name < arrName.length; name++) {
//     const element = arrName[name];
//     console.log(element);
    
// }
// var objName ={
//     firstName ='Son',
//     midName ='Ngoc',
//     lastName :'Nguyen'
// };

function sum() {
    //   var result = 0;
    // for(let i = 0; i < arguments.length; i++) {
    //      result += arguments[i];
    //   }
    //   return result;

    //Cách khác dùng Array.from để chuyển object về 1 array
    let number = Array.from(arguments);
    console.log(number);
    return number.reduce(function(a, b){
        return a+b;
    })
  }
  
  sum(1,2,3);