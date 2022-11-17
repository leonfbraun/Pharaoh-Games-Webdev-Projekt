/* Initialisierung der const variablen */
  /* Variablen des Modals, Modal Grundgerüst inspiriert von: https://www.w3schools.com/howto/howto_css_modal_images.asp (überwiegend CSS) */
const response = document.querySelector(".response");
const submit = document.getElementById("submit");
const dialogText = document.getElementById("dialog-text");
const unityGame = document.getElementById("unity-container");
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("pic1");
const modalClose = document.getElementsByClassName("close")[0];                           // Get the <span> element that closes the modal
  /* Variablen des Audios*/
const playAudio = document.querySelector(".play-audio");
const pauseAudio = document.querySelector(".pause-audio");
const audio = document.getElementById("myAudio"); 
const playing = true;
  /* Variablen des Start-Buttons*/
const startButton = document.getElementById("start-button");
const spielStart = document.getElementById("spiel-startscreen");
const navBar = document.querySelector("nav");

/* Initailisierung der Arrays*/
const hintergrundBilder = [document.getElementById("scene1"), document.getElementById("scene2"), document.getElementById("scene3"), document.getElementById("scene4"), document.getElementById("scene5")] 
const currenthitboxes = [document.getElementById("hitbox1"), document.getElementById("hitbox2"), document.getElementById("hitbox3"), document.getElementById("hitbox4")];
const keys = ["mumie", "tal der koenige", "echnaton"]
const infoText = ["...Diese Schriftrolle sieht verdächtig aus?!", "...wie diese Tür wohl aufgeht?", "...nur noch durch diese Tür, dann hab ichs geschafft!", "...endlich frei!!!"]

/* Initialisierung der veränderbaren Variablen */
let sceneindex = 0;
let log;


function loadNextScene() {
  modal.style.display = "none";
  hintergrundBilder[sceneindex].style.display = "none";
  currenthitboxes[sceneindex].style.display = "none";
  sceneindex++;                                                                           //modal wird geschlossen und neue Scene (Bild, Hitbox und Infotext) wird geladen
  hintergrundBilder[sceneindex].style.display = "block"
  if (currenthitboxes[sceneindex]) {currenthitboxes[sceneindex].style.display = "block"}
  dialogText.innerHTML = infoText[sceneindex-1];                                          //-1 da der erste Infotext schon in spiel.html geladen wird und nicht im Array gelistet ist 
}

currenthitboxes[0].onclick = function(){          
  loadNextScene();
}

currenthitboxes[1].onclick = function(){
  modal.style.display = "block";
  modalImg.src = "images/Pics 4.3/4bilder1begriff.jpg";
}

currenthitboxes[2].onclick = function(){
  modal.style.display = "block";
  modalImg.style.display = "none";
  unityGame.style.display = "flex";
}

currenthitboxes[3].onclick = function(){
  modal.style.display = "block";
  modalImg.src = "images/wächterFrage.jpg";
  modalImg.style.display = "block";
  unityGame.style.display = "none";
}

modalClose.onclick = function() {
  modal.style.display = "none";
} 

submit.onclick = function() { 
  (log) = document.getElementById("input-button").value.toLowerCase();                    // Eingegeber Code wird in Kleinbuchstaben umgewandelt
  if (log == keys[sceneindex - 1]) {                                                      // sceneindex - 1, da Scene 1 keinen Key benötigt
      loadNextScene()
  } else 
  {
      response.innerHTML = "Diese Antwort ist falsch";
      setTimeout(function () {                                                            // Befehl wird nach 2 Sekunden ausgeführt, Quelle: https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
        response.innerHTML = "";
      }, 2000);
  
  }
}

startButton.onclick = function() {
  startGame();
}

function startGame() {
  audio.play();
  spielStart.style.display = "none";
  navBar.style.position = "static";                                                        // Beim spielen stört die sticky Navbar, daher wird sie bei Spielstart auf static gestellt
  hintergrundBilder[sceneindex].style.display = "block";
  currenthitboxes[sceneindex].style.display = "block";
}

/* AUDIO SCRIPT inspiriert von https://www.w3schools.com/jsref/met_audio_play.asp */

playAudio.onclick = function() { 
    audio.play(); 
} 

pauseAudio.onclick = function() { 
    audio.pause(); 
}
