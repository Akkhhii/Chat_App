import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Textcomponent from '../../components/Textcomponent'

const Home = () => {
  return (
    <>
      <div className="main_container bg-transparent w-full h-[100vh] relative md:flex md:flex-col flex overflow-hidden">
        <Navbar/>
        <Sidebar/>
        <Textcomponent/>
      </div>
    </>
  )
}

export default Home