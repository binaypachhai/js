const App = () => {


  const persons = ['ram', 'shyam', 'hari', 'gita'];
  const newPersons = ['john', 'simon'];
  // const n = persons.includes('ram');
  // console.log(n);
  // const n = [11, 22].concat(persons);
  // console.log(n);
  const allTo = [...persons, ...newPersons, 'l', 'k'];
  console.log(allTo);
  // console.log(persons);

  const persons = ['ram', 'shyam', 'hari', 'gita'];
  console.log(persons.slice(1, 10))



  return (
    <div>

    </div>
  )
}
export default App