const paces = {
    'lol': 500,
    'pls': 200,
    'triggered': 100
}

let currentPace = 'lol'

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
    }, paces[currentPace])
}

[...document.querySelectorAll('.sidebar__button')].forEach(button => {
    button.addEventListener('click', () => {
        [...document.querySelectorAll('.sidebar__button')].forEach(others => {
            others.classList.remove('selected')
        })

        button.classList.add('selected')
        currentPace = button.id
    })
})