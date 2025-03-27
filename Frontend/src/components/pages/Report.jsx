import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Report = () => {
  const navigate = useNavigate()
  const [problem, setProblem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic to handle problem submission
    console.log('ปัญหาที่แจ้ง:', problem);
    // ล้างข้อความหลังส่ง
    setProblem('');
    alert('ส่งคำร้องเรียบร้อย');
  };

  return (
    <div className="px-13 py-7 h-screen">
      <h1 className="text-2xl font-semibold mb-6">แจ้งปัญหา</h1>
      <form onSubmit={handleSubmit} className="w-200 mx-auto space-y-4">
        <div>
          <label className="block mb-2">รายละเอียดปัญหา</label>
          <textarea 
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            className="w-full p-4 border rounded h-40"
            placeholder="กรุณาอธิบายปัญหาที่คุณพบ"
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-1/2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          ส่งคำร้อง
        </button>
      </form>
    </div>
  )
}

export default Report