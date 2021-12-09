import { useState } from 'react';

const UseForm2 = (callback) => {
    const[formValues2, setFormValues2] = useState({});

    const handleChange2 = (event) => {
        event.persist();
        setFormValues2({...formValues2, [event.target.name]: event.target.value });
        console.log(formValues2)
       
    }

    const handleSubmit2 = (event) => {
        event.preventDefault();
        callback();
    }

    return {formValues2, handleChange2, handleSubmit2};
}

export default UseForm2;