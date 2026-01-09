const bgMusic = document.getElementById('bgMusic');
const clickText = document.getElementById('begin');
const welcome = document.getElementById('welcome');
const muteBtn = document.getElementById('muteBtn');
const volumeSlider = document.getElementById('volumeSlider');
const avatarScreen = document.getElementById('avatarScreen');

//Volume slider controls
volumeSlider.addEventListener('input', (e) => {
  bgMusic.volume = e.target.value;
})

//Toggle mute/unmute and change button image
muteBtn.addEventListener('click', () => {
  bgMusic.muted = !bgMusic.muted;
  muteBtn.style.backgroundImage = bgMusic.muted
    ? "url('assets/mute.png')"
    : "url('assets/high-volume.png')";
});

//Step 1: When "Click to Begin" finishes typing
clickText.addEventListener('animationend', () => {
  clickText.classList.add('typing-done');
}, {once: true});

//Step 2: User clicks "Click to Begin"
clickText.addEventListener('click', () => {
  //Hide "Click to Begin"
  clickText.style.display = 'none';
  //Start music
  bgMusic.play();
  //Start Welcome typing
  welcome.classList.add('typing2');
  //Step 3: When welcome finishes typing
});

  welcome.addEventListener('animationend', () => {
    //Hide Welcome text
  setTimeout(() => {
    welcome.style.display = 'none';
      avatarScreen.classList.remove('hidden');
    }, 1500); 
  }, {once : true});

  //Avatar elements
  const boyAvatar = document.getElementById('boy-avatar');
  const girlAvatar= document.getElementById('girl-avatar');

  //When user clicks boy avatar
  boyAvatar.addEventListener('click', () => {
    localStorage.setItem('chosenAvatar', 'boy');
    startGame() // to move to the next screen/phase
  });

  //when user clicks girl avatar
  girlAvatar.addEventListener('click', () => {
    localStorage.setItem('chosenAvatar', 'girl');
    startGame() 
  });

  function startGame() {
    avatarScreen.style.display = 'none';
    console.log('Avatar chosen:', localStorage.getItem('chosenAvatar'));
  }