import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@mui/material";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodosProvider from "./context/todos.context";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontWeight: 200,
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#fafafa",
    },
  },
});

function TodoApp() {
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ padding: 0, margin: 0, height: "100vh" }} elevation={0}>
        <AppBar position="static" height="64px" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Todo in React
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justifyContent="center" style={{ marginTop: "2rem" }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodosProvider>
              <TodoForm />
              <TodoList />
            </TodosProvider>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default TodoApp;
