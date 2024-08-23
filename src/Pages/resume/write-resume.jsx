import React from 'react';

//import profilePic from '../Resume/profilePic.jpg'; // Add the correct path to the profile picture
import './write-resume.css'

function writtingresume() {
  return (
    <div className="container1-main">
      <div className="app-container">
      
        <main className="content">
          <section className="guide-intro">
            <p>This comprehensive guide will show you all you need to know about making a resume that wows the recruiters.</p>
            <p>See some great resume writing tips, get inspired by helpful resume examples, and find answers to all your questions. I guarantee you’ll soon know how to build an excellent resume for any job you’re after!</p>
          </section>
          <section className="guide-details">
            <h2>In this guide, I’ll show you:</h2>
            <ul>
              <li>9-step instructions on how to make a resume for your desired job.</li>
              <li>10 complete resume examples for various jobs approved by career experts.</li>
              <li>An FAQ section to dispel doubts about how to write a resume that hits your career goals.</li>
            </ul>
          </section>
          <section className="guide-footer">
            <p>Want to save time and have your resume ready in 5 minutes? Try our resume builder. It’s fast and easy to use.<br /> Plus, you’ll get ready-made content to add with one click. <a href="#link">See 20+ resume templates and create your resume here.</a></p>
            <button className="r-button">Create Your Resume Now</button>
          </section>
        </main>
      </div>

      <div className="app">
        <div className="resume-container">
          <div className="resume-template left-template">
            <img src="https://cdn-images.zety.com/pages/how_to_make_a_resume_zety_us_bad_example.jpg" alt="Bad Resume Example" />
            <div className="wrong-icon">✖</div>
          </div>
          <div className="resume-template right-template">
            <img src="https://cdn-images.zety.com/pages/how_to_make_a_resume_zety_us_good_example.jpg" alt="Good Resume Example" />
            <div className="correct-icon">✔</div>
            <button className="use-template-button">Use This Resume Template</button>
            <div className='zety'>
              <img src='https://s3-eu-west-1.amazonaws.com/tpd/logos/58a851be0000ff00059ce9cb/0x0.png' />
            </div>
          </div>
        </div>
      </div>


      {/* one of users line */}

      <header className="App-header">
        <div className="resume-section-custom">
          <div className="sample-resume-custom">
            <p>Sample resume made with our builder—<a href="#">See more resume examples here.</a></p>
          </div>

          <div className="testimonial-custom">
            <h2>One of our users, Erin, had this to say:</h2>
            <div className="testimonial-box-custom">
              <p>
                This is the greatest thing ever! My resume looks so professional. I didn't have to do anything but upload my written resume and Zety has automatically designed it and re-worded it.
              </p>
            </div>
          </div>

          <div className="analysis-custom">
            <p>
              After analyzing <strong>11 million resumes created with our builder</strong>, we’ve gathered valuable insights from a diverse range of users across different industries and experience levels. Here are our top findings to help you create a more effective resume:
            </p>
          </div>
          <div className="data-insights-custom">
            <h3>Data-Backed Insights From Actual Resumes</h3>
            <ul>
              <li>• 57.84% of resumes created in our builder exceed 300 words, 28.23% range between 101 and 300 words, and 5.35% are under 100 words.</li>
              <li>• 3.59% of our users have no work experience, while 28.86% report having less than 3 years of work experience.</li>
              <li>• The average number of skills listed on resumes is 12.56.</li>
              <li>• The average number of jobs listed per resume is 2.61.</li>
            </ul>
          </div>

        </div>



      </header>
      <div className='video'>
        <p>you can start by watching our video to get the basics of resume writing</p>
      </div>
      <div className='u-tube'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/BY3oF2U53Ns?si=Q1Bs7H2YtXVYQGRq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className='create-main'>
        <br/>

        <h3>How to Create a Great Resume fast </h3>

      </div>
      <div className='section'>
        <p>I know you might be in a hurry to write a resume before the recruiter finds a perfect candidate and the job ad gets taken down</p>
      </div>
      <div className='create'>
        <p>here's a short list that examples hown to write a resume</p>
        <p>1.Choose the best resume format</p>
        <p>2.Add your contact information to your resume</p>
        <p>3.write a resume profile: a summary or an objective</p>
        <p>4.create a detailed work history section with your most impressive achivements</p>
        <p>5.Hilghlight your education</p>
        <p>6.List your relevant skills</p>
        <p>7.add additional sections that will prove your skills and be relevant to the job offer</p>
        <p>8.include a cover letter, adding even more relevant information and achivements</p>
        <p>9.proofread and send your resume in the correct format</p>
        <br />
        <p style={{ position: "relative", right: "50px" }}>But first, let’s take a look at a great example of how to create a resume.</p>
        <br />
        <div className='guide'>
          <p>Write a perfect resume that gets you interviews. Visit our guide:<a href=''>How to Write a Job-Winning Resume</a></p>
        </div>
      </div>
      <div className='write-resume'>
        <div className='write-resume-points'>
          <h2>How to Make a Resume: Example</h2>
          <p>Willow Foster <br /> Academic Teacher <br />123-456-7890 <br />  willowfoster@email.com  <br />linkedin.com/in/willow.foster</p>
          <h4>Summary</h4>
          <p>Experienced teacher with 10 years of experience in academic education. Passionate about fostering critical thinking and intellectual curiosity in students. Skilled in designing rigorous curricula and implementing effective instructional strategies to meet diverse learning needs. Increased AP exam pass rates by 20% through targeted exam preparation and review sessions.</p>
          <h4>Experience</h4>
          <h4>Academic Teacher</h4>
          <p>Summit High School, Idaho Falls, ID<br />September 2016–Present</p>
          <h4>Key Qualifications & Responsibilities</h4>
          <p>• Developing and delivering engaging lesson plans in subjects including English Literature, History, and Social Studies.</p>
          <p>• Utilizing various instructional methods, including lectures, discussions, and multimedia presentations, to facilitate student learning.</p>
          <p>• Incorporating project-based learning and real-world connections to enhance student understanding and application of course material.</p>
          <p>• Providing timely feedback and assessment to monitor student progress and adjust instruction as needed.</p>
          <h4>Key Achievement:</h4>
          <p>• Increased AP exam pass rates by 20% through targeted exam preparation and review sessions.</p>
          <h4>Academic Teacher</h4>
          <p>Mountain View Academy, Idaho Falls, ID <br />August 2014–June 2016</p>
          <h4>Key Qualifications & Responsibilities</h4>
          <p>• Taught World History, American Literature, and Government courses to high school students.</p>
          <p>• Differentiated instruction to accommodate diverse learning styles and abilities within the classroom.</p>
          <p>• Utilized technology tools such as online research databases and educational software to enhance instruction and student engagement.</p>
          <p>• Collaborated with colleagues to develop interdisciplinary units and cross-curricular projects.</p>
          <h4>Education</h4>
          <h4>Master of Arts in Education</h4>
          <p>• Idaho State University, ID <br />August 2012–May 2014</p>
          <h4>Key Qualifications & Responsibilities</h4>
          <p>• Taught World History, American Literature, and Government courses to high school students.</p>
          <p>• Differentiated instruction to accommodate diverse learning styles and abilities within the classroom.</p>
          <p>• Utilized technology tools such as online research databases and educational software to enhance instruction and student engagement.</p>
          <p>• Collaborated with colleagues to develop interdisciplinary units and cross-curricular projects.</p>
          <h4>Eduction</h4>
          <h4>Master of Arts in Education</h4>
          <p>Idaho State University, ID <br />August 2012–May 2014</p>
          <h4>Bachelor of Arts in History</h4>
          <p>Idaho State University, ID <br />August 2008–May 2012</p>
          <h4>Relevant extracurricular activities</h4>
          <p>• Member of the National Council for the Social Studies (NCSS).</p>
          <p>• Participated in professional development workshops on inquiry-based learning and historical analysis.</p>
          <h4>• Academic achievements:</h4>
          <p>• Recipient of the Outstanding Graduate Student Award, 2014.</p>
          <h4>Skills</h4>
          <br />
          <p>• Curriculum Development</p>
          <p>• Instructional Design</p>
          <p>• Classroom Management</p>
          <p>• Differentiated Instruction</p>
          <p>• Assessment and Evaluation</p>
          <p>• Strong Communication and Collaboration</p>
          <p>• Quick Problem-solving skills</p>
          <h4>• Certifications</h4>
          <p>• Teaching License, Idaho Department of Education, 2014</p>
          <h4>Languages</h4>
          <br />
          <p>English—Native</p>
          <p>Spanish—Intermediate</p>
          <h4>Interests</h4>
          <p>Attending academic conferences and seminars.</p>
          <p>Engaging in historical research and writing.</p>
          <br />
          <p>Now that we know what a resume should look like let’s see how to make one!</p>
          <div className='write-a-resume'>
            <h4>How to Write a Resume</h4>
            <p>Let’s expand the 9 resume tips listed above and dive deeper into better understanding the process behind writing an interview-worthy resume.</p>
            <h4>1. Choose the Right Resume Format</h4>
            <p>Before writing your resume, organize your information first. This will make your resume clear and attractive, increasing your chances of getting interviews. To show that information well, you need to understand <a href='' style={{ textDecoration: "none" }}>how to format a resume.</a> There are three main resume formats:</p>
            <p>1.<a href=''>Reverse-chronological resume— </a>a classic <a href=''>resume layout </a>that emphasizes your work experience and professional accomplishments, listing it from the most current going backward. It’s the most popular format, and the recruiters prefer it.</p>
            <p>2.<a href=''>Functional resume </a>—a skill-based resume with a skills summary as its most important section. Used for writing a <a href=''> creative resume</a> or transitioning to civilian with a <a href=''>military resume</a>.</p>
            <p><a href=''>Combination resume </a>—a hybrid of the two above, highlighting your experience and skill set. It’s best for professionals with a vast amount of relevant experience in a <a href=''> career change resumes </a>and for covering <a href=''> employment gaps </a> if you wish.</p>
            <img src='https://cdn-images.zety.com/pages/how_to_make_a_resume_zety_us_3_main_resume_formats.jpg' />
            <p>What’s the best resume format? It’s the chronological resume. Let me show you what it looks like.</p>
            <br />
            <p style={{ fontWeight: "bold" }}>Here’s how to write a great resume following the reverse-chronological format:</p>
            <p>• Create even <a href=''>margins on your resume</a>, 1-inch on all sides.</p>
            <p>• Use single or 1.15 line spacing.</p>
            <p>• Add an extra line before and after a heading.</p>
            <p>• Set a <a href=''>legible resume font</a>, like Calibri or Verdana, in 10–12 pts. For headings, use 13–14 pts in font size.</p>
            <p>• Exceed a <a href=''>resume’s page limit</a> only when unavoidable. Stick to a <a href=''>one-page resume template </a>for the best results. However, if you’re very experienced, opt for a two-page resume.</p>
            <p>• Start with a resume header. Make it distinctive to highlight your name and contact information.</p>
            <p>• Organize your <a href=''>resume categories</a> in the following order: </p>
            <p>• Resume Profile (Resume Summary or Resume Objective)</p>
            <p>• Work Experience </p>
            <p>• Education</p>
            <p>• Skills</p>
            <p>• Extra Sections</p>
            <p>• Use up to 6 <a href=''> bullet points </a>for your entries under each section.</p>
            <p>• Find resume icons for each section or skip them altogether.</p>
            <p>• Look for a preferred file format (PDF or .docx) in the job ad. If the company asks to send  <a href=''>resumes in Microsoft Word </a>.docx format,<a href=''> create a resume in Word</a>.</p>
            <p>• Save your <a href=''>resume in PDF format </a>, which preserves the structure and formatting on all devices.</p>
            <p> <a href=''>Name your resume</a> file by including the job title first, then the <a href=''>word resume</a>, and lastly, your full name.</p>
            <a href=''><img src='https://cdn-images.zety.com/pages/chronological_resume_template_zety_us.jpg' /></a>
            <div className='pro-tip'>
              <p><span style={{ fontWeight: "bold" }}>Pro Tip:</span> Consistency on your resume draft is crucial, just like your consistency as their future employee. For example, format your dates any way you like (31 Dec, December 31, 12-2020, etc.), but follow the same throughout.</p>
            </div>
            <h4>2.Add Contact Information and Personal Details</h4>
            <p>• You must include essential items in the contact information section, but you should also know <a href=''>what not to put on a resume</a>. Let’s go through the do’s and don’ts of your personal details.</p>
            <p>• Here’s what to keep in mind when<a href=''> constructing your contact information section:</a></p>
            <p>• Start with your first name and last name first. </p>
            <p>• Provide your current or the most recent job title.</p>
            <p>• Add your phone number and an email address.</p>
            <p>• Don’t add your <a href=''> home address,</a> as it’s an unnecessary detail.</p>
            <p>• Avoid adding information such as date of birth, as it could lead to ageism.</p>
            <p><a href=''>• Include your LinkedIn profile </a>if you have one.</p>
            <p>• Consider adding a personal website if you have one.</p>
            <p>• Skip adding a photo if you’re applying for a job in the US unless it’s an acting or a modeling position.</p>
            <p>• Use a<a href=''> resume headline </a>if you don’t want to go for a resume summary or objective. They usually cover that part.</p>
            <br />
            <p>See how you could arrange your header and personal details:</p>
            <a href=''><img src='https://cdn-images.zety.com/pages/contact_information_on_resume_zety_us.jpg' /></a>
            <br />
            <br />
            <div className='pro-tip'>
              <p><span style={{ fontWeight: "bold" }}>Pro Tip:</span> Before a recruiter or hiring manager can look you and your employment history up, you better <a href=''> sanitize your online presence!</a> That means removing any offensive posts and making private things private. While at it, <a href=''>optimize your LinkedIn profile</a> to make it up-to-date and complete.</p>
            </div>
            <h3>3. Start With a Resume Summary or Resume Objective</h3>
            <p>Our <a href=''>HR statistics report </a> says a hiring manager will scan your resume in 7 seconds. That means the top of the page will likely have the most eye time. And that’s where the<a href=''> resume summary </a> or<a href=''> objective statement is</a>.</p>
            <h4>What’s the difference between these two?</h4>
            <p><span style={{ fontWeight: "bold" }}>• A resume summary</span>  is a 2-3 sentence paragraph that gives recruiters a gist of your relevant experience and boasts about your accomplishments in the field. <a href=''>The purpose of a resume </a>and summary is to immediately draw attention to your candidacy and paint a picture of a fit applicant. It’s great for you if you’ve got more than a year of relevant experience.</p>
            <p>• <span style={{ fontWeight: "bold" }}>A resume objective </span>is a short statement providing insight into the qualities and <a href=''>skills you can transfer</a> to the company. The goal of an objective is to show your potential employer what you can help them achieve, considering your skill set. It’s great for you if you have little or no relevant experience.</p>
            <h4>How to write a <a href=''>resume profile</a> that makes the recruiter stop and stare? Simply follow the formulas below:</h4>
            <h4>Resume Summary Formula</h4>
            <p>Adjective + Job Title + Years of Experience + Achievements + Skills + What You Want to Do for the Employer </p>
            <h4>Objective Statement Formula</h4>
            <p>Adjective(s)/Certificate(s) + Your Current Job Title or Degree + seeking employment as + a Job Title + at + Company Name + to apply my + Your Relevant Skills + to help + What Do You Want To Help The Company Achieve</p>
            <p>Let's take a look at how to write a professional summary with right and wrong examples for clarity:</p>
            <h4>How to Write a Resume: Summary Examples</h4>
            <h2 style={{ color: "green", fontWeight: "normal" }}>RIGHT</h2>
            <hr style={{ height: "2px", backgroundColor: "rgb(66, 61, 61)" }} />
            <p>A dependable senior graphic designer with 10+ years of experience, responsible for daily graphic design content for a medium-sized firm. Recipient of the 2022 BigCommerce Design Award. Seeking to grow professionally and increase client transactions for the DeZine team.</p>
            <hr style={{ height: "2px", backgroundColor: "rgb(66, 61, 61)" }} />
            <h2 style={{ color: "red", fontWeight: "normal" }}>Wrong</h2>
            <hr style={{ height: "2px", backgroundColor: "rgb(66, 61, 61)" }} />
            <p>I have been a graphic designer for the last four years. In addition to my knowledge of various software and design programs, I also handle some tough customer accounts. I can always work well under pressure, even the tightest of deadlines.</p>
            <hr style={{ height: "2px", backgroundColor: "rgb(66, 61, 61)" }} />
            <p>The second example focuses on everyday duties, whereas the first one shows graphic design skills, achievements, and experience. The right example also mentions the company by name. That is a great way to make sure your resume feels personalized rather than just sent to every company out there.</p>
            <h5>Now, let's look at another set of right and wrong examples for writing a career objective:</h5>
            <h5>How to Write a Resume: Objective Examples</h5>
            <h2 style={{ color: "green", fontWeight: "normal" }}>RIGHT</h2>
            <hr style={{ height: "2px", backgroundColor: "rgb(66, 61, 61)" }} />
            <p>Diligent customer support specialist with 3+ years of experience at a large computer hardware company. Obtained the highest grades in build spec knowledge (100%) and quality (97.3%). Seeking to leverage a broad spectrum of IT knowledge and tech skills to become the next IT technician at BQNY.</p>
            <h2 style={{ color: "red", fontWeight: "normal" }}>Wrong</h2>
            <hr style={{ height: "2px", backgroundColor: "rgb(66, 61, 61)" }} />
            <p>The first example uses some transferable skills from the previous company and proud achievements, with numbers as they speak louder than words. The second one doesn’t show enough to hold the hiring manager’s attention. Plus, once again, the second example above used the first person. Avoid this in your resume.</p>
            <br />
            <p><span style={{ fontWeight: "bold" }}>Pro Tip:</span> If you have enough experience, consider writing a <a href=''>summary of qualifications</a> instead.</p>
            <h4> Create a Great Work Experience Section</h4>
            <p>The <a href=''> experience section </a>includes the most <a href=''>important things to put on a resume</a>, such as your work history and <a href=''> impressive achievements</a>. Let me take you through the three most important aspects of creating a great work experience section on your resume</p>
            <a href=''><img src='https://cdn-images.zety.com/pages/work_experience_on_resume_zety_us.jpg' /></a>
            <br />
            <h4>Build Your Resume Work Experience Section in the Exact Order</h4>
            <p>1.<a href=''>Job title</a>: This should go at the very top of each work history entry so that it's easy for potential employers to scan and find. Make it bold or increase the font size by 1pt or 2pts from the rest of the entry.</p>
            <p>2.Company, city, state: In the second line, include the previous employer's company name and the city and state of your location.</p>
            <p>3.Dates employed: Thirdly, put the timeframe of your employment there. You should add the month and the year, but there's no need to put exact days.</p>
            <p>4.should add the month and the year, but there's no need to put exact days.
              Key responsibilities: Focus on 5 to 6 essential job duties most relevant to the new job and list them in reverse chronological order. Use present tense to describe the current job and past tense to discuss previous experience.</p>
            <p>5.Key achievements: Often overlooked but super important. Employers know what you did. They need to know how well you did them. Say it using <a href=''> action verbs</a> to reinforce your capabilities.</p>
            <br />
            <p>Think about accomplishments you've had, not necessarily meaning solid sales numbers or percentages. Were you involved in something that had great success? If so, include it! Showing what you've done beyond your daily duties is what will prompt employers to call you. Employers want to hire someone who exhibits motivation, participation, and ambition.</p>
            <div className='Erin'>
              <img src='https://cdn-images.zety.com/pages/erin_kennedy_140.jpg'></img>
              <h4>Erin Kennedy</h4>
              <p>CEO, Managing Director at Professional Resume Service, Inc.</p>
            </div>

            <h3>Resume Tailoring Guide</h3>

            <h3>Understanding the Importance of Tailoring Your Resume</h3>
            <p>To <a href=''>tailor a resume</a> means making it as relevant to the job description as possible by including <span class="keyword">keywords</span> taken from a job ad and scattering them throughout the resume. The idea is to create an <span class="keyword"> <a href=''>ATS-friendly resume</a></span> that will show the software you have what it takes to take on the role.</p>

            <p>You can include the <span class="keyword">keywords</span> that an ATS will scan and assign you a score. The more relevant keywords, the higher the score you get. That leads to getting your application seen by a recruiter.</p>

            <h4>Identify and Incorporate Relevant Keywords</h4>
            <p>Refer to the job description and look for resume keywords related to your responsibilities. They can touch upon the following:</p>

            <p>• Duties (e.g., coordinate marketing campaigns, plan and implement promotional campaigns, etc.)</p>
            <p>•  Skills (e.g., project management, marketing communications, B2B marketing, etc.)</p>
            <p>• Qualifications (e.g., 5 years of experience, marketing or business-related degree, etc.)</p>
            <p>• Qualities(e.g., creative mindset, etc). </p>
            <br />
            <p>Later, when writing your work history section, use (or refer to) as many of the above as possible in your duties and key achievements.</p>
            <img src="https://cdn-images.zety.com/pages/tailoring_resume_to_job_description_zety_us.jpg" />
            <h3>Consider How Much Work Experience to Put on a Resume </h3>
            <p>A resume should go back at most 10-15 years. But the more experience you have, the less you should worry about the length of your resume. Don't try to cram everything into a one-page resume if you're a highly experienced candidate. And don’t mention academic achievements unrelated to the role, only to land on a two-page resume.</p>
            <h4>Let’s go into greater detail:</h4>
            <p><span style={{ fontWeight: "bold" }}>First-time job hunters with no work experience</span> can still include other gigs, such as a student organization role, internship, or volunteer experience, to fill out your experience section.</p>
            <p>Entry-level candidates should list and describe all paid work, particularly calling out the most relevant responsibilities and achievements.</p>
            <p>Mid-level job seekers should include detailed job descriptions of relevant positions and mention any other roles briefly.</p>
            <p>Senior-level applicants, such as executives and managers, should list up to 15 years of relevant work experience and introduce each bullet point with powerful action verbs.</p>
            <div className='pro-tip'>
              <p>Pro Tip: If you don't have relevant experience, emphasize the skills you have that can apply to the job you want.</p>

            </div>
            <p>Creating a resume with our builder is incredibly simple. Follow our step-by-step guide and use content from Certified Professional Resume Writers to have a resume ready in minutes.</p>
            <div className='Expert'>
              <img src='https://cdn-images.zety.com/pages/resume_tips.jpg'></img>
              <button>Create my resume now</button>
              <br />
              <div className='pro-tip'>
                <p>When you’re done, Zety’s resume builder will score your resume and our resume checker will tell you exactly how to make it better. </p>
              </div>
              <h3>5. Reference Your Education Correctly</h3>
              <p>Many people consider the education section an afterthought, but it's an essential part of your resume structure. Simply because it’s an excellent opportunity to prove your qualifications and gain some bonus points for relevancy.</p>
              <p>The list below entry applies to all candidates. It entails the essentials, which is the best solution for candidates with more than a year of experience. </p>
              <h4>Create your education section following the order below:</h4>
              <p>1.Degree: Place your highest degree first. That means leaving out the high school info if you finished a university or college</p>
              <p>2.University: Add the name and location.</p>
              <p>3.Dates attended: List your dates of attendance, mentioning the month and the year. I advise against being as specific as including the days.</p>
              <h4>However, if you’re writing an entry-level resume, you should add more details to your education sections:</h4>
              <p>Completed credits if your education is ongoing or unfinished. </p>
              <p>Relevant coursework and major and minor to exhibit your knowledge of the subject matter.</p>
              <p>Latin honors or your awards (e.g., making the Dean's List) to show your commitment to growth.</p>
              <p>Relevant extracurricular activities for proof of job-related skills.</p>
              <p>Additional information, such as academic projects or Phi Kapa Beta.</p>
              <h4>This example has it all: the right structure and relevant and impressive achievements backed by numbers. </h4>
              <div className='pro-tip'>
                <p><span style={{ fontWeight: "bold" }}>Pro tip</span>: As for mentioning your GPA on a resume, it’s only a good idea if you graduated recently and your GPA was high enough to impress employers—at least 3.5. Otherwise, just leave it off your application. Also, don't round your GPA up.</p>
              </div>
              <h3>6. Put Relevant Skills That Fit the Job Ad</h3>
              <p>The skills you include on a resume are crucial to making it relevant to the position (and attractive to employers). A good resume uses the job ad as a reference and includes relevant skills to show you're a good fit for the job. </p>
              <h4>There are two types of skills you can include in your resume:</h4>
              <p>• Hard skills are specific abilities and know-how (e.g., Photoshop, using a cash register).</p>
              <p>• Soft skills are self-developed, life-learned attributes (e.g., social skills, adaptability).</p>
              <p>• These comprise a skill set and a job seeker's range of skills and abilities.</p>
              <h4>How to Make a Resume: Best Skills to Include</h4>
              <p>• Reread the ad for a job you’re after and pay attention to any specific skills it mentions. If you have any of them, great—those are the keywords to put on your resume.</p>
              <h4>See what skills the job ad might include:</h4>
              <p>• Communication skills: These can consist of people skills, non-verbal communication, active listening skills, and interpersonal skills.</p>
              <p>• Leadership skills and management skills: An ability to be a good manager, leader, and supervisor.</p>
              <p>• Critical thinking skills: Making thought-based decisions and taking the initiative. Includes analytical skills, decision-making skills, and problem-solving skills.</p>
              <p>• Organizational skills: A knack for planning, organizing, and seeing initiatives through.</p>
              <p>• Transferable skills:For career changers, these are abilities you learned to carry to your new position.</p>
              <p>• Technical skills: Knowledge required to perform specific tasks, like computer skills or clerical skills.</p>
              <p>• Job-specific skills:Particular prowess the company specifically requires.</p>

              <img src='https://cdn-images.zety.com/pages/resume_skills_section_zety_us.jpg'></img>
              <h4>How to List Skills on a Resume </h4>
              <p>There are several ways to include a list of skills. For most, a simple skills section that contains 5-6 key abilities and your proficiency level is enough:</p>
              <img src='https://cdn-images.zety.com/pages/skills_on_resume_2.jpg'></img>
              <p>For specific job titles and technical skills, I recommend listing your particular knowledge per item to give them specific detail into the areas of the skill you excel at:</p>
              <img src='https://cdn-images.zety.com/pages/skills_on_resume.jpg'></img>
              <h4>However, to really match your skill section with the job ad, follow these 6 steps:</h4>
              <p>1.Create a list of all your soft skills and hard skills examples. Don’t limit yourself; you’ll do it later.</p>
              <p>2.Find all the skills mentioned in the job ad. </p>
              <p>3.Visit the company’s website and social media for more skills.</p>
              <p>4.Write those skills down.</p>
              <p>5.See which skills on those two lists overlap. </p>
              <p>6.Include up to 10 skills on your resume.</p>
              <div className='pro-tip'>
                <p><span style={{ fontWeight: "bold" }}>Pro Tip</span>: You might be tempted to write your resume in ChatGPT. While AI can be helpful, you still need to put a lot of work to make it right.</p>
              </div>
              <h3>7.Include Additional Resume Sections</h3>
              <p>Every good resume includes those sections above. But how to make a resume that stands out? To have a unique resume, include some extra information.</p>
              <h4>Those things can include:</h4>
              <p>Awards and recognitions demonstrate that you're a standout candidate and a valuable addition to the team.</p>
              <p>Certifications and licensesverify your expertise and proficiency.</p>
              <p>Memberships indicate that you stay current with industry trends.</p>
              <p>Language skills enable you to collaborate with diverse groups</p>
              <p>Publications and appearances elevate your status from professional to expert</p>
              <p>Projects you participated in can easily highlight your biggest accomplishments.</p>
              <p>The conferences you attendedhighlight your passion for continuous learning</p>
              <p>Hobbies and interests showcase your soft skills and add to your personal appeal.</p>
              <p>Volunteer work, according to studies, boosts employability.</p>
              <div className='pro-tip'>
                <p><span style={{ fontWeight: "bold" }}>Pro Tip</span>: Should you put references on your resume? Most experts say to avoid doing so at the start of job applications, and your resume is the very first stage.</p>
              </div>
              <h3>8. Complement Your Resume With a Cover Letter</h3>
              <h4>You must most definitely submit a cover letter. </h4>
              <p>Your cover letter or job application letter lets you expand upon things you need to keep brief on your resume. Also, it allows you to speak easily in standard sentences!</p>
              <p>Most employers think more than a resume is needed to make a decision.</p>
              <p>Most employers think more than a resume is needed to make a decision.</p>
              <h4>Here’s a brief how-to list of acing your cover letter:</h4>
              <p>Tailor your cover letter just like you tailored your resume. Make it as relevant to the job ad as possible.</p>
              <p>Open your cover letter with the right introduction to capture your readers’ attention.</p>
              <p>Mention the company’s name and highlight your achievements</p>
              <p>Explain why this position is perfect for you.</p>
              <p>Create an enthusiastic cover letter conclusion with a powerful call to action, offering a precise date for your interview.</p>
              <div className='pro-tip'>Pro Tip: Keep the correct cover letter length. Don’t submit anything longer than a page.</div>
            </div>
            <p>Plus, a great cover letter that matches your resume will give you an advantage over other candidates. You can write it in our cover letter builder here. Here's what it may look like:</p>
            <img src='https://cdn-images.zety.com/pages/matching_set_of_resume_and_cover_letter_1.jpg'></img>

            <div className='pro-tip'>
              <p>See more cover letter templates and start writing.</p>

            </div>
            <h3>9.Proofread and Email Your Resume the Right Way</h3>
            <p>You've got a good-looking resume, but don't send it off just yet. Here are some resume best practices to keep in mind so you can rest assured that you have the perfect resume:</p>
            <p>1.Review your resume with this checklist to tick off all the check marks for formatting and style.</p>
            <p>2.Double-check your resume before sending it out. See if you have all the right sections and whether they have all you need to succeed.</p>
            <p>3.Scan your entire application with a tool like Grammarly to check for spelling or grammar mistakes.</p>
            <p>Ask a friend or family member for help. Better safe than sorry!</p>
            <p>Personalize your email with the name of the person reading your resume. Sending a resume is much more compelling when you avoid To Whom It May Concern.</p>
            <div className='pro-tip'>
              <p>Now, you wish you had an email template for emailing a resume? Say no more: 10+ Email Examples for Emailing a Resume.</p>

            </div>
            <h3>10+ Resume Examples for Various Jobs</h3>
            <p>Now that you know all the resume dos and don’ts, let me show you what you can achieve by following it. See the examples depicting how to build a resume for different types of jobs:</p>
            <h3>1. Accounting Assistant Resume</h3>
            <img src='https://cdn-images.zety.com/pages/accounting_assistant_resume_example_template_cubic.png'></img>
            <div className='text-version'>
              <button>See text version and guide</button>
            </div>
            <h3>2. Data Engineer Resume</h3>

            <img src='https://cdn-images.zety.com/pages/data_engineer_resume_example_template_influx.png'></img>
            <div className='text-version'>
              <button>See text version and guide</button>
            </div>

            <h3>3. IT Specialist Resume</h3>
            <img src='https://cdn-images.zety.com/pages/it_specialist_resume_example_template_cascade.png'></img>
            <div className='text-version'>
              <button>See text version and guide</button>
            </div>

            <h3>4. Manager Resume</h3>
            <img src='https://cdn-images.zety.com/pages/manager_resume_template_cascade.png'></img>
            <div className='text-version'>
              <button>See text version and guide</button>
            </div>

            <h3>5. Office Administrator Resume</h3>
            <img src='https://cdn-images.zety.com/pages/office_administrator_resume_example_template_minimo.png'></img>
            <div className='text-version'>
              <button>See text version and guide</button>
            </div>

            <h3>6. Paralegal Resume</h3>
            <img src='https://cdn-images.zety.com/pages/paralegal_resume_template_cubic.png'></img>
            <div className='text-version'>
              <button>See text version and guide</button>
            </div>

            <h3>7. Sales Associate Resume</h3>
            <img src='https://cdn-images.zety.com/pages/sales_associate_resume_template_concept.png'></img>
            <div className='text-version'>
              <button>See text version and guide</button>
            </div>

            <h3>8. Teacher Resume</h3>
            <img src='https://cdn-images.zety.com/pages/teacher_resume_template_initials.png'></img>
            <div className='text-version'>
              <button>See text version and guide</button>
            </div>

            <h3>9. Technical Writer Resume</h3>
            <img src='https://cdn-images.zety.com/pages/technical_writer_resume_example_template_cubic.png'></img>
            <div className='text-version'>
              <button>See text version and guide</button>
            </div>

            <h3>10. User Experience (UX) Designer Resume</h3>
            <img src='https://cdn-images.zety.com/pages/ux_designer_resume_example_template_iconic.png'></img>
            <div className='text-version'>
              <button>See text version and guide</button>
            </div>
            <h2 style={{ marginLeft: "220px" }}>Similar articles</h2>





          </div>



        </div>

      </div>






      {/* Grid content */}

      <div className='cards'>

        <br />

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src="https://cdn-images.zety.com/pages/4c520e57-70ea-4990-92e2-b5398de83276.jpg?fit=crop&h=250&dpr=2" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Best Online Resume Builders You Must Try in 2024</h5>
                <p class="card-text">You don't need Reddit to find reviews of the best online resume builders in 2024. I’ve got you covered. Learn what’s the best resume builder from my article instead.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://cdn-images.zety.com/pages/generic_cover_letter_1.jpg?fit=crop&h=250&dpr=2" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">General Cover Letter Sample, Generic Template, & Tips</h5>
                <p class="card-text">Can you use a generic cover letter for all jobs? Only if you know how to do it well. See a professional general cover letter sample and read our tips to make it even better.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://cdn-images.zety.com/pages/how_long_to_make_a_resume_study_zety_us_thumbnail.jpg?fit=crop&h=250&dpr=2" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">How Long Does It Take to Write a Resume? Zety’s Study</h5>
                <p class="card-text">The time spent on writing a resume depends on many elements. After all, it’s a highly personal document. See our study and learn the average time it takes to write a resume.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default writtingresume;
