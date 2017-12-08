import React from 'react';
import Link from 'redux-first-router-link';
import Kanban from './Kanban';
import Landing from './Landing';
import WorkItemDetailContainer from './WorkItemDetailContainer';
import WorkItemList from './WorkItemList';
import NotFound from './NotFound';

export default ({ route }) => [
  <header className="header">
    <Link to="/" className="jir">Jir</Link>
    <Link to="/" className="otal">otal</Link>
  </header>,
  <nav className="navigation">
    <Link to="/">Home</Link>
    <Link to="/work-item-list">Work Item List</Link>
    <Link to="/charts-and-reports">Charts and Reports</Link>
    <Link to="/new-work-item">New Work Item</Link>
    <Link to="/current-sprint">Current Sprint</Link>
  </nav>,
  <Kanban route={route} />,
  <Landing route={route} />,
  <WorkItemDetailContainer route={route} />,
  <WorkItemList route={route} />,
  <NotFound route={route} />,
];
