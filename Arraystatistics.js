
function arrayStats(array){
    let result = array.reduce((acc,curr)=> acc += curr,0)
    let avg = (result / array.length).toFixed(2)
    const min = Math.min(...array)
    const max = Math.max(...array)
    return {sum: result, avg :avg, min: min, max: max}
  }
  console.log(arrayStats([1,2,4,5,6,7,8]))