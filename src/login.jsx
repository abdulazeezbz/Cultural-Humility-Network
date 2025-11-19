import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AppLogo from './assets/logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

function Login() {
   const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <>
    <h3>ABZ</h3>

    </>
  )
}

export default Login
