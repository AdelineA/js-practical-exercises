// finding the greatest common divisor of two numbers

function greatesCommonDivisor(num1,num2){
    num1 = Math.abs(num1)
    num2 = Math.abs(num2)
      while(num2){
        var num3 = num2
         num2 = num1 % num2
         num1 = num3
      }
       return num1  
  }
  console.log(greatesCommonDivisor(40,100))