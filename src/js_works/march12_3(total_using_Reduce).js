const App = () => {


  const carts = [
    { id: 1, name: 'shoes', qty: 2, price: 10 },
    { id: 2, name: 'mac', qty: 3, price: 20 },
    { id: 4, name: 'mc', qty: 2, price: 30 },
  ];


  const total = carts.reduce((a, b) => {

    return a + (b.qty * b.price);
  }, 0);
  console.log(total);



  return (
    <div>




    </div>
  )
}
export default App