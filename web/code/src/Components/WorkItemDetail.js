import React from 'react';

export default ({ route }) => {
  switch (route.route) {
    case 'WORK_ITEM_NEW':
      return (
        <article>
          <h1>New Work Item</h1>
          <fieldset>
            <legend>Work Item Proposal</legend>
            <label for="who">Who is impacted?</label>
            <textarea id="who" />
            <label for="which">Which product/environment?</label>
            <textarea id="which" />
            <label for="what">What is the problem?</label>
            <textarea id="what" />
            <label for="steps">What steps lead to this problem?</label>
            <textarea id="steps" />
            <button>Create New Work Item Proposal</button>
          </fieldset>
          <fieldset>
            <legend>Accepted Work Item</legend>
            <label for="title">Title</label>
            <textarea id="title" />
            <label for="description">Description</label>
            <textarea id="description" />
            <button>Create New Accepted Work Item</button>
          </fieldset>
        </article>
      );
    case 'WORK_ITEM_VIEW':
      return <h1>WORK_ITEM: </h1>;
    default:
  }

  return [];
};
