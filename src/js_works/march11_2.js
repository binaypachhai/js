const App = () => {

  const numbers = [11, 22, 33, 44];

  const users = [
    { id: 1, name: 'ram', age: 90, gender: 'male' },
    { id: 2, name: 'rita', age: 70, gender: 'female' },
    { id: 3, name: 'hari', age: 60, gender: 'male' },
    { id: 4, name: 'sita', age: 50, gender: 'female' },
  ];

  const carts = [
    { id: 1, name: 'clothes', qty: 2, price: 9000 },
    { id: 2, name: 'bags', qty: 3, price: 6000 },
  ]

  let totalprice = 0;
  carts.forEach((cartF, i) => {

    totalprice = totalprice + cartF.qty * cartF.price;

  });

  let totalage = 0;

  users.forEach((user, i) => {
    // console.log(user, i);
    totalage = totalage + user.age;

  });
  console.log(totalage);
  console.log(totalprice);








  return (
    <div>


    </div>
  )
}
export default App