// Задание 2
// Вам дана заготовка и результат, который вы должны получить.
// Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
}
`;

const data = JSON.parse(jsonString);
const lst = data.list;


const list = [
    { name: lst[0].name, age: Number(lst[0].age), prof: lst[0].prof },
    { name: lst[1].name, age: Number(lst[1].age), prof: lst[1].prof },
]

console.log(list)