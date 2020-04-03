
// Detecting button click
var numberOfDrumButtons=document.querySelectorAll(".drum").length;


for(var i=0; i<numberOfDrumButtons; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTMl= this.innerHTML;
    makeSound(buttonInnerHTMl);
    buttonAnimation(buttonInnerHTMl);
   
});

}

// Detecting keyboard press


document.addEventListener('keypress', function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

// Function to play sound


function makeSound(key){
  switch (key) {
    case 'w':
      var x = new Audio("sounds/crash.mp3");
      x.play();
      break;

      case 'a':
        var x = new Audio("sounds/kick-bass.mp3");
        x.play();
        break;

        case 's':
          var x = new Audio("sounds/snare.mp3");
          x.play();
          break;

          case 'd':
            var x = new Audio("sounds/tom-1.mp3");
            x.play();
            break;

            case 'j':
              var x = new Audio("sounds/tom-2.mp3");
              x.play();
              break;

              case 'k':
                var x = new Audio("sounds/tom-3.mp3");
                x.play();
                break;

                case 'l':
                  var x = new Audio("sounds/tom-4.mp3");
                  x.play();
                  break;

                  default:console.log(key)
      
  }
}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
  activeButton.classList.remove("pressed");
}, 100);

}