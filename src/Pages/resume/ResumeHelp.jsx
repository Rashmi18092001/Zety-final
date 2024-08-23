import React from 'react';
import './ResumeHelp.css';
import backgroundImage from '../../images/help/two-page-resume-template.jpg'; 

const ResumeHelp = () => {
  return (
    <><div className='hero-container'>
        {/* 1st section */}
    <div className="resume-help">
          <div className="content-help">
              <h1 className="title">Resume Help</h1>
              <p className="description">
                  Effective resume writing made easy. Discover proven strategies, tips, and resume etiquette to help you fix your resume. Get actionable resume writing help, follow step-by-step instructions from our resume assistance tutorials, and boost your chances of getting an interview invite. Each resume guide comes with actionable advice and pro tips to make resume preparation a breeze.
              </p>
          </div>
          <div className="image-container">
              <img src={backgroundImage} alt="Resume Help Background" />
          </div>
      </div>

{/* 2nd section */}
      <div className="header">
      <div className="logos">
        <span className="logo">theguardian</span>
        <span className="logo">HUFFPOST</span>
        <span className="logo">lifehacker</span>
        <span className="logo">business.com</span>
        <span className="logo">FINANCIAL TIMES</span>
        <span className="logo">Forbes</span>
      </div>
      <div className="links">
        <span>Blog categories:</span>
        <span>All Articles</span>
        <span>Job Search</span>
        <span>Job Interviews</span>
        <span>Career Advice</span>
        <span>Resume Help</span>
        <span>CV Help</span>
        <span>Cover Letter Help</span>
        <span>FAQ</span>
      </div>
    </div>
      
      
      {/* 3rd section */}
      <div className="resume-help-section">
              <div className="card-container">
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/canadian_resume_zety_us_7.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>How to Write a Canadian Resume: Format & Examples</h3>
                          <p>Looking to make a move north of the border? Check out our complete guide to the Canadian resume format and make your Canadian resume better than the original maple syrup.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/promotions_on_resume_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>How to Show a Promotion on a Resume? Examples & Tips</h3>
                          <p>You want recruiters to see you as the most valuable asset to the company. A loyal worker. An achiever. A pro. There’s a great way to do it. It’s by showing promotions on a resume!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/how_long_to_make_a_resume_study_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>How Long Does It Take to Write a Resume? Zety’s Study</h3>
                          <p>The time spent on writing a resume depends on many elements. After all, it’s a highly personal document. See our study and learn the average time it takes to write a resume.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_bullet_points_zety_us_2.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>How Many Bullet Points Per Job On a Resume in 2024</h3>
                          <p>Resume bullet points are powerful. Use them to boost your chances with recruiters. Learn how to write bullet points on a resume and make a strong impact.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/hr_skills_zety_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>13 Top HR Skills for Your Resume [2024]</h3>
                          <p>Mastering HR skills is crucial for career growth of any HR professional. Explore the top human resources skills, tips for improvement, and how to list HR skills on your resume.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/best_ai_resume_builders_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>5 Best AI Resume Builders in 2024: Reviews + Pros & Cons</h3>
                          <p>AI keeps developing, and so does the number of AI-based resume tools. How to find the right one? Read on, see my selection, and learn what I consider the best AI resume builder.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/chatgpt_resume_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>How to Use ChatGPT to Write A Resume (Writing Prompts)</h3>
                          <p>The future is now, with AI written all over it. So why don’t you hop on that train now? Start by learning everything you need to know about writing a ChatGPT resume.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/camp_counselor_job_description_for_resume_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Camp Counselor Job Description for a Resume: Templates 2024</h3>
                          <p>Are you ready to trade your business attire for a swimsuit and a whistle? See our guide with expert tips on drafting an irresistible camp counselor job description for a resume.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/teacher_job_description_for_resume_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Teacher Job Description for a Resume: Templates 2024</h3>
                          <p>Interested in landing a job as a teacher? Learn how to make your teacher job description for a resume an A+ paper. See our examples and get ready to impress the school headmasters.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/winning_resume_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>How to Write a Winning Resume: Examples & Template 2024</h3>
                          <p>A winning resume doesn’t bring trophies home. But isn’t getting hired the greatest award a job-winning resume can get? Oh yes, it is! So let’s find out how to make it happen!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/statement_of_qualifications_zety_us_2.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Statement of Qualifications (SOQ): Examples + Template</h3>
                          <p>A good statement of qualifications can be a unique and high impact way of starting your resume. Read on for an easy formula to write your own.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/star_method_resume_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>STAR Method Resume: Examples & Tips to Improve Your Resume</h3>
                          <p>Make your own resume shine brightly and become a star among other candidates. See how to write a STAR method resume with our step-by-step guide and real-life examples.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/sales_associate_skills_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>13 Top Sales Associate Skills for Your Resume</h3>
                          <p>Discover key sales associate skills to boost your selling game and career. Read on to explore how to improve your sales associate abilities and more!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_writing_services_zety_us_1.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>10 Best Resume Writing Services (+ Our Top Choice)</h3>
                          <p>Struggling to get an interview brought you here. Fret no more. Pick one of the best resume writing services and have so great a resume, that nobody will ever dare reject you.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_quotes_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>100 Best Resume Quotes: Get Inspired & Help Your Career</h3>
                          <p>Looking for inspiration to help you write your resume? Want to impress the recruiter with some wise words? No matter the reason, our resume quote collection is here to serve you.</p>
                      </div>
                  </div>

                  
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_job_description_zety_us_1.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>How to Write an Effective Resume Job Description + Examples</h3>
                          <p>When it comes to a job application experience is king. Learn how to write a resume job description that’ll be your recruitment crowning glory</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_ai_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Resume AI: The Pros & Cons of AI Resume Builders</h3>
                          <p>Welcome to the future, where you can create a resume with artificial intelligence! But should you? And how? Read on and find out all there is to know about an AI resume!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/referee_resume_zety_au_1.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>How to Choose Your Referee & Put It on Your Resume [Example]</h3>
                          <p>Your friends volunteer to give you a reference, and you think it’s a great idea? See why you should banish that thought and pick your ex-boss instead for a referee on your resume.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/portfolio_resume_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>How to Make a Perfect Portfolio Resume: 2024 Guide</h3>
                          <p>Resume + Portfolio = an impressive job application. Learn how to create a resume portfolio that will blow the recruiters' minds!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/personal_skills_resume_zety_us_1.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Personal Skills for Resume: Definition & 60+ Examples</h3>
                          <p>The job you want asks for highly developed personal skills. What on earth does that mean? Read this article to learn everything you need to know about personal skills for a resume.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/personal_details_in_resume_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Personal Information in Resume: What to Include in 2024</h3>
                          <p>You’ve got your dream job in your sight. You’re rushing to get your job application in as quickly as possible. Here’s how to put personal information in your resume properly.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/levels_of_skill_on_resume_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>Skill Levels on a Resume: How to Showcase Proficiency</h3>
                          <p>Your resume shows you’re good, but does it show how good? Don’t be shy—let your skill levels speak volumes about your accomplishments.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/french_resume_zety_en_ca_1.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>French Resume: How to Write Your French CV (Examples)</h3>
                          <p>You know how to speak French, but you’ve never written a French resume? Don’t worry. I’ll show you exactly what you need to know about your expérience professionnelle and more.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/do_employers_check_degrees_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Do Employers Check Degrees & Education Backgrounds?</h3>
                          <p>Saying that you graduated with honors from Harvard, Caltech, and Julliard might be tempting. But do employers verify your degrees? Oh, they just might!</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/customer_service_resume_objective_zety_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>15 Customer Service Resume Objective Examples</h3>
                          <p>Enhance your job application with a customer service resume objective & convince employers you’re able to create a customer experience worth shouting from the rooftops.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/contract_work_on_a_resume_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>How to List Contract Work on a Resume (Guide & Examples)</h3>
                          <p>Worried those short-term jobs can make you look unprofessional? Use them to your advantage—just learn how to list contract work on a resume to highlight your expertise.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/awards_on_resume_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>How to List Awards on a Resume: Guide & Examples (2024)</h3>
                          <p>Awards are always impressive. Why not use them to your benefit when applying for a job? Picking some awards to put on a resume is what you can (and should) do!</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/administrative_assistant_resume_objective_zety_us_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>10 Administrative Assistant Resume Objective Examples</h3>
                          <p>Convincing the hiring manager you’re the perfect fit to run the office can be tricky. But with a perfectly-written administrative assistant resume objective, nothing’s impossible!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/additional_information_on_resume_zety_us_3.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>What to Put for Additional Information on a Resume +Examples</h3>
                          <p>I’m glad you got here if you thought “additional information on a resume” means it’s optional. See how it translates to “mandatory under threat of not landing a job.”</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/best_resume_templates_018.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Best Resume Templates in 2024 (10+ Picks to Use Now)</h3>
                          <p>The best resume templates aren't just about fancy looks. They have to be sleek and professional. Their layout needs to show off your value. Here's what'll help.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/8d55368c-d9a5-49e1-9141-3bfc6a29d99e.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>How to Make a Resume: Writing Guide & Examples for 2024</h3>
                          <p>How to write a resume? My step-by-step guide will show you the best resume writing examples. Read it, and you’ll learn how to make a professional resume in a few easy steps.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/bb4a24d9-2f12-4ee5-9a64-4a04494be9b9.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Resume Format: Guidelines, Templates & Examples</h3>
                          <p>There are 3 main resume formats: chronological, functional, and combination. Before choosing a resume format, think about your career and the role you’re after.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/c8ef42bf-7037-4cca-a122-3d47696d7cdf.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>How Long Should a Resume Be? [2024 Resume Length Tips]</h3>
                          <p>How long should a resume be? How many pages does a good resume have for a candidate like you? Read on to clear any doubts about the perfect length of a resume.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/5a9771ce-b246-4479-900e-04063ded1f93.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>What to Put on a Resume: Best Things To Include in 2024</h3>
                          <p>You want a complete resume. The one that has it all. Every section in the right place with the right content. But do you know exactly what to include in a resume? Let’s find out!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/bb4a24d9-2f12-4ee5-9a64-4a04494be9b9.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>How to Show Work Experience on a Resume—Full Guide</h3>
                          <p>Work experience resume section got you confused? Not sure how to list and describe your past jobs for maximum impact? We’ve got you covered (with examples and actionable tips.)</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/c8ef42bf-7037-4cca-a122-3d47696d7cdf.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>120+ Hobbies and Interests to Put On a Resume in 2024</h3>
                          <p>Should you put interests and hobbies on a resume? Read my tips to help you not only figure it out but also do it right. Plus, see a great list of hobbies to put on a resume!</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_introduction_2.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>Resume Introduction [+Intro Paragraph Examples]</h3>
                          <p>Everyone knows that a good beginning grabs attention. Grab the recruiter hook, line, and sinker with a fantastic resume introduction.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/3d1258d2-7c24-4ce7-9423-bd3d9ebfa7ce.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>25+ Resume Objective Examples & Templates for 2024</h3>
                          <p>I'll teach you how to write a job-winning resume objective statement. Read on to see the best resume objective examples for all professions that you can customize to your needs!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/ef579153-05b8-4dee-917d-7413e0ab5eda.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>50+ Best Resume Summary Examples + 2024 How-To Guide</h3>
                          <p>After nailing all resume sections, it’s time to put a finishing touch. And there’s no better one than a professional resume summary that showcases your value. Time to craft it!</p>
                      </div>
                  </div>


                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/a1d30636-a119-4f71-a863-de4a190eedeb.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>22 Best Skills for Resumes (Examples for 2024)</h3>
                          <p>Which professional skills for a resume should you choose? Discover the best skills to put on a resume to catch the recruiters' attention and get invited for a job interview!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/2a1930f6-19eb-4c52-b9f2-cb1d78c33ad7.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>90 Accomplishments for a Resume [Examples for 2024]</h3>
                          <p>You won’t achieve a perfect resume by listing only your skills, duties, and responsibilities. You need to show examples of accomplishments. Let’s see how to do it right.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/c881c66f-cfa7-480a-b5aa-eebddffef726.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>How to List Education on a Resume [+ Examples]</h3>
                          <p>What should go first in a resume: education or experience? How to put your education on a resume? And what an education section on a resume should look like? Time to learn.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_contact_information_7.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>Resume Contact Information Tips (Phone Number & More)</h3>
                          <p>Should I put my address on my resume? In full? Learn what contact information to include in your resume: how to write up your phone number, how to put LinkedIn on a resume (or other social media), and how to pick a professional email address. Don't sabotage your job hunt, get help from this contact info guide!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/woman_puts_certifications_on_resume.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>How to List Certifications on Your Resume [+ Examples]</h3>
                          <p>Certifications on a resume can prove experience, knowledge, and skills. But there is no course on how to list certifications on a resume. Luckily for you, there’s this guide!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/fdgdsfgsdfgdf.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Resume Sections & Categories (with Tips on Order & Titles)</h3>
                          <p>Wondering how to organize your resume? Which resume sections to include and which to skip? Ready our guide and get tips for experts! (Examples Included)</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/chron.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>Reverse Chronological Resume Templates [Ideal Format]</h3>
                          <p>Using a reverse-chronological resume is the way to go in the vast majority of cases. But only if you know exactly how to make this particular resume format work for you.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/dsfgsadfasd.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Combination Resume (Template & 5+ Combo Examples)</h3>
                          <p>What is a combination resume and how to write it? See combination (hybrid) resume templates and samples PLUS actionable examples and expert tips. Read more!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/dsfuygadsjkf.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>What Is a Functional Resume? Template, Examples, & Tips</h3>
                          <p>You’re in the middle of a career change or have gaps in your employment. Show managers and coordinators how valuable your skills are with a great functional resume.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/9382e388-2b4e-42b0-a831-824055b22747.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>How to Match Your Resume to a Specific Job Description</h3>
                          <p>Follow these unknown tips to tailor your resume to every job description. Find out what recruiters are looking for. Read more!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/ecdf6a5e-46ef-4e64-b7bc-e1aa71a4858a.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>PDF Resume Templates to Download in 2024 (+ Format Tips)</h3>
                          <p>It matters what file format you send your application to the recruiter. In this article, you’ll get 18 PDF resume templates and find out why you should format them this way.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/e6197643-cf5a-4212-bec0-6946102dd1eb.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>50 Best Resume Tips to Land a Job in 2024</h3>
                          <p>Need a perfect resume? Want to get invited for an interview and surprise your future employer with how perfect a candidate can be? Read my master list of the best resume tips!</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/update_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>How to Update Your Resume in 2024: 11 Expert Tips</h3>
                          <p>When it's the best time for a resume update? Now! Learn how to update your resume and level up to a next gen job application.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_critique_2.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Resume Critique: Free Checklist For a Resume Review</h3>
                          <p>When sending out your resume, you can’t just hope for the best. Sleep well knowing your resume is the best with our resume critique checklist.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/how_to_improve_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>How to Improve Your Resume: 12 Easy Steps to Beef it Up</h3>
                          <p>There’s always room for improvement. Learn our 12 best tips on how to improve your resume to make it one in a million.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/4c520e57-70ea-4990-92e2-b5398de83276.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>Best Online Resume Builders You Must Try in 2024</h3>
                          <p>You don't need Reddit to find reviews of the best online resume builders in 2024. I’ve got you covered. Learn what’s the best resume builder from my article instead.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/495db7be-0a8e-494a-9c25-cc89a49ae552.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Best Fonts for a Resume in 2024: Resume Font Tips</h3>
                          <p>What is the best font for a resume? Which resume fonts to avoid? We look at the best professional fonts you can use for your resume and cover letter to make them top of the top.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/6545db74-f13d-4ad4-a9d1-12329710f484.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>300+ Action Verbs for a Resume to Make It Stand Out</h3>
                          <p>Got stuck repeating words like “managed” and “responsible for” over and over? Try various power words for a change and use the right action verbs for a resume.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/man_thinking_about_cv_resume_difference.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>CV vs Resume: Key Differences [+ Examples]</h3>
                          <p>A resume is a CV... except when it isn't. Find out what the difference between a CV and a resume is to maximize your chances of landing a job in any industry, not just academia.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/man_picking_best_resume_layout.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>What Are the Best Resume Layout Examples for 2024?</h3>
                          <p>Learn why the resume layout matters as much as the contents. See examples of great resume layouts and use the tips to create a professional layout for a resume all by yourself.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/keywrods_on_resume.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Best Resume Keywords for 2024 [for Use to Pass the ATS]</h3>
                          <p>Find out all you need to know about which resume keywords to use, including buzzwords, action words, along with tips, examples, suggestions, and keywords on cover letters and emails.</p>
                      </div>
                  </div>


                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/starting_a_resume.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>How to Start a Resume: Guide with 15+ Starters & Tips</h3>
                          <p>Follow along on our tutorial for how to start a resume. This complete resume starter's guide has advice, beginning examples, preparation suggestions & more.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_outline.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Best Resume Outline Examples to Get a Job in 2024</h3>
                          <p>How to make a resume outline. Learn a basic format that is simple and proven to help you create a successful resume template. See examples and read more!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_no_experience_2.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>How to Make a Resume With No Experience: Examples</h3>
                          <p>Writing a resume with no experience seems like a mission impossible. But there’s a way to make a resume with no work experience look great! And you’re about to see how.</p>
                      </div>
                  </div>


                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_dos_and_donts_2.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>50+ Resume Dos and Don'ts You Need to Know in 2024</h3>
                          <p>Learn the dos and don'ts of resume writing, along with what not to put on a resume and how to build a good resume without making critical resume mistakes. Over 50 resume dos and don'ts with examples and tips.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_dates_zety_us_2.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Is It OK Not to Include Dates on Your Resume? Date Format</h3>
                          <p>Do you have to list dates on a resume? What about job-search ageism? Here’s the definitive answer, plus how to align dates on resume, format, and how to head off discrimination.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/internship_on_resume_3.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>How to Put an Internship on a Resume [Guide and Examples]</h3>
                          <p>Recruiters scan resumes for professional experience. But what if your experience is limited to an internship? Learn if it’s enough & how to show it on a resume for maximum impact.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/volunteer_resume.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>How to List Volunteer Work Experience on a Resume: Example</h3>
                          <p>Putting volunteering experience on your resume isn’t voluntary, that’s for sure. In this guide, you’ll see the best volunteer resume samples to impress a recruiter quickly.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/how_to_put_shadowing_on_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>How to Put Shadowing on a Resume [+Examples]</h3>
                          <p>Short of being hired, shadowing is the next best thing. Learn how you put shadowing on your resume correctly so that recruiters start following you.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/how_to_list_programming_languages_on_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>How to List Programming Languages on a Resume</h3>
                          <p>You know the saying: garbage in, garbage out. List programming languages on your resume so that it’s resume in, job out.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/programming_projects_for_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>9 Great Programming Projects for a Resume (Examples)</h3>
                          <p>You can’t apply for an IT job with a resume as clean as a newly formatted partition. Add the best programming projects to your resume to bring it to next gen levels of professional.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/bartender_job_description_for_resume_zety_1.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Bartender Job Description for a Resume: Examples & How-To</h3>
                          <p>Having a hard time writing a bartender job description on your resume? Learn how to do it right by turning your bartender duties into achievements. Here’s how to do it.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_header_000.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Resume Header Examples (20+ Professional Headings)</h3>
                          <p>A professional resume header isn't just a good idea. It prevents hiring software from passing incorrect information to the manager. Learn how to head a resume and see example resume headings that stand out. Use our professional resume builder to make your resume header fast.</p>
                      </div>
                  </div>

                  
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/1_page_resume.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>Should a Resume Be One Page? (And Can It Be Longer?)</h3>
                          <p>Should a resume be one page? If it's too long, how do you make a resume 1 page? There are easy ways to make a single-page resume without it looking like a wall of microscopic text.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/two_page_resume_01.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Can a Resume Be 2 Pages? Tips for 2024</h3>
                          <p>Can my resume be 2 pages? Most applicants don't need a two-page resume, but a second page is the right move for some. When is a second page OK, and when will it help you get more interviews? Read our guide and learn two-page resume formatting tips that will impress the employer.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/qualifications_summary.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Summary of Qualifications for a Resume: 20+ Examples</h3>
                          <p>A summary of qualifications sells your best points before the manager reads your resume. Learn how to write a qualifications summary for your resume and boost chances of getting an interview.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_references_4.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>When and How to List References on a Resume [+Examples]</h3>
                          <p>Wondering how to add references to a resume? And should a resume include references at all? Read on, and you’ll find all there is to know about references on a resume.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_language_skills_1.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Languages on a Resume: How to List Language Skills?</h3>
                          <p>Including languages in a resume can be beneficial, but only if you do it right. Learn how to describe language proficiency on a resume & when language skills on a resume matter.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/profile_resumes.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>18+ Professional Resume Profile Examples for Any Job</h3>
                          <p>Just like every movie needs a good trailer, every resume needs a profile. Learn how to write the most impactful intro to your resume and see 25+ examples of good resume profiles.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_strengths_zety_2.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>30+ Key Strengths for a Resume (List of Good Examples)</h3>
                          <p>There are skills, and there are strengths. What’s the difference between them, and how to identify strengths to list on your resume? Read on and find out!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/lying_on_a_resume.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Lying on a Resume & Job Application: Can You? [99% Do!]</h3>
                          <p>"I'm gonna get that job" you tell yourself while lying on your resume. No one will notice, right? There's a chance... But you shouldn't risk it. Here's why.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/what_should_a_resume_look_like_3.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>What Does the Best Resume Look Like in 2024</h3>
                          <p>Not sure what your resume should look like to impress recruiters? You’ve come to the right place to find out. See for yourself what the best-looking resume looks like.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/make_your_resume_stand_out_8.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>How to Make a Resume That Stands Out: Examples & Tips</h3>
                          <p>You feel your resume isn’t good enough to beat the competition. Don't worry! See these transformations of Zety readers’ resumes and learn how to make your resume stand out.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/targeted_resume_7.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>How to Write a Targeted Resume (Template & Examples)</h3>
                          <p>You’re up against 200 other applicants. You look as generic as a no-name can of soup. Stand out in 3 billion colors with this guide for how to write a targeted resume to every job.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_styles_1.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Resume Styles Best Suited for Your Needs [20+ Tips]</h3>
                          <p>With such a variety of available resume styles, finding the best for your needs may be a bit of a challenge. But no longer. We cherry-picked the best resume styles to help you out.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_ideas_2.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>99+ Resume Ideas: Creative, Unique, Sleek (Gallery)</h3>
                          <p>Welcome to a gallery of awesome resume design ideas, sample layouts, and cool templates. Choose a resume idea that fits your needs and create your resume in minutes.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_picture_1.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Should You Put a Picture on a Resume? [+Templates]</h3>
                          <p>Does having a resume with a picture make a difference? Read on for an exhaustive list of tips on all things related and learn everything there is to know.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_headline_3.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>What is a Good Headline for a Resume? 30+ Examples</h3>
                          <p>A good headline for a resume is short and memorable, like a perfectly crafted catchphrase. Let's create a resume headline that will bring any recruiter's attention to you.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/traditional_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>Traditional Resume Template [5+ Classic Resume Examples]</h3>
                          <p>Not sure what kind of resume will boost your chances of landing an interview? Go for a traditional resume template. It’s much more than timelessly elegant.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/self_employed_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>How to Put Self Employed on a Resume (Sample & Tips)</h3>
                          <p>You’re not Jeffrey Lebowski and you don’t live in mom’s basement. How can you convince an employer you’re a good fit? This self-employed resume guide helps show off your skills.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_how_far_back_2.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>How Far Back Should a Resume Go? Expert Tips for 2024</h3>
                          <p>How far back should a resume go? Exactly how many years should you go back on a resume? What to add if you're a junior? Read on to get all the answers.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/what_is_a_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>What Is a Resume? Definition, Purpose & Key Parts</h3>
                          <p>Wondering what is a resume? Trying to figure out its purpose? The more informed you are, the better the outcome will be! Read this guide and find all the answers you need!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/ats_resume_7.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>How to Create an ATS-Friendly Resume + Templates</h3>
                          <p>Learn to beat the screening filters using an ATS-compliant resume. Grab an ATS resume template from our collection or learn to create an ATS-friendly resume format from scratch.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/perfect_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Perfect Resume Examples from Experts & How to Make It</h3>
                          <p>Beautiful design? Amazing layout? Exciting contents? What's the perfect resume really about? This guide explains it all. Just follow the instructions to make your resume perfect.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_margins_7.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>Margins on a Resume: What Are Standard Resume Margins?</h3>
                          <p>Learn what is the proper size of margins on a resume and how to set up the resume borders correctly. The right resume margin size will help you save space on your document.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/please_find_attached_my_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Please Find Attached My Resume: How to Say It Right?</h3>
                          <p>Is please find attached my resume the best way to let your reader know you’re sending an attachment? Let’s take a closer look at the phrase, and see if there are any alternatives.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_cover_letter_name_2.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>What to Name a Resume File & Cover Letter (+Examples)</h3>
                          <p>Resume.doc is not a good idea. So what is? How to name a resume file? This guide has the answers on what to name your resume and cover letter files.</p>
                      </div>
                  </div>


                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_tense_2.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>Should a Resume Be in Past Tense or Present Tense?</h3>
                          <p>Choose the right resume tense and voice, pass the ATS scan and land that interview. Here’s how.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/what_makes_good_resume_12.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>What Makes a Good Resume? 11 Things Your Resume Needs</h3>
                          <p>Ever wondered what makes a good resume good? We found the 11 things your resume needs to be the very best.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/us_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>US Resume Format (American Style Resume Template)</h3>
                          <p>When in America, do as Americans do. Write a great American resume using this compendium of U.S. style tips and tricks.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/address_on_resume_5.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>Should I Put My Address on My Resume in 2024?</h3>
                          <p>Should I put my address on my resume? It seems impossible to get a straight answer. We examine the pros and cons and put this issue to bed once and for all.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_order_2.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Resume Order of Jobs, Experience & Items of Information</h3>
                          <p>Is your resume sporting an “out of order” sign? Get everything up and running smoother than a Tesla by learning the perfect resume order.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/eye_catching_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Eye-Catching Resume Templates: How to Get Noticed in 2024</h3>
                          <p>Sick of recruiters turning a blind eye to your resume? Learn how to write an eye-catching resume that will get noticed.</p>
                      </div>
                  </div>

                  
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_structure_2.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>Resume Structure & How to Organize a Resume</h3>
                          <p>The way you structure your resume could mean the difference between landing an interview and rejection. But do you really know how to organize your resume in the most effective way?</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/parts_of_a_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>6 Crucial Parts of a Resume in 2024: Examples + Guide</h3>
                          <p>Wondering about the essential parts of a resume? My expert tips on key resume categories will guide you in crafting a stunning document.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/linkedin_on_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>How to Put LinkedIn on a Resume (Examples & Guide)</h3>
                          <p>What should a link to your LinkedIn profile look like on a resume? And where do you put it anyway? Read on to learn how to customize your LinkedIn URL, and where to display it.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/publications_on_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>How to List Publications on Resume or CV (+ Template)</h3>
                          <p>Your publications show your mettle, but how do you show them to the powers that be? Use this guide to see how to list publications on a resume, plus CV publications and research.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/projects_on_resume_4.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>How to List Projects on a Resume + Examples for 2024</h3>
                          <p>Listing projects on a resume can instantly boost your chances of job hunting success. See how both freelancers and regular workers can harness the power of projects.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/words_to_describe_yourself_zety_us_1_n.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>100+ Good Words to Describe Yourself in 2024</h3>
                          <p>“If you had to use 3 words to describe yourself, what would they be?” Knowing some good adjectives to describe yourself and answer to this question will reward you in many ways!</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/extracurricular_activities_on_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>9 Types of Extracurricular Activities on a Resume & Samples</h3>
                          <p>Extracurricular activities don’t just make school more fun, they prepare you for life. See what extracurriculars to put on your resume and how to do it right.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/expected_graduation_date_on_resume_3.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>How to Put an Expected Graduation Date on a Resume in 2024</h3>
                          <p>You have enough to worry about as a student without wondering how to put your expected graduation date on a resume. We’ll show you exactly how it's done.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/high_school_on_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Should You Put High School on a Resume? (Diploma or Not)</h3>
                          <p>To add or not to add, that is the question. And the answer is right here! Learn when you should put your high school on your resume.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/unfinished_college_on_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>How to Put Unfinished College Degree on Resume in 2024</h3>
                          <p>It’s not what you say, it’s how you say it. So show employers you’re serious about your career, even if you have unfinished college on your resume.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/types_of_resumes_2.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>20+ Types of Resumes: Find the Best For You</h3>
                          <p>Step one: Learn about the different types of resumes in this guide. Step two: Confidently pick the best resume type for your career goals. Step three: Get that interview.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/gpa_on_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Should I Put My GPA on My Resume [When, Where & How]</h3>
                          <p>Should I put my GPA on my resume? Will listing a GPA score boost your chances of landing a job, or will it effectively crush them? Let’s take a closer look.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/how_to_list_degree_on_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>How to List a Degree on a Resume (Associate, Bachelor’s, MA)</h3>
                          <p>Listing a degree on a resume is part and parcel of resume writing. We’ll show you how to get it right regardless of the type of degree you’d like to put on your resume.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/how_to_list_minor_on_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>How to List a Minor & Major on a Resume (Double Major, Too)</h3>
                          <p>Writing a resume could be a real head-scratcher. If you’re wondering how to list a minor on a resume or what to do with a double major on a resume, you’ve come to the right place.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/cum_laude_on_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Cum Laude on a Resume: How to List Latin Honors & Tips</h3>
                          <p>So, you graduated cum laude and want to show it off to prospective employers. Here's how to list latin honors on your resume.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/deans_list_on_resume_6.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>How to Put Dean's List on a Resume [Guide + Tips]</h3>
                          <p>Your resume must stand out in a pile of 250+ applications. Putting Dean's List on a resume might boost your chances. Learn how to make it work for you.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/relevant_coursework_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>How to List Relevant Coursework on a Resume [10+ Examples]</h3>
                          <p>Putting relevant coursework on a resume could boost your chances of landing a job. But is it always a good idea to add such info? Our guide has the answers you’ve been looking for.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/how_to_list_continuing_education_on_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>How to List Continuing Education on a Resume? 10+ Examples</h3>
                          <p>Adding continuing education on a resume can set you apart from a crowd of 250+ candidates. Just make sure you do it right, and show you’re serious about your career development.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/study_abroad_on_resume_3.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>How to Put Study Abroad Experience on a Resume</h3>
                          <p>Some say studying abroad looks good on a resume. Others see it as “academic tourism.” Here’s how to put it on your resume to get that job—no matter who reads your application.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/freelance_work_on_resume_1.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>How to Write a Freelancing Resume (Examples & Guide)</h3>
                          <p>Napoleon Hill said “forget about a job,” but now you need one. How does freelance resume experience fit in? Take heart. This guide shows the ins and outs to get you hired fast.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/man_with_multiple_positions_on_his_resume.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Resume With Multiple Positions & Same Company: Expert Tips</h3>
                          <p>So… You’ve worked in the same company for how long, while your positions have changed? Well, it’s time to learn how to list multiple positions at the same company on a resume!</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_paper_12.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>Resume Paper: Best Types, Colors & Brands to Choose</h3>
                          <p>What is the best resume paper? Learn what type of professional resume paper is best and boost your chances of landing your next job. Read more!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_icons_2.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Resume Icons, Logos & Symbols [100+ to Download for Free]</h3>
                          <p>We’ve combed the Internet to select 100+ best resume icons. They’re all FREE to download and ready to use on your resume. Check them out now!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/linkedin_resume_16.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>How to Add a Resume to LinkedIn in 2024: Illustrated Guide</h3>
                          <p>Wondering how to add resume to LinkedIn profile? Wonder no more! My guide will give you all the answers you need!</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/high_school_resume_templates_6.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>10 High School Resume Templates (+What to Include)</h3>
                          <p>They don’t teach this at school. What does a good high school resume template even look like? Find out now with this collection of resume templates for high-school students.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/modern_resume_templates_026.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Modern Resume Template (Free to Download & Personalize)</h3>
                          <p>Modern problems require modern solutions. And modern jobs require modern resume templates. Look at the best examples of modern resume templates and pick your personal favorite.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/blank_resume_template_2.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>15+ Blank Resume Templates & Forms to Fill In</h3>
                          <p>Check out the best blank resume templates with free download. Just pick a blank resume form & fill it in with your information. A fillable blank resume template can save you time.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/one_page_resume_templates_017.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>15 One Page Resume Templates to Fill-in & Download</h3>
                          <p>Struggling to fit your resume on one page? Check out our list of the best 1-page resume templates that’ll let you put all your important information on a single page. Stop worrying that recruiters will skip your resume because it’s too long! Pick from 15 modern, creative, or basic templates and start getting more offers!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/two_column_resume1.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Should You Make a Two Column Resume? Guide + Templates</h3>
                          <p>Two-column resumes can work great in getting you the job you’re after. But you still need to choose from many two-column resume templates. Here you’ll see only the best of them!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/student_resume_templates_016.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>15+ Student Resume & CV Templates to Download Now</h3>
                          <p>The best resume templates for students you’ll ever see - all in one place! Writing a high school resume? A college resume for an internship? A grad resume for your first job? No matter. You’ll have a beautiful resume that grabs attention and gets you tons of interviews! Use our templates and write a resume fast and easy!</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/creative_resume_templates_024.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>16+ Creative Resume Templates & Examples</h3>
                          <p>You're a creative soul craving a creative resume. Something pretty, but professional. A template that seductively whispers into a recruiters ear: I'm the one.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/infographic_resume_templates_001.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>15+ Infographic Resume Templates, Examples & Builder</h3>
                          <p>You heard your resume “needs to be eye-candy.” You’ll get what you want. You’ll also get what you need—expert insight into why infographic resumes aren’t for everyone.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/visual_resume_templates_13.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>20+ Visual Resume Examples & Templates to Download</h3>
                          <p>Seeking a visual resume that shows your personality? Look no further! See our selection of visual resume examples and pick one that represents you best.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/simple_resume_templates_020.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>18+ Simple, Basic & Easy Resume Templates for 2024</h3>
                          <p>Here’s a selection of our simple resume templates. They impress recruiters and they are ATS-scannable. Choose one of our easy resume templates and download it now!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_design_001.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Resume Design Templates: 15+ Ideas & How-to</h3>
                          <p>Lacking inspiration while the clock’s ticking? Find 15+ resume design ideas to help you craft your perfect resume in no time.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/unique_resume_templates_18.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>15+ Unique Resume Templates to Download & Use Now</h3>
                          <p>Who says you can't find stand out from the sea of other applicants and their similar resumes? This article gives you 15 different unique resume templates you can download and use right away to get started on your job search so you can jump straight to building an exceptional resume.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/minimalist_resume_templates_13.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>15+ Clean Minimalist Resume Templates (Sleek Design)</h3>
                          <p>Those 400+ minimalist resume templates above? Meh. Who’d have the time to scroll through all of them? Well. We did. So you don’t have to. Here are the best of the best.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/google_docs_resume_templates_014.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Free Google Docs Resume Templates to Use in 2024</h3>
                          <p>Looking for a Google Docs resume template that’s just right for you? See our selection of paid and free resume templates Google Docs provides and take your pick.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/open_office_resume_template_14.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>12+ Free OpenOffice Resume Templates (Also for LibreOffice)</h3>
                          <p>Here's a selection of 12+ awesome Open Office resume templates. All available for FREE and will work with your favorite open source office suite.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_templates_word_026.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>Best Resume Templates for Word to Download in 2024</h3>
                          <p>Using a pre-made resume template saves time. This article features a collection of the best resume templates in Word format. Just pick the one you like most and personalize it.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/latex_resume_template_13.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Must-Use Latex Resume and CV Templates for 2024</h3>
                          <p>You're an academic, software engineer or really cool nerd. Choosing a LaTex CV template seems like an obvious choice, doesn’t it? Here’s a list of great LaTeX resume templates!</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/pages_resume_templates_3.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Pages Resume Templates: 10+ FREE Resume Templates for Mac</h3>
                          <p>We’ve compiled a gallery of 10+ FREE downloadable resume templates for Mac. All of them fully customizable and free to use. Check them out now!</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/photoshop_illustrator_indesign_resume_templates_15.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>13+ Photoshop, Illustrator, & InDesign Resume Templates</h3>
                          <p>The best Photoshop, Illustrator, and InDesign resume templates from all over the internet: all in one place (FREE templates included!). Download with a single click.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_spelling_2.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>How to Spell Resume: Accents or Not? Résumé, Resumé?</h3>
                          <p>To spell resume with accents or not? Is résumé "more correct" than resume? We'll show you the correct spelling. (And no, it's not resamay.)</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/biodata_format_6.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Free Biodata Templates for Marriage and Job Format</h3>
                          <p>Looking for a perfect biodata format? For marriage or job? Learn how to write biodata and get free downloadable biodata templates on top of that!</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_questions_2.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>Resume Quiz Questions & Answers: The Ultimate Cheat Sheet</h3>
                          <p>We combed the Internet to find each and every resume quiz out there. And then we answered all the resume questions to give you the right answers. Here they are.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_website_2.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Online Resume Website Examples that Inspire in 2024</h3>
                          <p>Are resume websites just a fad or the future of recruitment? Do you need one yourself? Let’s take a closer look, and see what options there are.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/video_resume_7.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Video Resume: How to Make One [Examples, Script & Tips]</h3>
                          <p>A video resume may boost your chances of landing a job or turn you into a meme character. Learn when to keep your creativity at bay, and when making a pro video resume makes sense.</p>
                      </div>
                  </div>


                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/how_to_make_a_resume_in_word_2.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>How to Make a Resume in Word in 2024: Formatting Guide</h3>
                          <p>Creating a resume in MS Word doesn’t need to be a nightmare. Make a resume in Word that every hiring manager will remember with ease.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/server_job_description_for_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>Restaurant Server Job Description (Sample for 2024)</h3>
                          <p>Food and drink orders are your speciality. Now serve up an irresistible resume with the perfect server job description.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/customer_service_job_description_for_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Customer Service Job Description for a Resume: Examples</h3>
                          <p>You know how to do service with a smile. Get that same smile out of the hiring manager by writing a great customer service job description for a resume.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_for_part_time_job_2.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>Resume for a Part-Time Job: Template and How to Write</h3>
                          <p>Limited time doesn’t mean limited opportunities. Make the job possibilities limitless with a perfect resume for a part-time job.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/cna_job_description_for_resume_1.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>CNA Job Description for a Resume: Examples and How-To</h3>
                          <p>Have you checked your CNA resume’s vital signs lately? If your resume seems non-responsive, let's inject it with a healthy dose of professional CNA resume job description.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/canva_resume_zety_us_1.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>10+ Free Canva Resume Templates [+Review]</h3>
                          <p>Canva resume templates let you make a great-looking resume for free. But are their resume templates what hiring managers want to see?</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/bilingual_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>Bilingual on a Resume: How to Highlight Bilingual Skills</h3>
                          <p>Having bilingual skills means you can communicate in more than just plain English. Learn to mention 'bilingual' in a resume the right way, and have recruiters at a loss for words.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/references_available_upon_request_zety_us_2.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>References Available Upon Request on a Resume—Yes or No?</h3>
                          <p>Should you conclude a resume with "references available upon request", or is there a better way? See what experts say about putting this phrase on a resume, and what to do instead.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/office_manager_job_description_for_resume_1.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Office Manager Job Description for a Resume: Examples</h3>
                          <p>You have no problem simultaneously managing a bustling office and stacks of invoices. Convince the recruiter with these tips for an office manager job description for a resume.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/cashier_job_description_for_resume_1.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>Cashier Job Description for a Resume [with 10+ Examples]</h3>
                          <p>Ringing up hundreds of customers everyday takes a whole lot more than asking “cash or credit?”. Explain that to the HR manager with your cashier job description for a resume.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/how_to_put_babysitting_on_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>How to Put Babysitting on a Resume [+Examples]</h3>
                          <p>You juggle kids as well as parents do. Learn how you put babysitting on your resume correctly and soon you’ll be juggling job offers instead.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_statistics_2.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>Resume Statistics 2022 (Analysis of 133,000 Documents)</h3>
                          <p>We’ve extracted and analyzed data from 133,000+ resumes created on Zety. Here’s what candidates across all industries write about their job histories and skills.</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/should_i_include_irrelevant_experience_on_a_resume_2.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>Should You Include Irrelevant Work Experience on a Resume?</h3>
                          <p>Should you include irrelevant work experience on a resume? Is any experience really irrelevant? Learn how to tailor your experience section to get an interview at your dream job.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/resume_meme_thumbnail.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>19 Resume Memes That Only Job Seekers Understand</h3>
                          <p>Resume writing has you frustrated? Take a moment to kick back and relax with the funniest resume memes online.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/what_should_not_be_included_in_a_resume_zety_us_2.jpg?fit=crop&h=260&dpr=2" alt="Time to Write a Resume" />
                      <div className="card-content">
                          <h3>What Should Not Be Included in a Resume? [15+ Things]</h3>
                          <p>It doesn’t matter what job you’re applying for, avoid these resume mistakes like the plague. Here’s what should not be included in a resume no matter what!</p>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/how_to_describe_yourself_on_a_resume_zety_us_1.jpg?fit=crop&h=260&dpr=2" alt="Canadian Resume" />
                      <div className="card-content">
                          <h3>How to Describe Yourself on a Resume the Right Way</h3>
                          <p>Having a hard time figuring out how to describe yourself on a resume? Use these tips to make your About Me section say “Hire Me” in recruiter speak.</p>
                      </div>
                  </div>
                  <div className="card">
                      <img src="https://cdn-images.zety.com/pages/relevant_experience_2.jpg?fit=crop&h=260&dpr=2" alt="Promotion on a Resume" />
                      <div className="card-content">
                          <h3>What Does Relevant Experience Mean? [With Examples]</h3>
                          <p>Relevant experience might be the single most important thing HR wants to see on your resume. Learn the meaning of relevant experience and how to prove you have it with this guide.</p>
                      </div>
                  </div>


              </div>
          </div>
          
          {/* last */}
          <div className="subscription-form">
      <h2>Don't miss out on exclusive stories that will supercharge your career!</h2>
      <p>Get a weekly dose of inspiration delivered to your inbox</p>
      <form>
        <div className="input-group">
          <input type="email" placeholder="Your e-mail" required />
          <button type="submit">Join 1,000,000+ subscribers</button>
        </div>
        <p className="error-message">Must be a valid e-mail address.</p>
      </form>
    </div>
    </div>
          </>
  );
};

export default ResumeHelp;
