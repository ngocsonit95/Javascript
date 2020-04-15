function sum(){
    const numbers = Array.from(arguments);
    return numbers.reduce((sum, num) => sum+num, 0);
}

function average(){
    //tính sum nhưng không biết có bao nhiêu đầu vào
  const x =  sum.apply(null, arguments);
  return x / arguments.length;
}

average(1,2,3);