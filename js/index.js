//-----------------------------------------------------------------------------функция принимает массив и возвращает сумму всех его элементов

function sumArr(meaning) {
    var sum = 0;
    for (i = 0; i < meaning.length; i++) {
        sum += meaning[i]
    }
    return sum;
}
console.log(sumArr([1, 2, 3, 4, 5, 6]));

//-----------------------------------------------------------------------------функция принимает массив и искомое значение и возврат его индекс в массиве, если значение найдено, если нет - то -1

function desiredValue(arr, desired) {
    return arr.indexOf(desired)
}
console.log(desiredValue([1, 2, 3, 4, 5, 6], 7));

// //-----------------------------------------------------------------------------функция принимает 2 массива и возвращает новый, состоящий из элементов обоих массивов

function arrayUnion(arrOne, arrTwo) {
    var arrUnion = [];
    for (var i = 0; i < arrOne.length; i++) {
        arrUnion.push(arrOne[i]);
    }
    for (var q = 0; q < arrTwo.length; q++) {
        arrUnion.push(arrTwo[q]);
    }
    return arrUnion;
}
console.log(arrayUnion([1, 2, 3], [4, 5, 6]));