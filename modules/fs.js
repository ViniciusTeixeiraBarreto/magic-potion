const fs = require("fs")
const path = require("path")

fs.mkdir(path.join(__dirname, 'teste'), (error) => {
    if (error) {
       return console.log("Pasta ja existe")
    }
    console.log("Pasta criada")
})

fs.writeFile(path.join(__dirname, 'teste', 'teste.txt'), 'Ola', (error) => {
    if (error) {
        return console.log("Arquivo ja existe")
     }
     console.log("Arquivo criado")
})

fs.appendFile(path.join(__dirname, 'teste', 'teste.txt'), 'Ola', (error) => {
    if (error) {
        return console.log("Arquivo nao existe")
     }
     console.log("Arquivo editado")
     readFile()
})


function readFile(){
    fs.readFile(path.join(__dirname, 'teste', 'teste.txt'), (error, data) => {
        if (error) {
            return console.log("Arquivo nao existe")
        }
        console.log(data.toString())
        console.log("Arquivo lido")
    })
}