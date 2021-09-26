let arrayimg = ['1.jpg', '2.jpg', '3.jpg'];
let curId = 0;
let img = document.getElementById('slider'); //это наш элемент slider

function forward() {
    (curId == arrayimg.length - 1) ? curId = 0 : curId++; // если id массива не последний, т.е 2 в данном случии то мы идем дальше и вывадим на экран даннф элемент и прибовляем 1 к перемменной, если id совподает с последним, то мы переопределяем curId на 0
    img.src = '/transition-img/img/' + arrayimg[curId];// переопределяем  src т.е пут нашего элемента
}

function back() {
    (curId == 0) ? curId = arrayimg.length - 1 : curId--;// если первый элемент  индекс совподает с 0 то curId присваиваем последния индекс массива, и от curId минусуе 1
    img.src = '/transition-img/img/' + arrayimg[curId];
}