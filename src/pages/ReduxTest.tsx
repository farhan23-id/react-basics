import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { increment, decrement, addBy } from "../redux/slicers/counterSlice";
import { fetchData } from "../redux/slicers/dataSlice";
// import { useEffect } from "react";

const ReduxTest = () => {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter.value);
  const data = useSelector((state: RootState) => state.data.items);
  const status = useSelector((state: RootState) => state.data.status);

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchData());
//     }
//   }, [status, dispatch]);

  return (
    <div>
      <h1>This is ReduxTest Page</h1>
      <hr />
      <div>
        <h2>Counter Reducer</h2>
        <h3>Current value = {count}</h3>
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={() => dispatch(increment())}>add 1</button>
          <button onClick={() => dispatch(decrement())}>min 1</button>
          <button onClick={() => dispatch(addBy(10))}>add 10</button>
          <button onClick={() => dispatch(addBy(-10))}>min 10</button>
        </div>
      </div>
      <br />

      <hr />
      <div>
        <h2>Middleware thunk</h2>
        <h3>Current status = {status}</h3>
        <button
          onClick={() => dispatch(fetchData())}
          disabled={status === "loading"}
          style={{ marginBottom: "12px" }}
        >
          {status === "loading" ? "Loading..." : "Fetch Data"}
        </button>

        {data.map((value) => {
          return (
            <p key={value.id}>
              No.{value.id} {value.title}
            </p>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ReduxTest;
