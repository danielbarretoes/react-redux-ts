import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "../redux/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment by 10
        </button>
        <button onClick={() => dispatch(incrementAsync(1))}>
          Increment by 1 Async
        </button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
      </div>
    </div>
  );
};

export default Counter;
