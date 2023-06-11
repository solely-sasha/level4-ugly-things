
import './App.css';
import React  from "react"
import UglyThings from './components/UglyThings';
import UglyThingsForm from './components/UglyThingsForm';
import { ThingProvider } from './context/ThingContext';

const App = () => {
  return (
    <ThingProvider>
      <div className='app'>
        <h1>Ugly Things</h1>
        <UglyThingsForm />
        <UglyThings />
      </div>
    </ThingProvider>
  );
};


export default App;
