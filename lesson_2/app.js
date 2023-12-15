/*var inn = '23456789765432'
var firstNumber = Number (inn[2])
if ((firstNumber ===9 || firstNumber ===7 || firstNumber ===7) && inn.length ===14){
    console.log('ok')
}else{
    console.error('error')
}

var amount = prompt('Enter amount')
var currency = prompt('Enter currency')
var convert = 0
switch (currency){
    case 'USD':
        convert = amount/89
        break
    case 'EUR':
        convert = amount/102
        break
    case 'RUB':
        convert = amount/1
        break
    default:
        console.warn('INVALID CURRENCY')

}
console.log(`${convert} ${currency}`)
if (currency === 'USD'){
    convert = amount/89
}else if (currency === 'EUR'){
    convert = amount/102
}else if (currency === 'RUB'){
    convert = amount/1
}else{
    console.warn('INVALID CURRENCY')
}
console.log(`${convert} ${currency}`)

console.log(999/0)
*/


//DZ 1
var starbucksCoffeeCompany = {
    tea: {
        blackTea: 'Черный классический чай',
        greenTea: 'Зеленый классический  чай',
        karkade: '"Каркаде" это травяной чай с насыщенным вкусом',
        milkTea: 'Черный чай с добавлением молока'},
    coffee: {
        cappuccino: '"Капучино" это кофе с добавлением молока',
        americano: '"Американо" это классический черный кофе',
        latte: '"Латте" это сладкий кофе с нежными сливками',
        iceCoffee: '"Айскофе" это холодный классический кофе с молоком'
    },
    soda: {
        cocaCola: '"Кокакола" это известный газированный напиток с освежающим вкусом',
        fanta: '"Фанта" это известный газированный напиток со вкусом апельсина',
        pepsi: '"Пепси" это известный газированный напиток с освежающим вкусом',
        monster: '"Монстор" это известный бодрящий энергетик',
    },
    dessert: {
        brownie: '"Брауни" это известный шоколадный десерт с трепким вкусом',
        cheeseCake: '"Чизкейк" это популярный десерт с нежным сливочным вкусом',
        tiramisu: '"Тирамису" это известный десерт с воздушной текстурой',
        paneCake: '"Панкейк" это утренний десерт с разным добавлением сиропов'
    }
}
var menu = prompt('Что вы желаете? (чай, кофе, напиток, десерт)')
if (menu === 'чай') {
    var choiceOfTea = prompt('Какой чай вы желаете? (черный, зеленый, каркаде, чай с молоком)')
    if (choiceOfTea === 'черный') {
        alert('Вы заказали - ' + starbucksCoffeeCompany.tea.blackTea)
    } else if (choiceOfTea === 'зеленый') {
        alert('Вы заказали - ' + starbucksCoffeeCompany.tea.greenTea)
    } else if (choiceOfTea === 'каркаде') {
        alert('Вы заказали - ' + starbucksCoffeeCompany.tea.karkade)
    } else if (choiceOfTea === 'чай с молоком') {
        alert('Вы заказали - ' + starbucksCoffeeCompany.tea.milkTea)
    }
}else if( menu === 'кофе'){
    var choiceOfCoffee = prompt('Какой кофе вы желаете?(капучино, американо, латте, айскофе)')
    if (choiceOfCoffee === 'капучино'){
        alert('Вы заказали - ' + starbucksCoffeeCompany.coffee.cappuccino)
    }else if(choiceOfCoffee === 'американо'){
        alert('Вы заказали - ' + starbucksCoffeeCompany.coffee.americano)
    }else if(choiceOfCoffee === 'латте'){
        alert('Вы заказали - ' + starbucksCoffeeCompany.coffee.latte)
    }else if(choiceOfCoffee === 'айскофе') {
        alert('Вы заказали - ' + starbucksCoffeeCompany.coffee.iceCoffee)
    }
}else if (menu === 'напиток'){
    var choiceOfSoda = prompt('Какой напиток вы желаете?(кола, фанта, пепси, монстор)')
    if (choiceOfSoda === 'кола'){
        alert('Вы заказали - ' + starbucksCoffeeCompany.soda.cocaCola)
    }else if(choiceOfSoda=== 'фанта'){
        alert('Вы заказали - ' + starbucksCoffeeCompany.soda.fanta)
    }else if(choiceOfSoda=== 'пепси'){
        alert('Вы заказали - ' + starbucksCoffeeCompany.soda.pepsi)
    }else if(choiceOfSoda=== 'монстор') {
        alert('Вы заказали - ' + starbucksCoffeeCompany.soda.monster)
    }
}else if (menu === 'десерт'){
    var choiceOfDessert = prompt('Какой десерт вы желаете?(брауни, чизкейк, тирамису, панкейк)')
    if (choiceOfDessert === 'брауни'){
        alert('Вы заказали - ' + starbucksCoffeeCompany.dessert.brownie)
    }else if(choiceOfDessert=== 'чизкейк'){
        alert('Вы заказали - ' + starbucksCoffeeCompany.dessert.cheeseCake)
    }else if(choiceOfDessert=== 'тирамису'){
        alert('Вы заказали - ' + starbucksCoffeeCompany.dessert.tiramisu)
    }else if(choiceOfDessert=== 'панкейк')
    {
        alert('Вы заказали - ' + starbucksCoffeeCompany.dessert.paneCake)
    }
}else{
    alert('Введите корректную информацию из меню')
}


//DZ 2
for (var i = 0; i <= 100; i++){
    if (i % 3 ===0 ){
        console.log('fizz')
    }else if (i % 5 === 0){
        console.log('buzz')
    }else if (i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz')
    }else {
        console.log(i)
    }
}


//DZ 3
var month = prompt('Введите месяц')
switch (month){
    case 'декабрь':
    case 'январь':
    case 'февраль':
        alert('Зимний сезон')
        break
    case 'март':
    case 'апрель':
    case 'май':
        alert('Весенний сезон')
        break
    case 'июнь':
    case 'июль':
    case 'август':
        alert('Летний сезон')
        break
    case 'сентябрь':
    case 'октябрь':
    case 'ноябрь':
        alert('Осенний сезон')
        break
    default :
        alert('Вы ввели неправильный месяц')
}


//DZ 4
var array = [[[[[[[[[[[2]]]]]]]]]]]
var result = array[0][0][0][0][0][0][0][0][0][0][0]
console.log(result)







