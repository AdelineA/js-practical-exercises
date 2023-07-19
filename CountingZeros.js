
function countZeros(num){
    if(num < 100 ){
      return Math.floor(num / 10)
    }
     else{ 
       let result 
       if (num > 10) {
        result = Math.floor(num / 10)
        result += Math.floor(result / 10) 
       }
       return result
     }
      
  }

  console.log(countZeros(300))

