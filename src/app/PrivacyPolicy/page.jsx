import React from 'react'
import PrivacyPolicy from './PrivacyPolicy'
import Navbar from '../Dashboard/navbar'


function page() {
  return (
    <>
    <Navbar / >
    
    <div className='grid-background p-16 min-h-screen'><PrivacyPolicy/></div>
    </>
  )
}

export default page