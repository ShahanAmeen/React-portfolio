import resume from "./resume.pdf"

function Resume() {
  return (
    <div>
<h3>
  download my resume <a href={resume} download>here</a>
</h3>

      <p>
        Shahan Ameen
        Minneapolis, Minnesota
        shahanameen@gmail.com | (507) 250-4823
        www.linkedin.com/in/shahanameen | www.github.com/ShahanAmeen
        EDUCATION
        UNIVERSITY OF MINNESOTA - TWIN CITIES		                                   Minneapolis, MN
        Certificate, Full Stack Web development                                                                               December 2023
        UNIVERSITY OF WISCONSIN - STOUT	              		                                        Menomonie, WI
        Bachelor of Business Administration, Minor in Entrepreneurship, and Innovation                      May 2022
        PROJECTS
        SOFTWARE ENGINEERING BOOTCAMP
        University of Minnesota - Twin Cities
        PET-SPACE| https://nestibry.github.io/pet-space/
        FRONTEND DEVELOPER
        •	Created website front-end using HTML/CSS, integrated API with JavaScript to fetch pet adoption data in Minnesota. Enabled users to find available pets by utilizing API tokens for data extraction.
        FLASHCARD DATABASE FOR STUDENTS |
        FULL STACK DEVELOPER
        •	Engineered interactive educational platform using HTML, CSS, and Handlebars integrated with Express, MySQL backend. Enabled users to practice custom flashcards for personalized studying.
        WEATHER FORECASTING| https://shahanameen.github.io/Weather-API/
        FULL STACK DEVELOPER
        •	Developed webpage using HTML, CSS, and JavaScript to fetch and display real-time global weather forecasts from an API. Enabled users to access temperature, city names, wind speeds, and humidity for any location.

        EXPERIENCE
        HILTON MAYO CLINIC AREA 			                                                                Rochester, MN
        LEADERSHIP IN DEVELOPMENT				                 April 2023 - September 2023
        •	Experienced in OnQ software property management, Microsoft, and Google programs such as PowerPoint, word document, and Excel.
        •	Proficiently managed phone and email reservations using reservation management software.

        AMEEN RESTAURANTS INC                                                                                             Woodbury, MN
        TEAM LEAD MANAGER                                                                                August 2022 - April 2023
        •	Maintain and update the POS system, troubleshooting technical issues promptly to guarantee uninterrupted service.
        •	Plan, organize, and manage reservations, inventory, and digital marketing.
        •	Performed scheduling, audited payroll, kept track of inventory, and budgeted expenses.

        SKILLS
        JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL, Express, React, Node, Handlebars, jQuery, Bootstrap.


      </p>


    </div>
  )
}
export default Resume