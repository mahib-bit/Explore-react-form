import React from 'react';
import { useState } from 'react';

const useInputFields = (defaultValue) => {
const [field, setField] = useState(defaultValue);

const handleChange = (e) => {
    setField(e.target.value);
}
    return [field, handleChange];
};

export default useInputFields;