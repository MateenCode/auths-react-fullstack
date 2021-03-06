import React from 'react'
import { getCurrentUser } from '../services/auth.service'

const Profile = () => {
    const currentUser = getCurrentUser()

    return (
        <div className="container">
            <header className="jumbotron">
                    <h3>
                        <strong>{currentUser.username}</strong>
                    </h3>
            </header>
            <p>
                <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)}...{" "}
            </p>
            <p>
                <strong>Id:</strong> {currentUser.id}
            </p>
            <p>
                <strong>Email:</strong> {currentUser.email}
            </p>
            {/* if current user has roles than map through those roles  */}
            {currentUser.roles && 
                currentUser.roles.map((role, index) => <li key={index}>{role}</li>)
            }
        </div>
    )
}

export default Profile
