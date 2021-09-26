

//---------- 1 вариант-----------------
window.onload = function () { //Сперва загружается html страница а потом ничинает работать  скрипт
    var images = document.getElementsByTagName('img'); // массив картинок получаем все теги <img> 
    for (var i = 0; i < images.length; i++) {// перебираем каждую картинку и каждому картинку назначаем событию onclick с помошью функции showBigPicture
        images[i].onclick = showBigPicture;
    }
}

function showBigPicture(event) {// кк источник события используем глобальный объект event
    console.log(event);
    var BigPictureBlock = document.getElementById('bigs'); //Получаем элемент по ID (т.е получаем наш блок)
    BigPictureBlock.innerHTML = ''; // очищаем внутри этого блока(ели не очищать при клике картинки остаются на экране и каждая картинка выходит рядом, стобы каждая картинка появлялось в 1 эгземпляре в окне надо содиржимое этого блока очищать)
    var smolPicture = event.target; // та картинка которое мы кликнули(нажали) (event.target-это то же самое thise)
    // var imageNameParts = smallPicture.id.split("_");
    // var src = 'img2/' + imageNameParts[1] + '.jpg';
    var path = 'img2/' + smolPicture.id.split('_')[1] + '.jpg';//берем 2ю папку и туда загружаем нашу фотку по id из smolPicture.id. берем имена и преобразуем в массив по нижнему подчеркиванию и добавим .jpg, и этим мы получаем путь
    var bigs = document.createElement('img');
    bigs.src = path;// обращаемя блоку больших картинок добавили атрибут <src> и добавили путь  "bigs = document.createElement('img');"
    BigPictureBlock.appendChild(bigs);// и размещаем в наш блрк
    bigs.onerror = function () {//в случии ошибки дает ошибку
        alert('file not found');
    }
}


//---------- 2 вариант-----------------

// window.onload = function () {
//     var images = document.querySelectorAll('img'); // берем тег img и собираем коллекцию
//     for (var item of images) {//пребираем наш тег img и по ним если кликаем 
//         item.onclick = function () {// сработает фун-я которое поменяет название папок
//             document.getElementById('big').src = this.src.replace('img', 'img2');
//         }
//     }
// }