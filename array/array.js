// array 길이는 고정되어있지 않다.
let array = [];
console.log(array.length); // 0
array.push("데이터 삽입.");
console.log(array.length); // 1

// array index
let array1 = ["일","이","삼"];
console.log(array1[0]); // 일
console.log(array1[1]); // 이
console.log(array1[2]); // 삼
console.log(array1[3]); // undefined

//Constructor
let arrayInstance = Array();
console.log(arrayInstance);

//Static Attribute
console.log(Array.length);

//Static Method
    //Array.from();
    console.log("from()", Array.from('test'));
    //Array.isArray();
    console.log("isArray()", Array.isArray(arrayInstance));
    //Array.of();
    console.log("of()", Array.of("test", {a : "객체", b : "형식"}));

// Array Instance
let arrayTwo = ["R","L","A","Y"];
Array.prototype.getName = function(name){
    this.map( item => console.log(item+name));
}
arrayTwo.getName("T");