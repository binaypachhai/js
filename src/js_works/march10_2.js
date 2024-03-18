const App = () => {


  const person = {
    name: 'ram',
    age: 90,
    nio: { li: 'hi' }
  };

  const { name, age, nio: { li } } = person;


  return (
    <div>
      <p>{li}</p>
      <p>{person.name}</p>
      <h1 className="text-pink-700 uppercase text-2xl tracking-widest">{name}</h1>
    </div>
  )
}
export default App