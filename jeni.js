let micBtn = document.getElementById("mic");
let voiceRecognize = document.getElementById("rec");
let voicetext = document.getElementById("text");
let count = 0;
voicetext.innerText;

function speak(text) {
  let textSpeak = new SpeechSynthesisUtterance(text);
  textSpeak.rate = 1;
  textSpeak.pitch = 1;
  textSpeak.volume = 1;
  textSpeak.lang = "hi-IN";
  window.speechSynthesis.speak(textSpeak);
}
/*function wishuser() {
  let time = new Date().getHours();
  if (time > 0 && time < 12) {
    speak("Good Morning Sir");
   
  } else if (time > 12 && time < 16) {
    speak("Good Afternoon Sir");

  } else if (time > 16 && time < 19) {
    speak("Good Evening Sir");
   
  } else {
    speak("Good night Sir");
   
  }
}
window.addEventListener("load", () => {
  wishuser();
});*/
let Spchrecgnizention =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let rechogniation = new Spchrecgnizention();
rechogniation.onresult = (event) => {
  let finalword = event.results[0][0].transcript;
  voicetext.innerText = finalword;
  command(finalword);
};

const micinput = micBtn.addEventListener("click", () => {

  rechogniation.start();
});
micBtn.addEventListener('click', ()=>{
  voiceRecognize.style.display = "block";
  micBtn.style.display = "none";
 let interval = setInterval(()=>{
    count++;
    if(count >= 6 ){
  
      
      voiceRecognize.style.display = "none";
      micBtn.style.display = "block";
      clearInterval(interval)
      rechogniation.stop();
      count =0;
      voicetext.innerText = '';

    }
    else if(!voicetext.innerText =='' && count >= 10 ){
      voiceRecognize.style.display = "none";
      micBtn.style.display = "block";
      clearInterval(interval)
      console.log(c);
      voicetext.innerText ='';
   
      
      rechogniation.stop();
      count =0;
     


    }
   
    

  },1000)

})


function command(text) {
  if (text.includes("hello" || 'hello.' || 'hey.' || 'hey' || 'yo' || "yo." ||"jeni")) {
    speak("Hello sir How Can I Help You");

  }
  else if (text.includes("who are you" || '')) {
    speak("I am Jeni, Made By Junaid Sir");
  }
  else if (text.includes("who Is junaid" || 'junaid')) {
    speak("Junaid sir, Is a web Devloper Live In Bagicha Chattisgarh And he is My Creator");
  }
  else if (text.includes("open YouTube" || 'yt')) {
    speak("Opening Youtube");
    window.open('https://www.youtube.com/')
  }
  else if (text.includes("open Facebook" || 'yt')) {
    speak("Opening Facebook");
    window.open('https://www.facebook.com/')
  }
  else if (text.includes("open Instagram" || 'yt')) {
    speak("Opening instagram");
    window.open('https://www.instagram.com/')
  }


  else{
    speak('sorry sir i unable to help you about this topic')
  }
 
  
  
  
  


}
