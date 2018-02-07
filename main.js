// ion.sound.init();
$(() => {
  $("body").append('<audio id="input"> <source src="chrome-extension://jploojekcadgfgmjlkebkjcmjeejkemm/sounds/input.mp3" type="audio/mp3"> </audio>')
  $("body").append('<audio id="enter"> <source src="chrome-extension://jploojekcadgfgmjlkebkjcmjeejkemm/sounds/enter.wav" type="audio/wav"> </audio>')
  $("input,textarea").keyup( input => {
    if ( input.key === "Enter" ) {
      console.log("Enter");
      $('#enter')[0].play();
    } else {
      console.log("Other");
      $('#input')[0].currentTime = 0;
      $('#input')[0].play();
    }
  });
});

console.log("Lpan Loaded");
