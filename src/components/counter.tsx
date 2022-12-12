import { useReducer } from "react";
import { initialState, reducer } from "./utills/reducer";

export const Counter = () => {
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>{JSON.stringify(state)}</p>
      {/*  TODO Dispatch actions*/}
      <button
      // onClick={() => dispatch({ type: ActionType.DECREASE, payload: 5 })}
      >
        Increment
      </button>
    </div>
  );
};
