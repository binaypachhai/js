const App = () => {


  const carts = [
    { id: 1, name: 'shoes', qty: 2, price: 10 },
    { id: 2, name: 'mac', qty: 3, price: 20 },
    { id: 4, name: 'mc', qty: 2, price: 30 },
  ];


  // const newCarts = carts.map((cart) => {
  //   return cart.id === 1 ? { ...cart, name: 'lios' } : cart;
  // });

  // console.log(newCarts);

  const updateArray = (index, id) => {
    const cart = carts.find((cart) => cart.id === id);
    carts[index] = { ...cart, name: 'lkhjklh' };
  }


  updateArray(0, 1);

  console.log(carts);


  return (
    <div>




    </div>
  )
}
export default App