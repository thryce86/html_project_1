// let userInput = prompt('Do you like kittens?\n Y or y ') ;

// // let possibleInput = {'Y' , 'y' , 'yes', "Yes"};
// if(userInput == "y"|| userInput == "y"){
//     document.write('You are correct');
// }else{
//     document.write('Incorrect');
    
// }
// confirm('Reallyyy if you put no that is \n Disgraceful....');


//////////////////////////////////////////////////////////////////////////////////



// let possibleInput = {'Y' , 'y' , 'yes', "Yes"};

function writer(){
    i=0;

    function getInput(){
        let userInput = prompt('Do you like kittens?\n Y or y ') ;
        return userInput;
    }
    userInput = getInput()
    while (i==0){
        
    if(userInput == "y"|| userInput == "y"){
        document.write('You are correct');
        i=1;
           
    }else{
        confirm('You are incorrect. try again.')
        userInput = getInput()
        // document.write('Incorrect');
        
    }//end while

} 

// confirm('Reallyyy if you put no that is \n Disgraceful....');

}

