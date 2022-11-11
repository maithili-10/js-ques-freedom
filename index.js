// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// function sort(array, n) {
//   let temp;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] > array[j]) {
//         temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     }
//   }
//   console.log(array);
//   let index = array.length - n;
//   let nthmax = array[index];
//   console.log(n + 'th max number of the array is' + nthmax);
// }

// sort([3, 4, 6, 7, 8, 1, 9], 3);

// function largestArrayPositiveNumber(array){

//   let concatedArray=array.join('');
//   console.log(concatedArray);
//  let newarray=String(concatedArray).split('').map((arraynumbers)=>Number(arraynumbers));
// console.log(newarray);
// let temp;
// for(let i=0;i<newarray.length;i++){
//   for(let j=i+1;j<newarray.length;j++){
//     if(newarray[i]<newarray[j]){
// temp=newarray[i];
// newarray[i]=newarray[j];
// newarray[j]=temp;

//     }
//   }
// }
// console.log(newarray);
// let finalmaxnumber=newarray.join('');
// console.log(finalmaxnumber);
// }

// largestArrayPositiveNumber([4,8,7,3,9,1])
