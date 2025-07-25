import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.svg';
import Tournament from './components/Tournament';
import ZemoSuite from './components/ZemoSuite';
import TournamentManagement from './components/TournamentManagement';
import LiveScoring from './components/LiveScoring';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Add certificate form state if needed
  const [certificateType, setCertificateType] = useState('');
  const [options, setOptions] = useState({
    includeLogo: false,
    includeSignature: false,
  });

  const renderContent = () => {
    switch (currentPage) {
      case 'tournaments':
        return <Tournament />;
      case 'zemo-suite':
        return <ZemoSuite />;
      case 'tournament-management': // Add routing for Tournament Management
        return <TournamentManagement />;
      case 'live-scoring': // Add routing for Live Scoring
        return <LiveScoring />;
      case 'terms':
        return <div className="page-content"><h2>Terms & Conditions</h2><p>Terms & Conditions page content goes here.</p></div>;
      case 'privacy':
        return <div className="page-content"><h2>Privacy Policy</h2><p>Privacy Policy page content goes here.</p></div>;
      case 'refund':
        return <div className="page-content"><h2>Refund Policy</h2><p>Refund Policy page content goes here.</p></div>;
      case 'contact':
        return <div className="page-content"><h2>Contact Us</h2><p>Contact Us page content goes here.</p></div>;
      case 'certificate-generation':
        return (
          <div className="page-content">
            <h2>Certificate Generation</h2>
            <form>
              <div>
                <label>
                  <input
                    type="radio"
                    name="certificateType"
                    value="participation"
                    checked={certificateType === 'participation'}
                    onChange={() => setCertificateType('participation')}
                  />
                  Participation Certificate
                </label>
                <label>
                  <input
                    type="radio"
                    name="certificateType"
                    value="winner"
                    checked={certificateType === 'winner'}
                    onChange={() => setCertificateType('winner')}
                  />
                  Winner Certificate
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={options.includeLogo}
                    onChange={() =>
                      setOptions({ ...options, includeLogo: !options.includeLogo })
                    }
                  />
                  Include Logo
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={options.includeSignature}
                    onChange={() =>
                      setOptions({ ...options, includeSignature: !options.includeSignature })
                    }
                  />
                  Include Signature
                </label>
              </div>
            </form>
          </div>
        );
      default:
        return (
          <>
            {/* Hero Section */}
            <section className="hero-section">
              <div className="hero-bg">
                <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80" alt="Basketball" className="hero-img" />
                <div className="hero-gradient" />
              </div>
              <div className="hero-content">
                <h1 className="big-heading">ENHANCE YOUR TOURNAMENT EXPERIENCE</h1>
                <p className="hero-sub">Streamline Tournament Management: Your All-in-One Solution</p>
                <button className="cta-btn">Know More</button>
              </div>
            </section>

            {/* Stats Bar */}
            <section className="stats-bar">
              <div className="stat">
                <span className="stat-number">60+</span>
                <span className="stat-label">Organizers use our platform to better manage their tournaments.</span>
              </div>
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Existing tournaments across India in sports</span>
              </div>
              <div className="stat">
                <span className="stat-number">10000+</span>
                <span className="stat-label">Engaged players building a thriving community of sports lovers.</span>
              </div>
            </section>
            <hr></hr>
            {/* Zemo Suite Features */}
            <section className="suite-section">
              <h1 >ZEMO SUITE</h1>
              <h3 className="suite-title">COMPLETE TOURNAMENT MANAGEMENT SYSTEM</h3>
              <div className="suite-features">
                <div className="suite-feature card">
                  <div className="suite-icon">🏆</div>
                  <div className="suite-label">TOURNAMENT MANAGEMENT</div>
                </div>
                <div className="suite-feature card">
                  <div className="suite-icon">📊</div>
                  <div className="suite-label">LIVE SCORING</div>
                </div>
                <div className="suite-feature card">
                  <div className="suite-icon">🎨</div>
                  <div className="suite-label">CREATIVES MAKING</div>
                </div>
                <div className="suite-feature card">
                  <div className="suite-icon">📄</div>
                  <div className="suite-label">CERTIFICATE GENERATION</div>
                </div>
                <div className="suite-feature card">
                  <div className="suite-icon">🔢</div>
                  <div className="suite-label">BIB MANAGEMENT</div>
                </div>
                <div className="suite-feature card">
                  <div className="suite-icon">💰</div>
                  <div className="suite-label">AUCTION SYSTEM</div>
                </div>
                <div className="suite-feature card">
                  <div className="suite-icon">🏟️</div>
                  <div className="suite-label">VENUE BOOKING</div>
                </div>
              </div>
            </section>
            <hr></hr>
            {/* How Zemo Helps Section */}
            <section className="how-helps-section">
              <h2>HOW ZEMO SUITE HELPS <span className="highlight">TOURNAMENT ORGANIZERS?</span></h2>
              <p>Enhance your management effortlessly with ZeMo's unified platform and elevate the player experience.</p>
              <div className="helps-features">
                <div className="helps-feature card">TOURNAMENT MANAGEMENT</div>
                <div className="helps-feature card">LIVE SCORING</div>
                <div className="helps-feature card">CREATIVE MAKING</div>
                <div className="helps-feature card">GENERATE CERTIFICATES</div>
              </div>
            </section>
            <hr></hr>
            {/* Final CTA Section */}
            <section className="cta-section">
              <h2>READY TO HOST YOUR TOURNAMENT?</h2>
              <p>Embark on a seamless journey of tournament management with our powerful platform. Create, manage, and publish tournament with ease. Engage participants, track scores, and elevate your tournaments to new heights. Join us today and transform your vision into reality!</p>
              <button className="cta-btn">Create your Tournament</button>
            </section>
          </>
        );
    }
  };

  return (
    <div className="App">
      <nav className="navbar sticky-navbar">
        <div className="navbar-left">
          {/* <img src={logo} alt="Zemo Logo" className="navbar-logo" /> */}
          <h2 className="navbar-brand">Zemo</h2>
        </div>

        <ul className="navbar-menu">
          <li
            className={currentPage === 'home' ? 'active' : ''}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setDropdownVisible(true)}   // Show dropdown on hover
            onMouseLeave={() => setDropdownVisible(false)}  // Hide dropdown when mouse leaves
          >
            Solutions
            {isDropdownVisible && (
              <ul className="dropdown-menu">
                <li onClick={() => setCurrentPage('tournament-management')}>
                  Tournament Management
                </li>
                <li onClick={() => setCurrentPage('live-scoring')}>
                  Live Scoring
                </li>
                <li onClick={() => setCurrentPage('certificate-generation')}>
                  Certificate Generation
                </li>
                <li onClick={() => setCurrentPage('creative-making')}>
                  Creative Making
                </li>
                <li onClick={() => setCurrentPage('bib-management')}>
                  Bib Management
                </li>
                <li onClick={() => setCurrentPage('auction-bay')}>
                  Auction Bay
                </li>
                <li onClick={() => setCurrentPage('contact-us')}>
                  Contact Us
                </li>
              </ul>
            )}
          </li>
          <li
            className={currentPage === 'zemo-suite' ? 'active' : ''}
            onClick={() => setCurrentPage('zemo-suite')}
          >
            Zemo Suite
          </li>
          <li
            className={currentPage === 'tournaments' ? 'active' : ''}
            onClick={() => setCurrentPage('tournaments')}
          >
            Tournaments
          </li>
        </ul>

        <div className="navbar-actions">
          <button className="btn login-btn">Login</button>
          <button className="btn signup-btn">Sign Up on Zemo</button>
        </div>
      </nav>

      {renderContent()}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-logo">
            {/* <img src={logo} alt="Zemo Logo" /> */}
            <span>ZEMO SPORTIFY LIFE!</span>
          </div>
          <div className="footer-links">
            <div>
              <h4>USEFUL LINKS</h4>
              <ul>
                <li onClick={() => setCurrentPage('terms')} style={{cursor: 'pointer'}}>Terms & Conditions</li>
                <li onClick={() => setCurrentPage('privacy')} style={{cursor: 'pointer'}}>Privacy Policy</li>
                <li onClick={() => setCurrentPage('refund')} style={{cursor: 'pointer'}}>Refund Policy</li>
                <li onClick={() => setCurrentPage('contact')} style={{cursor: 'pointer'}}>Contact Us</li>
              </ul>
            </div>
            <div>
              <h4>TOURNAMENTS</h4>
              <ul>
                <li>Upcoming</li>
                <li>Ongoing</li>
                <li>Concluded</li>
              </ul>
            </div>
            <div>
              <h4>CONTACT</h4>
              <ul>
                <li>CIBA Vashi, 4th Floor, Agnel Technical Complex, Sector 9A Vashi, Navi Mumbai, Maharashtra 400703</li>
                <li>Support@zemo.co.in</li>
                <li>+91 9082705182</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Futuresport Catalyst Private Limited</p>
        </div>
      </footer>
    </div>
  );
}

export default App;