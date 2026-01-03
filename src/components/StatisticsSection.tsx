import './StatisticsSection.css';

function StatisticsSection() {
  return (
    <section className="statistics-section">
      <div className="container">
        <div className="statistics-grid">
          <div className="stat-card">
            <div className="stat-number">2K</div>
            <div className="stat-label">عميل</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">+300</div>
            <div className="stat-label">شركة ناجحة</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">+10</div>
            <div className="stat-label">خبرة</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
