import React, { useState, useContext } from 'react';
import { ThingContext } from '../context/ThingContext';
import { createThing } from '../api';

const UglyThingsForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const { setUglyThings } = useContext(ThingContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim() === '' || description.trim() === '' || imgUrl.trim() === '') {
      return;
    }

    const newThing = {
      title,
      description,
      imgUrl,
    };

    try {
      const createdThing = await createThing(newThing);
      setUglyThings((prevThings) => [...prevThings, createdThing]);
      setTitle('');
      setDescription('');
      setImgUrl('');
    } catch (error) {
      console.error('Error creating a thing:', error);
    }
  };

  return (
    <div className='form-container'>
      <h2>Add Ugly Thing</h2>
      <form onSubmit={handleSubmit}>

        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Image URL:
          <input type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UglyThingsForm;
