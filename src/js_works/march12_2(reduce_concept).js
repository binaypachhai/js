const App = () => {




  const numbers = [22, 44, 55, 77, 99];

  const nio = numbers.reduce((c, n) => {
    console.log('lio');
    return c + n;
  }, 0);

  console.log(nio);

  return (
    <div>




    </div>
  )
}
export default App