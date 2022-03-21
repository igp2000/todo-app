import React, { Component } from 'react';
import './new-task-list.css';
import PropTypes from 'prop-types';

export default class NewTaskList extends Component {
  static defaultProps = {
    className: null,
    placeholder: '',
  };

  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
  };

  state = {
    newTask: '',
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.props.taskAdd(this.state.newTask);
    this.setState({ newTask: '' });
  };

  onChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  render() {
    const { className, placeholder } = this.props;

    return (
      <form className="form-new-task-list" onSubmit={this.formSubmit}>
        <input
          className={className}
          placeholder={placeholder}
          value={this.state.newTask}
          onChange={this.onChange}
          autoFocus
        />
      </form>
    );
  }
}
