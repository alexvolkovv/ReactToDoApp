# Full-stack ToDo APP
## Stack
При разработке приложения были использованы следующие технологии:
### Back-end
+ **Express JS** - отвечает за создание сервера
+ **PostgreSQL** - система управления базой данных
+ **pg** - модуль, отвечающий за соединение сервера, написанного на Express, с базой данных PostgreSQL
+ **nodemon** - модуль, отвечающий за автоматическое обновление сервера при изменении файлов 
### Front-end
+ **React** - JavaScript библиотека для создания пользовательских интерфейсов
+ **React-router** - необходим для маршрутизации в веб-приложениях
+ **scss** - препроцессор для css, предназначенный для упрощения написания css кода
### Code quality
+ **eslint** - инструмент для анализа кода и выявления проблемных шаблонов, обнаруженных в коде JavaScript. В данном проекте используется конфиг от Airbnb
+ **prettier** - средство для форматирования кода

## База данных 
Физическая модель базы данных:

![Physical model](https://github.com/alexvolkovv/ReactToDoApp/blob/master/server/%D0%A1%D1%85%D0%B5%D0%BC%D0%B0%20%D0%91%D0%94.jpeg)

Скрипт для создания данной БД можно посмотреть [тут](https://github.com/alexvolkovv/ReactToDoApp/blob/master/server/DataBaseCreatingScript.sql)

## Внешний вид
### Главный экран:

![Main](https://github.com/alexvolkovv/ReactToDoApp/blob/master/images/%D0%9E%D0%B1%D1%89%D0%B8%D0%B9%20%D0%B2%D0%B8%D0%B4.gif)

### Добавление нового списка:

![Add new list](https://github.com/alexvolkovv/ReactToDoApp/blob/master/images/AddingList.gif)

### Удаление списка:

![Removing list](https://github.com/alexvolkovv/ReactToDoApp/blob/master/images/RemovingList.gif)

### Добавление новой задачи:
![Add task](https://github.com/alexvolkovv/ReactToDoApp/blob/master/images/AddingTask.gif)

### Изменение задачи:
![Changing task](https://github.com/alexvolkovv/ReactToDoApp/blob/master/images/ChangingList.gif)
