
import React, { useState } from 'react';
import './check.css';
//import resumecheck1 from './Images/two-page-resume-template.jpg';
import scoreImage from '../../images/Home/two-page-resume-template.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faSpellCheck, faListAlt, faChartLine, faPencilRuler, faStopwatch, faEnvelope, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const Resumecheck = () => {



     
  return <>
  <div className='hero-container'>
    {/* 1st part */}
<div className="ats-resume-checker">
      
      <div className="content">
       
        <h1 className="text-black">ATS Resume Checker: Review & Score Your Resume Online</h1>
        <p className="text-black">
          Our ATS resume grader will optimize your resume for any job, score it, and provide suggestions for improvements to make it as effective as possible.
        </p>
        <button className="check-resume-button">Check Your Resume</button>
      </div>
      <div className="image-container">
        <img src="https://cdn-images.zety.com/images/zety/landings/resume-check/jumbotron-resume-check-1@1x.png" alt="ATS Resume Checker Example 1" />
        <img src="https://cdn-images.zety.com/images/zety/landings/resume-check/jumbotron-resume-check-2@1x.png" alt="ATS Resume Checker Example 2" />
      </div>
    </div>



{/* 2nd part */}
<div className="main-container">
      <div className="main-content">
        <h1>Why Should You Use a Resume Scanner?</h1>
        <p>Getting your resume right is no easy task. There’s so much to keep in mind! Hit the right keywords, properly showcase your achievements, add metrics to prove your value... And do all that while avoiding that random typo or a grammatical lapse.</p>
        <p>And the worst part? 6 in 10 recruiters will reject a resume if it contains any kind of error. Scary? Not anymore. Let our resume scanner help you.</p>
        <p>Our cutting-edge ATS resume checker uses an advanced algorithm to scan your resume for any grammatical, spelling, and punctuation mistakes. But that's not all. It also provides specific tips on which skills and keywords you should highlight to pass through resume screening software, along with guidance on phrasing your sentences for maximum impact.</p>
        <p>In essence, we'll handle all the proofreading and editing for you, enabling you to secure more job interviews and concentrate on what truly matters.</p>
      </div>
      <div className="sidebar">
        <div className="score-container">
        <img src={scoreImage} alt="Score Indicator" className="score-image" />
        </div>
        <div className= "custom-list">
          <p>Our ATS resume grader will optimize your resume for any job, score it, and provide suggestions for improvements to make it as effective as possible.</p>
          <ul>
            <li>Completeness</li>
            <li>Word choice</li>
            <li>Typos</li>
            <li>+5 more</li>
          </ul>
        </div>
      </div>
    </div>


{/* 3rd part */}
    <div className="ats-container">
      <h1>What Our ATS Resume Checker Will Improve</h1><br></br>
      <div className="grid-container">
        <div className="grid-item">
          <div className="icon">
            <FontAwesomeIcon icon={faFileAlt} />
          </div>
          <div className="text-content">
            <h2>Formatting</h2>
            <p>Our resume grader ensures you won’t have to worry about your resume format ever again. It’ll look and feel just right for both recruiters and you.</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="icon">
            <FontAwesomeIcon icon={faSpellCheck} />
          </div>
          <div className="text-content">
            <h2>Typos</h2>
            <p>Nearly 60% of employers have stated they would dismiss a resume with typos. You wouldn't want to risk that, would you? Use our resume scanner to scan for any errors or mistakes, ensuring peace of mind in your job hunt.</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="icon">
            <FontAwesomeIcon icon={faListAlt} />
          </div>
          <div className="text-content">
            <h2>Summary Statement</h2>
            <p>Whether you’re a seasoned pro or a junior, our resume grader will help you craft a pitch-perfect resume summary or resume objective, packed with power words and accomplishments.</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="icon">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <div className="text-content">
            <h2>Measurable Results</h2>
            <p>Let your achievements shine with concrete numbers on your resume. Use our resume checker’s ready-made content to present your accomplishments effectively and compellingly.</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="icon">
            <FontAwesomeIcon icon={faPencilRuler} />
          </div>
          <div className="text-content">
            <h2>Customization</h2>
            <p>Select your job title and get a list of the most important skills and areas of expertise you should include in your resume. Enrich your resume with the right keywords to show you’re the right fit.</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="icon">
            <FontAwesomeIcon icon={faStopwatch} />
          </div>
          <div className="text-content">
            <h2>Length</h2>
            <p>How long should a resume be? Don’t worry about that. Our resume checker suggests the perfect length for your document based on your industry, seniority level, and years of experience.</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="text-content">
            <h2>Contact Information</h2>
            <p>Your contact information is the gateway to your career opportunities. Don’t let a simple mistake rob you of your dream job. Let us review your details, ensuring that employers connect with you, not someone else when they reach out.</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="icon">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <div className="text-content">
            <h2>Completeness</h2>
            <p>A complete resume should include all necessary sections, with one or two extra sections. We’ll scan your resume to see if there’s anything you should add.</p>
          </div>
        </div>
      </div>
      <button className="check-button">Check Your Resume</button>
    </div>


{/* 4th part */}

    <div className="ats-resume-checker">
    <div className="image-container">
    <img src="https://cdn-images.zety.com/images/zety/landings/static/check-your-resume@3x.png" alt="ATS Resume Checker Example" />
    
  </div>

  <div className="content">
  
    <h2 class="text-black">How our resume review works</h2>
    <p className="text-black">
          Our ATS resume scanner doesn't just check your resume, it transforms it! It'll find any errors and guide you on the right skills and words to ace the resume screening software.
        </p>
        <p className="text-black">Here’s how it works:</p>
        <ol className="steps-list">
          <li>Upload or create your resume from scratch using our professional resume templates.</li>
          <li>Score your resume against others in our database.</li>
          <li>Fix your resume following our recommendations.</li>
          <li>Apply for jobs!</li>
        </ol>
    <button className="check-resume-button">Review My Resume</button>
  </div>
</div>

 {/* 5th part */}

<div className="ats-resume-checker">
<div className="content">
  
    <h2 class="text-black">Pass the ATS Test With Our Resume Keyword Scanner</h2>
    <p class="text-black">
    Are you worried your resume might not pass the ATS test? Worry no more! With our resume keywords scanner, you can easily find out
     if your resume aligns with the job description. Just paste in the job ad, hit scan, and we'll do the rest. If there are any tweaks 
     needed, we'll guide you through them. It's as simple as that.
    </p>
    <button className="check-resume-button">Review My Resume</button>
  </div>

    <div className="image-container">
    <img src="https://cdn-images.zety.com/images/zety/landings/static/score-your-resume@3x.png" alt="ATS Resume Checker Example" />
    
  </div>
</div>


    {/* last */}

    <div className="cta-container">
      <h1>Let us help you make a great resume</h1>
      <button className="cta-button">Pick Resume Template</button>
    </div>

    </div>

</>
};

export default Resumecheck;
