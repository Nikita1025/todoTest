const initialState: TodoType = {
  filter: 'all',
};
export const todoReducer = (
  state: TodoType = initialState,
  action: ActionType,
): TodoType => {
  switch (action.type) {
    case 'CHANGE-FILTER': {
      return { ...state, filter: action.filter };
    }
    default:
      return state;
  }
};

export const changeFilterAC = (filter: FilterValuesType) =>
  ({ type: 'CHANGE-FILTER', filter } as const);

export type ActionType = ReturnType<typeof changeFilterAC>;

export type TodoType = {
  filter: FilterValuesType;
};
export type FilterValuesType = 'all' | 'active' | 'completed';
