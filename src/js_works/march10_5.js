const App = () => {


  let i = 1;
  while (i <= 15) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + " fizz buzz");
    } else if (i % 3 === 0) {
      console.log(i + " fizz");
    }
    else if (i % 5 === 0) {
      console.log(i + " is buzz");
    }
    i++;
  }

  return (
    <div>

    </div>
  )
}
export default App