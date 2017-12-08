import React from 'react';
import Link from 'redux-first-router-link';
import Kanban from './Kanban';
import Landing from './Landing';
import WorkItemDetailContainer from './WorkItemDetailContainer';
import NotFound from './NotFound';

export default ({ route }) => [
  <header className="header">
    <h1>Jirotal</h1>
  </header>,
  <nav className="navigation">
    <Link to="/work-item/new">New Work Item</Link>
  </nav>,
  <Kanban route={route} />,
  <Landing route={route} />,
  <WorkItemDetailContainer route={route} />,
  <NotFound route={route} />,
];
