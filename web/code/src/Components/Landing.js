import React from 'react';
import Link from 'redux-first-router-link';

export default ({ route }) => {
  switch (route.route) {
    case 'HOME':
      return (
        <main className="landing">
          <section>
            <h2>Work Item List</h2>
            <Link to="/work-item-list">Go</Link>
          </section>
          <section>
            <h2>Charts and Reports</h2>
            <Link to="/charts-and-reports">Go</Link>
          </section>
          <section>
            <h2>New Work Item</h2>
            <Link to="/new-work-item">Go</Link>
          </section>
          <section>
            <h2>Current Sprint</h2>
            <Link to="/current-sprint">Go</Link>
          </section>
        </main>
      );
    default:
  }

  return [];
};
