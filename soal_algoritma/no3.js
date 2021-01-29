function soal3(angka){

    let temp = ''
    for (let i = 1; i <= angka; i++) {
        for (let j = angka; j >= i; j--) {
            temp += ' '
        }
        for (let k = 1; k <= i; k++) {
            temp += '*'
        }
        for (let l = 1; l <= i-1; l++) {
            temp += '*'
        }
        temp += '\n'
    }

    return temp
}

console.log(soal3(10));