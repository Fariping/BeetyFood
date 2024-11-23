export default function Home() {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '20px' }}>
        BEETYFOOD
      </h1>
      
      <div style={{ textAlign: 'right', marginBottom: '10px' }}>
        صورة المشروع
      </div>

      <h2 style={{ textAlign: 'center', fontSize: '20px', marginBottom: '20px' }}>
        وجبات يوم السبت
      </h2>

      <div style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '15px', borderRadius: '5px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
          <span>وجبة لحم حنيذ</span>
          <select>
            <option value="">الكمية</option>
            {[...Array(15)].map((_, i) => (
              <option key={i+1} value={i+1}>{i+1}</option>
            ))}
          </select>
        </div>
        <div>السعر: 15 ريال</div>
      </div>

      <div style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '15px', borderRadius: '5px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
          <span>وجبة دجاج هندي</span>
          <select>
            <option value="">الكمية</option>
            {[...Array(15)].map((_, i) => (
              <option key={i+1} value={i+1}>{i+1}</option>
            ))}
          </select>
        </div>
        <div>السعر: 15 ريال</div>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>أطباق جانبية</h3>
        <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>سحاوق مع عشار</span>
            <select>
              <option value="0">0</option>
              <option value="1">1</option>
            </select>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>سلطة خيار مع زبادي</span>
            <select>
              <option value="0">0</option>
              <option value="1">1</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px', padding: '10px', backgroundColor: '#eee', borderRadius: '5px' }}>
        <div style={{ fontWeight: 'bold' }}>الدفع كاش</div>
        <div>استلام الطلب من ساعة 15-17</div>
      </div>
    </div>
  );
}
