import React from 'react';
import Kanban from './Kanban';

export default ({ note, onClick }) => {
  return !note.id ? <Kanban /> : <h1>NOTE: {note.id}</h1>;
};
