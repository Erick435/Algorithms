//Insertion Sort
//Given an array of numbers, sort the numbers by placing values 
//into their correct position at the front (sorted part) of the array
//Ex: [9,5,2,7,1] -> [5,9,2,7,1] -> [2,5,9,7,1] -> [2,5,7,9,1] -> [1,2,5,7,9]


const sort = (arr) => {
    for (var i = 0; i < arr.length - 1; i++){
        for(var j = i + 1; j >= 0; j--){
            if (arr[j] < arr[j - 1]){
                var temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                console.log(arr);
            }
            
        }
    }
}

var arr = [9, 5, 2, 7, 1];
sort(arr);


/* if (arr[j - 1] > arr[j]){
                var temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
                console.log(arr);*/