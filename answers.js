//*************VERY EASY*************
// question 1
var time_min = 5;
time_sec = time_min * 60
console.log(`VE: question 1: Time in seconds: ${time_sec}`)

// question 2
function divideFunc(num_divident, num_divisor) {
    if(num_divident % num_divisor == 0) {
        console.log(`VE: question 2: ${true}`)
    }
    else {
        console.log(`VE: question 2: ${false}`)
    }
}
divideFunc(71,10)

console.log("\n")

//***************EASY******************
// question 1
function occurFunc(singleLetter, sentence) {
    console.log(`E: question1: number of occurances:`,sentence.split(singleLetter).length-1)
}
occurFunc("o","ooooo")

//question 2
function addupFunc(num_range) {
    var count = 0;
    for (let i = 1; i <= num_range; i++) {
        count = count + i
    }
    console.log(`E: question2: count is: ${count}`)
}
addupFunc(1000)

//question 3
function stringReplace(replace_string) {
    vowel_array = ['a','e','i','o','u']
    for(i=0; i < 5; i++) {
        replace_string = replace_string.replace(new RegExp(vowel_array[i], "g"), i+1)
    }
    console.log(`E: quetion 3: ${replace_string}`)
}
stringReplace("aeiou");


console.log("\n")
//*****************MEDIUM**********
//question 1
//dynamic letter isn't working replace d in regex expression
function reverseFunc(reverse_sentence, find_letter) {
    const new_regex = new RegExp(/(\bd\S+\b)/ig)
    output =  reverse_sentence.replace( new_regex, word => word.split('').reverse().join(''));
    console.log(`M: question 1: ${output}`)
}

reverseFunc("Do not enter over here", "d")

//question 2
function allEqual(arr) {
    const allEqual = arr => arr.every( v => v === arr[0] ); 
    console.log(`M: question 2: ${allEqual(arr)}`)
}
allEqual(["s","s"])

//question 3
function removeDuplicate(wordArray) {
    var uniqueArray = wordArray.reduce(function(a,b){
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
    },[]);
    console.log("M: qquestion 3:",uniqueArray)
}

removeDuplicate(["1", "1", "2", "0"])

console.log("\n")

//****************HARD*******************
//question 1
function typeFunc(variable) {
    if(variable === null)
    {
        console.log('null')
    }
    else if(Array.isArray(variable))
    {
        console.log('array')
    }
    else
    {
        console.log(typeof variable)
    }
}
console.log("H: question 1:")
typeFunc(1)
typeFunc("q")
typeFunc(false)
typeFunc(null)
typeFunc([1,2,3,4])
typeFunc(undefined)


//question 2
function containNum(numString) {
    var newArray = []
    for (let i = 0; i < numString.length; i++) {
        if((numString[i].match(/\d/) != null) == true)
        {
            newArray.push(numString[i])
        }
    }
    console.log("H question 2:", newArray)
}
containNum(["a","a1", "d", "dy9"])