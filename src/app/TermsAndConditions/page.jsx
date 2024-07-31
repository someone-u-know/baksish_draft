import React from 'react'
import TnC from './TnC'
import Navbar from '../Dashboard/navbar'


function page() {
  return (
    <>
    <Navbar />
    
    <div className='grid-background pt-20  min-h-screen'><TnC/></div>
    </>
  )
}

export default page