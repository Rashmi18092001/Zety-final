import heroCard from '../../images/builder/hero-image-desktop@3x.webp'
import step1 from '../../images/builder/Step 1.png'
import step2 from '../../images/builder/step 2.png'
import step3 from '../../images/builder/step3.png'
import step4 from '../../images/builder/step4.png'
import resume1 from '../../images/builder/project_manager_resume_8.png'
import resume2 from '../../images/builder/nursing_resume_template_concept.png'
import resume3 from '../../images/builder/crisp.png'
import resume4 from '../../images/builder/cubic.png'
import image1 from '../../images/builder/resume_fast@3x.webp'
import image2 from '../../images/builder/ttc@3x.webp'
import image3 from '../../images/builder/upload_resume@3x.webp'
import image4 from '../../images/builder/resume_score@3x.webp'
import image5 from '../../images/builder/matching_cl@3x.webp'
import image7 from '../../images//builder/generate-unlimited@3x.webp'
import CImage1 from '../../images/builder/microsoft.jpeg'
import CImage2 from '../../images/builder/amazon.jpeg'
import CImage3 from '../../Images/builder/AT.jpeg'
import CImage4 from '../../Images/builder/fedex.jpeg'
import CImage5 from '../../Images/builder/orange.jpeg'
import './Builder.css'
function ResumeBuilder() {
  return (<>
    <section className="Builder-Head-Article">
      <div className="Builder-Head-Card col-lg-6">
        <h2>The Best Online Resume Builder [Fast & Simple]</h2>
        <p>Free to use. Developed by hiring professionals.</p>
        <p>Hassle-free resume maker that can help you land your dream job in any industry. Trusted by job seekers and HR experts. Build your resume quickly and easily today.</p>
        <button className="Builder-Head-Button">Create Your Resume Now </button></div>
      <img className="Builder-Head-Image col-lg-6" src={heroCard} alt={step4}></img>
    </section>




    <h1>Just four simple steps to download your resume:</h1>
    <section className="Builder-Cards">
      <div className="Builder-Step-Card col-lg-3">
        <img className="Builder-Step-Image" src={step1} alt={step4}></img>
        <div className="Builder-Step-Button">
          <p>Step 1</p></div>
        <h5>Pick a resume template</h5>
        <p>Choose from 18 professional templates. They're made by career experts and designers to help you land the interview</p>
      </div>
      <div className="Builder-Step-Card col-lg-3">
        <img className="Builder-Step-Image" src={step2} alt={step4}></img>
        <div className="Builder-Step-Button">
          <p>Step 2</p></div>
        <h5>Add expert-written content</h5>
        <p>With a few clicks, add tailored, job-specific content to your resume created by Certified Professional Resume Writers.</p>
      </div>
      <div className="Builder-Step-Card col-lg-3">
        <img className="Builder-Step-Image" src={step3} alt={step4}></img>
        <div className="Builder-Step-Button">
          <p>Step 3</p></div>
        <h5>Personalize it</h5>
        <p>Easily change the colors, fonts, and layout with our intuitive interface.</p>
      </div>
      <div className="Builder-Step-Card col-lg-3">
        <img className="Builder-Step-Image" src={step4} alt={step4}></img>
        <div className="Builder-Step-Button">
          <p>Step 4</p></div>
        <h5>Download in PDF or DOC</h5>
        <p>Download your polished resume in the preferred file format and apply for your dream job immediately</p>
      </div>

    </section>
    <button className="Builder-Head-Button"> Create My resume</button>


    <h1>Build a resume online. Start by picking a template:</h1>
    <section className="Builder-Resume-Card">
      <div className="Builder-Resume-Section">
        <img src={resume1} alt={step4}></img>
        <p>Cascade</p>
        <p>Sleek design with a modern edge, blending professionlism and creativity.</p>
      </div>
      <div className="Builder-Resume-Section">
        <img src={resume2} alt={step4}></img>
        <p>Concept</p>
        <p>Innovative design, mergin creativity with professionalism,</p>
      </div>
      <div className="Builder-Resume-Section">
        <img src={resume3} alt={step4}></img>
        <p>Crisp</p>
        <p>Minimalist aesthetic, providing a polished canvas for career achievemants.</p>
      </div>
      <div className="Builder-Resume-Section">
        <img src={resume4} alt={step4}></img>
        <p>Cubic</p>
        <p>Modern desgin with geometric elements, giving a professional resume look.</p>
      </div>

    </section>



    <section className="ContentSection">
      <p style={{ marginLeft: "70px", marginRight: "70px" }}>We’ve developed our resume builder with one goal in mind: to help you find a great job faster. Our resume maker comes with ATS-optimized layouts and a wizard that guides you through every step of the process.</p>
      <p style={{ marginLeft: "70px", marginRight: "70px" }}>Plus, you'll get ready-to-use AI-generated suggestions for every section of your resume, personalized to match your desired position. Don’t feel like writing? Just drag and drop the content that suits you and let our resume editor do the rest.</p>
      <p style={{ marginLeft: "70px", marginRight: "70px" }}>Have a hard time choosing which style is right for you? Check out all our resume templates here, and read more about their advantages. Looking to make a CV instead? Try our easy-to-use CV Builder that comes with professional CV templates.
      </p>
      <button  className="Builder-Head-Button">Use This Template</button>
    </section>



    <div className='Company-Logo-Container'>
            <p>Our customers are hired by :*</p>
            <span><img src={CImage1} alt='image' /></span>
            <span><img src={CImage2} alt='image' /></span>
            <span><img src={CImage3} alt='image' /></span>
            <span><img src={CImage4} alt='image' /></span>
            <span><img src={CImage5} alt='image' /></span>
        </div>




    <section style={{ margin: "20px 70px" }}>
      <div className='ColorSection'>
        <h1>Don’t want to commit just yet? Try our resume builder 14-day trial!</h1>
        <p>Take us for a test drive and explore all the powerful features of the resume generator for 14 days.</p>
        <button  className="Builder-Head-Button">Try Our resume builder</button>
      </div>
    </section>




    <h1>Here’s what our resume maker has to offer:</h1>
    <section className="Builder-Head-Article">
      <img className="Builder-Head-Image  col-lg-6" src={image1} alt={step4}></img>
      <div className="Builder-Head-Card col-lg-6">
        <h2>Make your resume fast</h2>
        <p>Build your resume fast and easily with our online resume builder. It's packed with professional templates and step-by-step assistance. Just pick a template, and we'll guide you through the whole process with our expert tips. Making a resume has never been easier.</p>
      </div>
    </section>




    <hr style={{ margin: "70px" }}></hr>
    <section className="Builder-Head-Article">

      <div className="Builder-Head-Card col-lg-6">
        <h2>Add ready-made content from experts</h2>
        <p>Instead of writing your resume from scratch, use pre-rewritten content from Certified Professional Resume Writers. We’ve got you covered for any job or industry. You can use it as is or easily customize content suggestions from our experts to your needs.</p>
      </div>
      <img className="Builder-Head-Image  col-lg-6" src={image2} alt={step4}></img>
    </section><hr style={{ margin: "70px" }}></hr>




    <section className="Builder-Head-Article">
      <img className="Builder-Head-Image  col-lg-6" src={image3} alt={step4}></img>
      <div className="Builder-Head-Card col-lg-6">
        <h2>Upload and automatically reformat your old resume</h2>
        <p>Have an old resume with an outdated layout? Upload it to our resume maker, and we’ll transform it into a fresh, contemporary design absolutely free of charge. Save time, and enjoy your new, modern resume in just a few minutes.</p>
      </div>
    </section><hr style={{ margin: "70px" }}></hr>




    <section className="Builder-Head-Article">

      <div className="Builder-Head-Card col-lg-6">
        <h2>Score and fix your resume</h2>
        <p>Once your resume is ready, our resume builder will score it against other candidates applying for the same jobs. You will get detailed tips on how exactly to fix your resume to have a much greater chance of securing an interview.</p>
      </div>
      <img className="Builder-Head-Image  col-lg-6" src={image4} alt={step4}></img>
    </section><hr style={{ margin: "70px" }}></hr>




    <section className="Builder-Head-Article">
      <img className="Builder-Head-Image  col-lg-6" src={image5} alt={step4}></img>
      <div className="Builder-Head-Card col-lg-6">
        <h2>Create a matching cover letter in no time</h2>
        <p>Cover letters significantly increase your chances of landing a job interview. That’s why our resume builder comes with a cover letter generator where you can create a matching cover letter just as easily. Our career experts have prepared thousands of ready cover letters for any job for you to choose from so that you can have your cover letter ready in minutes, not hours.</p>
      </div>
    </section><hr style={{ margin: "70px" }}></hr>




    <section className="Builder-Head-Article">

      <div className="Builder-Head-Card col-lg-6">
        <h2>Generate unlimited resumes in PDF, DOC, TXT.</h2>
        <p>Create countless tailored resumes for every job you're applying for. Add or remove sections, change templates, or tweak the content as needed. Our fast & easy resume generator guarantees a flawless layout no matter how many changes you make, or how short or long your resume is. Download your ready resume in PDF, Word or TXT format and start applying for jobs instantly.</p>
      </div>
      <img className="Builder-Head-Image  col-lg-6" src={image7} alt={step4}></img>
    </section>




    <h1 style={{ textAlign: "left", margin: "10px 70px" }}>Build your resume with resume examples created by Certified Professional Resume Writers.</h1>
    <p style={{ textAlign: "left", margin: "10px 70px" }}>Explore our extensive collection of over 600 tailored resume examples designed for every job and industry. Our team of career experts has crafted each guide to include a comprehensive example and valuable tips for every resume section tailored to your specific profession. For an even easier process, use our online resume builder. Simply input your job title, and let us take care of the rest. Create your resume quickly and easily, and get the dream job you've always wanted.
      Project Manager Resume
      Project Manager Resume
      Master the art of showcasing your leadership skills and project successes with our Project Manager Resume guide, designed to help you stand out in your field.Customer Service Resume Customer Service Resume Highlight your exceptional communication and problem-solving abilities with our Customer Service Resume guide, crafted to elevate your job application.Teacher Resume</p>





    <div className="Contents" style={{ textAlign: "left", margin: "10px 70px" }}>
      <h1>Frequently Asked Questions about Zety Resume Builder</h1>
      <h3>What is a resume builder?</h3>
      <p>
        A resume builder is an interactive online tool or piece of software that offers different resume templates and allows users to create a resume quickly and easily. Zety resume maker suggests resume tips that can help you build each resume section fast, even if you’re writing a resume with no experience.</p>
      <p>In short, online resume creators are a much quicker, more efficient alternative to creating your resume manually. Our resume builder adjusts your documents automatically every time you update your resume. You can swap templates, colors, content, or fonts on your resume dynamically without losing your progress or messing up the resume formatting. Plus, you can always work on an existing resume, as our tool auto-populates your information onto a template you’ve chosen! And it makes sure you create an ATS-friendly resume that includes all the necessary resume keywords and lets the applicant tracking system easily parse your application.</p>
      <button  className="Builder-Head-Button">Create your Fast Resume Builder</button>
    </div>




    <hr style={{ margin: "70px" }}></hr>
    <h2 style={{ textAlign: "left", margin: "10px 70px" }}>Which resume builder is the best in 2024?</h2>
    <h3 style={{ textAlign: "left", margin: "10px 70px" }}>Zety's resume maker is the best resume builder in 2024. It offers more features than any other app of such kind. It also allows you to create as many documents as you want for free, providing:</h3>
    <div className="lists" style={{ textAlign: "left", margin: "10px 70px" }}>
      <ul>
        <li>18 professional resume templates with dozens of varied color schemes and fonts</li>
        <li>A cover letter builder (with matching templates)</li>
        <li>The option to upload your old resume to spruce it up in a few minutes</li>
        <li>Built-in content for your resume, CV, and cover letter and suggestions that allow you to tailor your document to your job title</li>
        <li>Real-time and easy resume checker with improvement tips</li>
        <li>Multiple formats to download your resume—Word, TXT, and a PDF resume</li>
        <li>Printing feature directly from the app</li>
        <li>Ability to save an unlimited number of documents in the cloud</li>
        <li>14-day trial without feature restrictions</li>
        <p>Want to see how it compares against other apps? See this ranking of the best resume builders available online.</p>
      </ul>
      <hr></hr>
      <h2 style={{ textAlign: "left" }}>Is Zety resume maker safe and legit?</h2>
      <p style={{ textAlign: "left" }}><strong> Yes, Zety is a safe and legit business!</strong> The website and available tools are safe thanks to a
        secure SSL HTTPS encrypted connection. And your personal data is processed according to stringent policies
        that you can find out more about on the About Zety page. Learn even more about our policies in terms of use, privacy
        policy, and cookie policy pages.</p>
      <hr style={{ margin: "70px" }}></hr>
      <h2 style={{ textAlign: "left" }}>Is Zety a free resume builder?</h2>
      <p style={{ textAlign: "left" }}><strong>Zety resume builder is free to create resumes, CVs, and cover letters. </strong> The app follows the “try before you buy” credo—you pay once you're satisfied with the results. To see if you’re truly satisfied, you can create the entire resume, CV, or a cover letter from A to Z. Once you do that, you can download it for free as a text file or opt for a premium plan, starting at just $1.95, with a 14-day money-back guarantee and download it as PDF or MS Word file.</p>
      <hr style={{ margin: "70px" }}></hr>
      <h2 style={{ textAlign: "left" }}>Can I have my resume reviewed when I've finished writing?</h2>
      <p style={{ textAlign: "left" }}><strong>Yes! You can use a resume checker integrated with Zety's resume maker. It’s a perfect and easy way to have your resume reviewed and improve your resume accordingly.</strong>The software scores each part of your resume and recommends how to improve it. To score your resume, the resume checker compares your document with thousands of other resumes made for the same job title, so you can predict how well it’ll perform in your job hunt against other candidates.</p>
      <p style={{ textAlign: "left" }}>With the Zety resume app, you'll no longer be sending resumes unsure of whether they're actually any good. If you follow all the creator's tips, you'll only ever send top-notch job applications!</p>
      <hr style={{ margin: "70px" }}></hr>
      <h2 style={{ textAlign: "left" }}>What is a resume?</h2>
      <p style={{ textAlign: "left" }}><strong>A resume is a brief document that gives an overview of your qualifications. It includes information about your work history, education, and professional skills relevant to the job. It also shows your achievements, awards, certifications, and other things that will help you impress the recruiter.</strong> </p>
      <p style={{ textAlign: "left" }}>In other words, a resume is a document necessary to apply for any job and to convince your potential employer that you’re the perfect fit for their opening. A unique resume template, an ATS-friendly document, and a perfect cover letter can skyrocket those chances.</p>

      <hr style={{ margin: "70px" }}></hr>
      <h2 style={{ textAlign: "left" }}>What's the best resume template to use in 2024?</h2>
      <p style={{ textAlign: "left" }}><strong>The best resume template to use in 2024 is a reverse-chronological resume template, as it’s easy to read or skim through by the ATS software and hiring managers. </strong> It’s mostly recommended for experienced candidates. If you’re only starting your career, skill-based resume templates will serve you more. </p>
      <p style={{ textAlign: "left" }}><strong>The resume templates available in our resume maker tick those boxes and are fast and painless to fill out online. </strong>
        They are also entirely customizable (section order, colors, fonts, margins, etc.). All the changes are applied in real-time and visible on a preview. Want to take a look at different styles of resume templates? Here are our best resume templates.</p>
    </div><hr style={{ margin: "70px" }}></hr>










    <div className="lists" style={{ textAlign: "left", margin: "10px 70px" }}>
      <h2>What should i include on my resume?</h2>
      <p>A resume consists of several parts. Here's what you should on your resume in 2024:</p>
      <ul style={{ textAlign: "left" }}>
        <li>Conteact Details (with a Linkedin Porfile)</li>
        <li>Resume Summary or Resume Objective</li>
        <li>Work experience</li><li>Education & Diplomas</li>
        <li >Professional Skills(consider listing hard skills and soft skills separately)</li>
        <li>Additional Information</li>
        <p>When building a resume in our resume app, you’ll be guided through each step of the resume creation process and given expert tips and even generated content tailored to the job you’re applying for. After you're done, your resume should be one-page long. But there are exceptions, and sometimes it can be a two-page resume. Find more about an ideal resume length.</p>
      </ul>
    </div>
    <hr style={{ margin: "70px" }}></hr>




    <div className="lists" style={{ textAlign: "left", margin: "10px 70px" }}>
      <h2>What is the best resume format to use in 2024?</h2>
      <p>A resume consists of several parts. Here's what you should on your resume in 2024:</p>
      <p><strong>The best resume format to use in 2024 is a reverse-chronological resume. It displays your information (e.g., work history and education) from the most recent to the oldest of your qualifications, highlighting the most relevant achievements on your resume.</strong></p>
      <p>However, depending on your career path, you may need to pick:</p><ul style={{ textAlign: "left" }}>
        <li >Skills-based resume or functional resume: focus on your skills rather than work experience</li>
        <li>Hybrid/combination resume: a clever mix of chronological and functional resumes</li>
        <li>Student resume format: focuses on studies, volunteering work, soft skills, and internships over work history</li>
        <li>Video resume: for creative candidates and industries (must always be accompanied by an actual resume)</li>
        <li>Targeted resume: created with one specific job posting in mind</li>
        <li>Infographic resume: for a career focused on graphics and design skills</li>
        <li>Simple resume: concentrated strictly on the content</li>

      </ul>
      <p><strong>Our online resume maker and all of our templates support these resume formats, so you can try them all and see what works best for you!</strong></p>
    </div>





    <hr style={{ margin: "70px" }}></hr>
    <div className="lists" style={{ textAlign: "left", margin: "10px 70px" }}>
      <h2>Do I need a different resume for every different job application?</h2>
      <p>Yes, you do! You should make a different resume for every application. Tailoring your resume to each job you apply to can significantly increase your chances of getting hired. Generic resumes simply don't stand a chance against a targeted resume.</p>
      <p>For an easy way out, check if the job title and skills section match and are relevant to the job you’re after.</p>
      <p>In our resume generator, once you enter the job title you’re pursuing, you’ll get customized suggestions for a list of skills, resume profile, and other areas that can be improved. Also, you can easily duplicate, change, and save every resume you write. That makes it way easier to tailor your resume for each job offer you’re applying for in less than 5 minutes. Now you don't have to mass-send the same resume or spend hours creating a new one for each offer from scratch!</p>
    </div>



    <div className="lists" style={{ textAlign: "left", margin: "10px 70px" }}>
      <h2>What does an ATS-friendly resume mean?</h2>
      <p><strong>An ATS-friendly resume is one that is fully and easily scanned and understood by the Applicant Tracking Systems. Format your resume and include relevant keywords to achieve it.</strong>Many companies use such software to scan and filter resumes before landing on a recruiter’s desk.</p>
      <p>All the templates in Zety resume builder are 100% ATS-compliant. Make your resume using an ATS-friendly resume template, and don’t get rejected.</p>
    </div>
    <hr style={{ margin: "70px" }}></hr>
    <div className="lists" style={{ textAlign: "left", margin: "10px 70px" }}>
      <h2>Are there any good resume examples that I can use?</h2>
      <p><strong>Yes, there are many great resume examples! See over 500 free resume examples for any job application. There's a guide for everyone, no matter your experience level and industry.</strong></p>
      <p>However, even though you can copy and use the available examples, it’s still essential to understand what your future employer is looking for in your resume. Use the examples only as references.</p>
    </div>
    <hr style={{ margin: "70px" }}></hr>
    <div className="lists" style={{ textAlign: "left", margin: "10px 70px" }}>
      <h2>Do I need a cover letter for my resume?</h2>
      <p><strong>Yes, cover letters are necessary. Your recruiters might need more time to read it carefully, but they will find time to scan them when they consider you as a potential hire.</strong></p>
      <p>Submitting a cover letter is one of the best ways to boost your resume and prove just how motivated you are. More than 25% of recruiters consider them critical, and half of them prefer when applicants attach a cover letter to their resume.<strong> Of course, a cover letter will only work if it is as tailored and unique as your resume, so it’s important to figure out what a cover letter should say to wow the recruiter.</strong>
      </p>
      <p>To learn more about creating a job-winning cover letter, check out our guide on how to write a cover letter. Help yourself with our hundreds of free cover letter examples, or use our professional cover letter templates that match your resume in our resume builder.</p>

    </div>
    <hr style={{ margin: "70px" }}></hr>
    <h1>Transform your career today and join <span>thousands</span> of satisfied users</h1>
    <button className="Builder-Head-Button">Make your resume online
    </button>

  </>)
}
export default ResumeBuilder