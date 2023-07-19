// Reverse withot changing the position of an element
function reversedWords(str){
    return str.split(' ').map(function(str1){
        return str1.split('').reverse().join('')
    }).join(' ')
}
console.log(reversedWords('Coding is good'))