//Функция для выпадение уведомления выбранного элемента из селектора в виде списка
//function fun() {
//var sel = document.getElementById('mySelect').selectedIndex;
//var options= document.getElementById('mySelect').options;
//alert('Выбрана опция ' +options[sel] .text );
//}

// 1 вариант input с выводом значения
//function fun1() {
    //var rng=document.getElementById('r1'); // переменная с индификатором r1. rng-это input, 
    //var p=document.getElementById('one'); // переменаня с параграфом, которая получает значение парафграфа
    //p.innerHTML=rng.value; // подрузка в парараграф
//}

// 2 вариант input с выводом значения в input
 function fun1() {
    var rng=document.getElementById('r1'); // переменная с индификатором r1. rng-это input, 
    var p=document.getElementById('one'); // переменаня с параграфом, которая получает значение парафграфа
    i1.value=rng.value; // подрузка в параграф
}

// 3 вариант функции со стилем css
function fun1() {
    var rng=document.getElementById('r1'); // переменная с индификатором r1. rng-это input, 
    var div=document.getElementById('test'); // переменаня с параграфом, которая получает значение парафграфа
    div.style.width=rng.value+'px'; // использование стиля с ее шириной, которая равна переменной range по px
}