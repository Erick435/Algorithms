//Union Sorted Arrays
//Efficiently combine two already-sorted multiset arrays into a new sorted array containing the multiset union.
//Unions by default will take the set of duplicates that has the highest occurrences from one array. (ex, if one array has three 2's and another has two 2's then the result will have three 2's)
//Examples:
const nums1A = [1, 2, 2, 2, 7];
const nums1B = [2, 2, 6, 6, 7];
//const expected1 = [1, 2, 2, 2, 6, 6, 7];

const nums2A = [1, 1, 2, 2, 2, 3, 7, 10, 20, 30];
const nums2B = [2, 6, 6, 7];
//const expected2 = [1, 1, 2, 2, 2, 3, 6, 6, 7, 10, 20, 30];

// function intersectThree(arr1, arr2) {
//     let i = 0;
//     let j = 0;
//     let result = [];
//     while(i < arr1.length && j < arr2.length) {
//         if(arr1[i] == arr2[j] && result[result.length - 1] != arr1[i]) {
//             result.push(arr1[i]);
//             i++;
//             j++;
//         } else if (arr1[i] < arr2[j]) {
//             i++;
//             console.log("iterating i")
//         } else {
//             j++;
//             console.log("iterating j")
//         }
//     }
//     return result;
// }

// console.log(intersectThree(nums1A, nums1B))
// console.log(intersectThree(nums2A, nums2B))

const unionSort = (arr1, arr2) => {
    let answer = []
    let i=0;
    let j=0;
        while( j<arr2.length){
            if(arr1[i] == arr2[j]){
                answer.push(arr1[i])
                i++
                j++
            }
            else if (arr1[i] < arr2[j]){
                answer.push(arr1[i]);
                i++
            }
            else{
                answer.push(arr2[j]);
                j++
            }
        }
        for (let z=i; z<arr1.length; z++){
            answer.push(arr1[z]);
        }

    return answer;

}


console.log(unionSort(nums1A, nums1B))
console.log(unionSort(nums2A, nums2B)) 