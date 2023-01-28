var array = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div'];
var arrayCounter = {}
for (var i =0; i < array.length; i++){
    var tag = array[i]
    if(arrayCounter.hasOwnProperty(tag)){
        arrayCounter[tag] += 1
    }else {
        arrayCounter[tag] = 1
    }
}
console.log(arrayCounter)

const getDifference = arr => Math.max(...arr)

console.log(getDifference([42, 45, 1, 78, 92, 10]));