import { arrTheme } from "../../Components/Themes/ThemeManager";
import {
  addTask,
  changeStatus,
  changeTheme,
  delTask,
  editTask,
  updateTask,
} from "../Types/ToDoListType";

const stateDefault = {
  currentTheme: arrTheme[0].theme,
  tasks: [
    { id: 0.1, taskName: "Fix Bug A", completed: false },
    { id: 0.2, taskName: "Fix Bug B", completed: true },
    { id: 0.3, taskName: "Fix Bug C", completed: false },
    { id: 0.4, taskName: "Fix Bug D", completed: true },
  ],

  taskEdit: {},
};

export const ToDoListReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case changeTheme: {
      // console.log(action.theme);
      let index = arrTheme.findIndex((theme) => theme.id == action.theme);
      // console.log(index);
      if (index !== -1) {
        state.currentTheme = arrTheme[index].theme;
      }
      return { ...state };
    }
    case addTask: {
      let tasksUpdate = [...state.tasks];
      if (action.newTaskName.trim() === "") {
        alert("Task name is required!");
        return { ...state };
      }
      let newTask = {
        id: Math.random(),
        taskName: action.newTaskName,
        completed: false,
      };
      let index = tasksUpdate.findIndex(
        (task) => task.taskName === newTask.taskName
      );
      if (index === -1) {
        state.tasks = [...tasksUpdate, newTask];
        return { ...state };
      } else {
        alert("Task already exists");
      }
    }
    case delTask: {
      let tasksUpdate = [...state.tasks];
      let index = tasksUpdate.findIndex((task) => task.id === action.id);
      if (index !== -1) {
        tasksUpdate.splice(index, 1);
      }
      state.tasks = tasksUpdate;
      return { ...state };
    }
    case changeStatus: {
      let tasksUpdate = [...state.tasks];
      let index = tasksUpdate.findIndex((task) => task.id === action.id);
      if (index !== -1) {
        tasksUpdate[index].completed = true;
      }
      state.tasks = tasksUpdate;
      return { ...state };
    }
    case editTask: {
      state.taskEdit = action.task;
      return { ...state };
    }
    case updateTask: {
      let tasksUpdate = [...state.tasks];
      let index = tasksUpdate.findIndex((task) => task.id == action.task.id);
      if (index != -1) {
        tasksUpdate[index] = { ...action.task };
      }
      state.tasks = tasksUpdate;
      return { ...state };
    }
  }

  return state;
};
