import './AboutUsPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logoImage from '../assets/images/logo.png';
import consultantAvatarImage from '../assets/images/anwer_ali.png';

function AboutUsPage() {
  const navItems = [
    { label: 'الرئيسية', href: '/', active: false },
    { label: 'خدماتنا', href: '/services', active: false },
    { label: 'المقالات', href: '/blogs', active: false },
    { label: 'الأسئلة المتكررة', href: '/faq' },
    { label: 'معلومات عنا', href: '/about', active: true },
    { label: 'اتصل بنا', href: '/contact' },
    { label: 'الشروط و الأحكام', href: '#terms' },
  ];

  const handleRegisterClick = () => {
    // معالجة النقر على زر التسجيل
  };

  return (
    <div className="about-us-page">
      <Header 
        navItems={navItems}
        registerButtonText="سجل الآن"
        onRegisterClick={handleRegisterClick}
      />
      
      <main className="about-us-content">
        <div className="container">
          {/* Header Section with Logo */}
          <div className="about-header">
            <div className="about-logo">
              <img src={logoImage} alt="Opportunities Makers Logo" />
            </div>
          </div>

          {/* Top Content Block - Mission, Vision, and Company Info */}
          <div className="about-top-section">
            <div className="about-left-column">
              <div className="about-card company-card">
                <div className="about-card-background"></div>
                <h3 className="about-card-title bg">شركة صناع الفرص</h3>
                <p className="about-card-text bg">
                  هي شركة تابعة للمستشار أنور علي والتي تتخصص في خدمات تأسيس الشركات للمستثمرين الأجانب في المملكة العربية السعودية سواء المقيمين أو القادمين من الخارض وتساعدهم في استخراج التراخيص الاستثمارية اللازمة وتقوم بجميع الاجراءات. كما يوجد لديها ثلاث فروع في جدة, الرياض, مسقط.. وقريبا الدمام شركة صناع الفرص للخدمات التجارية برقم سجل تجاري 403060790
                </p>
              </div>
            </div>
            <div className="about-left-column">
              <div className="about-card mission-card">
                <h3 className="about-card-title">مهمتنا</h3>
                <p className="about-card-text">
                  أن نصبح الملاذ الأول والوجهة الرئيسية لكل راغب في الاستثمار في عمان وفي المملكة العربية السعودية.
                </p>
              </div>
              
              <div className="about-card vision-card">
                <h3 className="about-card-title">رؤيتنا</h3>
                <p className="about-card-text">
                  أن نصبح الملاذ الأول والوجهة الرئيسية لكل راغب في الاستثمار في عمان وفي المملكة العربية السعودية.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Content Block - Consultant Info */}
          <div className="about-bottom-section">
            <div className="consultant-banner">
              <div className="consultant-banner-content">
                <div className="consultant-banner-image">
                  <img src={consultantAvatarImage} alt="المستشار أنور علي" className="consultant-banner-avatar" />
                </div>
                <h3 className="consultant-banner-title">المستشار أنور علي</h3>
              </div>
              <div className="consultant-banner-text">
                <p className="about-card-text consultant-text">
                  المستشار أنور علي خريج من جامعة الـ Limkokwing في ماليزيا تخصص الأعمال الناشئة أو ما يسمى بريادة الأعمال Business Entreprenuership وهو من التخصصات النادرة في مجال الأعمال, وحاليا أحضر للماجستير في كلية الاقتصاد والمعاملات في جامعة العلوم الاسلامية في ماليزيا كذلك, وإن كنت تتساءل عن لقب (المستشار) فقد اكتسبته بعد منحي شهادة ورخصة المستشار العقاري الرسمية من الحكومة التركية, نعم فقد بدأت رحلتي من تركيا كموظف (كول سنتر) في شركة عقارية ثم استقلت وأسست شركتي الخاصة في نفس المجال وأسميتها TM2H وتخصصت في الاستثمار العقاري في أراضي قناة اسطنبول وحققت نجاحا طيبا بفضل الله ثم انتقلت إلى سلطنة عمان وأسست شركتي الثانية وأسميتها باسم عائلتي (شركة الحاضري للتجارة والاستثمار وتوسعت في مجال خدمات الاستثمار وأسست فرع مكتبي الثاني في المملكة العربية السعودية باسم (شركة صناع الفرص للخدمات التجارية) حسنا هذا كل مافي الأمر أرجو أن أكون قد أبهرتك بهذه المقدمة الموجزة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AboutUsPage;

