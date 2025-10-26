import { useState } from 'react'
import ShortenerForm from './components/ShortenerForm';


function App() {

  return (
    <>
    <div className='flex flex-col bg-[#FFF2E0] items-center justify-between h-screen text-black font-bold'>
      <div className="  flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold my-4 text-[#898AC4]">Ash's Own URL Shortener</h1>
      <ShortenerForm />
    </div>

    </div>
    </>
  )
}

export default App
