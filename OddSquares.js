// function to calculate the Odd square in an array of numbers

function oddSquare(array){
    let result = array.filter(arr1 => arr1 % 2 !== 0)
   return result.map(res => res * res)
    
  }
console.log(oddSquare([1,2,3,5,7,9]))