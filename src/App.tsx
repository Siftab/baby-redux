import { useState } from "react";
import "./App.css";
import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/Hook";
import { RootState } from "./redux/store";
import { FaBoxOpen } from "react-icons/fa";

function App() {
  // const [boxes,setBoxes]=useState([])
  const { count } = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="h-screen flex justify-center items-center flex-col space-y-10">
      <h1 className="text-3xl">react+ redux+typescript</h1>
      <div className=" flex space-x-10 items-center p-10 border border-purple-700 rounded-md">
        <button
          className="px-4 py-3 text-white bg-green-500 rounded-md"
          onClick={() => dispatch(increment())}
        >
          increment
        </button>
        <p>{count} </p>
        <button
          className="px-4 py-3 text-white bg-red-500 rounded-md"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
      </div>
      <div className="border border-purple-600 p-20">
        <h1>this is tally center</h1>
        <div className="grid grid-cols-3 gap-5">
          {count < 5 ? (
            <p className="text-green-500">need positive count for box</p>
          ) : (
            Array.from({ length: Math.floor(count / 5) }).map(() => (
              <span>
                <FaBoxOpen />
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
