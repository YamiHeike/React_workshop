import { type KeyboardEventHandler, useReducer, useRef } from "react";
import { Button, Input, Text } from "../../ui";

export const Stepper = () => {
  type State = {
    count: number;
  };

  enum ActionType {
    INCREMENT = "increment",
    DECREMENT = "decrement",
    SET_VALUE = "set-value",
  }

  type Action = {
    type: ActionType;
    payload?: number;
  };

  const initialState: State = { count: 0 };
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case ActionType.DECREMENT:
        return { count: state.count - 1 };

      case ActionType.INCREMENT:
        return { count: state.count + 1 };
      case ActionType.SET_VALUE:
        if (action.payload) {
          return { count: action.payload };
        } else {
          return state;
        }

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //A clear way to define dispatch arguments:

  const decrement = () => ({ type: ActionType.DECREMENT });
  const increment = () => ({ type: ActionType.INCREMENT });
  const setValue = (value: number) => ({
    type: ActionType.SET_VALUE,
    payload: value,
  });

  const valueRef = useRef<HTMLInputElement>(null);

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (evt) => {
    if (evt.code === "Enter" && valueRef.current) {
      dispatch(setValue(parseInt(valueRef.current.value, 10)));
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        {/*onClick={() => dispatch({ type: ActionType.DECREMENT })*/}
        <Button label="-" onClick={() => dispatch(decrement())} />
        <div className="mx-2">
          <Text>{state.count}</Text>
        </div>
        {/*onClick={() => dispatch({ type: ActionType.INCREMENT })*/}
        <Button label="+" onClick={() => dispatch(increment())} />
        <Input
          label="Value:"
          type="number"
          onKeyDown={handleKeyDown}
          ref={valueRef}
        />
      </div>
    </div>
  );
};
