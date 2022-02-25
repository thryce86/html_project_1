
function writer(){

let userInput = prompt('Do you like kittens?\n Y or y ') ;

// let possibleInput = {'Y' , 'y' , 'yes', "Yes"};
if(userInput == "y"|| userInput == "y"){
    document.write('You are correct');
}else{
    document.write('Incorrect')
}
confirm("Press a button!");

}







function likeSexyBacon(){
    let temp = parseInt(prompt('How many times would you like to see some sexy bacon?'))  ;
  
    
  // Validates user input 
        if (isNaN(temp)){
            confirm('you typed' + temp) ;
            return(0);
        }else{
            return(temp) ;
        }


}

let baconBits = "http://turntable.kagiso.io/jacaranda/uploads/2014/05/29/large-3228-kevin-bacon.jpeg" ;

function addBaconBits(){
    
     let t=0;
    
    while(t==0){
     t = likeSexyBacon();

     }



    // let t = 5 ;
     for( let i=1; i <= t ; i++ ) {
        // document.write('asdfihdsafyh') ;
         document.write(  '<img src=" ' + baconBits +'">')
         document.write(  'Sexy Bacon count: '+i);
     }

    }