//Ordered Intersection
//Given two arrays of sorted numbers, return a new array that contains 
//only the numbers that are in both arrays - do NOT count duplicates
//Ex: given [1,2,2,3,4,5] and [2,4,6,7,8] return [2,4]
//Ex: given [1,1,1,2,3,4] and [1,1,3,4,5] return [1,3,4]

array1 = [1, 2, 2, 3, 4, 5];
// array1 = [2, 4, 1, 5, 6, 3];
array1part2 = [2, 4, 6, 7, 8]       //array1 return [2, 4]

array2 = [1, 1, 1, 2, 3, 4];
array2part2 = [1, 1, 3, 4, 5];  //returns [1, 3, 4]


const orderedIntersection = (arr1, arr2) => {
        var interArray = [];
        for(let i = 0; i < arr1.length; i++){
            for(let j = 0; j < arr2.length; j++){
                if(arr1[i] === arr2[j] && arr1[i] !== interArray[interArray.length-1]){
                    interArray.push(arr1[i]);
                    i++;
                    break;
                }
            }
        }
        return interArray;
    }

console.log(orderedIntersection(array1, array1part2))
console.log(orderedIntersection(array2, array2part2))
