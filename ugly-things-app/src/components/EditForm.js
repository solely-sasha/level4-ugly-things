import React, { useState } from 'react';
import { updateThing } from '../api';

const EditForm = ({ thing, setEditingId }) => {
  const [title, setTitle] = useState(thing.title);
  const [description, setDescription] = useState(thing.description);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      setError('Please enter a title and description.');
      return;
    }

    try {
      const updatedThing = {
        title,
        description,
        imgUrl: thing.imgUrl,
      };

      await updateThing(thing._id, updatedThing);
      // Handle successful update
      setEditingId(null); // Reset editingId to exit edit mode
    } catch (error) {
      console.error(`Error updating thing with ID ${thing._id}:`, error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Edit Ugly Thing</h2>
      <form className="edit-form" onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        {error && <div className="error">{error}</div>}
        <div className="actions">
          <button type="submit">Save</button>
          <button onClick={() => setEditingId(null)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
