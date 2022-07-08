Math.ceil(9.51);
Math.ceil(9.1);

Math.floor(8.45);
Math.floor(8.99);

//Generating a random number

// var random = mth.random();
// random = random * 11;

//^^^^ OR ====== VAR RANDOM = MATH.RANDOM() * 11;

// random = math.floor(random);

//combine everything to one line; 
// var random = math.floor(math.random() * 11);

//PFMA = PARENTHESIS, FUNCTIONS, MULTIPLICATION, ADDITION

//the random function always starts at 0 ^^ so this is 
//from 0 - 11

//this bottom here starts at 1 - 11

// for (var i = 0; i < 10; i++){
//     var random = Math.floor(Math.random() * 11 + 1);
//     console.log(random);
// }


    function d6(){
        var roll = Math.random();
        roll = Math.floor(Math.random() * 6 + 1);
        return roll;
    }

    var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

// Consult the Oracle
// Using the following array, write a function that 
// will answer all of our questions by randomly 
//choosing a response

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function answer(){
    var arrayanswers = Math.random();
    arrayanswers = Math.floor(Math.random() * 19);
    return arrayanswers;
}

var oraclesays = answer();
console.log("The orancle says: " + lifesAnswers[oraclesays]);