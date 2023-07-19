
const Products = [
    {
      name:'car',
      price:10000
    },
    {
      name:'bike',
      price:5000
    },
    {
      name:'airplane',
      price:150000
    }
  ];

function sortProducts(arr){
 return arr.sort((a,b)=>a.price - b.price)
}
console.log(sortProducts(Products))