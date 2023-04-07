const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 3 * * 3', function() {
    console.log("Tarefa Realizada. -> ", new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Tarefa Cancelada.')
}, 20000) 

//setImmediate
//setInterval

const rules = new schedule.RecurrenceRule()
rules.dayOfWeek = [new schedule.Range(1, 5)] // de segunda a sexta
rules.hour = 3 // hora
rules.second = 10 // segundo

const tarefa2 = schedule.scheduleJob(rules, function(){
    console.log('Executando tarefa 2. -> ', new Date().getSeconds())
})
