// Symmetric Difference
// Given two arrays of integers, return an array of all the numbers the arrays 
//do NOT have in common
// The arrays may or may not be in order
// If there are duplicates of values that are in one array and not the other, only 
//include the value once
// Ex: given [1,2] and [2,1,3] return [3]
// Ex: given [1,1] and [1] return []
// Ex: given [1,2,3] and [4,5,6] return [1,2,3,4,5,6]
// Ex: given [4,1,2,3,4] and [1,2,3,5,5] return [4,5]

const arr1 = [1, 2,];
const arr1part2=[2, 1, 3]

const arr2 = [1, 1,];
const arr2part2 = [1];

const arr3 = [1, 2, 3];
const arr3part2 = [4, 5, 6];

const arr4 = [4, 1, 2, 3, 4];
const arr4part2 = [1, 2, 3, 5, 5];

function symmetricDifference(arr1, arr2){
    let j=0;
    let answer = []
    let i=0;
    while (i < arr1.length){
        if(arr2.includes(arr1[i])){
            i++
        }
        else{
            if (answer.includes(arr1[i])){
                i++
            }
            else{
                answer.push(arr1[i]);
                i++
            }
        }
    }
    while (j < arr2.length){
        if(arr1.includes(arr2[j])){
            j++
        }
        else{
            if (answer.includes(arr2[j])){
                j++
            }
            else{
                answer.push(arr2[j]);
                j++
            }
        }
    }
    return answer
}

console.log(symmetricDifference(arr1, arr1part2))
console.log(symmetricDifference(arr2, arr2part2))
console.log(symmetricDifference(arr3, arr3part2))
console.log(symmetricDifference(arr4, arr4part2))