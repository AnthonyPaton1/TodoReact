import React, { createContext } from "react";
import Reducer from "../reducers/Todo.reducer";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";

const defaultTodos = [
  { id: 1, task: "Mow the lawn", completed: false },
  { id: 2, task: "Have a shower", completed: true },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

function TodosProvider({ children }) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    Reducer
  );

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export default TodosProvider;
