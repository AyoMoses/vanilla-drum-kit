function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //we can select the key class or any div in this case, a key

  if (!audio) return; //stop the function from running all together
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add('playing');
}

//we add a transitionEnd event that fires when the animation stops
//   console.log(key); //to test keydown eventListener and log to console

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //skip if its not a transform property because other properties attached to the key such as shadow, border-radius gets fired up hence, we listen for only transform
  this.classList.remove('playing');
}

//below, we crrate a variable to select all keys to listen to a transition end event
const keys = document.querySelectorAll('.key');

// Here, we have a key upon pressed to forEach, we end transition and remove it via function
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//ONCE WE HIT THE KEYDOWN, THE PLAYSOUND FUNCTION FIRES WITH IT
window.addEventListener('keydown', playSound);
