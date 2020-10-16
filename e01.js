function howManyCamelCase(str) {
    let result = 1
    for (let i = 0; i < str.length; i++)
    {
        let code = str.charCodeAt(i)
        if (code >= 65 && code <= 90) result++
    }
    return result;
}
