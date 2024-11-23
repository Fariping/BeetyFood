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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <main className="max-w-2xl mx-auto p-4" dir="rtl">
        {/* صورة المشروع */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 transform hover:scale-[1.02] transition-transform">
          <h1 className="text-3xl font-bold text-amber-800 text-center">BEETYFOOD</h1>
          <div className="mt-4 bg-amber-100 p-4 rounded-lg">
            <p className="text-center text-amber-800">صورة المشروع</p>
          </div>
        </div>

        {/* قسم الطلبات */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-center text-amber-800 border-b-2 border-amber-200 pb-4 mb-8">
            وجبات يوم السبت
          </h2>

          {/* وجبة لحم حنيذ */}
          <div className="mb-8 bg-amber-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <label className="text-lg font-semibold text-amber-900">وجبة لحم حنيذ</label>
              <select 
                value={meatQuantity}
                onChange={(e) => setMeatQuantity(e.target.value)}
                className="border-2 border-amber-200 rounded-lg p-2 bg-white hover:border-amber-400 focus:ring-2 focus:ring-amber-300 focus:border-amber-400 outline-none"
              >
                <option value="">الكمية</option>
                {[...Array(15)].map((_, i) => (
                  <option key={i+1} value={i+1}>{i+1}</option>
                ))}
              </select>
            </div>
            <div className="text-amber-700 font-medium">السعر: 15 ريال</div>
          </div>

          {/* وجبة دجاج هندي */}
          <div className="mb-8 bg-amber-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <label className="text-lg font-semibold text-amber-900">وجبة دجاج هندي</label>
              <select 
                value={chickenQuantity}
                onChange={(e) => setChickenQuantity(e.target.value)}
                className="border-2 border-amber-200 rounded-lg p-2 bg-white hover:border-amber-400 focus:ring-2 focus:ring-amber-300 focus:border-amber-400 outline-none"
              >
                <option value="">الكمية</option>
                {[...Array(15)].map((_, i) => (
                  <option key={i+1} value={i+1}>{i+1}</option>
                ))}
              </select>
            </div>
            <div className="text-amber-700 font-medium">السعر: 15 ريال</div>
          </div>

          {/* الأطباق الجانبية */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-amber-800 mb-4">أطباق جانبية</h3>
            
            <div className="space-y-4 bg-amber-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <label className="text-lg text-amber-900">سحاوق مع عشار</label>
                <select 
                  value={sideQuantity1}
                  onChange={(e) => handleSideQuantityChange('sahawiq', e.target.value)}
                  className="border-2 border-amber-200 rounded-lg p-2 bg-white hover:border-amber-400 focus:ring-2 focus:ring-amber-300 focus:border-amber-400 outline-none"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                </select>
              </div>

              <div className="flex justify-between items-center">
                <label className="text-lg text-amber-900">سلطة خيار مع زبادي</label>
                <select 
                  value={sideQuantity2}
                  onChange={(e) => handleSideQuantityChange('salad', e.target.value)}
                  className="border-2 border-amber-200 rounded-lg p-2 bg-white hover:border-amber-400 focus:ring-2 focus:ring-amber-300 focus:border-amber-400 outline-none"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                </select>
              </div>
            </div>
          </div>

          {/* معلومات إضافية */}
          <div className="text-center bg-amber-100 rounded-lg p-4">
            <p className="font-bold text-amber-900 text-lg mb-2">الدفع كاش</p>
            <p className="text-amber-800">استلام الطلب من ساعة 15-17</p>
          </div>
        </div>
      </main>
    </div>
  )
}
