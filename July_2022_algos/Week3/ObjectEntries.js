// Printing keys and values
// Given an object, return an array of arrays containing 
//the key and value of each entry
// Ex: given object
const obj1 = {
name: "Pizza",
calories: 9001
}
const keysAndValues = (obj) => {
    let results = Object.entries(obj);
    return results;
}
// return
// const result = [
//     ["name", "Pizza"],
//     ["calories", 9001]
// ]

console.log(keysAndValues(obj1))


// Once you have that worked out, you can work on the next algorithm
// Insert SQL Statement
// Given a table name string and an object whose key value pairs 
//represent column names and values for the columns return a SQL 
//insert statement string
// Ex: 
const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
// const expected1 = "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

const sqlQuery = (table, data) => {
    let arr = keysAndValues(data);
    let string1 = "";
    let string2 = "";
    for(let i = 0; i < arr.length; i++){
        if (i == arr.length -1){
            string1 += arr[i][0];
            string2 += arr[i][1];
        }
        else{
            string1 += arr[i][0] + ", ";
            string2 += arr[i][1] + ", ";
        }
    }
    
    let answer = `INSERT INTO ${table} ( ${string1} ) VALUES ( ${string2})` ;
    return answer;
}


console.log(sqlQuery(table, insertData1));