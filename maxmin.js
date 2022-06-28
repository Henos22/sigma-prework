function maxmin(array) {
    let answer = [];
   let min = array[0];
  let max = array[0];
    for (let i=0;i<array.length;i++) {
      if (array[i]<=min) {
min = array[i] } ; if (array[i]>=max) {
max = array[i] }
      } answer.push(min); answer.push(max);
  return answer
} 
console.log(maxmin([-2,-1,0,1,2,8,-3,3,4,5]));