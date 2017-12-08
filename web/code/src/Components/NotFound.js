import React from 'react';
import { NOT_FOUND } from 'redux-first-router';

export default ({ route }) => {
  switch (route.route) {
    case NOT_FOUND:
      return (
        <main className="notFound">
          <section className="todo">
            <h2>Page Not Found</h2>
          </section>
        </main>
      );
    default:
  }

  return [];
};
