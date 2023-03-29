
const user = {
  name: "Sergey",
  age: 100,
  salary: 10000000,
  profession: "surgery",
  music: "Rock",
  /// 100 properties,
};

// const { name, age, ...other } = user;

// console.log(name, age, other);

const userCopy = {...user};

console.log(userCopy)

// const {...userCopy} = user;

const nums = [5, 32, 334, 25, 58, 85];
    const nums2 = [1 ,2, 4, 5, 6];
   
    const result = [...nums, nums2] // [5, 32, 334, 25, 58, 85, 1 ,2, 4, 5, 6]

    console.log(result)

    // просто числа в кучу складывает
    const [...n1] = nums
    const [...n2] = nums2

    const n3 = n1 + n2
    console.log(n3)
    // =================
    const array = [
      {
        age: 10,
      },
      {
        age: 20,
      },
      {
        age: 15,
      },
    ];
    array.sort((a, b) => a - b); //???
    console.log(array)

    // =========================
    const array1 = ['10', '15', '20'];
    // какой то код
    const string = array1.reduce((acc, el) => acc + el, 'Sergey'); // "10 15 20";
    console.log(string);

    // const array = ["10", "15", "20"];

    const result2 = array.reduce((acc, current) => {
      acc[current] = current;
      return acc;
    }, {});

    console.log(result2);
    /*
      {
        10: "10",
        15: "15",
        20: "20",
      }
    */
    
      // С помощью редьюса сумму вычислить
      const array2 = [1, 2, 3, 4, 5, 6];

      const sumArray2 = array2.reduce((acc, el) => acc + el, 0);

      console.log(sumArray2);

      // ==========================
      const users = [
        {
          name: "Sergey",
          age: 10,
        },
        {
          name: "Anrey",
          age: 30,
        },
      ];
  
      /*
        ageSum -> сумму возрастов пользователей (решить с помощью reduce)
      */

        // const { age } = users
        const ageSum = users.reduce((acc, el) => acc + el.age, 0);

        console.log(ageSum);

        // ============================
          
        /*
          ageSum1 -> строку "Sergey 10 Andrey 30" (решить с помощью reduce)
        */
          const ageSum1 = users.reduce((acc, user) => {
            return acc + user.name + " " + user.age + " ";
          }, "");
      
          console.log(ageSum);


      