interface PortfolioSection {
  id: string
  title: string
  url: string
  content: string
}

export const updatedPortfolioSections: PortfolioSection[] = [
  {
    id: 'about',
    title: 'About Me',
    url: 'http://www.sharpxp.com/about',
    content: `
      <div class="ie7-page">
        <div class="portfolio-shell">
          <div class="page-header page-header-modern">
            <span class="eyebrow">Hello from Tuscaloosa</span>
            <h1>Aaron Sharp</h1>
            <p class="subtitle">Robotics researcher, software engineer, and assistive-technology founder</p>
          </div>

          <section class="hero-card about-hero">
            <img class="about-portrait" src="/images/gt-moga-poster.jpg" width="1440" height="1920" decoding="async" fetchpriority="high" alt="Aaron Sharp beside the MOGA research poster at Georgia Tech" />
            <div class="hero-copy">
              <p class="hero-lead">I build intelligent systems that have to work outside a clean demo: planetary rovers on loose terrain, microgravity research hardware, and affordable mobility products designed with the people who use them.</p>
              <p>I study Computer Science at the University of Alabama with minors in Robotics and Mathematics. I am a Co-op Software Engineer at Adtran, an NSF-funded researcher in Dr. Hongsheng He's Autonomous Robotics Laboratory, President and TOM Fellow for TOM UA, and Co-Founder and COO of Motion+ LLC.</p>
              <div class="action-row">
                <button class="portfolio-action primary" data-open-external="https://motionplusllc.com">Visit Motion+</button>
                <button class="portfolio-action" data-open-external="https://github.com/asharpie">View GitHub</button>
                <button class="portfolio-action" data-open-external="https://www.linkedin.com/in/AaronSharp05">Open LinkedIn</button>
              </div>
            </div>
          </section>

          <div class="stat-grid" aria-label="Quick facts">
            <div class="stat-card"><span class="stat-value">3.62</span><span class="stat-label">Overall GPA</span></div>
            <div class="stat-card"><span class="stat-value">3.82</span><span class="stat-label">Major GPA</span></div>
            <div class="stat-card"><span class="stat-value">May 2028</span><span class="stat-label">Expected graduation</span></div>
            <div class="stat-card"><span class="stat-value">$37.6K</span><span class="stat-label">Motion+ non-dilutive funding</span></div>
          </div>

          <div class="section-heading"><span>What I am working on</span></div>
          <div class="feature-grid">
            <article class="feature-card">
              <span class="card-kicker">Robotics</span>
              <h2>Hybrid control on deformable terrain</h2>
              <p>Combining LQR with PPO reinforcement learning for autonomous path following on granular, planetary-analog surfaces.</p>
            </article>
            <article class="feature-card">
              <span class="card-kicker">Assistive technology</span>
              <h2>Retrofit, do not replace</h2>
              <p>Building modular upgrades for wheelchairs and prosthetics through Motion+ and TOM UA.</p>
            </article>
            <article class="feature-card">
              <span class="card-kicker">Embedded systems</span>
              <h2>Hardware that can run unattended</h2>
              <p>Developing instrumentation, safety interlocks, motor control, and automated test systems at Adtran and Georgia Tech.</p>
            </article>
          </div>
        </div>
      </div>`,
  },
  {
    id: 'experience',
    title: 'Experience',
    url: 'http://www.sharpxp.com/experience',
    content: `
      <div class="ie7-page">
        <div class="portfolio-shell">
          <div class="page-header page-header-modern">
            <span class="eyebrow">Professional work</span>
            <h1>Experience</h1>
            <p class="subtitle">Embedded software, hardware validation, and technical mentorship</p>
          </div>

          <div class="timeline">
            <article class="entry-card timeline-item">
              <div class="entry-top">
                <div><span class="card-kicker">Adtran Inc. · Huntsville, Alabama</span><h2>Co-op Software Engineer</h2></div>
                <span class="date-pill">Jan. 2025 - Present</span>
              </div>
              <p class="entry-summary">Developing production test infrastructure across embedded firmware, software automation, and custom hardware.</p>
              <ul>
                <li>Developed Python and C++ tests for the Service Delivery Gateway test suite and debugged more than 20 faulty units.</li>
                <li>Designing a custom PCB test board for the NXP MCXN947 microcontroller platform.</li>
                <li>Developing an automated thermal and flow testing system with dual differential-pressure sensing, CSV logging, and an embedded web interface.</li>
              </ul>
              <div class="tag-list"><span>Python</span><span>C++</span><span>Embedded C</span><span>PCB design</span><span>FreeRTOS</span><span>Networking</span></div>
            </article>

            <article class="entry-card timeline-item">
              <div class="entry-top">
                <div><span class="card-kicker">IoT Factory Pty Ltd. · Remote, Australia</span><h2>Software Engineering Intern</h2></div>
                <span class="date-pill">May 2024 - Aug. 2024</span>
              </div>
              <p class="entry-summary">Worked inside an established embedded codebase supporting modular IoT devices for autonomous agriculture and environmental monitoring.</p>
              <ul>
                <li>Contributed to sensor integration and real-time data acquisition for IoT-enabled devices.</li>
                <li>Built experience navigating unfamiliar embedded systems under direct mentorship from the company's CEO.</li>
              </ul>
              <div class="tag-list"><span>IoT</span><span>Embedded systems</span><span>Sensor integration</span></div>
            </article>

            <article class="entry-card timeline-item">
              <div class="entry-top">
                <div><span class="card-kicker">University of Mississippi</span><h2>Teaching Assistant, Computer Science I/II</h2></div>
                <span class="date-pill">Aug. 2024 - Dec. 2024</span>
              </div>
              <p class="entry-summary">Supervised lab sections of up to 40 students in C and Java, answered technical questions, proctored practical evaluations, and graded examinations.</p>
              <div class="tag-list"><span>C</span><span>Java</span><span>Teaching</span><span>Mentorship</span></div>
            </article>
          </div>
        </div>
      </div>`,
  },
  {
    id: 'research',
    title: 'Research',
    url: 'http://www.sharpxp.com/research',
    content: `
      <div class="ie7-page">
        <div class="portfolio-shell">
          <div class="page-header page-header-modern">
            <span class="eyebrow">Research</span>
            <h1>Robotics, controls, and experimental systems</h1>
            <p class="subtitle">From microgravity oxygen generation to autonomous rovers on granular terrain</p>
          </div>

          <article class="entry-card research-feature">
            <div class="entry-top">
              <div><span class="card-kicker">NSF SURE REU · Georgia Institute of Technology</span><h2>MOGA ground-test platform</h2></div>
              <span class="date-pill">May 2026 - Aug. 2026</span>
            </div>
            <p class="entry-summary">In Dr. Alvaro Romero-Calvo's Low Gravity Science and Technology Lab, I designed and built the electrical, control, and safety systems for MGT, the ground-test platform for the NASA NIAC Phase II Magnetohydrodynamic Oxygen Generation Assembly.</p>
            <div class="research-metric-row">
              <div><strong>0.02°</strong><span>verified angular indexing</span></div>
              <div><strong>12</strong><span>safety-monitored sensor channels</span></div>
              <div><strong>10 Hz</strong><span>real-time interlock evaluation</span></div>
              <div><strong>30 days</strong><span>target endurance campaign</span></div>
            </div>
            <ul>
              <li>Specified power distribution across a 75 VDC servo bus, 24/12/5 V instrument rails, and slip-ring delivery to the rotating frame.</li>
              <li>Developed closed-loop motor control in C++ behind an HTTP control layer and built a configurable block-based experiment sequencer.</li>
              <li>Integrated LabJack DAQ hardware, thermocouples, pressure and flow transmitters, hydrogen detection, InfluxDB, and Grafana.</li>
              <li>Created a graduated safety response system with a hardware watchdog and independent motor deadman.</li>
            </ul>
            <div class="gallery-grid gallery-featured">
              <figure class="photo-card photo-wide"><img src="/images/gt-moga-team.jpg" width="5712" height="4284" loading="lazy" decoding="async" alt="Aaron Sharp and a collaborator beside the MOGA ground-test platform at Georgia Tech" /><figcaption>Working MGT platform in the LGST Lab</figcaption></figure>
              <figure class="photo-card"><img src="/images/gt-moga-build.jpg" width="4284" height="5712" loading="lazy" decoding="async" alt="Aaron Sharp wiring the MOGA ground-test platform" /><figcaption>Electrical and control integration</figcaption></figure>
              <figure class="photo-card"><img src="/images/gt-moga-poster.jpg" width="1440" height="1920" loading="lazy" decoding="async" alt="Aaron Sharp presenting the MOGA research poster at Georgia Tech" /><figcaption>SURE REU symposium presentation</figcaption></figure>
              <figure class="photo-card"><img src="/images/gt-moga-system.jpg" width="120" height="160" loading="lazy" decoding="async" alt="Close view of the MOGA experimental system" /><figcaption>MOGA experimental hardware</figcaption></figure>
            </div>
            <div class="tag-list"><span>C++</span><span>Python</span><span>LabJack</span><span>InfluxDB</span><span>Grafana</span><span>Motor control</span><span>Safety systems</span></div>
          </article>

          <article class="entry-card">
            <div class="entry-top">
              <div><span class="card-kicker">NSF CISE REU · University of Alabama</span><h2>Hybrid LQR + PPO rover control</h2></div>
              <span class="date-pill">Oct. 2024 - Present</span>
            </div>
            <p class="entry-summary">Contributing to an NSF RII Track-4 project in Dr. Hongsheng He's Autonomous Robotics Laboratory, in collaboration with NASA JPL.</p>
            <ul>
              <li>Designing a hybrid controller that combines Linear Quadratic Regulation with PPO reinforcement learning for path following on deformable terrain.</li>
              <li>Built physics-based simulation and procedural terrain tooling and evaluate controllers across more than 2,000 episodes per condition.</li>
              <li>Lead the software implementation, experimental campaign, statistical analysis, and conclusion development under high-level mentorship.</li>
              <li>Selected for the NSF CISE REU Student Funding Program for the 2026-2027 academic year.</li>
            </ul>
            <div class="tag-list"><span>Python</span><span>PyBullet</span><span>PyTorch</span><span>Stable Baselines3</span><span>LQR</span><span>PPO</span></div>
          </article>

          <div class="feature-grid two-column research-history">
            <article class="feature-card"><span class="card-kicker">Laing Lab · Summer 2025</span><h2>Integrated optogenetics system</h2><p>Re-engineered a hazardous prototype into a safe Raspberry Pi and touchscreen-controlled research instrument with a dual-sided SolidWorks enclosure, four functional ports, and optimized high-current vaporizer circuits.</p></article>
            <article class="feature-card"><span class="card-kicker">Sharp Lab · 2023-2024</span><h2>Automated lab instrumentation</h2><p>Developed a user-facing control and logging application coordinating a Valco 12-port switching valve with a Legato syringe pump.</p></article>
          </div>

          <div class="section-heading"><span>Selected publications and presentations</span></div>
          <div class="publication-list">
            <div class="publication-item"><span class="publication-type">Poster · 2026</span><strong>A magnetohydrodynamic oxygen generation assembly can save mass on mission to Mars</strong><p>SURE REU Symposium, Georgia Institute of Technology</p></div>
            <div class="publication-item"><span class="publication-type">Poster · 2026</span><strong>Stochastic perturbations improve classical path tracking control on rough terrain</strong><p>Undergraduate Research and Creative Activity Conference, University of Alabama</p></div>
            <div class="publication-item"><span class="publication-type">In preparation</span><strong>A hybrid LQR-PPO control framework for path following of skid-steered rovers on granular terrain</strong><p>Target: IEEE Robotics and Automation Letters</p></div>
          </div>
        </div>
      </div>`,
  },
  {
    id: 'awards',
    title: 'Awards',
    url: 'http://www.sharpxp.com/awards',
    content: `
      <div class="ie7-page">
        <div class="portfolio-shell">
          <div class="page-header page-header-modern">
            <span class="eyebrow">Recognition</span>
            <h1>Selected awards and honors</h1>
            <p class="subtitle">Research, entrepreneurship, engineering, and service</p>
          </div>

          <section class="hero-card award-hero">
            <img src="/images/motionplus-sloss-tech.jpg" width="1055" height="1406" loading="lazy" decoding="async" alt="Motion+ team receiving a ten-thousand-dollar second-place award at Sloss Tech 2026" />
            <div class="hero-copy"><span class="card-kicker">June 2026</span><h2>2nd Place · Innovate Alabama Student Innovation Competition</h2><p>Motion+ earned $10,000 at Sloss Tech 2026 for its portfolio of affordable assistive-technology products.</p></div>
          </section>

          <div class="award-grid">
            <article class="award-card featured"><span class="award-year">2026</span><h2>1st Place in Alabama Power Innovation</h2><p>Aldag Pitch Competition · $5,000</p></article>
            <article class="award-card featured"><span class="award-year">2026</span><h2>Four Big Ideas placements</h2><p>1st U-Clamp · 2nd Wrapid · 3rd Shin Sheath · 4th MechChair · $11,500 total</p></article>
            <article class="award-card"><span class="award-year">2026</span><h2>CS Departmental UPE Outstanding Undergraduate Award</h2><p>University of Alabama</p></article>
            <article class="award-card"><span class="award-year">2026</span><h2>Outstanding Transfer Student Award</h2><p>University of Alabama</p></article>
            <article class="award-card"><span class="award-year">2026</span><h2>1st Place in Social Innovation</h2><p>UA Innovate Hackathon · CocaCousin · $1,000</p></article>
            <article class="award-card"><span class="award-year">2025</span><h2>Goldwater Scholarship Nominee</h2><p>First transfer student nominee in University of Alabama history</p></article>
            <article class="award-card"><span class="award-year">2025</span><h2>TOM Global Innovation Challenge</h2><p>Grand Prize and PrintLab Prize · $3,000</p></article>
            <article class="award-card"><span class="award-year">2025</span><h2>NASA Lunabotics</h2><p>1st Project Management · 2nd Autonomy · 3rd Berm Construction · two honorable mentions</p></article>
            <article class="award-card"><span class="award-year">2025</span><h2>UA River Pitch</h2><p>1st Zero Gravity Rig · 2nd WheelCover · $1,250</p></article>
            <article class="award-card"><span class="award-year">2026</span><h2>Student success scholarships</h2><p>Lucille Ryals Thompson · $1,500 · Keith and Keri Donald IT Entrepreneurship · $800</p></article>
          </div>
        </div>
      </div>`,
  },
  {
    id: 'education',
    title: 'Education',
    url: 'http://www.sharpxp.com/education',
    content: `
      <div class="ie7-page">
        <div class="portfolio-shell">
          <div class="page-header page-header-modern">
            <span class="eyebrow">Education</span>
            <h1>Computer science, robotics, and mathematics</h1>
          </div>

          <article class="entry-card education-card primary-education">
            <div class="entry-top"><div><span class="card-kicker">Tuscaloosa, Alabama</span><h2>University of Alabama</h2></div><span class="date-pill">Expected May 2028</span></div>
            <p class="degree-line">Bachelor of Science in Computer Science</p>
            <p>Minors in Robotics and Mathematics · GPA 3.62 · Major GPA 3.82</p>
            <p class="entry-summary">My work at UA centers on autonomous robotics, embedded systems, and human-centered engineering. I am the first transfer student in university history nominated for the Goldwater Scholarship.</p>
            <div class="course-grid">
              <div class="course">Data Structures and Algorithms</div><div class="course">Software Design and Engineering</div><div class="course">Computer Networking and Operating Systems</div><div class="course">Digital Logic</div><div class="course">Microcomputers</div><div class="course">Linear Algebra</div><div class="course">Engineering Statistics</div><div class="course">Robotics and Control</div>
            </div>
          </article>

          <article class="entry-card education-card">
            <div class="entry-top"><div><span class="card-kicker">Oxford, Mississippi</span><h2>University of Mississippi</h2></div><span class="date-pill">Jan. 2023 - May 2024</span></div>
            <p>Coursework toward a Bachelor of Science in Computer Science · GPA 3.43</p>
            <p class="entry-summary">Built my early research and leadership foundation through the Sharp and Laing labs, teaching assistant work, and the IEEE and Robotics Club.</p>
          </article>
        </div>
      </div>`,
  },
  {
    id: 'projects',
    title: 'Projects',
    url: 'http://www.sharpxp.com/projects',
    content: `
      <div class="ie7-page">
        <div class="portfolio-shell">
          <div class="page-header page-header-modern">
            <span class="eyebrow">Selected work</span>
            <h1>Projects</h1>
            <p class="subtitle">Assistive technology, autonomous systems, and software with personality</p>
          </div>

          <div class="project-grid">
            <article class="project-card project-card-wide">
              <img src="/images/motionplus-sloss-tech.jpg" width="1055" height="1406" loading="lazy" decoding="async" alt="Motion+ team at Sloss Tech 2026" />
              <div><span class="card-kicker">Motion+ LLC</span><h2>Four products, one retrofit-first mission</h2><p>Co-founded a company commercializing U-Clamp, Wrapid, Shin Sheath, and MechChair. The portfolio has earned $37,600 in non-dilutive funding and generated $1,400 in first-year product sales.</p><button class="text-link" data-open-external="https://motionplusllc.com">Explore Motion+ products</button></div>
            </article>

            <article class="project-card"><span class="project-icon">♿</span><span class="card-kicker">U.S. Provisional Patent 64/089,974</span><h2>U-Clamp</h2><p>A universal wheelchair-to-scooter coupling adapter with a quick-release padded clamp and no loose parts during daily use.</p><div class="tag-list"><span>Mechanical design</span><span>3D printing</span><span>User validation</span></div></article>
            <article class="project-card"><span class="project-icon">◎</span><span class="card-kicker">U.S. Provisional Patent 64/025,540</span><h2>Wrapid</h2><p>A removable, tool-free all-terrain wheel cover for manual wheelchairs using an embedded magnetic closure.</p><div class="tag-list"><span>TPU</span><span>Parametric CAD</span><span>Rapid prototyping</span></div></article>
            <article class="project-card"><span class="project-icon">🤖</span><span class="card-kicker">NSF-funded research</span><h2>Leo Rover hybrid controller</h2><p>A simulation and evaluation pipeline comparing LQR, PPO, and hybrid residual control on deformable terrain.</p><div class="tag-list"><span>Python</span><span>PPO</span><span>LQR</span><span>Physics simulation</span></div></article>
            <article class="project-card"><span class="project-icon">🌐</span><span class="card-kicker">React + TypeScript</span><h2>SharpXP</h2><p>This interactive portfolio: a draggable Windows XP desktop with a browser, media players, Outlook Express, games, a virtual file system, and a few carefully placed jokes.</p><button class="text-link" data-open-external="https://github.com/asharpie/SharpXP">View source on GitHub</button></article>
            <article class="project-card"><span class="project-icon">🥤</span><span class="card-kicker">UA Innovate Hackathon</span><h2>CocaCousin</h2><p>An AI-powered brand protection platform that won first place in Social Innovation at a Coca-Cola sponsored hackathon.</p><div class="tag-list"><span>AI</span><span>Brand protection</span><span>Rapid prototyping</span></div></article>
            <article class="project-card"><span class="project-icon">🎯</span><span class="card-kicker">UA River Pitch winner</span><h2>Zero Gravity Rig</h2><p>An assistive clay-target shooting device designed to support the firearm's weight for users with limited upper-body mobility.</p><div class="tag-list"><span>SolidWorks</span><span>Assistive design</span><span>Prototyping</span></div></article>
          </div>

          <div class="section-heading"><span>Intellectual property</span></div>
          <div class="callout"><strong>Four provisional patents</strong><p>I oversee Motion+'s IP strategy across its four-product portfolio. U-Clamp and Wrapid are also the subject of manuscripts in preparation for <em>Disability and Rehabilitation: Assistive Technology</em>.</p></div>
        </div>
      </div>`,
  },
  {
    id: 'motionplus',
    title: 'Motion+ LLC',
    url: 'http://www.sharpxp.com/motionplus',
    content: `
      <div class="ie7-page motion-page">
        <div class="portfolio-shell">
          <section class="motion-hero">
            <div class="motion-wordmark">Motion<span>+</span></div>
            <p class="motion-tagline">Retrofit, don't replace.</p>
            <p>Motion+ is an assistive-technology company building affordable, modular upgrades for the wheelchairs and prosthetics people already own.</p>
            <button class="portfolio-action motion-button" data-open-external="https://motionplusllc.com">Visit motionplusllc.com</button>
          </section>

          <div class="stat-grid motion-stats">
            <div class="stat-card"><span class="stat-value">$37.6K</span><span class="stat-label">Non-dilutive funding</span></div>
            <div class="stat-card"><span class="stat-value">4</span><span class="stat-label">Products</span></div>
            <div class="stat-card"><span class="stat-value">4</span><span class="stat-label">Provisional patents</span></div>
            <div class="stat-card"><span class="stat-value">$1.4K</span><span class="stat-label">First-year sales</span></div>
          </div>

          <figure class="photo-card motion-team-photo"><img src="/images/motionplus-sloss-tech.jpg" width="1055" height="1406" loading="lazy" decoding="async" alt="Motion+ team receiving the Sloss Tech 2026 second-place award" /><figcaption>Second place and $10,000 at the Innovate Alabama Student Innovation Competition, Sloss Tech 2026</figcaption></figure>

          <div class="motion-product-grid">
            <article><span>01</span><h2>U-Clamp</h2><p>Connect a manual wheelchair to a motorized scooter through a fast, padded cam-clamp mechanism.</p></article>
            <article><span>02</span><h2>Wrapid</h2><p>Give manual wheelchair wheels removable all-terrain traction with a magnetic, tool-free cover.</p></article>
            <article><span>03</span><h2>Shin Sheath</h2><p>Protect and personalize a prosthesis with a custom-fit parametric 3D-printed cover.</p></article>
            <article><span>04</span><h2>MechChair</h2><p>Add mechanical advantage to a manual wheelchair without batteries or a complete replacement.</p></article>
          </div>
        </div>
      </div>`,
  },
  {
    id: 'extracurriculars',
    title: 'Leadership',
    url: 'http://www.sharpxp.com/leadership',
    content: `
      <div class="ie7-page">
        <div class="portfolio-shell">
          <div class="page-header page-header-modern">
            <span class="eyebrow">Leadership and service</span>
            <h1>Building teams around useful work</h1>
          </div>

          <div class="timeline">
            <article class="entry-card timeline-item"><div class="entry-top"><div><span class="card-kicker">Motion+ LLC</span><h2>Co-Founder and Chief Operating Officer</h2></div><span class="date-pill">Jan. 2026 - Present</span></div><p class="entry-summary">Oversee operations across prototype development, user validation with UA Adapted Athletics, intellectual property, and commercialization sequencing for four assistive-technology products.</p><button class="text-link" data-open-external="https://motionplusllc.com">Visit Motion+</button></article>
            <article class="entry-card timeline-item"><div class="entry-top"><div><span class="card-kicker">University of Alabama Tikkun Olam Makers</span><h2>President and TOM Fellow</h2></div><span class="date-pill">May 2026 - Present</span></div><p class="entry-summary">Lead chapter growth, community partnerships, and the development and distribution of open-source assistive technologies. Selected for TOM's nine-month international fellowship program.</p></article>
            <article class="entry-card timeline-item"><div class="entry-top"><div><span class="card-kicker">UA Astrobotics</span><h2>Software Developer</h2></div><span class="date-pill">Aug. 2024 - Dec. 2025</span></div><p class="entry-summary">Contributed to SLAM and AprilTag localization for the 2025 NASA Lunabotics rover and supported youth robotics outreach across Alabama.</p></article>
            <article class="entry-card timeline-item"><div class="entry-top"><div><span class="card-kicker">University of Mississippi IEEE and Robotics Club</span><h2>Founding Member, Co-President, and Head Software Engineer</h2></div><span class="date-pill">Sep. 2023 - May 2024</span></div><p class="entry-summary">Helped revive the organization after COVID, led membership outreach, and spearheaded the club's omnidirectional robot for the 2024 IEEE Southeastern Conference.</p></article>
          </div>
        </div>
      </div>`,
  },
]
