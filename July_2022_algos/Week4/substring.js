// Given a string, find the length of the longest substring of non-repeating characters
// A substring is an unbroken sequence of letters within a larger string

const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
// Explanation: The answer is "wke", with the length of 3

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"


const substring = (str) => {

    let result = '';
    for(let j in str){
        let map = {};
        let temp = '';
        for(let i = j; i < str.length; i++){
            if(str[i] in map){
                break;
            }else{
                map[str[i]] = 1;
                temp += str[i];
            }
            if(temp.length > result.length){
                result = temp;
            }
        }
    }
    return result.length;
}

console.log(substring(str1))
console.log(substring(str2))
console.log(substring(str3))
console.log(substring(str4))



/*
function substringCount(s){
    let finalCount = 0;

    for (let i = 0; i < s.length; i++){
        let table = {};
        let workingCount = 0;

        for (let j = i; j < s.length; j++){
            // Check if the character has appeared before
            if (!table[s[j]]) {
                table[s[j]] = 1;
                workingCount++;
                // If j is at the end of the string, check/set the count before the loop ends
                if (j == s.length - 1){
                    if (workingCount > finalCount){
                        finalCount = workingCount;
                    }
                }
            } else {
                // if the value is already in the table we hit a duplicate, check/set the count and break the loop
                if (workingCount > finalCount){
                    finalCount = workingCount;
                }
                break;
            }
        }
    }

    return finalCount;
}
*/