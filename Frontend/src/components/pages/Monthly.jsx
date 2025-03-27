import React from 'react'
import { useNavigate } from 'react-router-dom'

const Monthly = () => {
  const navigate = useNavigate()
  
  return (
    <div className="px-13 py-7 h-screen">
      <h1 className="text-2xl font-semibold mb-6">ค่ารายเดือน</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between mb-4">
          <span>ค่าบริการรายเดือน</span>
          <span className="font-bold">1,000 บาท</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>สถานะการชำระ</span>
          <span className="text-green-600">ชำระแล้ว</span>
        </div>
        <div className="flex justify-between">
          <span>งวดถัดไป</span>
          <span>15 เมษายน 2567</span>
        </div>
      </div>
    </div>
  )
}

export default Monthly