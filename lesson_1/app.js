//DZ 1 /*
/* var currentYear = 2023
var year = prompt('Введите год вашего рождения:')
if (year && year <= currentYear) {
    var age = currentYear - year
    alert('Ваш возраст: ' + age + ' лет')
} else {
    alert('некорректная дата')
}


//DZ 2
var country = prompt('Напишите страну')
var town = prompt('Напишите столицу')
if (country === 'Кыргызстан' && town === 'Бишкек'){
    alert('Поздравляю! Это Кыргызстан! Код страны - "996"')
}else if (country === 'Казахстан' && town === 'Алматы'){
    alert('Поздравляю! Это Казахстан! Код страны - "997"')
}else if ( country ==='Россия'&& town === 'Москва') {
    alert('Поздравляю! Это Россия! Код страны - "+7"')
}else if(country === 'Америка' && town === 'Вашингтон'){
    prompt('Поздравляю! Это Америка! Код страны - "+1"')
}else if(country === 'Япония' && town === 'Токио'){
    alert('Поздравляю! Это Япония! Код страны - "+81"')
}else{
    alert('Введите корректную страну или столицу')
}
*/
 var a = 2
var b = a =1
alert(a)