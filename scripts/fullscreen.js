function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}


function playMusic() {
    // console.log("Its clicked");
    var music_file = $('#music')[0];
    console.log($('#duration').val());
    var position = (music_file.duration - $('#duration').val()*60)
    music_file.currentTime = position
    music_file.play();
    $('.hidden').toggle();
    
    $('.maindiv').toggle();   
    toggleFullScreen();
  }

function main() {
  $('.playbutton').on('click',playMusic);

  $('.pausebutton').on('click',function() {
    var music_file = $('#music')[0];
    music_file.pause();
  });

  $(document).keyup(function(e){
    if(e.keyCode == 27){
      console.log("Esc Key pressed");
      $('.hidden').toggle();
      var music_file = $('#music')[0];
      music_file.pause();
      $('.maindiv').toggle();
    }
  });
}

$(document).ready(main);
