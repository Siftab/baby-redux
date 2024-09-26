import "./App.css";

function App() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl">react+ redux+typescript</h1>
      <div className=" flex space-x-10 items-center">
        <button className="px-4 py-3 text-white bg-green-500 rounded-md">increment</button>
        <p> count number</p>
        <button className="px-4 py-3 text-white bg-red-500 rounded-md">decrement</button>
      </div>
    </div>
  );
}

export default App;
