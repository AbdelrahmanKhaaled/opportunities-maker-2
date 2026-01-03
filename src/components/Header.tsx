import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logo.png';

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface HeaderProps {
  navItems?: NavItem[];
  registerButtonText?: string;
  onRegisterClick?: () => void;
}

function Header({ 
  navItems = [],
  registerButtonText = 'سجل الآن',
  onRegisterClick
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">

          {/* Logo - Right side in RTL */}
          <div className="header-logo">
            <img src={logoImage} alt="Logo" />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Navigation Links - Center */}
          <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.href.startsWith('/') ? (
                    <Link 
                      to={item.href} 
                      className={`nav-link ${item.active ? 'active' : ''}`}
                      onClick={handleNavClick}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a 
                      href={item.href} 
                      className={`nav-link ${item.active ? 'active' : ''}`}
                      onClick={handleNavClick}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Register Button - Left side in RTL */}
          <button 
            className="register-button"
            onClick={onRegisterClick}
          >
            {registerButtonText}
          </button>

        </div>
      </div>
    </header>
  );
}

export default Header;
