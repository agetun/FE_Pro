//   Напишите функцию, которая принимает строку и возвращает новую строку, в которой все гласные заменены на символ '*'.

const changeLetters = str => {
    let new_str = '';
    for(let i = 0; i < str.length; i++){
      if(str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u' || str[i].toLowerCase() === 'y') {
        new_str += '*'
      } else {
        new_str += str[i]
      }
    }
    return new_str
  }
  
  // console.log(changeLetters('hello')); // h*ll*
  // console.log(changeLetters('GOOD morning')); // G**D m*rn*ng


  // Напишите функцию, которая принимает строку и возвращает новую строку, в которой все буквы заглавные

const upLetters = str => {
    const new_str = '';
    for (let i = 0; i < str.length; i++){
      new_str += str[i].toUpperCase()
    }
    return new_str
  }
  
  const upLetters1 = str => str.toUpperCase();
  
  
  // '' + 'A' + 'B' + 'C' = 'ABC'