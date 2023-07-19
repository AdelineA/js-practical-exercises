// Removing duplicate without using set
const nums = [1,2,3,4,4,4,4,5,6,3,3,6,7,8]

const noDuplicate = noDuplicate.reduce((x,y)=> {
    if(x.indexOf(y) < 0) x.push(y)
    return x
},[]);
console.log(noDuplicate)