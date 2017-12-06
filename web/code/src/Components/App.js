import React from 'react';
import Link from 'redux-first-router-link';

export default ({ noteId, onClick }) =>
<div>
  {!noteId
    ? <div>
        <h1>HOME</h1>
        
        <Link to="/note/123">Note 123</Link>
        <Link to={{ type: 'NOTE', payload: { id: 456 } }}>Note 456</Link>
        <span onClick={onClick}>Note 5</span>
      </div>
    
    : <h1>NOTE: {noteId}</h1>
  }
</div>;
