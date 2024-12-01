import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
        <div>landingPage</div>
        <Link to='/auth'> Login </Link>
    </>
  )
}

export default LandingPage;