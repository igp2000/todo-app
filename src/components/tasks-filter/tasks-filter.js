import React from 'react';
import './tasks-filter.css';
import PropTypes from 'prop-types';

const TasksFilter = ({ setFilter }) => {
  const dataFilter = (flag, e) => {
    e.preventDefault();
    const btn = document.querySelector('.filters .selected');
    btn.classList.remove('selected');
    e.target.classList.add('selected');
    setFilter(flag);
  };

  return (
    <ul className="filters">
      <li>
        <button className="selected" onClick={(e) => dataFilter(null, e)}>
          All
        </button>
      </li>
      <li>
        <button onClick={(e) => dataFilter(false, e)}>Active</button>
      </li>
      <li>
        <button onClick={(e) => dataFilter(true, e)}>Completed</button>
      </li>
    </ul>
  );
};

TasksFilter.defaultProps = {
  setFilter: () => {},
};

TasksFilter.propTypes = {
  setFilter: PropTypes.func,
};

export default TasksFilter;
