export enum ActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RESET = "RESET",
}

interface IState {
  count: number;
}

export const initialState: IState = {
  count: 0,
};

interface IAction {
  type: ActionType;
  payload: number;
}

export const reducer = (state = initialState, action: IAction) => {
  const { INCREMENT, DECREMENT, RESET } = ActionType;
  const { payload, type } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        number: payload,
      };
    case DECREMENT:
      return {
        ...state,
        number: payload,
      };
    case RESET:
      return {
        ...state,
        number: 0,
      };
  }
};
