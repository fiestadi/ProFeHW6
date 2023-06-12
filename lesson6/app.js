
// //*****************TASK1 */
// // Используя ресурс json placeholder получите всех юзеров и отправьте в консоль только 
// // 1) username-ы отсортированный по алфавиту
// // 2) Количество постов каждого из юзеров в параметре: post_count
// // 👉👉👉 Для получения всех юзеров: https://jsonplaceholder.typicode.com/users
// // 👉👉👉 Для получения всех постов: https://jsonplaceholder.typicode.com/posts

function getUsers() {
   fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
         return response.json();
      })
      .then((data) => {
         data.sort((a, b) => a.username ? 1 : -1);
         data.map((item) => {// map metod sortirovka
            console.log(item.username)
         });

      });
}
getUsers();
function getPostCount() {
   fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
         return response.json();
      })
      .then((posts) => {
         let resultArray = [];
         posts.map((item) => {
            resultArray.push(item.userId);
         });
         let counts = {}
         resultArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
         console.log("Post counts: ", counts);
      });
}

getPostCount();

// //********************task 2 */  
//  Выведите всю информацию в виде таблицы на экран и предоставьте функции сортировки по каждой из двух колонок: 
// а) username (default sort by alphabetical) 
// b) post_count
// 👉👉👉 Название функций, названия переменных, названия самих колонок в HTML выберите так, чтобы было понятно что они из себя представляют! 
let table = document.getElementById('tab');
let arr = [];



fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        arr = json;
        sortData();
    });

function sortData() {
document.getElementById('tab_body').innerHTML = ' ';
arr.sort((a, b) => a.username.localeCompare(b.username));// metod localCompare () sravnivaet odnu stroku s druhoj pri sortirovke

  for (let i = 0; i < arr.length; i++) {
        let tr = '<tr>'; //sodaem stroku
        tr += '<td>' + arr[i].username + '</td>'; //dobavliaem stolb 1 v stroku
        tr += '<td>' + arr[i].post_count + '</td>'; // dobavliaem stolb 2 v stroku
        tr += '</td>'; //zakrivaem ctroku tablici
     document.getElementById('tab_body').innerHTML += tr;// dobovliaem 
     //stroku v dom

    };
   
}
sortData();

function sortAskName() {
    // sortiruem
    document.getElementById('sortAskName').style.display = 'none';
    document.getElementById('sortDeskName').style.display = 'inline-block';
    console.log('sortAskName')
    arr.sort((a, b) => a.username.localeCompare(b.username));
    // скрыть текущпю кнопку
    // показать обратную кнопку
    sortData();
}
function sortDeskName() {
    // сортируем в этом месте по убыванию
    document.getElementById('sortAskName').style.display = 'nline-block';
    document.getElementById('sortDeskName').style.display = 'none';
console.log('sortDeskName')
arr.sort((a, b) => b.username.localeCompare(a.username));
    sortData();
}
function sortAskPost() {
    document.getElementById('sortAskPost').style.display = 'none';
    document.getElementById('sortDeskPost').style.display
}

//********************* Task3/
//  Создайте страницу, которая отображает ID, City, Country полученные из запроса по ссылке: https://random-data-api.com/api/address/random_address
// Создайте функцию, которая каждые полторы секунды проверяет - если в ответе на GET запрос поменялся  ID, то вызываем другую функцию, цель которой получить новые данные и обновить HTML, а если данные не изменились - ничего не делаем.
// let currentID = null;
// function getRandomAdress() {
//    fetch('https://random-data-api.com/api/address/random_address')
//       .then((response) => {
//          return response.json();
//       })
//       .then((randomAdress) => {
//          if (currentID !== randomAdress.id) {
//             document.getElementById("id").innerText = randomAdress.id;
//             document.getElementById("country").innerText = randomAdress.country;
//             document.getElementById("city").innerText = randomAdress.city;

//          }
         
//          currentID = randomAdress.id;
//       })
// }
// setInterval(getRandomAdress, 1500);

//*********************Task 3.2 */
//  Выполните GET запрос на ресурс: https://api.twitter.com/1.1/statuses/update.json
// Обработайте все возможные ошибки, а в случае именно этой: Введите в консоль русскими буквами и словами сообщение о том, что именно произошло?


// function getRequest() {
//    fetch('https://api.twitter.com/1.1/statuses/update.json')
//      .then(response => {
//        if (response.ok) {
//          return response.json();
//        } else {
//        new Error('Произошла ошибка: ' + response.status);
//        }
//      })
//      .then(data => {
//        console.log('Ответ получен:', data);
//      })
//      .catch(error => {
//        if (error.message.includes('403')) {
//          console.log('Доступ к Twitter запрещен.');
//        } else if (error.message.includes('404')) {
//          console.log('Файл не найден.');
//        } else {
//          console.log('Произошла ошибка:', error.message);
//        }
//      });
//  }
 
//  getRequest();