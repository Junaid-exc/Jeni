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
function wishuser() {
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
});
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
    text.toLowerCase();
  text.replace('jenny' || 'jenne', "jeni")
  text.replace('jeni', "")
  if (text.includes("hello" || 'hello.' || 'hey.' || 'hey' || 'yo' || "yo." ||"jeni" || "Jennne" || "jenne")) {
    speak("Hello sir How Can I Help You?");

  }
  else if (text.includes("who are you" || '')) {
    speak("I am Jeni, Made By Junaid Sir");
  }
  else if (text.includes("who is Junaid" || 'Junaid.')) {
    speak("Junaid sir, Is a web Devloper Live In Chattisgarh, And he is My Creator");
  }
  else if (text.includes("open youtube" || 'yt')) {
    speak("Opening Youtube");
    window.open('https://www.youtube.com/')
  }
  else if (text.includes("open facebook" || 'fb')) {
    speak("Opening Facebook");
    window.open('https://www.facebook.com/')
  }
  else if (text.includes("open instagram" || 'insta')) {
    speak("Opening instagram");
    window.open('https://www.instagram.com/')
  }
  else if(text.includes('69' || 'sixty nine')){
    speak("You are Friend Of, Junaid sir, 69 is a passcode")


  }
  else if(text.includes('Shyam' || 'shyamacharan')){
    speak(" i dont know about this people, maybe a gay")
    

  }
  else if(text.includes('j' || 'yo j')){
    speak("Yo, Junaid sir, what i can do for you ?")
    

  }
  else if(text.includes('kya' || 'hai')){
    speak("I only understand english language")
    

  }



  else{
    speak(`This is i found Regarding ${text}`);
    window.open(`https://www.google.com/search?q=${text}`)

  }
 
  
  
  
  


}
