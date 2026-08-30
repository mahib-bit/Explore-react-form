import React from 'react';
import './App.css';
import SimpleForm from './components/SimpleForm/SimpleForm';
import ForAction from './components/FormAction/FormAction';
import ControlledField from './components/ControlledField/ControlledField';

function App() {
  return (
    <>
      <h1>Explore React Form</h1>
      {/* <SimpleForm /> */}
      {/* <ForAction /> */}
      <ControlledField />
    </>
  )
}

export default App;