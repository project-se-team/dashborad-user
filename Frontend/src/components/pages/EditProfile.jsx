import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EditProfile = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    picture: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      picture: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log(formData);
  };

  return (
    <div className="px-13 py-7 h-screen w-full">
      <h1 className="text-2xl font-semibold mb-6">โปรไฟล์</h1>
      
      <div className="flex space-x-10">
        {/* Profile Form */}
        <div className="w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2">ชื่อ</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="กรอกชื่อ"
              />
            </div>

            <div>
              <label className="block mb-2">อีเมล</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="กรอกอีเมล"
              />
            </div>

            <div>
              <label className="block mb-2">เบอร์โทรศัพท์</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="กรอกเบอร์โทรศัพท์"
              />
            </div>

            <div>
              <label className="block mb-2">ที่อยู่</label>
              <textarea 
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="กรอกที่อยู่"
                rows="4"
              ></textarea>
            </div>

            <div>
              <label className="block mb-2">รูปโปรไฟล์</label>
              <div className="border rounded p-4 text-center">
                <div className="mb-4 h-40 w-40 mx-auto bg-gray-200 flex items-center justify-center">
                  {formData.picture ? 
                    <img 
                      src={URL.createObjectURL(formData.picture)} 
                      alt="Profile" 
                      className="h-full w-full object-cover"
                    /> : 
                    'Picture'}
                </div>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="mt-4 w-full"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              บันทึก
            </button>
          </form>
        </div>

        {/* Room Details */}
        <div className="w-1/2 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">รายละเอียดห้อง</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">หมายเลขห้อง</label>
              <p className="bg-white p-2 rounded border">101</p>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">ประเภทห้อง</label>
              <p className="bg-white p-2 rounded border">สแตนดาร์ด</p>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">ขนาดห้อง</label>
              <p className="bg-white p-2 rounded border">30 ตารางเมตร</p>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">ค่าเช่า</label>
              <p className="bg-white p-2 rounded border">5,000 บาท/เดือน</p>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">วันเริ่มสัญญา</label>
              <p className="bg-white p-2 rounded border">1 มกราคม 2567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfile