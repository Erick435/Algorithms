//Diagonal Difference
//Given a squared matrix (2D array) of integers, calculate the absolute difference between the sum of the diagonals (top left to bottom right and top right to bottom left)
const squareMatrix1 = [
 [1, 2, 3],
 [4, 5, 6],
 [9, 8, 9],
];
//const expected1 = 2;
//left to right diagonal: 1 + 5 + 9 = 15
//right to left diagonal: 3 + 5 + 9 = 17
//absolute difference = 2
const squareMatrix2 = [
[1, 2, 3, 4, 5],
[1, 2, 3, 4, 5],
[1, 2, 3, 4, 5],
[1, 2, 3, 4, 5],
[1, 2, 3, 4, 5],
];
//const expected2 = 0; 
//left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
//right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
//absolute difference = 0

// const DDifference = (arr) => {
//     let left = 0;
//     let right = 0;
//     for (let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr[i].length; j++){
//             if (i == j){
//                 left += arr[i][j];
//             }
//             if (j == arr[i].length - 1 - i){
//                 right += arr[i][j]
//             }
//         }
//     }
//     let temp = Math.abs(left - right);
//     return temp;
// }

// console.log(DDifference(squareMatrix1));
// console.log(DDifference(squareMatrix2));

const DiagonalD = (arr) => {
    var right = 0;
    var left = 0;
    for ( let i = 0; i < arr.length; i++){
        right += arr[i][i];
        left += arr[i][arr.length - 1 -i]
    }
    return Math.abs(left - right);
}

console.log(DiagonalD(squareMatrix1))
console.log(DiagonalD(squareMatrix2))