const App = () => {

  const car = {
    id: 4,
    name: 'tesla'
  };

  const { id, name: ji } = car;

  const persons = [
    { id: 1, name: 'ram', age: 90 },
    { id: 2, name: 'sita', age: 70 },
  ];

  const [{ age }, name,] = persons;

  console.log(age);


  return (
    <div>



    </div>
  )
}
export default App