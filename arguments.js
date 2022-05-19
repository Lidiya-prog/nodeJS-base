const { stdout, stdin, exit } = process;
const flag = process.argv[2];
const allowedFlags = ['-m', '-s'];
if (!allowedFlags.includes(flag)) {
    stdout.write('Попробуйте ещё раз запустить файл с флагом -s или -m');
    exit();
}
stdout.write('Введите, пожалуйста, два числа\n');
stdin.on('data', data => {
    const numString = data.toString();
    const numStringsArray = numString.split(' ');
    const hasIncorrectLength = numStringsArray.length !== 2;
    const hasIncorrectValues = numStringsArray.some(numStr => Number.isNaN(+numStr));
    if (hasIncorrectLength || hasIncorrectValues) {
        stdout.write('Нужно ввести 2 числа, разделенных пробелом');
        exit();
    }
    const [firstNum, secondNum] = numStringsArray.map(numStr => +numStr);
    if (flag === '-s') {
        const sum = firstNum + secondNum;
        stdout.write(`${firstNum} + ${secondNum} = ${sum}`);
    } else {
        const mult = firstNum * secondNum;
        stdout.write(`${firstNum} * ${secondNum} = ${mult}`);
    }
    exit();
});