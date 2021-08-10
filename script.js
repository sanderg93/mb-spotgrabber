// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://clients.mindbodyonline.com/*classDate*
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.2/moment.js
// ==/UserScript==

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }
  
  (function() {
  
      var html = $('.mainTextBig').html();
  
      if (html && html.indexOf('trying to reserve is full') !== -1) {
          console.log('Still full...');
  
          var location = window.location.href.replace("res_full.asp", "res_a.asp");
  
          setTimeout(() => {
              console.log('Reloading...');
              window.location.href = location;
          }, 20000);
      } else {
          var music = new sound("https://sandergoos.nl/success.mp3");
          console.log('There is a spot!');
          document.title = 'SPOT FOUND!!!';
  
          var currentTime = moment();
  
          var interval = setInterval(() => {
              var seconds = moment().diff(currentTime, 'seconds', true);
              document.title = 'SPOT FOUND!!! ' + parseInt(seconds);
              music.play();
          }, 200);
  
          var timeout = setTimeout(() => {
              document.getElementById('SubmitEnroll2').click();
          }, 5000);
  
  
      }
  })();