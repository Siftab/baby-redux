import "./App.css";
import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/Hook";
import { RootState } from "./redux/store";

function App() {

const {count} = useAppSelector((state:RootState)=>state.counter)
const dispatch = useAppDispatch()
  return (
    <div className="h-screen flex justify-center items-center flex-col space-y-10">
      <h1 className="text-3xl">react+ redux+typescript</h1>
      <div className=" flex space-x-10 items-center p-10 border border-purple-700 rounded-md">
        <button className="px-4 py-3 text-white bg-green-500 rounded-md" onClick={()=>dispatch(increment())}>increment</button>
        <p>{count} </p>
        <button className="px-4 py-3 text-white bg-red-500 rounded-md" onClick={()=>dispatch(decrement())}>decrement</button>
      </div>
    </div>
  );
}

export default App;
