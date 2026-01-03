import './ServicesPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

function ServicesPage() {
  const navItems = [
    { label: 'الرئيسية', href: '/', active: false },
    { label: 'خدماتنا', href: '/services', active: true },
    { label: 'المقالات', href: '/blogs', active: false },
    { label: 'الأسئلة المتكررة', href: '/faq' },
    { label: 'معلومات عنا', href: '/about' },
    { label: 'اتصل بنا', href: '/contact' },
    { label: 'الشروط و الأحكام', href: '#terms' },
  ];

  const handleRegisterClick = () => {
    // معالجة النقر على زر التسجيل
  };

  return (
    <div className="services-page">
      <Header 
        navItems={navItems}
        registerButtonText="سجل الآن"
        onRegisterClick={handleRegisterClick}
      />
      
      <main className="services-page-content page-enter">
        <AnimatedSection animationType="fade-in-down" delay={0}>
          <div className="services-header">
            <h1 className="services-header-title">خدماتنا</h1>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animationType="fade-in-up" delay={100}>
          <div className="services-main-card">
            <AnimatedSection animationType="fade-in-left" delay={200}>
              <div className="services-intro">
                <p className="services-intro-text">
                  نقدم خدمة تأسيس شركة أجنبية %100 في المملكة العربية السعودية عبر الاستحواذ على شركات دولية وكذلك تأسيس الشركات في سلطنة عمان. كما نعمل على التركيز على تقديم هذه الخدمتين فقط لنتميز عن غيرنا.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="services-details">
              <div className="services-image">
                <AnimatedSection animationType="zoom-in" delay={300}>
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                    alt="Laptop with dashboard" 
                    className="laptop-img"
                  />
                </AnimatedSection>
              </div>
              <div className="services-details-content">
                <AnimatedSection animationType="fade-in-right" delay={400}>
                
                  <h2 className="services-details-title">تأسيس شركات في المملكة العربية السعودية</h2>
                  <p className="services-details-description">
                    نقوم بتأسيس الشركات في المملكة العربية السعودية برأس مال أجنبي %100 واستخراج الترخيص الاستثماري الخدمي أو التجاري أو الصناعي أو النقل. وذلك من خلال الاستحواذ على شركة أجنبية عمانية تكون هي الأم وشركات فرعية في دول أخرى لاستخراج الترخيص التجاري أو ترخيص النقل.
                  </p>
                  <button className="services-start-button">
                    <span className="button-text">ابدأ الآن</span>
                    <div className="button-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 5v14l-11-7z" fill="currentColor"/>
                      </svg>
                    </div>
                  </button>
                
              </AnimatedSection>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}

export default ServicesPage;
