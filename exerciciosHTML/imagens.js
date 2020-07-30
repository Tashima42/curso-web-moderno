function mover(elem, inicio, fim, passo, callback) {
    const novoInicio = inicio - passo
    if(novoInicio >= fim) {
        elem.style.left = novoInicio + 'px'
        setTimeout(() => mover(elem, novoInicio, fim, passo, callback), 7)
    } else {
        callback()
    }
}

const p = document.querySelectorAll('[wm-slider] > p')
p.forEach((item, index) => {
    p[index].style.display = 'block'
    mover(p[index], 1500, -6000, 5, () => {
    console.log('Terminou')
})
})