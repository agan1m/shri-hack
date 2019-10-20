

function bubbleSort(arr) {
    let i = 0;
    let j;
    let swap;
    while(i < arr.length) {
        if(i + 1 !== arr.length && arr[i] > arr[i + 1]) {
            j = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = j;
            swap = 1
        }
        i++;
        if (i === arr.length && swap === 1) {
            swap = 0;
            i = 0;
        }
    }
    return arr;
}

console.log(bubbleSort([5, 1, 3, 10, 4, 9]))