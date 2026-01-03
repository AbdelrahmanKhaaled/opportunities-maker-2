import { Link } from 'react-router-dom';
import './BlogsPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

function BlogsPage() {
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

  const articles = [
    {
      id: 1,
      title: 'الاستثمار في السعودية: فرص واعدة ونمو مستدام',
      description: 'نقوم بتأسيس الشركات في المملكة العربية السعودية برأس مال أجنبي %100 واستخراج الترخيص الاستثماري الخدمي أو التجاري أو الصناعي أو النقل.',
      date: '2022/5/8',
      author: 'أحمد محمد',
      readTime: '1 دقيقة قراءة',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'عُمان: معجزة اقتصادية في شبه الجزيرة العربية',
      description: 'نقوم بتأسيس الشركات في المملكة العربية السعودية برأس مال أجنبي %100 واستخراج الترخيص الاستثماري الخدمي أو التجاري أو الصناعي أو النقل.',
      date: '2022/5/8',
      author: 'أحمد محمد',
      readTime: '1 دقيقة قراءة',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'الاستثمار في السعودية: فرص واعدة ونمو مستدام',
      description: 'نقوم بتأسيس الشركات في المملكة العربية السعودية برأس مال أجنبي %100 واستخراج الترخيص الاستثماري الخدمي أو التجاري أو الصناعي أو النقل.',
      date: '2022/5/8',
      author: 'أحمد محمد',
      readTime: '1 دقيقة قراءة',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'عُمان: معجزة اقتصادية في شبه الجزيرة العربية',
      description: 'نقوم بتأسيس الشركات في المملكة العربية السعودية برأس مال أجنبي %100 واستخراج الترخيص الاستثماري الخدمي أو التجاري أو الصناعي أو النقل.',
      date: '2022/5/8',
      author: 'أحمد محمد',
      readTime: '1 دقيقة قراءة',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'الاستثمار في السعودية: فرص واعدة ونمو مستدام',
      description: 'نقوم بتأسيس الشركات في المملكة العربية السعودية برأس مال أجنبي %100 واستخراج الترخيص الاستثماري الخدمي أو التجاري أو الصناعي أو النقل.',
      date: '2022/5/8',
      author: 'أحمد محمد',
      readTime: '1 دقيقة قراءة',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'عُمان: معجزة اقتصادية في شبه الجزيرة العربية',
      description: 'نقوم بتأسيس الشركات في المملكة العربية السعودية برأس مال أجنبي %100 واستخراج الترخيص الاستثماري الخدمي أو التجاري أو الصناعي أو النقل.',
      date: '2022/5/8',
      author: 'أحمد محمد',
      readTime: '1 دقيقة قراءة',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      id: 7,
      title: 'الاستثمار في السعودية: فرص واعدة ونمو مستدام',
      description: 'نقوم بتأسيس الشركات في المملكة العربية السعودية برأس مال أجنبي %100 واستخراج الترخيص الاستثماري الخدمي أو التجاري أو الصناعي أو النقل.',
      date: '2022/5/8',
      author: 'أحمد محمد',
      readTime: '1 دقيقة قراءة',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      id: 8,
      title: 'عُمان: معجزة اقتصادية في شبه الجزيرة العربية',
      description: 'نقوم بتأسيس الشركات في المملكة العربية السعودية برأس مال أجنبي %100 واستخراج الترخيص الاستثماري الخدمي أو التجاري أو الصناعي أو النقل.',
      date: '2022/5/8',
      author: 'أحمد محمد',
      readTime: '1 دقيقة قراءة',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
  ];

  return (
    <div className="blogs-page">
      <Header 
        navItems={navItems}
        registerButtonText="سجل الآن"
        onRegisterClick={handleRegisterClick}
      />
      
      <main className="blogs-page-content page-enter">
        <div className="container">
          <AnimatedSection animationType="fade-in-down" delay={0}>
            <h1 className="blogs-page-title">المقالات</h1>
          </AnimatedSection>
          
          <div className="blogs-grid">
            {articles.map((article, index) => (
              <AnimatedSection 
                key={article.id} 
                animationType="fade-in-up" 
                delay={index % 3 * 100}
              >
                <article className="blog-card">                
                <div className="blog-image-wrapper">
                  <span className="read-time-badge">{article.readTime}</span>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="blog-image"
                  />
                </div>
                
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-author">بقلم: {article.author}</span>
                    <span className="blog-date">{article.date}</span>
                  </div>
                  
                  <h2 className="blog-title">{article.title}</h2>
                  
                  <p className="blog-description">{article.description}</p>
                  
                  <Link to={`/blog/${article.id}`} className="blog-read-button">
                    قراءة
                  </Link>
                </div>
              </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default BlogsPage;

