
import './App.css'
import LandingScreen from './components/LandingScreen'
import LoginScreen from './components/LoginScreen'
import SignupScreen from './components/SignupScreen'
import Profile from './components/Profile'
import { createBrowserRouter, RouterProvider } from 'react-router'

function App() {
  
  const router  = createBrowserRouter([
    {
      path:"/",
      element:<LandingScreen />
    },
    {
      path:"/signup",
      element:<SignupScreen />
    },
    {
      path:"/login",
      element:<LoginScreen />
    },
    {
      path:"/profile",
      element:<Profile />
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>

    </>
  )
}

export default App
