console.log("Делаем свои методы массива");

const names = ['Sergey', 'Andrey', 'Sasha'];

// names.forEach((item) => {
  // console.log(item.toUpperCase());
// })

// function myForEach(array, callback) {
  // for (let i = 0; i < array.length; i++) {
    // const element = array[i];
    // console.log('myForEach', element);
    // callback(element);    
  // }
// }

// myForEach(names, (item) => {
  // console.log(item.toUpperCase());
// } );

// const newNames = names.map((item) => {
  // return item.toUpperCase();
// })

// console.log(names);
// console.log(newNames);

// map

function myMap(array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    newArray.push(callback(element));    
  }
  return newArray;
}

const newNames = myMap(names, (item) => {
  return item.toUpperCase()
});
console.log(names, newNames);