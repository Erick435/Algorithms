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

function partition(arr, piv) {
    let i = 0;
    let j = arr.length-1;
    let running = 0;
    while(running < arr.length){
        let back
        let front
        while(i <= piv){
            if(arr[i] >= arr[piv]){
                front = i
                break
            }
            i++
        }
        
        while(j >= piv){
            if(arr[j] <= arr[piv]){
                back = j
                break
            }
            j--
        }

        let temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp

        running ++

    }
    
    return arr;
}

// console.log(partition([7,9,1,6,2,10,8,4,3], 3))



function quickSort(arr, piv) {
    let temp = arr
    let i = piv;
    let j = piv;

    while(i >= 0){
        temp = partition(temp, i)
        i --
    }

    while(j < arr.length){
        temp = partition(temp, j)
        j ++
    }

    return temp;
}


console.log(quickSort(sortArr, 3))

//Quick sort 
//Use the ideas from partition to create a quick sort. Basically, run 
//partitions until an array is completely sorted
//Partition: given an array and a pivot index, roughly sort the array 
//around the value at the original pivot point