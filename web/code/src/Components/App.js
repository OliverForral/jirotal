import React from 'react';
import Kanban from './Kanban';
import Note from './Note';

export default ({ note }) => 
  ([
    <header className="header">
      <h1>Jirotal</h1>
    </header>,
    <nav className="navigation">Navigation</nav>,
    main(note)
  ])


const main = (note) => {
  return !note.id ? <Kanban /> : <Note note={note} />;
};
