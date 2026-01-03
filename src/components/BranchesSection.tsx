import './BranchesSection.css';
import map from '../assets/images/branches_map.png';
import location_1 from '../assets/images/branches_location_1.png';
import location_2 from '../assets/images/branches_location_2.png';
import call from '../assets/images/branches_call.png';
import logo from '../assets/images/branches_logo.png';

function BranchesSection() {
  return (
    <section className="branches-section">
      <div className="container">
        <div className="branches-content">
          <div className="branches-header">
            <div className="branches-header-top">
              <div className="branches-header-item">
                <div className="branches-icon-wrapper">
                  <img 
                    src={location_1} 
                    alt="Location" 
                    className="branches-icon"
                  />
                </div>
                <h2 className="branches-title">فروعنا</h2>
              </div>
              <p className="branches-subtitle">
                ابدأ رحلتك مع صناع الفرص...اعرف اقرب فرع إليك الآن
              </p>
            </div>
            <div className="branches-header-top-2">
              <div className="branches-contact-header">
                <div className="branches-contact-title-wrapper">
                  <div className="branches-contact-icon">
                    <img 
                      src={call} 
                      alt="Call" 
                      className="call-icon"
                    />
                  </div>
                  <h3 className="branches-contact-title">اتصل بنا</h3>
                </div>
              </div>
              <p className="branches-subtitle">
                لا تتردد في التواصل
              </p>
            </div>
          </div>
          <div className="branches-main">
            <div className="branches-map">
              <div className="map-container">
                <img 
                  src={map} 
                  alt="Map" 
                  className="map-img"
                />
                <div className="branches-addresses">
                  <div className="address-item">
                    <div className="address-icon">
                      <img 
                        src={location_2} 
                        alt="Location" 
                        className="location-icon"
                      />
                    </div>
                    <p className="address-text">
                      شارع زيد بن ثابت, حي الملز, بناء رقم 56, الدور الاول, مكتب رقم 8, الرياض, المملكة العربية السعودية.
                    </p>
                  </div>
                  <div className="address-item">
                    <div className="address-icon">
                      <img 
                        src={location_2} 
                        alt="Location" 
                        className="location-icon"
                      />
                    </div>
                    <p className="address-text">
                      عمارة لا إله إلا الله, المدخل الشرقي, الدور التاسع, مكتب رقم 82, شارع فلسطين, حي الشرفية, جدة, المملكة العربية السعودية.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="branches-info">
              <div className="branches-phone">
                <p className="phone-number">9200 321 65</p>
              </div>
              <div className="branches-logo">
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="logo-img"
                />
                <div className="retrieval-time-content">
                  <p className="retrieval-time-text"><span className="retrieval-time-text-span">الأحد إلى الخميس:</span> 10:00 ص - 5:00 م</p>
                  <p className="retrieval-time-text"><span className="retrieval-time-text-span">الجمعة والسبت:</span> مغلق</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BranchesSection;
