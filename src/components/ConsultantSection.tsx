import './ConsultantSection.css';
import consultant from '../assets/images/consultant.png';
import AnimatedSection from './AnimatedSection';

function ConsultantSection() {
  return (
    <section className="consultant-section">
      <div className="container">
        <div className="consultant-content">
          <div className="consultant-image">
            <AnimatedSection animationType="zoom-in" delay={0}>
              
                <img 
                  src={consultant} 
                  alt="Consultant" 
                  className="consultant-img hover-scale"
                />
              
            </AnimatedSection>
          </div>
          
          <AnimatedSection animationType="fade-in-left" delay={200}>
            <div className="consultant-text">
              <AnimatedSection animationType="fade-in-down" delay={400}>
                <div className="consultant-title-wrapper">
                  <h2 className="consultant-title"># المستشار أنور علي</h2>
                  <span className="consultant-role">CEO</span>
                </div>
              </AnimatedSection>
              <AnimatedSection animationType="fade-in-up" delay={600}>
                <p className="consultant-description full-width">
                  متخصص في تأسيس الشركات وقد أسست أكثر من 400+ شركة في عمان والسعودية وبرأس مال أجنبي 100% خلال مدة إنجاز تتراوح بين 30 إلى 60 يوم عمل ولدي من الخبرة ما يؤهلني لتجاوز أي عقبات في مرحلة تأسيس الشركة وأحمل عنك هم ذلك وأسلمك لك أوراق شركتك جاهزة دون عناء مع فريق عملي المتناهي وفروعي في السعودية وسلطنة عمان.متخصص في تأسيس الشركات وقد أسست أكثر من 400+ شركة في عمان والسعودية وبرأس مال أجنبي 100% خلال مدة إنجاز تتراوح بين 30 إلى
                </p>
              </AnimatedSection>
            </div>  
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default ConsultantSection;
