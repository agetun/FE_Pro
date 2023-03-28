const user = {
    name: "Sergey",
    age: 20,
    friend: {
      nick: '1234'
    }
  };
  
  const { name, age } = user;

//   console.log(name);
//   console.log(age);

//==================================
  
  const { friend: {nick} } = user;
  console.log(nick)

  //============================
  const user2 = {
    name: "Sergey",
    age: 20,
    friend: {
      nick: "1234",
    },
  };
  
  function getName({ name }) {
      return name;
  }
  
  console.log(getName(user2));

  //====================
  const user3 = {
    name: "Sergey",
    age: 20,
    friend: {
      nick: "1234",
    },
  };
  
  const grandma = {
    surname: "Volkova",
  };
  
  function getFullName({name}, {surname}) {
    return name + " " + surname;
  }
  
  console.log(getName(user, grandma));

//===========================
const products = [
    {
      id: 1,
      name: "Cherry",
    },
    {
      id: 2,
      name: "Mango",
    },
  ];
  
  const cherry = products.find(
    ({name}) => name === "Cherry"
  );
  console.log(cherry);


//=====================
const user4 = {
    name: 'Sergey',
    friends: [
        {
            id: 1,
            nick: 'Anton',
        },
        {
            id: 2,
            nick: 'Mari',
        },
        {
            id: 3,
            nick: 'Anatoliy',
            family: {
                count: 10,
                surname: 'Kovalev'
            }
        }
    ]
}


// Задача найти друга со свойством family и вывести его в консоль
// деструктурировать все что можно

const { friends } = user;

friends.forEach(({ family }) => {
  if (family) {
    const { count, surname } = family;
    console.log(count, surname);
  }
});


