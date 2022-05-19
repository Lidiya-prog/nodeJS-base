const { stdin, stdout } = process

const flag = process.argv[2]
const allowFlags = ['-d', '-f']

if( !flag || !allowFlags.includes(flag)){
    stdout.write(' Запуститe программу с флагом "-d" или "-f" \n')
    process.exit()
}

flag === '-d' ? stdout.write(__dirname) : stdout.write(__filename)
process.exit()
