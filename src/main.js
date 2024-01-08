

console.log("This is main.js.");



function duplicate2(arr) {
    const duplicateArr = [...arr,...arr];
    return duplicateArr
}
const inputArray = ["10", "20", "30"];
const result = duplicate2(inputArray);

console.log(result);