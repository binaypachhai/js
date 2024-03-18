const App = () => {

  const age = 90;
  const isShow = false;

  const newsTitle = 'Today News';
  const calcAge = () => {

  }

  return (
    <div>

      <h3>{age > 50 ? 'senior' : 'junior'}</h3>
      <p>{`show is ${isShow}`}</p>
      <h1>{newsTitle} {age}</h1>

    </div>

  )
}
export default App