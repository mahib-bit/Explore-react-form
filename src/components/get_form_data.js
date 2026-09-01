/**
 * 1. e.target.[input_name].value onSubmit='...'
 * 2. e.get('[input_name]') action='...' 
 * 3. controlled component. one per each field use state on change of the field. useful to dynamically handle error
 * 
 * 4. handle all controlled fields on one state object
    const [formData, setFormData] = useState({
    name: '',
    password: '',
    phone: '',
 * 
 * 5. uncontrolled component. useRef to get the value of the field on submit
})
 */
