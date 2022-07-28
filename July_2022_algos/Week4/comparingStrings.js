// Given two strings, return true if the first string can be built from the letters in the 2nd string

const strA1 = "hello world";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.


const comparingStrings = (s1, s2) => {
    if (s2.length < s1.length){
        return false;
    }

    let map1 = {};
    let map2 = {};

    for (let i = 0; i < s1.length || i < s2.length; i++) {
        if (i < s1.length){
            if (!map1[s1[i]]){
                map1[s1[i].toLowerCase()] = 1;
            } else {
                map1[s1[i]]++;
            }
        }
        if (!map2[s2[i]]){
            map2[s2[i].toLowerCase()] = 1;
        } else {
            map2[s2[i]]++;
        }
    }

    for (var char in map1){
        if (!map2[char]){
            return false;
        } else if (map2[char] < map1[char]){
            return false;
        }
    }

    return true;

}

console.log(comparingStrings(strA1,strB1));
console.log(comparingStrings(strA2,strB2));
console.log(comparingStrings(strA3,strB3));
console.log(comparingStrings(strA4,strB4));
console.log(comparingStrings(strA5,strB5));