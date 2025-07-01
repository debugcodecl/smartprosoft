import React, { useEffect, useState } from 'react';
import './App.css';

const SmartProSoft = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Show success message
    alert('¡Mensaje enviado exitosamente! Te contactaremos pronto.');
    e.target.reset();
    console.log('Form data:', data);
  };

  return (
    <div className="smartprosoft-website">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <h2>SmartProSoft</h2>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="#inicio" className="nav-link" onClick={() => scrollToSection('inicio')}>Inicio</a>
            </li>
            <li className="nav-item">
              <a href="#servicios" className="nav-link" onClick={() => scrollToSection('servicios')}>Servicios</a>
            </li>
            <li className="nav-item">
              <a href="#nosotros" className="nav-link" onClick={() => scrollToSection('nosotros')}>Nosotros</a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link" onClick={() => scrollToSection('portfolio')}>Portfolio</a>
            </li>
            <li className="nav-item">
              <a href="#contacto" className="nav-link" onClick={() => scrollToSection('contacto')}>Contacto</a>
            </li>
            <li className="nav-item">
              <a href="#contacto" className="nav-link cta-nav" onClick={() => scrollToSection('contacto')}>Cotizar Proyecto</a>
            </li>
          </ul>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="inicio">
        <div className="hero-background">
          <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" alt="Desarrollo de Software" loading="lazy" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">
                Transformamos tus <span className="highlight">Ideas</span> 
                en <span className="highlight">Soluciones Digitales</span>
              </h1>
              <p className="hero-subtitle">
                Desarrollamos software a medida que impulsa el crecimiento de tu negocio. 
                Desde aplicaciones web hasta soluciones móviles, convertimos la tecnología en tu ventaja competitiva.
              </p>
              <div className="hero-cta">
                <a href="#contacto" className="btn-primary" onClick={() => scrollToSection('contacto')}>Comenzar Proyecto</a>
                <a href="#servicios" className="btn-secondary" onClick={() => scrollToSection('servicios')}>Ver Servicios</a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-indicator"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="servicios">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestros Servicios</h2>
            <p className="section-subtitle">Soluciones tecnológicas completas para hacer crecer tu negocio</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Desarrollo Web</h3>
              <p>Aplicaciones web modernas, responsivas y escalables usando las últimas tecnologías.</p>
              <ul className="service-features">
                <li>React, Vue, Angular</li>
                <li>Node.js, Python, PHP</li>
                <li>Bases de datos optimizadas</li>
              </ul>
            </div>
            
            <div className="service-card featured">
              <div className="service-badge">Más Popular</div>
              <div className="service-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Apps Móviles</h3>
              <p>Aplicaciones nativas y híbridas para iOS y Android con experiencia de usuario excepcional.</p>
              <ul className="service-features">
                <li>React Native, Flutter</li>
                <li>iOS & Android Nativo</li>
                <li>APIs y Backend</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Software a Medida</h3>
              <p>Soluciones personalizadas que se adaptan perfectamente a los procesos de tu empresa.</p>
              <ul className="service-features">
                <li>Análisis de requerimientos</li>
                <li>Arquitectura escalable</li>
                <li>Integración con sistemas</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h3>Cloud & DevOps</h3>
              <p>Infraestructura en la nube, automatización y optimización de procesos de desarrollo.</p>
              <ul className="service-features">
                <li>AWS, Azure, Google Cloud</li>
                <li>CI/CD Pipelines</li>
                <li>Monitoreo y escalabilidad</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Business Intelligence</h3>
              <p>Análisis de datos y dashboards interactivos para la toma de decisiones inteligentes.</p>
              <ul className="service-features">
                <li>Dashboards personalizados</li>
                <li>Análisis predictivo</li>
                <li>Reportes automáticos</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Mantenimiento & Soporte</h3>
              <p>Soporte técnico continuo, actualizaciones y mejoras para tus aplicaciones.</p>
              <ul className="service-features">
                <li>Soporte 24/7</li>
                <li>Actualizaciones regulares</li>
                <li>Monitoreo proactivo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="nosotros">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">¿Por qué elegir SmartProSoft?</h2>
              <p className="about-description">
                Con más de 5 años de experiencia en el desarrollo de software, hemos ayudado a más de 100 empresas 
                a digitalizarse y crecer. Nuestro equipo de expertos combina creatividad, tecnología y estrategia 
                para entregar soluciones que realmente impactan.
              </p>
              
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Innovación Constante</h4>
                    <p>Utilizamos las tecnologías más avanzadas y mejores prácticas del mercado.</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Equipo Experto</h4>
                    <p>Desarrolladores senior con amplia experiencia en proyectos complejos.</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Entrega a Tiempo</h4>
                    <p>Metodologías ágiles que garantizan entregas puntuales y de calidad.</p>
                  </div>
                </div>
              </div>
              
              <div className="stats">
                <div className="stat-item">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Proyectos Completados</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Clientes Satisfechos</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Años de Experiencia</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Soporte Técnico</div>
                </div>
              </div>
            </div>
            
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1618544976420-1f213fcf2052" 
                   alt="Equipo SmartProSoft" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nuestro Portfolio</h2>
            <p className="section-subtitle">Proyectos que demuestran nuestra experiencia y calidad</p>
          </div>
          
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image">
                <img src="https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg" 
                     alt="E-commerce Platform" loading="lazy" />
                <div className="portfolio-overlay">
                  <div className="portfolio-content">
                    <h3>Plataforma E-commerce</h3>
                    <p>Sistema completo de comercio electrónico con gestión de inventario y pagos.</p>
                    <div className="portfolio-tech">
                      <span>React</span>
                      <span>Node.js</span>
                      <span>MongoDB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="portfolio-item">
              <div className="portfolio-image">
                <img src="https://images.unsplash.com/photo-1576272531110-2a342fe22342" 
                     alt="CRM System" loading="lazy" />
                <div className="portfolio-overlay">
                  <div className="portfolio-content">
                    <h3>Sistema CRM</h3>
                    <p>Gestión completa de relaciones con clientes y automatización de ventas.</p>
                    <div className="portfolio-tech">
                      <span>Vue.js</span>
                      <span>Laravel</span>
                      <span>MySQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="portfolio-item">
              <div className="portfolio-image">
                <img src="https://images.unsplash.com/photo-1596784326488-23581279e33d" 
                     alt="Mobile App" loading="lazy" />
                <div className="portfolio-overlay">
                  <div className="portfolio-content">
                    <h3>App Móvil de Delivery</h3>
                    <p>Aplicación móvil para delivery con geolocalización y pagos integrados.</p>
                    <div className="portfolio-tech">
                      <span>React Native</span>
                      <span>Firebase</span>
                      <span>Stripe</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contacto">
        <div className="contact-background">
          <div className="contact-overlay"></div>
        </div>
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>¿Listo para comenzar tu proyecto?</h2>
              <p>Contáctanos y descubre cómo podemos ayudarte a hacer realidad tus ideas tecnológicas.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email</h4>
                    <p>info@smartprosoft.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h4>Teléfono</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Ubicación</h4>
                    <p>Ciudad de México, México</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <h3>Solicita una cotización</h3>
                
                <div className="form-group">
                  <input type="text" name="name" placeholder="Tu nombre" required />
                </div>
                
                <div className="form-group">
                  <input type="email" name="email" placeholder="Tu email" required />
                </div>
                
                <div className="form-group">
                  <input type="tel" name="phone" placeholder="Tu teléfono" />
                </div>
                
                <div className="form-group">
                  <select name="service" required>
                    <option value="">Selecciona un servicio</option>
                    <option value="web">Desarrollo Web</option>
                    <option value="mobile">App Móvil</option>
                    <option value="custom">Software a Medida</option>
                    <option value="cloud">Cloud & DevOps</option>
                    <option value="bi">Business Intelligence</option>
                    <option value="support">Mantenimiento & Soporte</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <textarea name="message" placeholder="Cuéntanos sobre tu proyecto" rows="5" required></textarea>
                </div>
                
                <button type="submit" className="btn-primary">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>SmartProSoft</h3>
              <p>Transformamos ideas en soluciones digitales innovadoras que impulsan el crecimiento de tu negocio.</p>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Servicios</h4>
              <ul>
                <li><a href="#servicios" onClick={() => scrollToSection('servicios')}>Desarrollo Web</a></li>
                <li><a href="#servicios" onClick={() => scrollToSection('servicios')}>Apps Móviles</a></li>
                <li><a href="#servicios" onClick={() => scrollToSection('servicios')}>Software a Medida</a></li>
                <li><a href="#servicios" onClick={() => scrollToSection('servicios')}>Cloud & DevOps</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Empresa</h4>
              <ul>
                <li><a href="#nosotros" onClick={() => scrollToSection('nosotros')}>Nosotros</a></li>
                <li><a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
                <li><a href="#contacto" onClick={() => scrollToSection('contacto')}>Contacto</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contacto</h4>
              <ul>
                <li><i className="fas fa-envelope"></i> info@smartprosoft.com</li>
                <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
                <li><i className="fas fa-map-marker-alt"></i> Ciudad de México, México</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 SmartProSoft. Todos los derechos reservados.</p>
            <div className="footer-links">
              <a href="#">Política de Privacidad</a>
              <a href="#">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <SmartProSoft />
    </div>
  );
}

export default App;