let i1 = {
    name: 'dog lili',
    imgSrc: 'img/1.jpg',
    price: 10000
};
// тавары в виде объектов

let i2 = {
    name: 'dog asa', // название
    imgSrc: 'img/2.jpg', // фото
    price: 12000// стоимость
};

let i3 = {
    name: 'dog pink',
    imgSrc: 'img/3.jpg',
    price: 15000
};

let i4 = {
    name: 'dog awak',
    imgSrc: 'img/2.jpg',
    price: 11000
};

let arrayItem = [i1, i2, i3, i4]; // название всех этих товаров храним в массиве

let sum = 0;
function init() {
    var catalog = document.querySelector('.catalog');// ишет элемент по классу .catalog - это блок в  html файле
    for (let i = 0; i < arrayItem.length; i++) { // в этом цикле мы обходим массив элементов
        let item = document.createElement('div'); // создаем элемент с тегом div каждому товару
        item.setAttribute('class', 'div_item'); // к этому блоку даем класс по имени 'div_item
        item.appendChild(document.createTextNode(arrayItem[i].name));// к блоку создаем текст, этот текст берем у массива и это будет имена товаров по индексу
        item.style.position = 'relative';
        item.style.border = '0.5px solid gray';

        itemImg = document.createElement('img'); // строи картинку или создаем тег img
        itemImg.src = arrayItem[i].imgSrc; // загружаем фотографии и их берем с массива по индексу
        itemImg.style.display = 'block';
        itemImg.style.height = '120px';
        itemImg.style.width = '160px';

        item.appendChild(itemImg);// нашему блоку добавили картинку

        item.appendChild(document.createTextNode(arrayItem[i].price + '\u20bd')); // в блоке создаем текст т.е добавляем цену 

        itemBtn = document.createElement('button'); // создали и добавили кнопку
        itemBtn.style.position = 'absolute';
        itemBtn.style.right = '0';
        itemBtn.style.bottom = '0';
        itemBtn.textContent = 'buy';
        itemBtn.setAttribute('id', 'btn_' + i);// кнопке присваиваем  id по индексу = btn_0  и т.д
        itemBtn.onclick = addItem; // по клику  мы ее покупаем тоесть вызываем функцию addItem
        item.appendChild(itemBtn);

        catalog.appendChild(item);
    }
}

//--------------------------------------------------

function addItem(event) {// event это событие тоесть кнопка
    var button = event.target; // кнопка на которую кликнули
    var mas = button.id.split('_'); // обращаемся к айдишнику кнопки и преобразуем мтроку айди в массив
    var id = mas[1]; // индекс элемента массива на котором кликнули по кнопке купить-------- нам нужен id индекс 1 нам дает цифру 1 и т.д 
    var selectedItem = arrayItem[id]; //выбранный товар из массива -------- после получения id с помошью этой цифры мы ишем наш товар в массиве по id--- selectedItem это товар который мы покупаем
    // var selectedItem = arrayItem[event.target.id.split("_")[1]];
    var selectedItems = document.getElementsByClassName('selected_items')[0]; // basket
    var tr = selectedItems.insertRow(); // создание строки в таблице
    var td = tr.insertCell();
    td.appendChild(document.createTextNode(selectedItem.name));
    var td = tr.insertCell(); // втвим ячейку
    td.style.textAlign = 'center';
    td.style.width = '100px';
    td.appendChild(document.createTextNode('    ' + selectedItem.price + '\u20bd')); // в ячейку ставим цену товара

    sum += selectedItem.price;// если нажимаем купить то сумма обновляется увеличиваем на цену текушего товара
    document.getElementsByClassName('sum')[0].textContent = 'Sum: ' + sum + '\u20bd'; //и сообщаем стоимость текушего стоимость товара
}



window.onload = init; // запускаем функцию