const App = () => {

  // function sdlkjsdks() {

  // }

  // const nio = (hjhj) => {

  // }


  // const ni = {
  //   name: 'asdlads',
  //   ni: () => {

  //   }
  // };

  const handleClick = () => {
    console.log(Math.floor(Math.random() * 100));
    // const x = Math.floor(Math.random() * 100);
    // console.log(x);
    // console.log('hello world');
  }

  return (
    <div className="p-3 space-y-5">
      <div>
        <input
          // onKeyDown={(e) => {
          //   console.log(e.key);
          // }}
          // onChange={(e) => {
          //   console.log(e.target.value);
          // }}
          className="border-[1px] border-b-black p-2 outline-none" type="text" placeholder="type some" />
      </div>

      <button
        onClick={(e) => {
          handleClick();
          // console.log('akuhkh');
        }}
        // onMouseEnter={(e) => {
        //   console.log(e);
        //   console.log('mouse Enter ');
        // }}


        className="bg-black text-white px-2 py-1 rounded">Press</button>


      <p onCopy={(e) => {
        console.log('asd;lk');
      }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A placeat reiciendis ullam officia quisquam voluptatum dolorem veniam modi excepturi saepe.</p>

    </div>
  )
}
export default App