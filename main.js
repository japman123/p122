x = 0;
y = 0;
apple = "apple.png"
SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
 console.log(event); 
 content = event.results[0][0].transcript;
document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
if(content = true){
image(apple, x, y, 50, 50);
}
}

function setup() {
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    speak_data = "";
}
