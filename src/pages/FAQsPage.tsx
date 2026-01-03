import { useState } from 'react';
import './FAQsPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function FAQsPage() {
  const navItems = [
    { label: 'الرئيسية', href: '/', active: false },
    { label: 'خدماتنا', href: '/services', active: false },
    { label: 'المقالات', href: '/blogs', active: false },
    { label: 'الأسئلة المتكررة', href: '/faq', active: true },
    { label: 'معلومات عنا', href: '/about' },
    { label: 'اتصل بنا', href: '/contact' },
    { label: 'الشروط و الأحكام', href: '#terms' },
  ];

  const handleRegisterClick = () => {
    // معالجة النقر على زر التسجيل
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: Array<{ question: string; answer: string | JSX.Element }> = [
    {
      question: 'ما هي الأوراق المطلوبة ؟',
      answer: 'نحتاج إلى وكالة مصدقة يتم عملها إلكترونيا عبر منصة ناجز أو من سفارة بلدك وجواز سفر ساري المفعول.'
    },
    {
      question: 'ما هي الضمانات التي تقدمونها ؟',
      answer: 'نقدم 3 ضمانات الأولى تكون خلو الشركة القديمة من عمال وديون سابقة, الثانية قبول الشركة من وزارة الاستثمار السعودية, الضمانة الثالثة تكون في عقد البيع المبرم في وزارة التجارة العمانية عند شرائنا للشركة بالنيابة عنك وبنص البند الرابع فيها ان البائع يتحمل جميع الديون السابقة للسجل.'
    },
    {
      question: 'كيف أعرف إذا نشاطي تجاري أو خدمي وما الفرق بينهما ؟',
      answer: (
        <div className="faq-answer-content">
          <div className="faq-answer-section">
            الخدمي: مثل المقاولات, المطاعم, الفنادق, ورش السيارات, الخ
          </div>
          <div className="faq-answer-section">
            الصناعي: مثل مصنع شوكولاتة, مصنع بلاستيك, مصنع حديد.. إلخ
          </div>
          <div className="faq-answer-section">
            وبالنسبة للترخيص الخدمي أو الصناعي يتطلب وجود شركة من الخارج عمرها أكثر من سنة وقوائم مالية آخر سنة وكذلك عقد التأسيس كلهم مصدقين من الخارجية والسفارة السعودية وهذا الذي نحن نساعدك فيه ونعمله لك
          </div>
          <div className="faq-answer-section">
            التجاري: مثل محل الملابس أو الأواني المنزلية وأي شي يشمل استيراد السلع من الخارج او شرائها من مورد محلي ثم إعادة بيعها.
          </div>
          <div className="faq-answer-section">
            النقل: نقل الركاب أو البضائع بالشاحنات أو الباصات.
          </div>
          <div className="faq-answer-section">
            بالنسبة للترخيص التجاري أو النقل يتطلب وجود 3 شركات من 3 دول مختلفة, والشركة الأم يجب أن يكون عمرها أكثر من سنة او 10 سنوات للنقل وقوائم مالية آخر سنة وكذلك عقد التأسيس كلهم مصدقين من الخارجية والسفارة السعودية وهذا الذي نحن نساعدك فيه ونعمله لك التراخيص الاخرى مثل التطوير العقاري ونحوه وحاليا غير متوفر لدينا.
          </div>
        </div>
      )
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-page">
      <Header 
        navItems={navItems}
        registerButtonText="سجل الآن"
        onRegisterClick={handleRegisterClick}
      />
      
      <main className="faqs-page-content">
        <div className="container">
          <h1 className="faqs-page-title">الأسئلة المتكررة</h1>
          
          <div className="faqs-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon">
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d={openIndex === index ? "M18 15L12 9L6 15" : "M6 9L12 15L18 9"} 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    {typeof faq.answer === 'string' ? (
                      <p>{faq.answer}</p>
                    ) : (
                      faq.answer
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FAQsPage;

