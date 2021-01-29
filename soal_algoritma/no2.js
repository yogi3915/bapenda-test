function soal2(value) {
    let temp = [1,2]

    let angkaAwal = 1
    let angkaAkhir = 2

    while (temp.length < value) {
        let hasil = angkaAwal + angkaAkhir
        temp.push(hasil)
        angkaAwal = angkaAkhir
        angkaAkhir = hasil
    }

    let temp2 = []
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] % 2 == 0) {
            temp2.push(temp[i])
        }
    }

    console.log(temp2);

    return temp2.length
}

console.log(soal2(4000000)); // 1424