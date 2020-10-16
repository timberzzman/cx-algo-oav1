function marsos(str) {
    let SOS = "SOS"
    let result = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == SOS[0]) {
            for (let j = 0; j <= SOS.length && (j + i) < str.length; j++) {
                if (j == SOS.length) {
                    i+= j - 1
                    break
                }
                else if (str[i + j] != SOS[j]) {
                    result++
                }
            }
        }
    }
    return result
}