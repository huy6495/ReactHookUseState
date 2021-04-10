import {
  addTask,
  changeStatus,
  changeTheme,
  delTask,
  editTask,
  updateTask,
} from "../Types/ToDoListType";

export const addTaskAction = (newTaskName) => {
  return {
    type: addTask,
    newTaskName,
  };
};

export const changeThemeAction = (theme) => {
  return {
    type: changeTheme,
    theme,
  };
};

export const delTaskAction = (id) => {
  return {
    type: delTask,
    id,
  };
};

export const changeStatusAction = (id) => {
  return {
    type: changeStatus,
    id,
  };
};

export const editTaskAction = (task) => {
  return {
    type: editTask,
    task,
  };
};

export const updateTaskAction = (task) => {
  return {
    type: updateTask,
    task,
  };
};
