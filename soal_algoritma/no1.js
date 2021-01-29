function soal1(angka) {

    let temp = []
    let result = 0
    for (let i = 1; i < angka; i++) {
        if(i % 3 == 0) {
            temp.push(i)    
        } else if(i % 5 == 0) {
            temp.push(i)
        }
    }

    for (let i = 0; i < temp.length; i++) {
        result += temp[i]
    }

    return result
}

console.log(soal1(1000)) //  hasil 233168