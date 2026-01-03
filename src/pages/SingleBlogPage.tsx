import { useParams, useNavigate } from 'react-router-dom';
import './SingleBlogPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SingleBlogPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const navItems = [
    { label: 'الرئيسية', href: '/', active: false },
    { label: 'خدماتنا', href: '/services', active: false },
    { label: 'المقالات', href: '/blogs', active: true },
    { label: 'الأسئلة المتكررة', href: '/faq' },
    { label: 'معلومات عنا', href: '/about' },
    { label: 'اتصل بنا', href: '/contact' },
    { label: 'الشروط و الأحكام', href: '#terms' },
  ];

  const handleRegisterClick = () => {
    // معالجة النقر على زر التسجيل
  };

  // بيانات المدونات (يمكن استبدالها بطلب API)
  const articles = [
    {
      id: 1,
      title: 'الاستثمار في السعودية: فرص واعدة ونمو مستدام',
      description: 'نقوم بتأسيس الشركات في المملكة العربية السعودية برأس مال أجنبي %100 واستخراج الترخيص الاستثماري الخدمي أو التجاري أو الصناعي أو النقل.',
      fullContent: `الاستثمار في المملكة العربية السعودية يشهد نمواً متسارعاً في السنوات الأخيرة، حيث أصبحت المملكة وجهة استثمارية جذابة للمستثمرين من جميع أنحاء العالم. تتميز المملكة بموقعها الاستراتيجي ومواردها الطبيعية الوفيرة، مما يجعلها سوقاً واعداً للاستثمار.

تقدم المملكة العربية السعودية العديد من الفرص الاستثمارية في مختلف القطاعات، بما في ذلك قطاع الطاقة والبنية التحتية والتكنولوجيا والرعاية الصحية. كما توفر الحكومة السعودية بيئة استثمارية مواتية من خلال تبسيط الإجراءات وتقديم الحوافز للمستثمرين.

نقوم بتأسيس الشركات في المملكة العربية السعودية برأس مال أجنبي %100 واستخراج الترخيص الاستثماري الخدمي أو التجاري أو الصناعي أو النقل. نحن نقدم خدمات شاملة لدعم المستثمرين في رحلتهم الاستثمارية في المملكة.`,
      date: '2022/5/8',
      author: 'أحمد محمد',
      readTime: '1 دقيقة قراءة',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'عُمان: معجزة اقتصادية في شبه الجزيرة العربية',
      description: 'نقوم بتأسيس الشركات في المملكة العربية السعودية برأس مال أجنبي %100 واستخراج الترخيص الاستثماري الخدمي أو التجاري أو الصناعي أو النقل.',
      fullContent: `سلطنة عُمان تشهد نمواً اقتصادياً ملحوظاً في السنوات الأخيرة، حيث تعمل الحكومة العُمانية على تنويع الاقتصاد وتشجيع الاستثمار الأجنبي. تتميز عُمان بموقعها الاستراتيجي ومواردها الطبيعية.

تقدم سلطنة عُمان فرصاً استثمارية واعدة في قطاعات متعددة مثل السياحة والطاقة والصناعة. كما توفر الحكومة العُمانية بيئة استثمارية جذابة من خلال تبسيط الإجراءات وتقديم الحوافز.

نقوم بتأسيس الشركات في سلطنة عُمان برأس مال أجنبي %100 واستخراج الترخيص الاستثماري الخدمي أو التجاري أو الصناعي أو النقل. نحن نقدم خدمات شاملة لدعم المستثمرين.`,
      date: '2022/5/8',
      author: 'أحمد محمد',
      readTime: '1 دقيقة قراءة',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'الاستثمار في السعودية: فرص واعدة ونمو مستدام',
      description: 'نقوم بتأسيس الشركات في المملكة العربية السعودية برأس مال أجنبي %100 واستخراج الترخيص الاستثماري الخدمي أو التجاري أو الصناعي أو النقل.',
      fullContent: `الاستثمار في المملكة العربية السعودية يشهد نمواً متسارعاً في السنوات الأخيرة، حيث أصبحت المملكة وجهة استثمارية جذابة للمستثمرين من جميع أنحاء العالم. تتميز المملكة بموقعها الاستراتيجي ومواردها الطبيعية الوفيرة، مما يجعلها سوقاً واعداً للاستثمار.

تقدم المملكة العربية السعودية العديد من الفرص الاستثمارية في مختلف القطاعات، بما في ذلك قطاع الطاقة والبنية التحتية والتكنولوجيا والرعاية الصحية.`,
      date: '2022/5/8',
      author: 'أحمد محمد',
      readTime: '1 دقيقة قراءة',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'عُمان: معجزة اقتصادية في شبه الجزيرة العربية',
      description: 'نقوم بتأسيس الشركات في المملكة العربية السعودية برأس مال أجنبي %100 واستخراج الترخيص الاستثماري الخدمي أو التجاري أو الصناعي أو النقل.',
      fullContent: `سلطنة عُمان تشهد نمواً اقتصادياً ملحوظاً في السنوات الأخيرة، حيث تعمل الحكومة العُمانية على تنويع الاقتصاد وتشجيع الاستثمار الأجنبي.`,
      date: '2022/5/8',
      author: 'أحمد محمد',
      readTime: '1 دقيقة قراءة',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'الاستثمار في السعودية: فرص واعدة ونمو مستدام',
      description: 'نقوم بتأسيس الشركات في المملكة العربية السعودية برأس مال أجنبي %100 واستخراج الترخيص الاستثماري الخدمي أو التجاري أو الصناعي أو النقل.',
      fullContent: `الاستثمار في المملكة العربية السعودية يشهد نمواً متسارعاً في السنوات الأخيرة.`,
      date: '2022/5/8',
      author: 'أحمد محمد',
      readTime: '1 دقيقة قراءة',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'عُمان: معجزة اقتصادية في شبه الجزيرة العربية',
      description: 'نقوم بتأسيس الشركات في المملكة العربية السعودية برأس مال أجنبي %100 واستخراج الترخيص الاستثماري الخدمي أو التجاري أو الصناعي أو النقل.',
      fullContent: `سلطنة عُمان تشهد نمواً اقتصادياً ملحوظاً.`,
      date: '2022/5/8',
      author: 'أحمد محمد',
      readTime: '1 دقيقة قراءة',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
      id: 7,
      title: 'الاستثمار في السعودية: فرص واعدة ونمو مستدام',
      description: 'نقوم بتأسيس الشركات في المملكة العربية السعودية برأس مال أجنبي %100 واستخراج الترخيص الاستثماري الخدمي أو التجاري أو الصناعي أو النقل.',
      fullContent: `الاستثمار في المملكة العربية السعودية يشهد نمواً متسارعاً.`,
      date: '2022/5/8',
      author: 'أحمد محمد',
      readTime: '1 دقيقة قراءة',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
      id: 8,
      title: 'عُمان: معجزة اقتصادية في شبه الجزيرة العربية',
      description: 'نقوم بتأسيس الشركات في المملكة العربية السعودية برأس مال أجنبي %100 واستخراج الترخيص الاستثماري الخدمي أو التجاري أو الصناعي أو النقل.',
      fullContent: `سلطنة عُمان تشهد نمواً اقتصادياً ملحوظاً.`,
      date: '2022/5/8',
      author: 'أحمد محمد',
      readTime: '1 دقيقة قراءة',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
  ];

  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="single-blog-page">
        <Header 
          navItems={navItems}
          registerButtonText="سجل الآن"
          onRegisterClick={handleRegisterClick}
        />
        <main className="single-blog-content">
          <div className="container">
            <p>المدونة غير موجودة</p>
            <button onClick={() => navigate('/blogs')}>العودة إلى المدونات</button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="single-blog-page">
      <Header 
        navItems={navItems}
        registerButtonText="سجل الآن"
        onRegisterClick={handleRegisterClick}
      />
      
      <main className="single-blog-content">
        <div className="container">
          <div className="single-blog-wrapper">
            <div className="blog-hero-image">
            <span className="read-time-badge">{article.readTime}</span>
              <img 
                src={article.image} 
                alt={article.title}
                className="blog-hero-img"
              />
            </div>

            <div className="blog-content-section">
              <div className="blog-meta-info">
                <span className="blog-meta-author">بقلم: {article.author}</span>
                <span className="blog-meta-date">{article.date}</span>
              </div>

              <h1 className="blog-main-title">{article.title}</h1>

              <div className="blog-full-content">
                {article.fullContent.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="blog-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default SingleBlogPage;

