const App = () => {

  const numbers = [11, 22, 33, 44];

  const users = [
    { id: 1, name: 'ram', age: 90, gender: 'male' },
    { id: 2, name: 'rita', age: 70, gender: 'female' },
    { id: 3, name: 'hari', age: 60, gender: 'male' },
    { id: 4, name: 'sita', age: 50, gender: 'female' },

  ];

  const dat = users.map((user) => {
    user.val = `${user.name.toUpperCase()} ${user.name}`;
    return user;
  })




  return (
    <div>
      {users.map((user, i) => {
        return <div>
          <h1>{user.age}</h1>
          <p>{user.name}</p>
        </div>;

      })}

    </div>
  )
}
export default App