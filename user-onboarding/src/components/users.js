import React from 'react'
import '../App.css'

function UsersList(props){

    const { users } = props

    return(
        <div>
            <h1>Registered Users</h1>
            {
                users.map(user =>{
                    return (
                        <div key={user.id} className='user-container'>
                            <h2>name: <span>{user.name}</span></h2>
                            <h2>email: <span>{user.email}</span></h2>
                            {/* <h2>password: <span>{user.password}</span></h2>
                            <h2>terms: <span>{user.terms ? 'accepted terms' : 'did not accept terms'}</span></h2>
                            <h2>id: <span>{user.id}</span></h2> */}
                        </div>
                    )
                })
            }
        </div>
    )
}


export default UsersList;