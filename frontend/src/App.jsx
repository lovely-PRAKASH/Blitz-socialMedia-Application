import React from 'react'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import NavBar from './components/navBar/navBar'
import LeftBar from './components/leftBar/leftBar'
import RightBar from './components/rightBar/rightBar'
import Home from './pages/home/Home'
import Profile from "../src/pages/profile/Profile"
const App = () => {
  const currentUser = true;
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    )
  }
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
