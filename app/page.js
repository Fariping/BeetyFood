// app/page.js
'use client'
import { useState } from 'react'

export default function Home() {
  const [meatQuantity, setMeatQuantity] = useState('')
  const [chickenQuantity, setChickenQuantity] = useState('')
  const [sideQuantity1, setSideQuantity1] = useState('0')
  const [sideQuantity2, setSideQuantity2] = useState('0')

  const handleSideQuantityChange = (dish, value) => {
    if (dish === 'sahawiq') {
      setSideQuantity1(value)
      setSideQuantity2('0')
    } else {
      setSideQuantity2(value)
      setSideQuantity1('0')
    }
  }

  return (
    <main className="max-w-2xl mx-auto p-4" dir="rtl">
      {/* صورة المشروع */}
      <div className="bg-white rounded-lg shadow p-4 mb-6 text-center">
        <h1 className="text-xl">Here Photo my BEETYFOOD</h1>
      </div>

      {/* قسم الطلبات */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-center border-b pb-2 mb-6">وجبات يوم السبت</h2>

        {/* وجبة لحم حنيذ */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="font-medium">وجبة لحم حنيذ</label>
            <select 
              value={meatQuantity}
              onChange={(e) => setMeatQuantity(e.target.value)}
              className="border rounded p-1"
            >
              <option value="">الكمية</option>
              {[...Array(15)].map((_, i) => (
                <option key={i+1} value={i+1}>{i+1}</option>
              ))}
            </select>
          </div>
          <div className="text-gray-600 text-sm">السعر: 15 ريال</div>
        </div>

        {/* وجبة دجاج هندي */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="font-medium">وجبة دجاج هندي</label>
            <select 
              value={chickenQuantity}
              onChange={(e) => setChickenQuantity(e.target.value)}
              className="border rounded p-1"
            >
              <option value="">الكمية</option>
              {[...Array(15)].map((_, i) => (
                <option key={i+1} value={i+1}>{i+1}</option>
              ))}
            </select>
          </div>
          <div className="text-gray-600 text-sm">السعر: 15 ريال</div>
        </div>

        {/* الأطباق الجانبية */}
        <div className="mb-6">
          <h3 className="font-bold mb-4">أطباق جانبية</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label>سحاوق مع عشار</label>
              <select 
                value={sideQuantity1}
                onChange={(e) => handleSideQuantityChange('sahawiq', e.target.value)}
                className="border rounded p-1"
              >
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
            </div>

            <div className="flex justify-between items-center">
              <label>سلطة خيار مع زبادي</label>
              <select 
                value={sideQuantity2}
                onChange={(e) => handleSideQuantityChange('salad', e.target.value)}
                className="border rounded p-1"
              >
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
            </div>
          </div>
        </div>

        {/* معلومات إضافية */}
        <div className="text-center text-gray-600 border-t pt-4">
          <p className="font-bold">الدفع كاش</p>
          <p>استلام الطلب من ساعة 15-17</p>
        </div>
      </div>
    </main>
  )
}
