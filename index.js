const arrows = document.getElementById('arrows');

function countdown() {
  arrows.classList.remove('animation');
  arrows.style.animationDelay = '3s';
  void arrows.offsetWidth;
  arrows.classList.add('animation');
}

function settime() {
  const seconds = parseInt(document.getElementById('seconds').value);
  if (seconds < 0 || seconds > 60) return;
  const str = '-' + seconds + 's';

  arrows.classList.remove('animation');
  arrows.style.animationDelay = str;
  void arrows.offsetWidth;
  arrows.classList.add('animation');
}
