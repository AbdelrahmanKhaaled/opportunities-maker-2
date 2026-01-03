import { useState } from 'react';
import './ContactUsPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

function ContactUsPage() {
  const navItems = [
    { label: 'الرئيسية', href: '/', active: false },
    { label: 'خدماتنا', href: '/services', active: false },
    { label: 'المقالات', href: '/blogs', active: false },
    { label: 'الأسئلة المتكررة', href: '/faq' },
    { label: 'معلومات عنا', href: '/about' },
    { label: 'اتصل بنا', href: '/contact', active: true },
    { label: 'الشروط و الأحكام', href: '#terms' },
  ];

  const handleRegisterClick = () => {
    // معالجة النقر على زر التسجيل
  };

  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    phoneNumber: '',
    activity: ''
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isOrderTracked, setIsOrderTracked] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [orderData, setOrderData] = useState({
    orderId: '',
    name: '',
    status: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // معالجة إرسال النموذج
    console.log('Form submitted:', formData);
    // إظهار قسم تتبع الطلب بعد الإرسال
    setIsFormSubmitted(true);
    // يمكنك إضافة منطق إرسال النموذج هنا
  };

  const handleOrderNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderNumber(e.target.value);
  };

  const handleTrackOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // معالجة تتبع الطلب
    console.log('Tracking order:', orderNumber);
    // محاكاة بيانات الطلب (يمكنك استبدالها بطلب API حقيقي)
    setOrderData({
      orderId: orderNumber,
      name: 'مثال: أحمد محمد',
      status: 'قيد المعالجة',
      notes: 'ملاحظات حول حالة الطلب...'
    });
    setIsOrderTracked(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="contact-us-page">
      <Header 
        navItems={navItems}
        registerButtonText="سجل الآن"
        onRegisterClick={handleRegisterClick}
      />
      
      <main className="contact-us-content page-enter">
        <div className="container">
          {!isFormSubmitted ? (
            <AnimatedSection animationType="fade-in-up" delay={0}>
              <div className="contact-form-wrapper">
                <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="الاسم الأول"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="form-input"
                      required
                      />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      id="secondName"
                      name="secondName"
                      placeholder="الاسم الثاني"
                      value={formData.secondName}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="رقم الهاتف"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group full-width">
                    <input
                      type="text"
                      id="activity"
                      name="activity"
                      placeholder="النشاط"
                      value={formData.activity}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <button type="submit" className="submit-button">
                    رفع الطلب
                  </button>
                </div>
              </form>
              </div>
            </AnimatedSection>
          ) : !isOrderTracked ? (
            <AnimatedSection animationType="scale-in" delay={0}>
              <div className="order-tracking-wrapper">
                <form className="order-tracking-form" onSubmit={handleTrackOrder}>
                <div className="tracking-input-wrapper">
                  <input
                    type="text"
                    id="orderNumber"
                    name="orderNumber"
                    placeholder="ادخل رقم طلبك لمتابعة حالة الطلب"
                    value={orderNumber}
                    onChange={handleOrderNumberChange}
                    className="tracking-input"
                    required
                  />
                </div>
                <div className="tracking-button-wrapper">
                  <button type="submit" className="tracking-button">
                    ادخل
                  </button>
                </div>
              </form>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection animationType="fade-in-up" delay={0}>
              <div className="order-details-wrapper">
              <div>
                <div className="order-header">
                  <h2 className="order-title">رقم طلبك</h2>
                  <p className="order-number">{orderData.orderId}#</p>
                  
                </div>
                <div className="progress-indicator">
                <div className="progress-step completed">
                  <div className="step-circle completed">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="step-line completed"></div>
                </div>
                <div className="progress-step completed">
                  <div className="step-circle completed">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="step-line completed"></div>
                </div>
                <div className="progress-step active">
                  <div className="step-circle active"></div>
                  <div className="step-line pending"></div>
                </div>
                <div className="progress-step pending">
                  <div className="step-circle pending"></div>
                  <div className="step-line pending"></div>
                </div>
                <div className="progress-step pending">
                  <div className="step-circle pending last"></div>
                </div>
              </div>
              </div>
              <div className="order-fields">
                <div className="order-field">
                  <label className="field-label">الاسم:</label>
                  <input
                    type="text"
                    value={orderData.name}
                    readOnly
                    className="order-field-input"
                  />
                </div>
                <div className="order-field">
                  <label className="field-label">الحالة:</label>
                  <input
                    type="text"
                    value={orderData.status}
                    readOnly
                    className="order-field-input"
                  />
                </div>
                <div className="order-field">
                  <label className="field-label">ملاحظاتنا:</label>
                  <input
                    type="text"
                    value={orderData.notes}
                    readOnly
                    className="order-field-input"
                  />
                </div>
              </div>

              <div className="print-button-wrapper">
                <button type="button" className="print-button" onClick={handlePrint}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="print-icon">
                    <path d="M5 5V2C5 1.44772 5.44772 1 6 1H14C14.5523 1 15 1.44772 15 2V5M5 5H3C2.44772 5 2 5.44772 2 6V14C2 14.5523 2.44772 15 3 15H5M5 5H15M15 5H17C17.5523 5 18 5.44772 18 6V14C18 14.5523 17.5523 15 17 15H15M15 15V18C15 18.5523 14.5523 19 14 19H6C5.44772 19 5 18.5523 5 18V15M15 15H5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>طباعة</span>
                </button>
              </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ContactUsPage;

