
//document.querySelector(".set").addEventListener("click",handleClick);

//using for loop:



// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for(var i = 0; i < numberOfDrumButtons ; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
// }

// function handleClick(){
//     alert("I got clicked!");
// }


// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for(var i = 0; i < numberOfDrumButtons ; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function()
// {
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();


// });
// }


// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for(var i = 0; i < numberOfDrumButtons ; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function()
// {
//     var buttonInnerHTML = this.innerHTML;

//     switch(buttonInnerHTML){

//         case "w" :
//             var tom1 = new Audio("sounds/tom-1.mp3");
//             tom1.play();
//             break;

//         case "a" :
//             var tom2 = new Audio("sounds/tom-2.mp3");
//             tom2.play();
//             break;

//         case "s" :
//             var tom3 = new Audio("sounds/tom-3.mp3");
//             tom3.play();
//             break;  
            
//         case "d" :
//             var tom4 = new Audio("sounds/tom-4.mp3");
//             tom4.play();
//             break;

//         case "j" :
//             var snare = new Audio("sounds/snare.mp3");
//             snare.play();
//             break;

//         case "k" :
//             var crash = new Audio("sounds/crash.mp3");
//             crash.play();
//             break;

//         case "l" :
//             var kick = new Audio("sounds/kick-bass.mp3");
//             kick.play();
//             break;

//     }


// });
// }



// When key presses :
// document.addEventListener("keydown",function(){
//     alert("Key was pressed");
// })



//Detect button press 
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumButtons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);       // for animation happen when button clicks
});

}


//Detecting keyboard press

document.addEventListener("keydown", function(event){
    makesound(event.key);  //tells which key was pressed

    buttonAnimation(event.key);    //to occur animation when keypress happens 
});


function makesound(key){

    switch(key){

        case "w" :
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s" :
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;  
            
        case "d" :
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j" :
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k" :
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l" :
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

    }
}


function buttonAnimation(currentkey){
    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");   // .pressed is there in css file to happen animation or effect

    setTimeout(function(){                    //setTimeout(function,milliseconds) -> function: this will be executed after a amounnt of time,   milli ->how much time to wait before running this function.
        activeButton.classList.remove("pressed");         //it is added because when we click on the buttons in the drum the animation occur ,but its styaing there only ,its not get removed , so to remove animation after pressing a particular buuton (we added this line setTimeout).
    }, 100);
}