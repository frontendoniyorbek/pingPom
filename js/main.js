const elPlayer1 = document.querySelector('.player-1')
const elPlayer2 = document.querySelector('.player-2')
const elPlayerSpan1 = document.querySelector('.player1')
const elPlayerSpan2 = document.querySelector('.player2')
const elRestart = document.querySelector('.restart')
const elSelect = document.querySelector('.select')

let qoshmoq = 0
let qoshmoq2 = 0
let finish = 3
let gameOver = true

elPlayer1.addEventListener('click', () => {
    if (gameOver) {
        qoshmoq++
        elPlayerSpan1.textContent = `${qoshmoq}`
        if (qoshmoq >= finish) {
            gameOver = false
            elPlayerSpan1.style.color = 'green'
            elPlayerSpan2.style.color = 'red'
        }
    }
})

elPlayer2.addEventListener('click', () => {
    if (gameOver) {
        qoshmoq2++
        elPlayerSpan2.textContent = `${qoshmoq2}`
        if (qoshmoq2 >= finish) {
            gameOver = false
            elPlayerSpan2.style.color = 'green'
            elPlayerSpan1.style.color = 'red'
        }
    }
})

elRestart.addEventListener('click', restart)

elSelect.addEventListener('change', () => {
    finish = +elSelect.value
    restart()
})

function restart() {
    qoshmoq = 0
    qoshmoq2 = 0
    elPlayerSpan1.textContent = '0'
    elPlayerSpan2.textContent = '0'
    elPlayerSpan1.style.color = '#000'
    elPlayerSpan2.style.color = '#000'
    gameOver = true
}