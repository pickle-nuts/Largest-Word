/* 
- Create a function that splits the words up in a sentence
- Create a function that finds the length of the word and prints out the length of the longest
*/


function findWord(str){
  var arr = str.split(" ");
  var max = arr[0].length;
  for(i = 0; i < arr.length; i++){
    if(arr[i].length > max){
      max = arr[i].length
     }
    }
  return max
   }


console.log(findWord('The quick brown fox jumped over the lazy dog'));