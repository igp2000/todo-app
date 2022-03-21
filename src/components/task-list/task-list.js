import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../task';
import './task-list.css';
export default class TaskList extends Component {
  static defaultProps = {
    taskData: [],
    filterCompleted: null,
    onDelete: () => {},
    onCompleted: () => {},
    onEditing: () => {},
    onTaskNewValue: () => {},
  };

  static propTypes = {
    taskData: PropTypes.array,
    filterCompleted: PropTypes.bool,
    onDelete: PropTypes.func,
    onCompleted: PropTypes.func,
    onEditing: PropTypes.func,
    onTaskNewValue: PropTypes.func,
  };

  render() {
    const { taskData, filterCompleted, onDelete, onCompleted, onEditing, onTaskNewValue } = this.props;

    const tasks = taskData.map((task) => {
      const { id, ...attrs } = task;

      if (filterCompleted === null || task.completed === filterCompleted) {
        return (
          <Task
            {...attrs}
            key={id}
            onDelete={() => onDelete(id)}
            onCompleted={() => onCompleted(id)}
            onEditing={() => onEditing(id)}
            onTaskNewValue={(desc) => onTaskNewValue(id, desc)}
          />
        );
      }
      return null;
    });

    return <ul className="todo-list">{tasks}</ul>;
  }
}
