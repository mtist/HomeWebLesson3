# ДЗ №3

## Калькулятор

Написать код реализующий логику калькулятора.

В index.html нужно добавить только атрибуты onclick.

В calculator.js писать весь код логики работы.

Поменять значение с экрана калькулятора, можно обративщись
к input с id='display':

    var display = document.getElementById('display');
    display.value = '1'   // '1' - это надпись, которая выйдет при нажатии на кнопку с цифрой 1

При нажатии на следующую цифру на калькуляторе:
    
    display.value = display.value + '1'
    
Есть несколько способов реализации.
Способы которые вижу я для проведения арифмитических операций:

1. Все кнопки просто меняют текст в #display, 
кроме кнопки '='. После нажатия на нее считать введенный на экране текст и передать в eval(), 
результат отобразить в #display.
Самый простой способ. Когда я писал калькулятор на C# я не мог его использовать
, потому что там нет аналога eval()

        eval('1+2')   / вернет 3

2. Все кнопки просто меняют текст в #display, 
кроме кнопки '='. После нажатия на нее считать введенный на экране текст
Распарсить строку и провести операции.
В данном способе нужно учесть, что может понадобиться явное преобразование типа,
потому, что '1' + '1'  выведет '11' , а не 2 как могло казаться.
'2' * '2' выведет 4.
Это самы сложный способ.

3. Кнопки не только меняют текст, но и сразу выполняют арфмитические действия, сохраняя текущее состояния.
После нажатия кнопки '=' этот результат выводится в #display


Не обязательно, но может пригодиться:
Атрибуту onclick можно передать функцию с параметром 
и не писать для каждой кнопки отдельную функцию:

    <button onclick=func(1)> </button>
    
В данном примере передаем функции func параметр 1       