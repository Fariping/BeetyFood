// app/page.js
export default function Home() {
  return (
    <main style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial',
      direction: 'rtl' 
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '24px',
        marginBottom: '20px'
      }}>BEETYFOOD</h1>

      <div style={{
        textAlign: 'right',
        marginBottom: '10px'
      }}>صورة المشروع</div>

      <h2 style={{
        textAlign: 'center',
        fontSize: '20px',
        marginBottom: '20px'
      }}>وجبات يوم السبت</h2>

      {/* وجبة لحم حنيذ */}
      <div style={{
        marginBottom: '15px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '5px'
        }}>
          <span>وجبة لحم حنيذ</span>
          <select style={{
            padding: '5px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}>
            <option value="">الكمية</option>
            {[...Array(15)].map((_, i) => (
              <option key={i+1} value={i+1}>{i+1}</option>
            ))}
          </select>
        </div>
        <div>السعر: 15 ريال</div>
      </div>

      {/* وجبة دجاج هندي */}
      <div style={{
        marginBottom: '15px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '5px'
        }}>
          <span>وجبة دجاج هندي</span>
          <select style={{
            padding: '5px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}>
            <option value="">الكمية</option>
            {[...Array(15)].map((_, i) => (
              <option key={i+1} value={i+1}>{i+1}</option>
            ))}
          </select>
        </div>
        <div>السعر: 15 ريال</div>
      </div>

      {/* أطباق جانبية */}
      <div style={{
        marginBottom: '15px'
      }}>
        <h3 style={{
          fontSize: '18px',
          marginBottom: '10px'
        }}>أطباق جانبية</h3>
        
        <div style={{
          padding: '10px',
          border: '1px solid #ddd',
          borderRadius: '5px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px'
          }}>
            <span>سحاوق مع عشار</span>
            <select style={{
              padding: '5px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}>
              <option value="0">0</option>
              <option value="1">1</option>
            </select>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <span>سلطة خيار مع زبادي</span>
            <select style={{
              padding: '5px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}>
              <option value="0">0</option>
              <option value="1">1</option>
            </select>
          </div>
        </div>
      </div>

      {/* معلومات إضافية */}
      <div style={{
        textAlign: 'center',
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#f5f5f5',
        borderRadius: '5px'
      }}>
        <div style={{ fontWeight: 'bold' }}>الدفع كاش</div>
        <div>استلام الطلب من ساعة 15-17</div>
      </div>
    </main>
  );
}
