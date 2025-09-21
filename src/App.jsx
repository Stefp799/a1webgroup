import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Hero Slider
    let currentHeroSlide = 0;
    const heroSlides = document.querySelectorAll('.hero-slide');
    const totalHeroSlides = heroSlides.length;

    console.log('Hero slider initialized with', totalHeroSlides, 'slides');

    function showHeroSlide(n) {
      console.log('Showing hero slide', n);
      heroSlides.forEach(slide => slide.classList.remove('active'));

      currentHeroSlide = (n + totalHeroSlides) % totalHeroSlides;
      heroSlides[currentHeroSlide].classList.add('active');
    }

    function nextHeroSlide() {
      showHeroSlide(currentHeroSlide + 1);
    }

    function prevHeroSlide() {
      showHeroSlide(currentHeroSlide - 1);
    }

    // Initialize first hero slide
    if (totalHeroSlides > 0) {
      showHeroSlide(0);
    }

    // Auto-advance hero slides every 6 seconds
    const autoHeroSlide = setInterval(nextHeroSlide, 6000);

    // Gallery Slider (existing)
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;

    console.log('Gallery slider initialized with', totalSlides, 'slides');

    function showSlide(n) {
      console.log('Showing gallery slide', n);
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));

      currentSlide = (n + totalSlides) % totalSlides;
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    function prevSlide() {
      showSlide(currentSlide - 1);
    }

    // Initialize first gallery slide
    if (totalSlides > 0) {
      showSlide(0);
    }

    // Auto-advance gallery slides every 5 seconds
    const autoSlide = setInterval(nextSlide, 5000);

    // Gallery navigation
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (nextBtn) {
      nextBtn.addEventListener('click', nextSlide);
      console.log('Gallery next button listener added');
    }
    if (prevBtn) {
      prevBtn.addEventListener('click', prevSlide);
      console.log('Gallery prev button listener added');
    }

    // Gallery dot navigation
    const dotClickHandlers = [];
    dots.forEach((dot, index) => {
      const handler = () => showSlide(index);
      dot.addEventListener('click', handler);
      dotClickHandlers.push({ dot, handler });
    });

    console.log('Gallery dot listeners added for', dots.length, 'dots');

    // Cleanup
    return () => {
      clearInterval(autoHeroSlide);
      clearInterval(autoSlide);

      if (nextBtn) nextBtn.removeEventListener('click', nextSlide);
      if (prevBtn) prevBtn.removeEventListener('click', prevSlide);
      dotClickHandlers.forEach(({ dot, handler }) => {
        dot.removeEventListener('click', handler);
      });

      console.log('All sliders cleanup completed');
    };
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h3>A1webgroup.com</h3>
          </div>
          <div className="nav-menu">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="nav-cta">
            <a href="tel:508-478-0871" className="nav-phone">📞 (508) 478-0871</a>
            <a href="#contact" className="btn btn-primary">Start Project</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Image Slider */}
      <section className="hero-section" id="home">
        <div className="hero-slider">
          <div className="hero-slide active">
            <img src="/images/plumber.jpg" alt="Meet Joe the Plumber" />
            <div className="slide-text">Your Expert in <span className="highlight">Digital</span> and <span className="highlight">Growth</span></div>
          </div>
          <div className="hero-slide">
            <img src="/images/joe-help2-1.webp" alt="Joe Emergency Response" />
            <div className="slide-text">Website Down?<br/><span class="highlight">Joe Is Here To Help!</span></div>
          </div>
          <div className="hero-slide">
            <img src="/images/pipes.jpg" alt="Digital Pipeline Systems" />
            <div className="slide-text">Expert in Every Possible <span className="highlight">Digital Pipeline</span></div>
          </div>
          <div className="hero-slide">
            <img src="/images/joe-solution2.webp" alt="Joe Delivers Solutions" />
            <div className="slide-text">From Tangled Data...To<br/><span className="highlight">Clear Solutions</span></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subheader">About agency</h6>
            <h2>Professional digital solutions for business growth</h2>
          </div>
          <p>
            Our team focuses on quality and attention to detail in every digital strategy we craft.
            From small optimizations to complete transformations, we handle everything efficiently and professionally.
          </p>
        </div>
      </section>

      {/* This is How We Work Section */}
      <section className="how-we-work-section" id="process">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subheader">Emergency Digital Services</h6>
            <h2>This is How We Work</h2>
            <p>From tangled data to clear solutions - Joe delivers the insights you need</p>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-image">
                <img src="/images/screens.jpg" alt="Emergency Call - Digital Crisis Response" />
              </div>
              <h3>Emergency Call</h3>
              <p>"Joe, help! My site is down. Customers cannot reach me."</p>
              <div className="step-description">
                When your digital world breaks down, we respond immediately.
                24/7 emergency response for urgent fixes and rapid deployment.
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-image">
                <img src="/images/pipes.jpg" alt="Digital Diagnosis - Problem Analysis" />
              </div>
              <h3>Digital Diagnosis</h3>
              <p>Joe analyzes the problem with professional digital tools</p>
              <div className="step-description">
                Our expert team uses advanced diagnostic tools to identify
                the root cause and develop the perfect solution strategy.
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-image">
                <img src="/images/plumber.jpg" alt="Solution Delivered - Results Achieved" />
              </div>
              <h3>Solution Delivered</h3>
              <p>Joe pulls out the right tool and delivers results</p>
              <div className="step-description">
                Problem solved! Your digital pipelines are flowing perfectly,
                your growth charts are trending up, and your business is thriving.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subheader">Our services</h6>
            <h2>Wide range of digital services</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-number">01.</div>
              <h3>Emergency Digital</h3>
              <p>24/7 emergency digital services for urgent fixes and rapid deployment.</p>
              <div className="service-price">from $150</div>
            </div>
            <div className="service-card">
              <div className="service-number">02.</div>
              <h3>Pipeline Setup</h3>
              <p>Professional marketing pipeline setup and optimization for lead generation and conversion.</p>
              <div className="service-price">from $240</div>
            </div>
            <div className="service-card">
              <div className="service-number">03.</div>
              <h3>Growth Systems</h3>
              <p>Complete digital growth system implementation, optimization, and maintenance services.</p>
              <div className="service-price">from $340</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section with Image Slider */}
      <section className="gallery-section" id="gallery">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subheader">Our Work</h6>
            <h2>Professional digital portfolio</h2>
          </div>
          <div className="image-slider">
            <div className="slider-container">
              <div className="slide active">
                <img src="/images/faucet1.jpg" alt="Digital Marketing Solutions" />
                <div className="slide-overlay">
                  <h3>Digital Solutions</h3>
                  <p>Expert digital strategy and implementation services</p>
                </div>
              </div>
              <div className="slide">
                <img src="/images/pipes.jpg" alt="Digital Pipeline Systems" />
                <div className="slide-overlay">
                  <h3>Pipeline Systems</h3>
                  <p>Complete pipeline setup and optimization</p>
                </div>
              </div>
              <div className="slide">
                <img src="/images/sink.jpg" alt="Growth Systems" />
                <div className="slide-overlay">
                  <h3>Growth Services</h3>
                  <p>Professional growth system implementation</p>
                </div>
              </div>
            </div>
            <div className="slider-nav">
              <button className="prev-btn">‹</button>
              <button className="next-btn">›</button>
            </div>
            <div className="slider-dots">
              <span className="dot active" data-slide="0"></span>
              <span className="dot" data-slide="1"></span>
              <span className="dot" data-slide="2"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="section-header">
            <h6 className="section-subheader">Emergency Services</h6>
            <h4>Book emergency digital services now</h4>
          </div>
          <div className="contact-form">
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <textarea placeholder="Describe your digital challenge" rows="4" required></textarea>
              <button type="submit" className="btn btn-primary">Start Project</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App