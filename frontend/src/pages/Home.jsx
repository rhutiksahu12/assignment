import React from 'react'
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    return (
        <div className="space-y-4">
            <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
            <p className="text-lg">This is a simple React application with routing, styled using shadcn/ui and Tailwind CSS.</p>
            <Button onClick={() => navigate('/users')}>Go to Users</Button>
        </div>
    )
}

export default Home