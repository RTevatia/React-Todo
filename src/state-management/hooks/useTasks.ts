import { useContext } from "react";
import TasksContext from "../contexts.ts/tasksContext";

const useTasks = () => useContext(TasksContext);

export default useTasks;