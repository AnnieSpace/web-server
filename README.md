# web-server
### Как запустить проект?
1. Склонировать этот репозиторий себе
2. Скачать нужные зависимости
    + npm install express --save
    + npm install body-parser --save
    + npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env
3. Добавить конфигурацию node.js
4. Запустить проект :)  
  
#### Также потребуется Postman для проверки работы запросов!


### Что должно получиться?
Отправляются запросы GET, POST, PUT, PATCH. Рассмотрим каждый из них на примерах.
  
#### **POST**
Создадим песика, который говорит "Гав". Как видим, объект создался :)
![](https://github.com/AnnieSpace/web-server/blob/master/img/post-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81.png)
#### **GET 1.0**
Попробуем получить нашего песика. Успех!
![](https://github.com/AnnieSpace/web-server/blob/master/img/get-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81.png)
#### **PATCH**
Попробуем научить песика говорить "Ауф". Получилось!
![](https://github.com/AnnieSpace/web-server/blob/master/img/patch-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81.png)
#### **GET 2.0**
Но нужно проверить, правда ли он научился...
![](https://github.com/AnnieSpace/web-server/blob/master/img/get-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%20(2).png)
#### **PUT**
Чтобы песику не было скучно, создадим котика при помощи PUT-запроса :)
![](https://github.com/AnnieSpace/web-server/blob/master/img/put-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81.png)
