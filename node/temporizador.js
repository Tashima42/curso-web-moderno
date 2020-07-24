const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * 5', function() {
    console.log('tarefa: ', new Date().getSeconds())
})

setTimeout(function (){
    tarefa1.cancel()
    console.log('Cancelando')
}, 30000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 10
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa 2', new Date().getSeconds())
}) 