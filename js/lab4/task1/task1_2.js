let arrayContainer1 = document.getElementById("arrayContainer1");
let arrayContainer2 = document.getElementById("arrayContainer2");
let calculateContainer = document.getElementById("calculateContainer");
let swappedArrayContainer = document.getElementById("swappedArrayContainer");
let sortedSwappedArrayContainer = document.getElementById("sortedSwappedArrayContainer");
let generateArraysButton = document.getElementById("generateArraysButton");
let calculateArrayButton = document.getElementById("calculateArrayButton");
let swapElementsButton = document.getElementById("swapElementsButton");
let sortSwappedArrayButton = document.getElementById("sortSwappedArrayButton");

let array1 = [];
let array2 = [];
let array3 = [];
let swappedArray = [];

// Функція для генерації перших двох масивів
function generateArrays() {
    array1 = [];
    array2 = [];

    for (let i = 0;  i < 10; i++) {
    let randomInteger1 = Math.floor(Math.random() * 100);
    let randomInteger2 = Math.floor(Math.random() * 100);

    array1.push(randomInteger1);
    array2.push(randomInteger2);
    }

    arrayContainer1.textContent = "Масив 1: " + array1.join(", ");
    arrayContainer2.textContent = "Масив 2: " + array2.join(", ");
}

// Функція для обчислення третього масиву
function calculateArray() {
    array3 = [];

    for (let i = 0; i < 10; i++) {
    let element1 = array1[i];
    let element2 = array2[i];

    if (element1 !== element2) {
        let result = 1 / (element1 - element2);
        array3.push(result);
    } else {
        array3.push(1);
    }
    }

    calculateContainer.textContent = "Масив 3: " + array3.join(", ");
}

function swapElements() {
    swappedArray = array3.slice(); // Створюємо копію третього масиву
    let maxElementIndex = swappedArray.indexOf(Math.max(...swappedArray));
    let temp = swappedArray[0];
    swappedArray[0] = swappedArray[maxElementIndex];
    swappedArray[maxElementIndex] = temp;
  
    swappedArrayContainer.textContent = "Масив з заміненими елементами: " + swappedArray.join(", ");
  }
  
// Функція для бульбашкового сортування масиву в порядку зростання
function bubbleSort(arr) {
let len = arr.length;
for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
    }
    }
}
return arr;
}

// Функція для виведення відсортованого масиву зі зміненими найбільшим елементом та першим елементом
function sortSwappedArray() {
let sortedSwappedArray = bubbleSort(swappedArray.slice()); // Створюємо копію заміненого масиву та сортуємо його



sortedSwappedArrayContainer.textContent = "Відсортований масив зі зміненими елементами: " + sortedSwappedArray.join(", ");
}

// Додати обробник подій для кнопок
generateArraysButton.addEventListener("click", generateArrays);
calculateArrayButton.addEventListener("click", calculateArray);
swapElementsButton.addEventListener("click", swapElements);
sortSwappedArrayButton.addEventListener("click", sortSwappedArray);
  