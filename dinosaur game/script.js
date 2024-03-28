

// create 2 var to access char and block
var character = document.getElementById("character");
var block = document.getElementById("block");

function jump(){
    if (character.classList != "animate"){
        character.classList.add("animate");
    }
    
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
    // after 500ms when animation done remove the animation class

}

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    // you need to parse to int, because it will give you px unit
    // return the top position of the char
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<20 && blockLeft>0 && characterTop>130){
        block.style.animation = "none";
        block.style.display = "none";
        // so that game stop page must be refreshed
        alert("You lose!");
    }


}, 10);
// run the check function every 10ms to see if its dead