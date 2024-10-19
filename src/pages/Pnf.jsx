import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px',height:'100vh'}} className='flex justify-center items-center flex-col'>
      <h1 className='font-bold text-8xl mb-2'>404</h1>
      <img width={'300px'} height={'300px'} src="https://i.pinimg.com/originals/a3/59/56/a35956ec9f42082d3eeee4ba1b506060.gif" alt="" />
      <h1 className='font-bold text-4xl mb-2'>Looks like you'r Lost.</h1>
      <p className=" mb-2"> The page your looking for is not available!!!</p>
      <Link to={'/'} className='bg-green-600 p-2 text-white '>Home</Link>
    </div>
    </>
  )
}

export default Pnf