import './ConsultantSection.css';
import consultant from '../assets/images/consultant.png';

function ConsultantSection() {
  return (
    <section className="consultant-section">
      <div className="container">
        <div className="consultant-content">
          <div className="consultant-image">
            <img 
              src={consultant} 
              alt="Consultant" 
              className="consultant-img"
            />
          </div>
          <div className="consultant-text">
            <div className="consultant-title-wrapper">
              <h2 className="consultant-title"># المستشار أنور علي</h2>
              <span className="consultant-role">CEO</span>
            </div>
            <p className="consultant-description full-width">
              متخصص في تأسيس الشركات وقد أسست أكثر من 400+ شركة في عمان والسعودية وبرأس مال أجنبي 100% خلال مدة إنجاز تتراوح بين 30 إلى 60 يوم عمل ولدي من الخبرة ما يؤهلني لتجاوز أي عقبات في مرحلة تأسيس الشركة وأحمل عنك هم ذلك وأسلمك لك أوراق شركتك جاهزة دون عناء مع فريق عملي المتناهي وفروعي في السعودية وسلطنة عمان.متخصص في تأسيس الشركات وقد أسست أكثر من 400+ شركة في عمان والسعودية وبرأس مال أجنبي 100% خلال مدة إنجاز تتراوح بين 30 إلى
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default ConsultantSection;
