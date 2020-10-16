function IsAPangrams(str) {
    let loweredStr = str.toLowerCase()
    let alphabet = []

    for (let i = 0; i < loweredStr.length; i++) {
        let code = loweredStr.charCodeAt(i)
        if ((code >= 97 && code <= 122) && (alphabet.find(element => element == loweredStr[i])) == undefined) {
            alphabet.push(loweredStr[i])
        }
    }
    if (alphabet.length < 25)
        return false
    else
        return true
}