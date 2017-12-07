import React from 'react';
import Link from 'redux-first-router-link';

export default ({ note, onClick }) =>
  <div>
    {!note.id
      ? <div>
          <h1>HOME</h1>
          
          <Link to="/note/123">Note 123</Link>
          <Link to={{ type: 'NOTE', payload: { id: 456 } }}>Note 456</Link>
          <span onClick={onClick}>Note 5</span>
        </div>
      
      : <h1>NOTE: {note.id}</h1>
    }
  </div>;
