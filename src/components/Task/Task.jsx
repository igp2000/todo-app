import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import './Task.css';

export default class Task extends Component {
  static defaultProps = {
    className: null,
    created: Date.now(),
    onDelete: () => {},
    onCompleted: () => {},
    onEditing: () => {},
  };

  static propTypes = {
    className: PropTypes.string,
    created: PropTypes.number,
    onDelete: PropTypes.func,
    onCompleted: PropTypes.func,
    onEditing: PropTypes.func,
  };

  state = {
    taskDesc: this.props.description,
  };

  onChange = (event) => {
    this.setState({ taskDesc: event.target.value });
  };

  formSubmit = (event) => {
    event.preventDefault();
    this.props.onTaskNewValue(this.state.taskDesc);
  };

  render() {
    const { id, className, created, completed, onDelete, onCompleted, onEditing } = this.props;
    const tm = formatDistanceToNow(created, { includeSeconds: true });

    return (
      <li className={className}>
        <div className="view">
          <input id={`chb${id}`} className="toggle" type="checkbox" onChange={onCompleted} checked={completed} />
          <label htmlFor={`chb${id}`}>
            <span className="description">{this.state.taskDesc}</span>
            <span className="created">{`created ${tm} ago`}</span>
          </label>
          <button className="icon icon-edit" onClick={onEditing} title="Edit" />
          <button className="icon icon-destroy" onClick={onDelete} title="Delete" />
        </div>
        {className === 'editing' && (
          <form className="form-edit" onSubmit={this.formSubmit} style={{ margin: 0 }}>
            <label style={{ padding: 0 }}>
              <input type="text" className="edit" value={this.state.taskDesc} onChange={this.onChange} autoFocus />
            </label>
          </form>
        )}
      </li>
    );
  }
}
