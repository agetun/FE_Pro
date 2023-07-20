const users = [{ name: "Sergey" }, { name: "Andrey" }, { name: "Sergey" }, { name: "Andrey" }]


users.forEach((user) => {
  const div = document.createElement('div');
  div.innerHTML = user.name;
  div.classList.add("UserWindow");
  document.body.append(div);
})

