import React from 'react';
import './App.css';
import SimpleForm from './components/SimpleForm/SimpleForm';
import ForAction from './components/FormAction/FormAction';
import Uncontrolled from './components/Uncontrolled/Uncontrolled';
import HookForm from './components/HookForm/HookForm';
import ControlledField from './components/ControlledField/ControlledField';
import ProductManagement from './components/ProductManagement/ProductManagement';
import FamilyTree from './components/FamilyTree/FamilyTree'

function App() {
  return (
    <>
      <h1>Explore React Form</h1>
      {/* <SimpleForm /> */}
      {/* <ForAction /> */}
      {/* <ControlledField/> */}
      {/* <Uncontrolled /> */}
      {/* <HookForm /> */}
      {/* <ProductManagement /> */}
      {/* <ProductManagement></ProductManagement> */}
      <FamilyTree></FamilyTree>
    </>
  )
}

export default App;