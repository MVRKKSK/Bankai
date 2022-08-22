import React, { useState, useEffect } from 'react'
import EmailValidator from "email-validator"
import "./signup.css"
import { API } from '../../config'
import axios from "axios"

const Login = () => {
    const intitialValues = { password: "", email: "" }
    const [formValues, setFormValues] = useState(intitialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [responseData, setResponseData] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

    }
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
            axios.post("http://localhost:5000/api/login", formValues).then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err.response.data)
            })
        }

    }, [formErrors]);

    const validate = (values) => {
        const errors = {}
        if (!values.email) {
            errors.username = "Username or email are required"
        }
        if (!values.password) {
            errors.password = "Password is required"
        }

        return errors
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='wrapper'>
                <div className='inp'>
                    <div className='inp1'>
                     <div className='i1-2 '>
                            <p>enter your email</p>
                            <input type="text" name="email" placeholder='enter your Email' value={formValues.email} onChange={handleChange}>
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

export default Login