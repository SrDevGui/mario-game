const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = function jump() {
    mario.classList.add('jump')
    setTimeout(function () {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '') /*+ converte pra number*/
    console.log(marioPosition)

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) { //parar o jogo
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'Imagens/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        clearInterval(loop)// zerando o loop
    }
}, 10)

document.addEventListener('keydown', jump)
