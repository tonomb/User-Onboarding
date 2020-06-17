import React from 'react'


function Form(){

    return(
        <div>
            <h1>Form goes here</h1>
            <form>
                <label>Name
                    <input type='text' name='name' />
                </label>
                <label>email
                    <input type='email' name='email' />
                </label>
                <label>password
                    <input type='password' name='password' />
                </label>
                <label>Terms Of Service
                    <input type='checkbox' name='terms'/>
                </label>
                <button type='submit'>Create Accout</button>
            </form>
        </div>
    )
}

export default Form;