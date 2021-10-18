let array = Array.from({ length: 40000 }, () => Math.floor(Math.random() * 40000));

function buble_sort(array) {
    console.time('buble_sort time')

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j + 1] < array[j]) {
                [array[j + 1], array[j]] = [array[j], array[j + 1]]
            }
        }
    }
    console.timeEnd('buble_sort time')
    return array

}
buble_sort(array)
// console.log(buble_sort(array))

function buble_sort_optimized(array) {
    console.time('buble_sort_optimized time')
    let break_flag;
    for (let i = 0; i < array.length; i++) {
        break_flag = true;
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j + 1] < array[j]) {
                [array[j + 1], array[j]] = [array[j], array[j + 1]]
                break_flag = false;
            }
        }
        if (break_flag) {
            break;
        }
    }
    console.timeEnd('buble_sort_optimized time')
    return array
}
buble_sort_optimized(array)
// console.log(buble_sort_optimized(array))

function insertionSort(array) {
    console.time('insertionSort time')
    for (let i = 1; i < array.length; i++) {
        for (let j = i - 1; j < -1; j--) {
            if (array[j + 1] < array[j]) {
                [array[j + 1], array[j]] = [array[j], array[j + 1]]
            }
        }

    }
    console.timeEnd('insertionSort time')
    return array

}
insertionSort(array)

function selectionSort(array) {
    console.time('selectionSort time')
    let min
    for (let i = 0; i < array.length; i++) {
        min = i

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }

        if (min != i) {
            [array[i], array[min]] = [array[min], array[i]]
        }
    }
    console.timeEnd('selectionSort time')
    return array
}
selectionSort(array)
// console.log(selectionSort(array))