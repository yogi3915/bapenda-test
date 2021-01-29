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
            if (key1[j] == alphabeth[i] && i == 0) {
                temp += arrayAlphabeth[j]
            } else if (key2[j] == alphabeth[i] && i == 1) {
                temp += arrayAlphabeth[j]
            } else if (key1[j] == alphabeth[i] && i == 2) {
                temp += arrayAlphabeth[j]
            } else if (i % 3 == 0 && key1[j] == alphabeth[i]) {
                temp += arrayAlphabeth[j]
            } else if (i % 3 !== 0 && key2[j] == alphabeth[i]) {
                temp += arrayAlphabeth[j]
            }
        }
    }

    return temp
}
                                     //"THE ORI GIN AL"
console.log(decode("UTFPFUHUBBX")); // "UTF PFU HUB BX" 
//                                      121 122 122 122 122
                                    //  012 345 678 910
// (i == 0) ==> key1
// (i == 1) ==> key2
// (i == 2) ==> key1
// (i % 3 == 0) ==> key1
// else ==> key2