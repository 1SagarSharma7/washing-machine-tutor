/* select the timer i.e the seconds */
var seconds = document.querySelector("h1.time");
var count = 0;

/* select the audio */
var audio = document.querySelector("audio.baba_lagin")

/* select the timer button */
var start = document.querySelector("button.start");

/* Play Baba lagi Denchak Dhechak */
function baba_lagin(){
  audio.play();
}

/* countdown Function */
function countdown(){
  if(count === 0){
    count++;
    var id = setInterval(frame, 1000);

    function frame() {
        var sec = seconds.innerText;
        if (sec == 0) {
        clearInterval(id);
        baba_lagin();
        } else {
        sec = seconds.innerText;
        sec = sec - 1;
        seconds.innerText = sec;
        }
    }
  }

}

/* run a function that triggers when we click on the start button */
start.addEventListener("click",countdown);