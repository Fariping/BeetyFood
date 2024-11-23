'use client'
import { useState } from 'react'

export default function Home() {
  const [order, setOrder] = useState({
    meatQuantity: '',
    chickenQuantity: '',
    sideDishes: {
      sahawiq: '0',
      salad: '0'
    },
    name: '',
    phone: ''
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleQuantityChange = (type, value) => {
    setOrder(prev => ({
      ...prev,
      [type]: value,
      // Reset side dishes when quantities change
      sideDishes: { sahawiq: '0', salad: '0' }
    }))
  }

  const handleSideDishChange = (dish, value) => {
    const totalMainDishes = Number(order.meatQuantity) + Number(order.chickenQuantity)
    const otherDish = dish === 'sahawiq' ? 'salad' : 'sahawiq'
    const otherValue = order.sideDishes[otherDish]

    if (Number(value) + Number(otherValue) > totalMainDishes) {
      setError('عدد الأطباق الجانبية لا يمكن أن يتجاوز عدد الوجبات الرئيسية')
      return
    }

    setError('')
    setOrder(prev => ({
      ...prev,
      sideDishes: {
        ...prev.sideDishes,
        [dish]: value
      }
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!order.name || !order.phone) {
      setError('الرجاء إدخال الاسم ورقم الجوال')
      return
    }

    if (!order.meatQuantity && !order.chickenQuantity) {
      setError('الرجاء اختيار وجبة واحدة على الأقل')
      return
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      })

      if (response.ok) {
        setSuccess(true)
        setError('')
        setOrder({
          meatQuantity: '',
          chickenQuantity: '',
          sideDishes: { sahawiq: '0', salad: '0' },
          name: '',
          phone: ''
        })
      } else {
        setError('حدث خطأ في إرسال الطلب')
      }
    } catch (error) {
      setError('حدث خطأ في إرسال الطلب')
    }
  }

  return (
    <div className="container" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }} dir="rtl">
      {/* صورة المشروع */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>BEETYFOOD</h1>
        <p>Here Photo my BEETYFOOD</p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* وجبات يوم السبت */}
        <div style={{ 
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>وجبات يوم السبت</h2>

          {/* وجبة لحم حنيذ */}
          <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>وجبة لحم حنيذ (15 ريال)</span>
            <select 
              value={order.meatQuantity}
              onChange={(e) => handleQuantityChange('meatQuantity', e.target.value)}
              style={{ padding: '5px', borderRadius: '4px' }}
            >
              <option value="">الكمية</option>
              {[...Array(15)].map((_, i) => (
                <option key={i+1} value={i+1}>{i+1}</option>
              ))}
            </select>
          </div>

          {/* وجبة دجاج هندي */}
          <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>وجبة دجاج هندي (15 ريال)</span>
            <select 
              value={order.chickenQuantity}
              onChange={(e) => handleQuantityChange('chickenQuantity', e.target.value)}
              style={{ padding: '5px', borderRadius: '4px' }}
            >
              <option value="">الكمية</option>
              {[...Array(15)].map((_, i) => (
                <option key={i+1} value={i+1}>{i+1}</option>
              ))}
            </select>
          </div>

          {/* أطباق جانبية */}
          <div style={{ marginTop: '20px' }}>
            <h3>أطباق جانبية</h3>
            <div style={{ marginTop: '10px' }}>
              <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>سحاوق مع عشار</span>
                <select 
                  value={order.sideDishes.sahawiq}
                  onChange={(e) => handleSideDishChange('sahawiq', e.target.value)}
                  style={{ padding: '5px', borderRadius: '4px' }}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                </select>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>سلطة خيار مع زبادي</span>
                <select 
                  value={order.sideDishes.salad}
                  onChange={(e) => handleSideDishChange('salad', e.target.value)}
                  style={{ padding: '5px', borderRadius: '4px' }}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                </select>
              </div>
            </div>
          </div>

          {/* معلومات الزبون */}
          <div style={{ marginTop: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
              <input
                type="text"
                placeholder="الاسم"
                value={order.name}
                onChange={(e) => setOrder(prev => ({ ...prev, name: e.target.value }))}
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  marginBottom: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ddd'
                }}
              />
              <input
                type="tel"
                placeholder="رقم الجوال"
                value={order.phone}
                onChange={(e) => setOrder(prev => ({ ...prev, phone: e.target.value }))}
                style={{ 
                  width: '100%', 
                  padding: '8px',
                  borderRadius: '4px',
                  border: '1px solid #ddd'
                }}
              />
            </div>
          </div>

          {error && (
            <div style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
              {error}
            </div>
          )}

          {success && (
            <div style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>
              تم إرسال الطلب بنجاح!
            </div>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              marginTop: '20px',
              cursor: 'pointer'
            }}
          >
            إرسال الطلب
          </button>
        </div>
      </form>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p style={{ fontWeight: 'bold' }}>الدفع كاش</p>
        <p>استلام الطلب من ساعة 15-17</p>
      </div>
    </div>
  )
}
