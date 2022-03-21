import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import './task.css';

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

  onChange = (e) => {
    this.setState({ taskDesc: e.target.value });
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.props.onTaskNewValue(this.state.taskDesc);
  };

  render() {
    const { className, created, onDelete, onCompleted, onEditing } = this.props;
    const tm = formatDistanceToNow(created, { includeSeconds: true });

    return (
      <li className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description" onClick={onCompleted}>
              {this.state.taskDesc}
            </span>
            <span className="created">{`created ${tm} ago`}</span>
          </label>
          <button className="icon icon-edit" onClick={onEditing} />
          <button className="icon icon-destroy" onClick={onDelete} />
        </div>
        {className === 'editing' ? (
          <form onSubmit={this.formSubmit}>
            <input type="text" className="edit" value={this.state.taskDesc} onChange={this.onChange} autoFocus />
          </form>
        ) : null}
      </li>
    );
  }
}
