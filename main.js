// ion.sound.init();
$(() => {
  $("body").append('<audio id="input"> <source src="' + chrome.extension.getURL('sounds/input.mp3') + '" type="audio/mp3"> </audio>')
  $("body").append('<audio id="enter"> <source src="' + chrome.extension.getURL('sounds/enter.wav') + '" type="audio/wav"> </audio>')
  $("input,textarea").keyup( input => {
    if ( input.key === "Enter" ) {
      $('#enter')[0].play();
    } else {
      $('#input')[0].currentTime = 0;
      $('#input')[0].play();
    }
  });
});
