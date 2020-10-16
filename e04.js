function Count(array, value) {
    let result = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) result++
    }
    return result
}

function Average(array) {
    let temp = 0
    for (let i = 0; i < array.length;i++) {
        temp += array[i]
    }
    return temp / array.length
}

function Min(array) {
    let result = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] < result) result = array[i]
    }
    return result
}

function Max(array) {
    
    let result = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > result) result = array[i]
    }
    return result
}

function Shift(array) {
    let result = []
    for (let i = 1; i < array.length; i++) {
        result.push(array[i])
    }
    return result
}

function Diff(array) {
    return Max(array) - Min(array)
}

let array = [10, 15, 12, 8, 6, 13, 18]

console.log(Count(array, 12))
console.log(Average(array))
console.log(Min(array))
console.log(Max(array))
console.log(Shift(array))
console.log(Diff(array))