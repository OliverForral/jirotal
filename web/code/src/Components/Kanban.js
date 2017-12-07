import React from 'react';
import Link from 'redux-first-router-link';

export default () => (
  <span class="kanban">
    <header className="header">Jirotal</header>
    <span className="todo">To Do</span>
    <span className="doing">In Progress</span>
    <span className="review">Code Review</span>
    <span className="testing">In Testing</span>
    <span className="pwner">Waiting PO</span>
    <span className="scrra">SCR/RA</span>
    <span className="ready">Ready To Merge</span>
    <span className="done">Done</span>
  </span>
);
