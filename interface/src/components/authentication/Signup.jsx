import React, { useState, useEffect } from 'react'
import EmailValidator from "email-validator"
import "./signup.css"
import { API } from '../../config'
import axios from "axios"

const Signup = () => {
    const intitialValues = { username: "", name: "", password: "", email: "" }
    const [formValues, setFormValues] = useState(intitialValues)
    const [formErrors , setFormErrors] = useState({})
    const [isSubmit , setIsSubmit] = useState(false)
    const [responseData , setResponseData] = useState(null)

    const handleChange = (e) => {
        const {name , value} = e.target
        setFormValues({...formValues , [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

    }
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            axios.post("http://localhost:5000/api/signup" , formValues).then(response=> {
                console.log(response)
            }).catch(err =>{
                console.log(err.response.data)
            })
        }

      }, [formErrors]);

    const validate = (values) => {
        const errors = {}
        if(values.email){
           const valueEmail =  EmailValidator.validate(values.email);
           if(!valueEmail){
            errors.email = "Invalid Email Address"
           }
        }
        if(!values.email){
            errors.email = "Email is required"
        }
        if(!values.username){
            errors.username = "Username is required"
        }
        if(!values.password){
            errors.password = "Password is required"
        }
        if(!values.name){
            errors.name = "Name is required"
        }

        return errors
    }

    return (
    <div>
        <form onSubmit={handleSubmit} className='wrapper'>
            <div className='inp'>
                <div className='inp1'>
                    <div className='i1-1'>
                        <p>enter your Name</p>
                        <input type="text" name="name" placeholder='enter your Name' value={formValues.name} onChange={handleChange}>
                        </input>
                    </div>

                    <div className='i1-2 '>
                        <p>enter your username</p>
                        <input type="text" name="username" placeholder='enter your username' value={formValues.username} onChange={handleChange}>
                        </input>
                    </div>
                </div>
                <div className='inp1'>
                    <div className='i1-3'>
                        <p>enter your email</p>
                        <input type="email" name="email" placeholder='enter your email' value={formValues.email} onChange={handleChange}>
                        </input>
                    </div>
                    <div className='i1-4'>
                        <p>enter your password</p>
                        <input type="password" name="password" placeholder='password' value={formValues.password} onChange={handleChange}>
                        </input>
                    </div>
                </div>

            </div>
            <button>submit</button>
        </form>
    </div>
    )
}

export default Signup