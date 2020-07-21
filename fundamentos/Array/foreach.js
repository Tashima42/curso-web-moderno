//For Each implementada em JS por padrão
const arrayForEach  = ['elemento1', 'elemento2', 'elemento3', 'elemento4']

arrayForEach.forEach((item,index) => {
    console.log(`${index + 1}) ${item}`)
})

//Minha própria implementação
Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

arrayForEach.forEach2((item,index) => {
    console.log(`${index + 1}) ${item}`)
})