let array = [1,2,3];

function callbackFunc( currentValue, index, arr){
    console.log("currentValue",currentValue,"index", index, "arr", arr);
}

function multiplyFunc( currentValue, index, arr){
   return currentValue * 2
}

array.map(callbackFunc);
let multiplyArray = array.map(( currentValue, index, arr)=> {
    return currentValue * 2 
});
console.log("multiplyArray",multiplyArray);

let dataArray = [
    {name : "Rlay", height : 188},
    {name : "List", height : 165},
]

let updateDataArray = dataArray.map((currentValue)=> {
    return currentValue.height - 10;
})
console.log("updateDataArray",updateDataArray);