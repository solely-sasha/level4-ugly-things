import React, { useContext, useState } from 'react';
import { ThingContext } from '../context/ThingContext';
import { deleteThing } from '../api';
import EditForm from './EditForm';

const UglyThings = () => {
  const { uglyThings, setUglyThings } = useContext(ThingContext);
  const [editingId, setEditingId] = useState(null);

  const handleDelete = async (thingId) => {
    try {
      await deleteThing(thingId);
      setUglyThings((prevThings) => prevThings.filter((thing) => thing._id !== thingId));
    } catch (error) {
      console.error(`Error deleting thing with ID ${thingId}:`, error);
    }
  };

  const handleEdit = (thingId) => {
    setEditingId(thingId);
  };

 

  return (
    <div className='container'>
      <h2>Ugly Things</h2>
      {uglyThings.length === 0 ? (
        <p>No ugly things found.</p>
      ) : (
        <ul className='ugly-things'>
          {uglyThings.map((thing) => (
            <li className='ugly-thing' key={thing._id}>
              {editingId === thing._id ? (
                <EditForm thing={thing} setEditingId={setEditingId} />
              ) : (
                <div className='ugly-things-show'>
                  <img src={thing.imgUrl} alt="Ugly Thing" />
                  <h3>{thing.title}</h3>
                  <p> Description: {thing.description}</p>
                  <div className='actions'>
                  <button onClick={() => handleDelete(thing._id)}>Delete</button>
                  <button onClick={() => handleEdit(thing._id)}>Edit</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UglyThings;
