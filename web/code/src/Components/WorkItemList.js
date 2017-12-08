import React from 'react';

export default ({ route }) => {
  switch (route.route) {
    case 'WORK_ITEM_LIST':
      return (
        <main className="work-items">
          <h2>Work Items Go Here</h2>
        </main>
      );
    default:
  }

  return [];
};
