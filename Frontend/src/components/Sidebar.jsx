import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='flex'>
      <div className='w-75 h-screen bg-black'>
        <div className="flex justify-between">
          <div className="text-white text-2xl font-semibold p-6">Logo</div>
          <div className="text-white text-2xl font-semibold p-6">Button</div>
        </div>
        
        <hr className='my-4 mx-4 text-gray-600'/>

        <div className="p-3 space-y-10 mt-8">
          <li className='list-none'>
            <Link to="/edit-profile" className='p-5 text-white text-2xl font-semibold'>
              แก้ไขโปรไฟล์
            </Link>
          </li>
          <li className='list-none'>
            <Link to="/report-problem" className='p-5 text-white text-2xl font-semibold'>
              แจ้งปัญหา
            </Link>
          </li>
          <li className='list-none'>
            <Link to="/monthly-fee" className='p-5 text-white text-2xl font-semibold'>
              ค่ารายเดือน
            </Link>
          </li>
        </div>

        <div className="absolute bottom-0 left-0 w-73 p-4">
          <div className="bg-gray-800 rounded-lg p-3 flex items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
              <img 
                src="/profile-image.png" 
                alt="Profile" 
                className="w-full h-full object-cover" //ดึงรูปจาก Database
              />
            </div>
            <div>
              <div className="text-white font-semibold">Name</div>
              <div className="text-gray-400 text-sm">Details</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar