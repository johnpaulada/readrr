
// Derived from: https://gist.github.com/joelambert/1002116#gistcomment-1953925
const requestInterval = function (fn, delay) {
  const requestAnimFrame = (function () {
    return window.requestAnimationFrame || function (callback, element) {
      window.setTimeout(callback, 1000 / 60);
    };
  })();

  let start = new Date().getTime();
  let handle = {};

  function loop() {
    handle.value = requestAnimFrame(loop);

    let current = new Date().getTime(),
    delta = current - start;
    
    if (delta >= delay) {
      fn.call();
      start = new Date().getTime();
    }
  }

  handle.value = requestAnimFrame(loop);

  return handle;
};

const stage1s = Array.from(document.querySelectorAll('.stage-1'))

document.querySelector('.main-container__start').addEventListener('click', () => {
    const content = document.querySelector('.main-container__area').value
    stage1s.forEach(stage1 => stage1.classList.add('gone'))
    document.querySelector('.stage-2').classList.remove('gone')
    displayWord(content.split(/\s/gi), 0)
})

function displayWord(wordlist, index) {
    setTimeout(() => {
        if (index < wordlist.length) {
            document.querySelector('.main-container__display').innerHTML = wordlist[index]
            displayWord(wordlist, index+1)
        } else {
            stage1s.forEach(stage1 => stage1.classList.remove('gone'))
            document.querySelector('.stage-2').classList.add('gone')
        }
    }, 200)
}