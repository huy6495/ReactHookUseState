import React, { Component } from "react";
import { Container } from "./Container/Container";
import { ThemeProvider } from "styled-components";
import { Dropdown } from "./Container/Dropdown";
import { Heading3 } from "./Container/Heading";
import { TextField } from "./Container/TextField";
import { Button } from "./Container/Button";
import { Table, Th, Thead, Tr } from "./Container/Table";
import { connect } from "react-redux";
import {
  addTaskAction,
  changeStatusAction,
  changeThemeAction,
  delTaskAction,
  editTaskAction,
  updateTaskAction,
} from "../../redux/Actions/ToDoListAction";
import { arrTheme } from "../../Components/Themes/ThemeManager";

class ToDoList extends Component {
  state = {
    task: "",
  };

  renderTaskToDo = () => {
    return this.props.tasks
      .filter((task) => !task.completed)
      .map((task, index) => (
        <Tr key={index}>
          <Th>{task.taskName}</Th>
          <Th className="text-right">
            <Button
              className="mr-1"
              onClick={() => {
                this.props.changeStatusTask(task.id);
              }}
            >
              <i className="fa fa-check"></i>
            </Button>
            <Button
              className="mr-1"
              onClick={() => {
                this.props.editTask(task);
              }}
            >
              <i className="fa fa-edit"></i>
            </Button>
            <Button
              className="mr-1"
              onClick={() => {
                this.props.delTask(task.id);
              }}
            >
              <i className="fa fa-trash"></i>
            </Button>
          </Th>
        </Tr>
      ));
  };

  renderTaskComplete = () => {
    return this.props.tasks
      .filter((task) => task.completed)
      .map((task, index) => (
        <Tr key={index}>
          <Th>{task.taskName}</Th>
          <Th className="text-right">
            <Button
              className="mr-1"
              onClick={() => {
                this.props.delTask(task.id);
              }}
            >
              <i className="fa fa-trash"></i>
            </Button>
          </Th>
        </Tr>
      ));
  };

  renderTheme = () => {
    return arrTheme.map((theme, index) => {
      return (
        <option key={index} value={theme.id}>
          {theme.name}
        </option>
      );
    });
  };

  updateTaskRender = () => {
    let index = this.props.tasks.findIndex(
      (task) => task.id == this.props.taskEdit.id
    );
    if (index != -1) {
      let tasksUpdate = {
        id: this.props.taskEdit.id,
        taskName: this.state.task,
        completed: false,
      };
      this.props.updateTask(tasksUpdate);
    }
  };

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Container className="w-50">
          <Dropdown
            onChange={(e) => {
              let { value } = e.target;
              this.props.changeTheme(value);
            }}
          >
            {this.renderTheme()}
          </Dropdown>
          <Heading3>To do list</Heading3>
          <TextField
            label="Task name"
            className="w-50"
            onChange={(e) => {
              this.setState({ task: e.target.value });
            }}
            value={this.state.task}
          ></TextField>
          <Button
            className="ml-2"
            onClick={() => {
              this.props.addTask(this.state.task);
            }}
          >
            <i className="fa fa-plus"></i>
            Add Task
          </Button>
          <Button
            className="ml-2"
            onClick={() => {
              this.updateTaskRender();
            }}
          >
            <i className="fa fa-upload"></i> Update Task
          </Button>
          <hr></hr>
          <Heading3>Task To Do</Heading3>
          <Table>
            <Thead>{this.renderTaskToDo()}</Thead>
          </Table>
          <hr></hr>
          <Heading3>Task Completed</Heading3>
          <Table>
            <Thead>{this.renderTaskComplete()}</Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.taskEdit.id != this.props.taskEdit.id) {
      this.setState({ task: this.props.taskEdit.taskName });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.ToDoListReducer.currentTheme,
    tasks: state.ToDoListReducer.tasks,
    taskEdit: state.ToDoListReducer.taskEdit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: (themeValue) => {
      dispatch(changeThemeAction(themeValue));
    },
    addTask: (taskName) => {
      dispatch(addTaskAction(taskName));
    },
    delTask: (id) => {
      dispatch(delTaskAction(id));
    },
    changeStatusTask: (id) => {
      dispatch(changeStatusAction(id));
    },
    editTask: (task) => {
      dispatch(editTaskAction(task));
    },
    updateTask: (task) => {
      dispatch(updateTaskAction(task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
