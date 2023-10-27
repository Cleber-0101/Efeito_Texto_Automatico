const textEl = document.getElementById('text')
const speeEl = document.getElementById('speed')
const text = 'We Love Programming!'
let idx = 1 
let speed = 300 / speeEl.ariaValueMax

writetext()

function writetext() {
    textEl.innerHTML = text.slice(0, idx)
    idx++

    if (idx > text.length) {
        idx = 1
    }

    setTimeout(writetext , speed)
}


speeEl.addEventListener('input', (e) => speed = 300 / e.target.value)