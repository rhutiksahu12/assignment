import React, { useState, useEffect } from 'react'
import UserList from '@/components/UserList'
import UserForm from '@/components/UserForm'

function Users() {
    const [users, setUsers] = useState([])

    const fetchUsers = () => {
        fetch('http://localhost:3000/api/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error))
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const handleUserAdded = (newUser) => {
        setUsers(prevUsers => [...prevUsers, newUser])
    }

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Users Page</h1>
            <UserForm onUserAdded={handleUserAdded} />
            <UserList users={users} />
        </div>
    )
}

export default Users