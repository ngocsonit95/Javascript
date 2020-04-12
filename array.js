//Array method chuyển đổi mảng thành 1 mảng khác thông qua chức năng của 1 hàm nào đó
//Push, pop, shift, unshift
var arrNumbers = [1, 2, 3, 4];
var squareNumber = arrNumbers.map(function (number) {
    return number * number;
});

squareNumber;

//Exercises
var rectangles = [
    { 
        width: 10,
        height: 5
    },
    { 
        width: 20,
        height: 15
    },
    { 
        width: 12,
        height: 6
    }
]

//Dùng map method để biến đổi rectangles thành 1 mảng mới
// bao gồm diện tích của các hàm trên

var superRectangles = rectangles.map(function(rec){
   return rec.width * rec.height;
});

superRectangles;