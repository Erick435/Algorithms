//Array Partition
//Given an array of unsorted numbers and a pivot index, sort the array so that all values 
//less than the value at the pivot index are on the left of the value and
//all values greater than the pivot value are on the right
//Ex: 
//Given var sortArr = [7,9,1,6,2,10,8,4,3] and a pivot index of 3, return [1,2,4,3,6,9,7,10,8]
//Notice how the pivot index of 3 lands on the value of 6 originally and then sorts 
//all numbers in the array around being less than or greater than the number 6
//It is OKAY for the pivot to move, just keep track of the original VALUE of the pivot

var sortArr = [7,9,1,6,2,10,8,4,3];

function partitionSort(arr, pivot, left = 0, right = arr.length - 1) {
    while (left != right) {

        if (arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }

        if (left == pivot && arr[right] < arr[pivot]) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            pivot = right;
        }

        if (right == pivot && arr[left] > arr[pivot]) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            pivot = left;
        }
    
        
        if (left < pivot) {
            left++;
        }
    
        if (right > pivot) {
            right--;
        }
    }

    return arr;
}

console.log(partitionSort(sortArr, 3));

