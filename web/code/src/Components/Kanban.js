import React from 'react';

export default ({ route }) => {
  switch (route.route) {
    case 'SPRINT_VIEW':
      return (
        <main className="kanban">
          <section className="todo">
            <h2>To Do</h2>
          </section>
          <section className="doing">
            <h2>In Progress</h2>
          </section>
          <section className="review">
            <h2>Code Review</h2>
          </section>
          <section className="testing">
            <h2>In Testing</h2>
          </section>
          <section className="pwner">
            <h2>Waiting PO</h2>
          </section>
          <section className="scrra">
            <h2>SCR/RA</h2>
          </section>
          <section className="ready">
            <h2>Ready To Merge</h2>
          </section>
          <section className="done">
            <h2>Done</h2>
          </section>
        </main>
      );
    default:
  }

  return [];
};
