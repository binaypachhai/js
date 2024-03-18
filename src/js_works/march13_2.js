const App = () => {

  const numbers = [22, 44, 55];
  const [a, b, c] = numbers;

  const peer = {
    id: 1,
    name: 'lio'
  };

  const { id, name } = peer;

  const persons = [
    {
      id: 1,
      habits: [
        {
          morningHabits: {
            morning: 'play badminton'
          }
        }
      ]
    }
  ];

  const [{ habits: [{ morningHabits: { morning } }] }] = persons;

  // const [person] = persons;
  // const { habits } = person;
  // const [nio] = habits;
  // const { morningHabits } = nio;
  // const { morning } = morningHabits;
  // console.log(morning);
  return (
    <div>

      <h1>{name}</h1>

    </div>
  )
}
export default App