
// event listener
// no parenthesis cause it will be straight up method call then , we dont want to call the functio when we we adding ,
// thats why not parenthesis in function name when we are doing calling it 

        // document.querySelector("button").addEventListener("click", handleClick);

//function

            // function handleClick(){
            //     var audio=new Audio("sounds/tom-2.mp3");
            //     audio.play();
            // }

// people may replace the function with an anonymous function 
// looks like 
/*

            document.querySelector("button").addEventListener("click", function (){
                alert("I got clicked");
            });

            does the same thing 

*/

// for(var i=0;i< document.querySelectorAll(".drum").length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
// }




function makeSound(key){
    
    switch(key){
        case "w":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var bass=new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;

        case "s":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
        
    }
}

function buttonAnimation(key){

    document.querySelector("."+key).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");    
    },100);

}


for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        // var audio=new Audio("sounds/tom-1.mp3");
        // audio.play();
        // this.style.color="white";
        var buttonDrum=this.innerHTML;
        makeSound(buttonDrum);
        buttonAnimation(buttonDrum);

    });
}


    document.addEventListener("keydown", function(event){
        // var audio=new Audio("sounds/tom-1.mp3");
        // audio.play();
        // this.style.color="white";
        makeSound(event.key);
        buttonAnimation(event.key);
        

    });

