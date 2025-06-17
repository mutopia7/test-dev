let sample = []



function mergeSort(array) {
    if (array.length <= 1) {
        return array; // آرایه یک‌عضوی یا خالی را مستقیم برمی‌گردانیم
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight); // ترکیب دو نیمه مرتب شده
}




function merge(leftArray, rightArray) {
    const newArray = []
    let i = 0;
    let j = 0;

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            newArray.push(leftArray[i]);
            i++;
        } else if (rightArray[j] < leftArray[i]) {
            newArray.push(rightArray[j]);
            j++;
        } else {
            newArray.push(leftArray[i]);
            newArray.push(rightArray[j]);
            i++;
            j++;
        }

    }

     // اگر یکی از آرایه‌ها هنوز عناصر باقی‌مانده دارد
    return [...newArray, ...leftArray.slice(i), ...rightArray.slice(j)];
}

function analyzeArray(array){
    const sortedArray = mergeSort(array);
    if (sortedArray.length == 0){return "Array is empty"}
    
    let result = {
        average: sortedArray.reduce((pre, next) => pre + next) / sortedArray.length,
        min: sortedArray[0],
        max: sortedArray[sortedArray.length - 1],
        length: sortedArray.length

    }
    return result
}

console.log(analyzeArray(sample))

module.exports = analyzeArray;