import React from 'react';
import Link from 'redux-first-router-link';
import Kanban from './Kanban';
import Landing from './Landing';
import WorkItemDetailContainer from './WorkItemDetailContainer';
import NotFound from './NotFound';

export default ({ route }) => [
  <header className="header">
    <span className="jir">
      <Link to="/">Jir</Link>
    </span>
    <span className="otal">
      <Link to="/">otal</Link>
    </span>
  </header>,
  <nav className="navigation">
    <Link to="/incoming-work-items">Proposed Work Items</Link>
    <Link to="/charts-and-reports">Charts and Reports</Link>
    <Link to="/new-work-item">New Work Item</Link>
    <Link to="/current-sprint">Current Sprint</Link>
  </nav>,
  <Kanban route={route} />,
  <Landing route={route} />,
  <WorkItemDetailContainer route={route} />,
  <NotFound route={route} />,
];
