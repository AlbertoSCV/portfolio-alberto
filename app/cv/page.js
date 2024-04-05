import React from 'react'
import See_CV from './components/See_CV'
import NavBar from '../components/nav/NavBar'
import Footer from '../components/footer/Footer'

const page = () => {
  return (
    <main className='flex min-h-screen flex-col bg-[#181818]'>
        <NavBar sectionVisible={false}/>
        <div className="container mt-24 max-w-full">
          <See_CV/>
        </div>
        <Footer/>
    </main>
  )
}

export default page