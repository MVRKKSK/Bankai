import React from 'react'
import "./signup.css"

const Signup = () => {
    return (<div>
        <form className='wrapper'>
            <div>
            <div>
                    <p>enter your Name</p>
                    <input placeholder='enter your Name'>
                    </input>
                </div>
            <div>
                    <p>enter your username</p>
                    <input placeholder='enter your email'>
                    </input>
                </div>
                <div>
                    <p>enter your email</p>
                    <input placeholder='enter your email'>
                    </input>
                </div>
                <div>
                    <p>enter your password</p>
                    <input placeholder='password'>
                    </input>
                </div>
                <div>
                    <p>re - enter your password</p>
                    <input placeholder='password'>
                    </input>
                </div>
            </div>
        </form>
    </div>
    )
}

export default Signup