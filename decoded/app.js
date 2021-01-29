function decode(word) {
    let alphabeth = word.toUpperCase()
    let arrayAlphabeth = [
        'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'
        ]
    let key1 = [
        'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y',
        'Z', 'A'
      ]
    let key2 = [
        'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X',
        'A', 'B', 'C', 'D', 'E', 'F',
        'G', 'H', 'I', 'J', 'K', 'L',
        'Y', 'Z'
      ]

    let temp = '' 

    for (let i = 0; i < alphabeth.length; i++) {
        for (let j = 0; j < arrayAlphabeth.length; j++) {
            if (alphabeth[i] == arrayAlphabeth[j] && i == 0) {
                temp += key1[j]
                break
            } else if (alphabeth[i] == arrayAlphabeth[j] && i == 1) {
                temp += key2[j]
                break
            } else if (alphabeth[i] == arrayAlphabeth[j] && i == 2) {
                temp += key1[j]
                break
            } else if (i % 3 == 0) {
                temp += key1[j]
                break
            } else {
                temp += key2[j]
            }
        }
    }

    return temp
}
                                     //"THEORIGINAL"
console.log(decode("UTFPFUHUBBX")); // "UTFPFUHUBBX" 
//                                      121 122 122 122 122
                                    //  012 345 678 910
// (i == 0) ==> key1
// (i == 1) ==> key2
// (i == 2) ==> key1
// (i % 3 == 0) ==> key1
// else ==> key2