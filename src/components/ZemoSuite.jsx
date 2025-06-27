import React from 'react';
import './ZemoSuite.css';

function ZemoSuite() {
  return (
    <div className="zemo-suite-container">
      {/* Hero Section */}
      <section className="suite-hero">
        <h1>ZEMO SUITE</h1>
        <p className="suite-subtitle">Your Complete Tournament Management Solution</p>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <h2>Welcome to Zemo Suite</h2>
        <p>
          where we turn tournament organizing into a breeze! With our platform, you can level up your event's control and professionalism while having a bit of fun along the way.<br /><br />
          Imagine effortlessly juggling every tournament detail, from publishing to registrations, payments, and even witty communication. Yes, we're talking about being the tournament maestro!<br /><br />
          And who doesn't love a bit of live action? With our live scoring feature, you'll have your audience on the edge of their seats with real-time updates and share-worthy scorecards. It's like being the sports commentator of your own game!<br /><br />
          But wait, there's more! Our creative feature is where the real magic happens. Add a touch of flair and excitement to matches by giving every player their moment of fame with personalized images and funky names. You'll be the MVP of creativity!<br /><br />
          And for the cherry on top, our certificate generation tool lets you create hundreds of certificates with just a click. Talk about impressing your players and sponsors effortlessly!<br /><br />
          So, what are you waiting for? Dive into the Zemo Suite and experience the joy of stress-free tournament management. It's time to play smarter, not harder!
        </p>
        <div className="zemo-badge">Zemo - Sportify Life!</div>
      </section>

      {/* Features Grid */}
      <section className="suite-features-grid">
        <div className="feature-card">
          <div className="feature-icon">🏆</div>
          <h3>Tournament Management</h3>
          <p>Create and manage tournaments with ease. Handle registrations, schedules, and brackets all in one place.</p>
          <ul>
            <li>Tournament Creation</li>
            <li>Registration Management</li>
            <li>Schedule Generation</li>
            <li>Bracket Management</li>
          </ul>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Live Scoring</h3>
          <p>Real-time score updates and statistics tracking for all your matches.</p>
          <ul>
            <li>Real-time Updates</li>
            <li>Match Statistics</li>
            <li>Player Performance</li>
            <li>Team Rankings</li>
          </ul>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎨</div>
          <h3>Creative Making</h3>
          <p>Create stunning visuals and graphics for your tournaments.</p>
          <ul>
            <li>Custom Templates</li>
            <li>Team Graphics</li>
            <li>Social Media Assets</li>
            <li>Tournament Posters</li>
          </ul>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📄</div>
          <h3>Certificate Generation</h3>
          <p>Automatically generate certificates for participants and winners.</p>
          <ul>
            <li>Custom Certificates</li>
            <li>Bulk Generation</li>
            <li>Digital Distribution</li>
            <li>Print-ready Format</li>
          </ul>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔢</div>
          <h3>BIB Management</h3>
          <p>Efficiently manage participant numbers and identification.</p>
          <ul>
            <li>BIB Assignment</li>
            <li>Number Tracking</li>
            <li>Participant Database</li>
            <li>Quick Lookup</li>
          </ul>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💰</div>
          <h3>Auction System</h3>
          <p>Conduct player auctions with our integrated auction platform.</p>
          <ul>
            <li>Live Auctions</li>
            <li>Bid Management</li>
            <li>Team Budgets</li>
            <li>Auction History</li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-img">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
            </div>
            <div className="testimonial-content">
              <p>"Super scoring system by Zemo. Presentable and neat!"</p>
              <span className="testimonial-author">- Jaspreet Singh Chadha</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-img">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
            </div>
            <div className="testimonial-content">
              <p>"The tournament management features have made organizing events so much easier!"</p>
              <span className="testimonial-author">- Priya Sharma</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="suite-cta">
        <h2>Ready to Transform Your Tournament Experience?</h2>
        <p>Join thousands of organizers who trust Zemo Suite for their tournament management needs.</p>
        <button className="cta-button">Get Started Now</button>
      </section>
    </div>
  );
}

export default ZemoSuite; 