import React, {useState, useEffect} from 'react';
import * as Yup from "yup";
import axios from 'axios';
import './App.css';

import Form from './components/form'
import UsersList from './components/users'
import formSchema from './components/formSchema'


const initialFormValues ={
  name: "",
  email: "",
  password: "",
  terms: false
}

const initialErrorMessages ={
  name: "",
  email: "",
  password: "",
  terms: ""
}

const initialUsers =[{
  name: "user",
  email: "user@test.com",
  password: "123456",
  terms: true,
  id: '804'
}]

function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrorMessages);
  const [disabled, setDisabled] = useState(true);
  const [users, setUsers] = useState(initialUsers)

  const onSubmit = e => {
    e.preventDefault();
    
    axios.post('https://reqres.in/api/users', formValues)
      .then(res =>{
        setUsers([
          res.data,
          ...users
        ])
      })
      .catch(err =>{
        debugger
      })
      .finally(() =>{
        setFormValues(initialFormValues)
      })
    
  };

  const onInputChange = e =>{
    const {name, value} = e.target

    Yup
      .reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setErrors({
          ...errors,
          [name]: ""
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setErrors({
          ...errors,
          [name]: err.errors[0]
        });
      });

    // Wether or not our validation was successful, we will still set the state to the new value as the user is typing
      setFormValues({
      ...formValues,
      [name]: value
    });
  
  }

  const onCheckedChange = e =>{
    const {name, checked} = e.target

    Yup
      .reach(formSchema, name)
      //we can then run validate using the value
      .validate(checked)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setErrors({
          ...errors,
          [name]: ""
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setErrors({
          ...errors,
          [name]: err.errors[0]
        });
      });


    setFormValues({
      ...formValues,
      [name]:checked
    })
  }

  useEffect(()=>{
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })
  }, [formValues])
    


  return (
    <div className="App">
      <Form formValues={formValues} onSubmit={onSubmit} onInputChange={onInputChange} onCheckedChange={onCheckedChange} errors={errors} disabled={disabled}/>
      <UsersList users={users} />
    </div>
  );
}

export default App;
