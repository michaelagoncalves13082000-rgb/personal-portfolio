const bgMusic = document.getElementById('bgMusic');
const clickText = document.getElementById('begin');
const welcome = document.getElementById('welcome');
const muteBtn = document.getElementById('muteBtn');
const volumeSlider = document.getElementById('volumeSlider');

//Toggle mute/unmute and change button image
muteBtn.addEventListener('click', () => {
  bgMusic.muted = !bgMusic.muted;
  muteBtn.style.backgroundImage = bgMusic.muted
    ? "url('assets/mute.png')"
    : "url('assets/high-volume.png')";
});

//Volume slider controls
volumeSlider.addEventListener('input', (e) => {
  bgMusic.volume = e.target.value;
})

clickText.addEventListener('animationend', () => {
  clickText.classList.add('typing-done');
}, {once: true});

clickText.addEventListener('click', () => {
  clickText.style.display = 'none';
  bgMusic.play();
  welcome.classList.add('typing');
  welcome.addEventListener('animationend', () => {
  welcome.classList.add('typing-done');
}, {once: true});
})

