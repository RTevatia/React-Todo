import { useReducer } from "react";
import "./App.css";
import TasksContext from "./state-management/contexts.ts/tasksContext";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import taskReducer from "./state-management/reducers/taskReducer";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts.ts/authContext";

function App() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);
  const [user, authdispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{user, dispatch: authdispatch}}>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
