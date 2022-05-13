const fs = require('fs')

console.log((process.hrtime()[0] / 60).toFixed(5))
console.log('Antes da leitura do arquivo')
const dados = fs.readFile('file.txt', (err, data) => {
  if (err) throw err
  var fim = (process.hrtime()[0] / 60).toFixed(5)
  console.log("terminei de ler nesse momento:"+fim)
  
})

console.log('Executanto')
console.log((process.hrtime()[0] / 60).toFixed(5))
