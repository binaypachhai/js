class Person {

  nio = '90';
  greet() {
    console.log('hello');
  }

}


class Bank {
  constructor(name) {
    this.bankName = name;
  }

  // balance = 0;
  // deposit() {
  //   this.balance += 90;
  // }
}



const App = () => {
  const date = new Date();
  console.log(date);
  const bank1 = new Bank('prabhu');
  const bank2 = new Bank('nimb');
  console.log(bank1.bankName);
  console.log(bank2.bankName);

  return (
    <div>



    </div>
  )
}
export default App