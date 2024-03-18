const App = () => {

  const numbers = [11, 22, 33, 44];

  const users = [
    { id: 1, name: 'ram', age: 90, gender: 'male' },
    { id: 2, name: 'rita', age: 70, gender: 'female' },
    { id: 3, name: 'hari', age: 60, gender: 'male' },
    { id: 4, name: 'sita', age: 50, gender: 'female' },
    { id: 5, name: 'ita', age: 50, gender: 'female' },
  ];


  const findRam = users.find((user) => {
    return user.age === 50;
  });

  console.log(findRam);












  return (
    <div>


    </div>
  )
}
export default App