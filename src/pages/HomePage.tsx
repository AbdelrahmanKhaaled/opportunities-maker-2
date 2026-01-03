import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import StatisticsSection from '../components/StatisticsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ServicesSection from '../components/ServicesSection';
import FeaturesSection from '../components/FeaturesSection';
import WorkMethodSection from '../components/WorkMethodSection';
import ConsultantSection from '../components/ConsultantSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BranchesSection from '../components/BranchesSection';

function HomePage() {
  const navItems = [
    { label: 'الرئيسية', href: '/', active: true },
    { label: 'خدماتنا', href: '/services', active: false },
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
    <div className="app">
      <div className="app-background"></div>
      <Header 
        navItems={navItems}
        registerButtonText="سجل الآن"
        onRegisterClick={handleRegisterClick}
      />
      
      <main className="main-content">
        <HeroSection />
        <StatisticsSection />
        <HowItWorksSection />
        <ServicesSection />
        <FeaturesSection />
        <WorkMethodSection />
        <ConsultantSection />
        <TestimonialsSection />
        <BranchesSection />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;

