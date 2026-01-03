import { useEffect, useState } from 'react';
import './StatisticsSection.css';
import AnimatedSection from './AnimatedSection';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';

interface StatCardProps {
  number: string;
  label: string;
  delay: number;
  index: number;
}

function StatCard({ number, label, delay, index }: StatCardProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.3,
    rootMargin: '0px',
    triggerOnce: true,
  });

  // Extract numeric value for counting
  const hasK = number.includes('K');
  const numericValue = number.replace(/[^0-9]/g, '');
  const prefix = number.startsWith('+') ? '+' : '';
  const endValue = numericValue ? parseInt(numericValue) : 0;
  
  const { count } = useCountUp(isVisible ? endValue : 0, {
    duration: 4000,
    start: 0,
    decimals: 0,
  });

  const displayNumber = hasK 
    ? `${prefix}${count}K`
    : `${prefix}${count}`;

  return (
    <div
      ref={ref}
      className={`stat-card animate-fade-in-scale ${isVisible ? 'animated' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="stat-number animate-count-up">
        {displayNumber}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function StatisticsSection() {
  const stats = [
    { number: '2K', label: 'عميل' },
    { number: '+300', label: 'شركة ناجحة' },
    { number: '+10', label: 'خبرة' },
  ];

  return (
    <section className="statistics-section">
      <div className="container">
        <div className="statistics-grid">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              delay={index * 150}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
