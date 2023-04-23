window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key=${e.code}]`);
    const key = document.querySelector(`.key[data-key=${e.code}]`);
    console.log(audio);
    if(!audio) return;

    audio.currentTime = 0;
    key.classList.add('playing');
    audio.play();

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        key.addEventListener('transitionend', (e) => {
            if (e.propertyName !== 'transform') return;
            key.classList.remove('playing');
        })});
});