import React, { useContext } from "react";
import { Paper } from "@mui/material";
import { List, Divider } from "@mui/material";
import Todo from "./Todo";
import { TodosContext } from "./context/todos.context";

const TodoList = () => {
  const todos = useContext(TodosContext);
  // Check if todos is an array before calling map
  if (!Array.isArray(todos)) {
    console.error("Todos is not an array:", todos);
    return null; // or render something else to indicate an error
  }

  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <React.Fragment key={todo.id}>
              <Todo {...todo} />
              {i < todos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default TodoList;
