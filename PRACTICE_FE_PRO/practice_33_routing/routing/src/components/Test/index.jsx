import React from 'react'

export default function Test() {

    const employees = [
        {id: 1, name: "Иван Иванов", position: "Менеджер", salary: 50000 },
        {id: 2, name: "Алексей Петров", position: "Разработчик", salary: 70000 },
        {id: 3, name: "Елена Сидорова", position: "Дизайнер", salary: 60000 },
        {id: 4, name: "Ольга Смирнова", position: "Тестировщик", salary: 55000 },
        {id: 5, name: "Дмитрий Васильев", position: "Аналитик", salary: 65000 },
        {id: 6, name: "Анна Кузнецова", position: "Менеджер проекта", salary: 75000 },
        {id: 7, name: "Павел Николаев", position: "Разработчик", salary: 72000 },
        {id: 8, name: "Наталья Игнатьева", position: "Тестировщик", salary: 56000 },
        {id: 9, name: "Максим Григорьев", position: "Дизайнер", salary: 61000 },
        {id: 10, name: "Сергей Федоров", position: "Аналитик", salary: 67000 }
      ];

      //  написать функцию, которая получает в качестве аргумента массив из объектов и
    // возвращает массив из имен сотрудников

    function getNames(arr) {
        return arr.map(({name}) => name)
        // return arr.map(({position}) => position)
    }

    console.log(getNames(employees));

    function getPositions(arr) {
        return arr.map(({position}) => position)
    }

    console.log(getPositions(employees));

    //  написать функцию, которая получает в качестве аргумента массив из объектов и
    // возвращает массив из объектов, которые содержать имя сотрудника и позицию

    
    // написать функцию, которая возвращает массив из имен аналитиков

    function getAnalitics(arr) {
        return arr.filter(({position}) => position === 'Аналитик')
    }

    console.log(getAnalitics(employees));

    // создать функцию, которая возвращает массив из зарплат разработчиков

    function getSalaries(arr) {
        return arr.filter(({position}) => position === 'Разработчик')
        .map(({salary}) => salary)
    }

    console.log(getSalaries(employees));

    // создать функцию удаления пользователя. Функция получает два аргумента
    // - массив из сотрудников
    // - id удаляемого сотрудника 
    // и возвращает массив из сотрудников, кроме удаляемого

    function remove(arr, removeID) {
        return arr.filter(({id}) => id !== removeID)
    }

    console.log(remove(employees, 1));


    function instSalary(arr, incrId) {
        return arr.map(item => {
            if (item.id === incrId) {
                item.salary += 1000;
            }
            return item
        })        
    }
    
    console.log(instSalary(employees, 2));

  return (
    <div>Test</div>
  )
}
