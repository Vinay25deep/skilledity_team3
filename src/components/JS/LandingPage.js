import React, { useEffect, useState,useRef } from 'react';
import Header from './Navbar';
import '../CSS/LandingPage.css';
import Footer from './Footer';

const words = ["skilledity", "Integrity", "Excellence"];
const item_width=220;

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
    const [scrollPosition, setScrollPosition]=useState(0);
    const containerRef=useRef();

    const handleScroll = (scrollAmount) => {
      const newScrollPosition=scrollPosition+scrollAmount;
      setScrollPosition(newScrollPosition);
      containerRef.current.scrollLeft=newScrollPosition;
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
                  
                <div className='scroll-btns'>
                  <button onClick={()=>{handleScroll(-880)}} className='scroll-left'><img src='SVGs/scroll_arrow.svg' alt='left'></img></button>  
                  <button onClick={()=>{handleScroll(880) }} className='scroll-right'><img src='SVGs/scroll_arrow.svg' alt='right'></img></button>
                </div>
                  <div ref={containerRef} className='scrollable-box'>
                  <div className='courses-content-box'>
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

      </div>
      <Footer/>
    </>
  );
}

export default LandingPage;


