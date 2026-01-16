// function sumArray(array) {
//   if(!array || array.length <= 2) return 0 ;
//   return array.reduce((acc,curr)=> acc+curr , 0) - Math.max(...array) - Math.min(...array);
//   }

// --------------------------------------------------------------------------------
// let stringy = (size)=>Array(size).fill(0).map((v,i)=>(i+1) % 2).join("")
// -------------------------------------------------------------------------------------
// let gooseFilter = (arr,  geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])=> arr.filter((a)=> !geese.includes(a));