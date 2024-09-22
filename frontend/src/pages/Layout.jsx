import { Routes, Route, NavLink, Outlet } from 'react-router-dom'



function Layout() {
    return (
        <div className="min-h-screen bg-background font-sans antialiased">
            <div className="container mx-auto px-4">
                <nav className="py-4">
                    <ul className="flex space-x-4">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-primary font-bold" : "text-primary hover:underline"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/users"
                                className={({ isActive }) =>
                                    isActive ? "text-primary font-bold" : "text-primary hover:underline"
                                }
                            >
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout