var age = 10

function checkage(age){
    if(age > 16 && age < 60){
        console.log('you can borrow my keys');
    }    
        if(age > 60 && age < 100){
            console.log('Maybe I will drive, where do you want to go?');
        }
    
    else if (age == 16){
        console.log('You can drive, but I will come with');
    }
    else if(age < 6){
        console.log('Sorry my trike is broken');
    }else{
        console.log('you can borrow my bike');
    }
}

checkage(age);
checkage(17);
checkage(4);
checkage(88);
checkage(16);