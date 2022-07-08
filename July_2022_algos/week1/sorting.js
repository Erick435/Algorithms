//Bubble Sort
//Given an array of numbers, sort the numbers by swapping adjacent values that are in the wrong order
//Ex: [5,9,2,7,6] -> [5,2,7,6,9] -> [2,5,7,6,9] -> [2,5,6,7,9]
function bubble(arr){
for(var j = 0; j < arr.length; j++){
    for (var i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1]){
            var temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
        }
    }
}
console.log(arr);
}

var first = [5,9,2,7,6];
bubble(first);


//Selection Sort
//Given an array of numbers, sort the numbers by finding the smallest number in the array and moving it to the beginning. Then iterate through everything except the first number, which is now sorted, and find the next smallest value and move it to index 1. Keep doing this until all values are sorted. 
//Ex: [7,5,2,8,4] -> [2,5,7,8,4] -> [2,4,7,8,5] -> [2,4,5,7,8]

function selection(arr){
    for (var i = 0; i < arr.length - 1; i++){
        for (var j = i + 1; j < arr.length; j++){
            if (arr[i] > arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}


var second = [7,5,2,8,4];

selection(second);

function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let small = i; 
        for(let j  = i + 1; j < arr.length; j++){
            if (arr[j] < arr[small]){
                small = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[small];
        arr[small] = temp;
    }
    console.log(arr);
}

selectionSort(second);
