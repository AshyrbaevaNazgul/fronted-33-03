//DZ 1
const tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
const tagCounts = {}

for (const tag of tags) {
    if (tagCounts[tag]) {
        tagCounts[tag] += 1
    } else {
        tagCounts[tag] = 1
    }
}

console.log(tagCounts)


//DZ 2
var names = ['name', 'John', 'lastname', 'black', 'age', '23']
var array = {}
for (var i = 0; i < names.length; i+=2){
var  peremennaya = names[i]
    array[peremennaya] = names[i+1]
}
console.log(array)


//DZ 3
function getDataType (input) {
    console.log(typeof input)
}
getDataType(34)

