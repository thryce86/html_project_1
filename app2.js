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
        let userInput = prompt('Do you like kittens?\n Y or y ') ; //N
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



function likeSexyBacon(){
    temp = prompt('How many times would you like to see some sexy bacon?');
    return( temp);
}

let baconBits = "http://turntable.kagiso.io/jacaranda/uploads/2014/05/29/large-3228-kevin-bacon.jpeg" ;

function addBaconBits(){
    t=likeSexyBacon();
     for( i=1, i < t ,i++) {
         document.write(  '<img src=" ' + baconBits +'">')
     }



}




// confirm('Reallyyy if you put no that is \n Disgraceful....');

}

