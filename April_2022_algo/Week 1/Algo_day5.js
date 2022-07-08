var start = 0;
var end = 12;

while(start < end){
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
    if ( start == end){
        console.log ("Both numbers now equal to " + start + " " + end);
    }
}

var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; //temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit1 + " and " + fruit2);
console.log(fruit2 + " and " + fruit1);

// Reversing an array
// Write a function reverse( arr ) to reverse an array, if we were given...

var arr = ["a", "b", "c", "d", "e"];
// we expect to get back...
console.log(arr);
// ["e", "d", "c", "b", "a"];
var array;
function reverse(){
    for (var x = 0; x < arr.length/2; x++){
        var y = arr.length -1 -x;
        var temp = arr[x];
        arr[x] = arr[y]; 
        arr[y] = temp;
    }
}
reverse(arr);
console.log(arr);

// var arr2 = ["a", "b", "c", "d", "e"];
// var temp = [];

// function reverse(arr2){
//     counter = arr2.length-1;
//     while (counter >= 0){
//         temp.push(arr2(counter));
//         counter--;
//     }
// }
// reverse(arr2);
// console.log(temp);
// arr2 = temp;
// console.log(arr2);