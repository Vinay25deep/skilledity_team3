import React, { useEffect, useState } from 'react';
import Header from './Navbar1';
import '../CSS/LandingPage.css';

const words = ["skilledity", "Integrity", "Excellence"];

function LandingPage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [nextWordIndex, setNextWordIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      const nextIndex = (currentWordIndex + 1) % words.length;
      setNextWordIndex(nextIndex);

      setTimeout(() => {
        setCurrentWordIndex(nextIndex);
        setIsFading(false);
      }, 1000); 
    }, 1500); 

    return () => clearInterval(interval);
  }, [currentWordIndex]);

  const [activeIndex, setActiveIndex] = useState(null);
    

    
  const faqs = [
    { question: "Is there free trial available?", answer: "Yes, we offer a 7-day free trial for all new users." },
    { question: "Is there free trial available?", answer: "Yes, we offer a 7-day free trial for all new users." },
    { question: "Is there free trial available?", answer: "Yes, we offer a 7-day free trial for all new users." },
    { question: "Is there free trial available?", answer: "Yes, we offer a 7-day free trial for all new users." },
    { question: "Is there free trial available?", answer: "Yes, we offer a 7-day free trial for all new users." },
  ];

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const [selectedCategory, setSelectedCategory] = useState('Programming'); 

    const courses = {
        Programming: [
            { title: 'Course Title', educator: 'Educator Name', rating: 5.0, price: '$$$', reviews: 'XXXX',duration: '32 hours', level: 'Intermediate', skills: ['Skill 1', 'Skill 2', 'Skill 3','Skill 4'] },
            { title: 'Course Title', educator: 'Educator Name', rating: 5.0, price: '$$$', reviews: 'XXXX',duration: '32 hours', level: 'Intermediate', skills: ['Skill 1', 'Skill 2', 'Skill 3','Skill 4'] },
            { title: 'Course Title', educator: 'Educator Name', rating: 5.0, price: '$$$', reviews: 'XXXX',duration: '32 hours', level: 'Intermediate', skills: ['Skill 1', 'Skill 2', 'Skill 3','Skill 4'] },
            { title: 'Course Title', educator: 'Educator Name', rating: 5.0, price: '$$$', reviews: 'XXXX',duration: '32 hours', level: 'Intermediate', skills: ['Skill 1', 'Skill 2', 'Skill 3','Skill 4'] },
            { title: 'Course Title', educator: 'Educator Name', rating: 5.0, price: '$$$', reviews: 'XXXX',duration: '32 hours', level: 'Intermediate', skills: ['Skill 1', 'Skill 2', 'Skill 3','Skill 4'] },
            { title: 'Course Title', educator: 'Educator Name', rating: 5.0, price: '$$$', reviews: 'XXXX',duration: '32 hours', level: 'Intermediate', skills: ['Skill 1', 'Skill 2', 'Skill 3','Skill 4'] },
            { title: 'Course Title', educator: 'Educator Name', rating: 5.0, price: '$$$', reviews: 'XXXX',duration: '32 hours', level: 'Intermediate', skills: ['Skill 1', 'Skill 2', 'Skill 3','Skill 4'] },
            { title: 'Course Title', educator: 'Educator Name', rating: 5.0, price: '$$$', reviews: 'XXXX',duration: '32 hours', level: 'Intermediate', skills: ['Skill 1', 'Skill 2', 'Skill 3','Skill 4'] },
            { title: 'Course Title', educator: 'Educator Name', rating: 5.0, price: '$$$', reviews: 'XXXX',duration: '32 hours', level: 'Intermediate', skills: ['Skill 1', 'Skill 2', 'Skill 3','Skill 4'] },

        ],
        // Robotics: [
        //     { title: 'Introduction to Robotics', educator: 'C', rating: 4.8, price: '$$$', reviews: '500+' },
        // ],
        // 'Life Skills': [
        //     { title: 'Time Management', educator: 'D', rating: 4.9, price: '$', reviews: '1200+' },
        // ],
        // Business: [
        //     { title: 'Business Strategy', educator: 'E', rating: 4.6, price: '$$$', reviews: '700+' },
        // ],
        // Design: [
        //     { title: 'Graphic Design basics', educator: 'David Green', rating: 4.8, price: '$$', reviews: '600+' },
        // ]
    };

    const steps = [
        {
          title: "BFPT & HFSC",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          extra: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Two-way communication",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          extra: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Product description",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          extra: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          hasButton: true
        },
        {
          title: "Detailed report to parents",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          extra: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Internship",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          extra: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ];
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

  return (
    <>
      <Header />
      <div className="landing-container">
        <div className="landing-content">
          <h1>
            Master your future<br />
            with 
            <span className="highlight2">
              <span className={`word ${isFading ? 'fade-out' : 'fade-in'}`}>
                {words[currentWordIndex]}
              </span>
              <span className={`word ${isFading ? 'fade-in' : 'fade-out'}`}>
                {words[nextWordIndex]}
              </span>
            </span>
          </h1>
          <p>
            Skilledity is your one-stop-shop for upscaling. Get maximum value
            for time and resources you invest, with job-ready courses & 
            high-technology, available at the lowest cost.
          </p>
          <button className="explore-button">Brochure</button>
        </div>
        <div className="landing-image-container">
          <img
            src="SVGs/Landing1.png"
            alt="Landing Graphic"
            className="landing-image"
          />
        </div>
        </div>
        <div className='landing-page-btm-container'>
        <div className='courses-container'>
                <div className='courses-header'>
                    <h1>Courses</h1>
                    <div className='lp-blue-line'></div>
                    <p>Our courses provide practical skills and expert guidance for your growth</p>
                </div>
                <div className='courses-group-container'>
                    <button className={`course-category ${selectedCategory === 'Programming' ? 'active' : ''}`} onClick={() => handleCategoryClick('Programming')} ><p><span>Programming</span><br/>100+courses</p></button>
                    <button className={`course-category ${selectedCategory === 'Robotics' ? 'active' : ''}`} onClick={() => handleCategoryClick('Robotics')} ><p><span>Robotics</span><br/>20+courses</p></button>
                    <button className={`course-category ${selectedCategory === 'Life Skills' ? 'active' : ''}`} onClick={() => handleCategoryClick('Life Skills')} ><p><span>Life Skills</span><br/>50+courses</p></button>
                    <button className={`course-category ${selectedCategory === 'Business' ? 'active' : ''}`} onClick={() => handleCategoryClick('Business')} ><p><span>Business</span><br/>80+courses</p></button>
                    <button className={`course-category ${selectedCategory === 'Design' ? 'active' : ''}`} onClick={() => handleCategoryClick('Design')} ><p><span>Design</span><br/>30+courses</p></button>
                </div>
                <div className='courses-cards-container'>
                    {courses[selectedCategory].map((course, index) => (
                        <div className='course-card' key={index}>
                            <div className='course-default'>
                                <div className='course-image'><img src='SVGs/Solid_grey.svg.png'></img></div>
                                <div className='course-details'>
                                    <h4>{course.title}</h4>
                                    <p>{course.educator}</p>
                                    <p>{course.rating} ⭐⭐⭐⭐⭐ ({course.reviews} reviews)</p>
                                    <p>Price: {course.price}</p>
                                </div>
                            </div>
                            <div className='course-hover'>
                                <h4>{course.title}</h4>
                                <p>Course duration: {course.duration}</p>
                                <p>Course level: {course.level}</p>
                                <p>Skills you'll learn: {course.skills.join(', ')}</p>

                            </div>
                        </div>
                    ))}
                </div>
                
            
            
            </div>
            
            <div className="how-it-works-section">
                <h1 className="how-it-works-title">
                  How it <span>works?</span>
                </h1>

                <div className="steps-container">
                  {steps.map((step, index) => (
                    <div className={`step-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                      <div className="step-content">
                        <h2>{step.title}</h2>
                        <p>{step.description}</p>
                        <p>{step.extra}</p>
                        {step.hasButton && (
                        <button className="details-button">Details</button>
                        )}
                      </div>
                      <div className="step-image">
                        <div className="image-placeholder"></div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>

            <div className='FAQ-container'>
                <div className='FAQ-header'>
                    <h1>Frequently<span> asked<br/>questions</span></h1>
                    <p>Everything you need to know</p>
                </div>
                <div className='FAQ-content'>
                    
                    {faqs.map((faq, index) => (
                        <React.Fragment key={index}>
                        <div className='lp-grey-line'></div>
                        
                        <div className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                            <div className='faq-question' onClick={() => toggleFAQ(index)}>
                              <p>{faq.question}</p>
                                
                              <span>
                                <img
                                  src={activeIndex === index ? 'SVGs/faq_minus.svg' : 'SVGs/faq_plus.svg'}
                                  alt={activeIndex === index ? 'Collapse' : 'Expand'}
                                  className='faq-icon'
                                />
                              </span>  
                            </div>

                            {activeIndex === index && <div className='faq-answer'><p>{faq.answer}</p></div>}
                            <br/>
                            <div className='lp-grey-line'></div>
                        </div>
                        
                        </React.Fragment>
                      
                    ))}
                    
                </div>
                
            </div>
            <footer className='landing-page-footer'>
                <div className='footer-content'>
                    <div className='lp-logo-mail-container'>
                      <img id="lp-logo-pic" alt="Skilledity" src="SVGs/newLogo.svg" className="lp-logo" />
                      <div className='lp-mail-container'>
                        <img id="lp-mail-pic" alt="mail" src="SVGs/mail_icon.svg" className="lp-mail-icon" />
                        <p>connect@gmail.com</p>
                      </div>
                    </div>
                     
                    <div className='footer-section contact-us'>
                        <h3>CONTACT US</h3>
                        <div className="footer-line"></div>

                        <div className="contact-info">
                          <div className="contact-labels">
                            <p><span>Phone number:</span></p>
                            <p><span>Timings:</span></p>
                          </div>

                          <div className="contact-details">
                            <p>98xxxxxxxx</p>
                            <p>1000hrs to 1800hrs<br/>Monday to Tuesday</p>
                          </div>
                        </div>
                        <div className="footer-line"></div>
                        
                        <div className="social-media-icons">
                            <img src="/SVGs/facebook.svg" alt="Facebook"className="fb-icon"
                              onMouseOver={(e) => e.currentTarget.src = "/SVGs/facebook2.svg"}
                              onMouseOut={(e) => e.currentTarget.src = "/SVGs/facebook.svg"}
                              />
                            <img src="/SVGs/insta.svg" alt="Instagram" className="insta-icon"
                              onMouseOver={(e) => e.currentTarget.src = "/SVGs/insta2.svg"}
                              onMouseOut={(e) => e.currentTarget.src = "/SVGs/insta.svg"} 
                              />
                              <img src="/SVGs/x.svg" alt="Twitter"className="x-icon"
                              onMouseOver={(e) => e.currentTarget.src = "/SVGs/x2.svg"}
                              onMouseOut={(e) => e.currentTarget.src = "/SVGs/x.svg"}
                              />
                            <img src="/SVGs/linkedin.svg" alt="LinkedIn" className="linkedin-icon"
                              onMouseOver={(e) => e.currentTarget.src = "/SVGs/linkedin2.svg"}
                              onMouseOut={(e) => e.currentTarget.src = "/SVGs/linkedin.svg"}
                            />
                            <img src="/SVGs/youtube.svg" alt="YouTube" className="yt-icon"
                              onMouseOver={(e) => e.currentTarget.src = "/SVGs/youtube2.svg"}
                              onMouseOut={(e) => e.currentTarget.src = "/SVGs/youtube.svg"}
                            />
                        </div>
                                        
                    </div>
                    
                    <div className='footer-section quick-links'>
                      <h3>QUICK LINKS</h3>
                      <div className="footer-line"></div>
                      <p>About</p>
                      <p>Terms of Service</p>
                      <p>Privacy Policy</p>
                      <p>How to use?</p>
                      <div className="footer-line"></div>
                    </div>
                    
                    <div className='footer-section resources'>
                      <h3>RESOURCES</h3>
                      <div className="footer-line"></div>
                      <p>Help Centre</p>
                      <p>User Guide</p>
                      <p>Blog</p>
                      <p>Help</p>
                      <div className="footer-line"></div>
                    </div>
    
                </div>
            </footer>


      </div>
    </>
  );
}

export default LandingPage;


