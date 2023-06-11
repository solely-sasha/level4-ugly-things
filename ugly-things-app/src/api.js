import axios from 'axios';



const getAllThings = async () => {
  try {
    const response = await axios.get('https://api.vschool.io/ss/thing');
    return response.data;
  } catch (error) {
    console.error('Error getting all things:', error);
    throw error;
  }
};

const createThing = async (thing) => {
  try {
    const response = await axios.post('https://api.vschool.io/ss/thing', thing);
    return response.data;
  } catch (error) {
    console.error('Error creating a thing:', error);
    throw error;
  }
};

const updateThing = async (thingId, updatedThing) => {
  try {
    const response = await axios.put(`https://api.vschool.io/ss/thing/${thingId}`, updatedThing);
    return response.data;
  } catch (error) {
    console.error(`Error updating thing with ID ${thingId}:`, error);
    throw error;
  }
};

const deleteThing = async (thingId) => {
  try {
    const response = await axios.delete(`https://api.vschool.io/ss/thing/${thingId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting thing with ID ${thingId}:`, error);
    throw error;
  }
};

export { getAllThings, createThing, updateThing, deleteThing };
