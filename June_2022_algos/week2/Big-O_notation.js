// Learning Big-O notation 

//O(1)
let arr = [5, 10, 15, 20];
let the10 = arr[1]; //search for a specific index
console.log(the10);

//O(n)  this searches or goes up to what you're asking/looking for
//O(n) is usually one loop
let sum = 0;    
for (let i = 1; i <= 10; i++){
    sum += i;
}
console.log(sum)

//O(n^2) usually 2 loops inside 

for (let i = i; i < 10; i++){
    for(let j = i + 1; j < 5; j++){

    }
}

//space complexity and time space example
//run-time would be linear : 
//time: O(n)
//space: O(1) 
function sum(n){
    let _sum = 0; //O(1) = Space
    for (let i = 0; i < n; i++){    //O(1) = Space.

}
}

//  O(n) = Linear Time Complexity
function findNegative(arr){
    let negative = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            negative.push(arr[i]);
        }
    }
    return negative;
}