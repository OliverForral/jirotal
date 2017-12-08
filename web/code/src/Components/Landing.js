import React from 'react';

export default ({ route }) => {
  switch (route.route) {
    case 'HOME':
      return (
        <main className="landing">
          <section className="section1">
            <h2>Incoming Requests</h2>
          </section>
          <section className="section2">
            <h2>Charts</h2>
          </section>
          <section className="section3">
            <h2>New Work Item</h2>
          </section>
          <section className="section4">
            <h2>Current Sprint</h2>
          </section>
        </main>
      );
    default:
  }

  return [];
};
