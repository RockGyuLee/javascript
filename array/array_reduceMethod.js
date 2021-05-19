let array = [1,2,3,4];

function reduceFilterOdd(acc, cur){
    if(cur % 2){
        acc.push(cur)
    }
    return acc;
}

let result = array.reduce(reduceFilterOdd, []);

console.log("result",result);

function maxCallback(acc, cur){
    return Math.max(acc,cur);
}

const addCallback1 = (acc, cur) => acc += cur;
const maxCallback1 = (acc, cur) => Math.max(acc, cur);

