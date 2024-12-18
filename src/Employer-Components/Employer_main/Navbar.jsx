import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import {EmpAuth} from '../../Context/EmployerUsername'


const Navbar = () => {
  const navigate = useNavigate()
  const {empUsername,setEmpUsername}=useContext(EmpAuth)

  const handleLogout=(e)=>{
    e.preventDefault()
    localStorage.removeItem('username')
    setEmpUsername("")
  }

  return (
    <>
      <div className="lg:flex lg:justify-between font-poppins shadow-sm lg:h-[13vh] text-white p-4">
  
  <div className="flex items-center">
    <h1 className="text-3xl lg:text-4xl font-semibold tracking-wider text-violet-600">
      WorkBridge<span className="text-lg font-light text-violet-600">.employer</span>
    </h1>
  </div>


  <div className="flex items-center mt-4 lg:mt-0 lg:ml-auto lg:mr-8">
    <div className="relative">
      <input
        type="search"
        placeholder="Search"
        className="h-[5vh] w-full max-w-[320px] lg:max-w-[400px] pl-12 pr-4 py-2 rounded-full text-gray-700 shadow-md focus:ring-2 focus:ring-purple-300 outline-none"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-gray-500 absolute top-1/2 transform -translate-y-1/2 left-4"
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>


  <div className="flex items-center gap-4 mt-4 lg:mt-0">
    {empUsername ? (
      <>
        <button
          onClick={() => navigate("/postjob")}
          className="px-4 py-2 rounded-full  text-black text-sm hover:underline underline-offset-4"
        >
          Post Job
        </button>
        <button
          onClick={() => navigate("/employerprofile")}
          className="px-4 py-2 rounded-full text-black  transition  text-sm  hover:underline underline-offset-4"
        >
         <span className='text-violet-600 font-semibold text-lg'>Profile: </span> {empUsername}
        </button>
      
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm shadow-lg"
        >
          Logout
        </button>
      </>
    ) : (
      <button
        onClick={() => navigate("/employerlogin")}
        className="px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-700 transition text-white text-sm shadow-lg"
      >
        Login
      </button>
    )}
  </div>
</div>



    </>
  )
}

export default Navbar
