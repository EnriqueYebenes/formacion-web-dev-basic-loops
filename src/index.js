// Iteration #1: Find the maximum — Devuelve el mayor de dos números (entrada: num1, num2; salida: número mayor)
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    }
    else { return num2 }


}



// Iteration #2: Find longest word — Devuelve la palabra más larga en un array de strings (o null si el array está vacío)
function findLongestWord(par) {
    if (par.length === 0) {
        return null
    }
    let longestWord = ``
    for (let i = 0; i < par.length; i++) {
        if (par[i].length > longestWord.length) {
            longestWord = par[i]

        }
    }
    return longestWord


}



// Iteration #3: Calculate the sum — Suma todos los números de un array y devuelve el total (0 para array vacío)
function sumNumbers(number) {
    let total = 0
    for (let i = 0; i < number.length; i++) {
        total = (number[i] + total)

    }
    return total
}






// Iteration #3.1 Bonus: sum — Suma elementos heterogéneos: números (valor), strings (longitud), booleanos (true=1, false=0). Lanza error para objetos/arrays.
function sum(elements) {
    let total = 0


    for (let i = 0; i < elements.length; i++) {
        if (typeof elements[i] === "number") {
            total = (elements[i] + total)
        }
        else if (typeof elements[i] === "string") {
            total = (elements[i].length + total)
        }
        else if (typeof elements[i] === "boolean") {
            if (elements[i] === true) {
                total = (1 + total)
            }
        }
        else if (typeof elements[i] === "object") {
            throw new Error("Unsupported data type sir or ma'am")
        }

    }
    return total



}




// Iteration #4: Calculate the average
// Level 1: Array of numbers — Calcula la media aritmética de un array de números (null para array vacío)
function averageNumbers(array) {
    let average = 0

    for (let i = 0; i < array.length; i++) {
        average = (array[i] + average)
    }
    return average / array.length

}


// Level 2: Array of strings — Calcula la media de longitudes de las palabras en un array (null para array vacío)
function averageWordLength(array) {

    let average = 0

    for (let i = 0; i < array.length; i++) {
        average = (array[i] + average)
    }
    return (average.length - 1) / array.length




}

// Bonus - Iteration #4.1: avg — Calcula la media de un array mixto usando las mismas reglas que `sum` (null para array vacío)
function avg(elements) {
    let total = 0


    for (let i = 0; i < elements.length; i++) {
        if (typeof elements[i] === "number") {
            total = (elements[i] + total)
        }
        else if (typeof elements[i] === "string") {
            total = (elements[i].length + total)
        }
        else if (typeof elements[i] === "boolean") {
            if (elements[i] === true) {
                total = (1 + total)
            }
        }
        else if (typeof elements[i] === "object") {
            throw new Error("Unsupported data type sir or ma'am")
        }

    }
    return total / elements.length

}

// Iteration #5: Unique arrays — Elimina duplicados de un array y devuelve un nuevo array (null para array vacío)
function uniquifyArray(array) {
    let newArray = []
    if (array.length === 0) {
        return null
    }

    for (i = 0; i < array.length; i++) {

        if (!newArray.includes(array[i])) {

            newArray.push(array[i])

        }

    }
    return newArray
}


// Iteration #6: Find elements — Comprueba si una palabra existe en un array; devuelve true/false o null si el array está vacío
function doesWordExist(arrayWord, search) {
    if (arrayWord.length === 0) {
        return null
    }
    if (arrayWord.includes(search)) {
        return true
    }
    else {
        return false
    }



}


// Iteration #7: Count repetition — Cuenta cuántas veces aparece una palabra en un array (0 para array vacío)
function howManyTimes(arrayWords, wordSearch) {

}


// Iteration #8: Bonus - greatestProduct — Calcula el mayor producto de 4 números adyacentes en la matriz (horizontal y vertical)
function greatestProduct(matrix) {

}
