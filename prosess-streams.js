const { stdin, stdout } = process

//1 task
stdout.write('Как тебя зовут?\n')

stdin.on('data', (data)=> {
    stdout.write(`Hello ${data}`)
    process.exit()

})

process.on('exit', ()=> stdout.write( 'Bye!' ))

//2 task

stdin.on( 'data', (data) => {
    const dataString = data.toString().split('').reverse().join('')
    stdout.write( `Name reverse ${ dataString } \n`)
    process.exit()
})