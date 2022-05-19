const fs = require('fs');
const path = require('path')

const [command, title, content] = process.argv.slice(2)

switch (command){
    case 'create':
        create(title, content)
        break;
    case 'list':
        list()
        break;
    case 'view':
        view(title)
        break
    case 'remove':
        remove(title)
        break;
    default:
        console.log( 'Неизвестная команда' )
}

function create(title, content) {
    init()

    fs.readFile('notes.json', (error, data)=> {
        if(error) return console.error(error.message)
        const notes = JSON.parse(data)
        notes.push({title, content})
        const json = JSON.stringify(notes)

        fs.writeFile('notes.json', json, error => {
            if(error) return console.error(error.message)
            console.log('Заметка создана')
        })
    })

}

function init() {

    let test = fs.existsSync(path.join(__dirname, 'notes.json') )
    if(!test) {
        fs.writeFile('notes.json', JSON.stringify([]), error => {
            if(error) return console.error(error.message)
            console.log('Файл создан')
        })
    }

}

function list() {
    fs.readFile('notes.json', (error, data)=> {
        if(error) return console.error(error.message)
        const notes = JSON.parse(data)
        notes.forEach( (note,index) => console.log(`${index+1}: ${note.title}`))
    })
}

function view(title) {
    fs.readFile('notes.json', (error, data)=> {
        if(error) return console.error(error.message)
        const notes = JSON.parse(data)
        const note = notes.find(note => note.title === title)
        if(!note){
            console.log('Заметка не найдена')
            return
        } else {
            console.log(`${note.content}`)
        }

    })
}

function remove(title) {
    fs.readFile('notes.json', (error, data)=> {
        if(error) return console.error(error.message)
        let notes = JSON.parse(data)
        notes = notes.filter(note => note.title !== title)
        const json = JSON.stringify(notes)

        fs.writeFile('notes.json', json, error => {
            if(error) return console.error(error.message)
            console.log('Заметка удалена')
        })

    })
}



