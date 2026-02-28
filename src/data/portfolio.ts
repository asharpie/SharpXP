export interface PortfolioSection {
  id: string
  title: string
  url: string
  content: string
}

export const GOOGLE_HOME_HTML = `
<div class="google-home">
  <div class="google-logo-area">
    <span class="g-blue">G</span><span class="g-red">o</span><span class="g-yellow">o</span><span class="g-blue">g</span><span class="g-green">l</span><span class="g-red">e</span>
  </div>
  <form class="google-search-form" onsubmit="return false;">
    <input class="google-search-input" id="googleSearchInput" type="text" autocomplete="off" placeholder="" />
    <div class="google-btns">
      <button type="button" class="google-btn" id="googleSearchBtn">Google Search</button>
      <button type="button" class="google-btn" id="googleLuckyBtn">I'm Feeling Lucky</button>
    </div>
  </form>
  <div class="google-footer">
    <span style="color:#666;font-size:12px;">Tip: Use the &#9733; Favorites bar above to browse Aaron's portfolio!</span>
  </div>
</div>
`

export const portfolioSections: PortfolioSection[] = [
  {
    id: 'about',
    title: 'About Me',
    url: 'http://www.sharpxp.com/about',
    content: `
      <div class="ie7-page">
        <div class="page-header"><h1>Aaron Sharp</h1><p class="subtitle">Computer Science &amp; Robotics · University of Alabama</p></div>
        <div class="about-text">
          <p>I'm an undergraduate researcher, software engineer, and maker passionate about developing intelligent systems that operate reliably in uncertain, dynamic environments, whether that's a rover navigating Martian terrain, an assistive device helping someone with a disability, or an agricultural robot adapting to changing conditions.</p>
          <p>Currently a junior at the University of Alabama pursuing a B.S. in Computer Science with minors in Robotics and Mathematics. I work in Dr. Hongsheng He's Autonomous Robotics Laboratory on an NSF-funded multi-robot cooperation project in collaboration with NASA JPL, and I'm a Co-op Software Engineer at Adtran, Inc.</p>
          <p>Outside the lab, I serve as Secretary &amp; Head of Software Engineering for Tikkun Olam Makers (TOM) at UA, where we build open-source assistive technologies for people with disabilities. Our team won the 2025 TOM Global Innovation Challenge Grand Prize.</p>
          <div class="quick-stats">
            <h3>Quick Stats</h3>
            <table class="stats-table"><tr><td><strong>GPA:</strong></td><td>3.57 Overall / 3.70 Major</td></tr><tr><td><strong>Major:</strong></td><td>Computer Science</td></tr><tr><td><strong>Minors:</strong></td><td>Robotics, Mathematics</td></tr><tr><td><strong>Graduation:</strong></td><td>December 2027</td></tr><tr><td><strong>Location:</strong></td><td>Tuscaloosa, AL</td></tr></table>
          </div>
        </div>
      </div>`,
  },
  {
    id: 'experience',
    title: 'Experience',
    url: 'http://www.sharpxp.com/experience',
    content: `
      <div class="ie7-page"><div class="page-header"><h1>Experience</h1><p class="subtitle">Professional Roles</p></div>

        <div class="exp-entry">
          <div class="exp-header"><h2>Co-op Software Engineer &mdash; Term 2: Thermal &amp; Flow Testing</h2><span class="exp-date">Aug. 2025 &ndash; Present</span></div>
          <h3>Adtran Inc. · Huntsville, AL</h3>
          <p class="exp-summary">Returned for a second co-op term focused on embedded hardware validation, designing custom test infrastructure for Adtran's networking equipment.</p>
          <ul>
            <li>Designing a custom PCB testing board for the NXP MCXN947 microcontroller, responsible for schematic design, component selection, and board layout to support automated hardware validation</li>
            <li>Developing automated thermal and flow testing pipelines using the NXP microcontroller solution, enabling continuous hardware validation without manual intervention</li>
            <li>Building embedded firmware to orchestrate sensor data acquisition, thermal cycling, and airflow measurements across multiple product lines</li>
            <li>Collaborated with firmware and hardware teams to root-cause intermittent failures in production networking equipment</li>
          </ul>
          <div class="media-placeholders" style="margin:12px 0;">
            <video controls style="max-width:480px;width:100%;border-radius:4px;"><source src="/images/adtran-flow-testing.mp4" type="video/mp4">Embedded flow testing simulation demo</video>
          </div>
          <div class="exp-tech">Embedded C · PCB Design · NXP MCXN947 · Python · Hardware Testing · Thermal Analysis</div>
        </div>

        <div class="exp-entry">
          <div class="exp-header"><h2>Co-op Software Engineer &mdash; Term 1: Service Delivery Gateways</h2><span class="exp-date">Jan. &ndash; Aug. 2025</span></div>
          <h3>Adtran Inc. · Huntsville, AL</h3>
          <p class="exp-summary">First co-op term working on Adtran's software-defined networking (SDG) infrastructure, contributing to automated testing and debugging efforts.</p>
          <ul>
            <li>Developed and maintained automated software tests for the SDG test suite using Python &amp; C++, systematically identifying and debugging over 20 faulty SDGs across multiple product lines</li>
            <li>Collaborated with firmware and hardware teams to root-cause intermittent failures in production networking equipment</li>
            <li>Participated in Adtran's Corporate Hackathon, placing 3rd with a cross-functional team project</li>
          </ul>
          <div class="exp-tech">Python · C++ · Embedded Systems · Networking · SDG Infrastructure</div>
        </div>

        <div class="exp-entry">
          <div class="exp-header"><h2>Teaching Assistant, CS I/II</h2><span class="exp-date">Jan. &ndash; Dec. 2024</span></div>
          <h3>University of Mississippi</h3>
          <p class="exp-summary">Served as a teaching assistant for introductory computer science courses, helping students build strong programming fundamentals.</p>
          <ul>
            <li>Supervised weekly lab sections of up to 40 students, providing debugging assistance and conceptual explanations for C++ programming exercises</li>
            <li>Proctored practical exams and programming evaluations, ensuring fair and consistent assessment across multiple sections</li>
            <li>Graded exams, labs, and assignments with detailed feedback to support student learning progression</li>
          </ul>
          <div class="exp-tech">C++ · Teaching · Mentoring</div>
        </div>

        <div class="exp-entry">
          <div class="exp-header"><h2>Software Engineer Intern</h2><span class="exp-date">May &ndash; Aug. 2024</span></div>
          <h3>IoT Factory Pty Ltd. · Australia (Remote)</h3>
          <p class="exp-summary">Worked remotely with an Australian IoT startup developing modular sensor networks for precision agriculture and environmental monitoring.</p>
          <ul>
            <li>Contributed to firmware and software for IoT-enabled modular devices designed for autonomous agricultural monitoring and environmental sensing</li>
            <li>Worked across time zones with a distributed international team, gaining experience with remote collaboration tools and async communication practices</li>
            <li>Participated in system architecture discussions for scalable sensor mesh networks with edge computing capabilities</li>
          </ul>
          <div class="exp-tech">IoT · Embedded Systems · Python · Remote Collaboration</div>
        </div>
      </div>`,
  },
  {
    id: 'research',
    title: 'Research',
    url: 'http://www.sharpxp.com/research',
    content: `
      <div class="ie7-page"><div class="page-header"><h1>Research</h1><p class="subtitle">Academic Research Positions</p></div>

        <div class="exp-entry">
          <div class="exp-header"><h2>Student Research Assistant</h2><span class="exp-date">Oct. 2024 &ndash; Present</span></div>
          <h3>Dr. Hongsheng He &middot; Autonomous Robotics Lab &middot; University of Alabama</h3>
          <p class="exp-summary">Contributing to an NSF RII Track-4 project in collaboration with NASA JPL, focused on autonomous rover navigation over dynamic, deformable terrain that directly addresses challenges faced by real planetary exploration missions.</p>
          <ul>
            <li>Designed and implemented a hybrid LQR + PPO control architecture combining classical control stability with deep reinforcement learning adaptability for skid-steered rovers on granular surfaces</li>
            <li>Built a comprehensive PyBullet + TensorFlow + OpenAI Gym simulation environment with procedurally generated terrain featuring tunable roughness and friction parameters</li>
            <li>Implemented quintic polynomial path generation for smooth, physically realizable reference trajectories and developed waypoint-based reward shaping to guide RL training convergence</li>
            <li>Achieved 48% reduction in mean cross-track error and 3.7% improvement in success rate vs. pure LQR baseline (both statistically significant, p &lt; 0.001)</li>
            <li>Currently preparing for physical sandpit testing and designing fractional factorial experiments for systematic hyperparameter optimization</li>
          </ul>
          <div class="media-placeholders" style="display:flex;gap:16px;margin:12px 0;">
            <video controls style="flex:1;max-width:50%;border-radius:4px;"><source src="/images/Hybrid%20Demo%202-9-26%20(1).mp4" type="video/mp4">Simulation environment &amp; moving rover</video>
            <img src="/images/LQR%20vs%20Hybrid%20box%20plot%20image.png" alt="LQR vs Hybrid box plot results" style="flex:1;max-width:50%;border-radius:4px;object-fit:contain;" onerror="this.style.display='none'" />
          </div>
          <div class="exp-tech">Python &middot; PyBullet &middot; TensorFlow &middot; PyTorch &middot; Stable Baselines3 &middot; OpenAI Gym &middot; MATLAB &middot; LQR &middot; PPO</div>
        </div>

        <div class="exp-entry">
          <div class="exp-header"><h2>Student Research Assistant</h2><span class="exp-date">May &ndash; Aug. 2025</span></div>
          <h3>Dr. Brenton Laing &middot; University of Mississippi</h3>
          <p class="exp-summary">Redesigned a hazardous research prototype into a safe, user-friendly optogenetics system for neuroscience experiments, transforming an unusable prototype into a production-ready research instrument.</p>
          <ul>
            <li>Re-engineered the entire system architecture: replaced exposed high-voltage components with properly shielded circuits, integrated safety interlocks, and designed a sealed 3D-printed SolidWorks enclosure with proper ventilation and cable routing</li>
            <li>Developed a Raspberry Pi-based control system with a capacitive touchscreen GUI, enabling researchers to configure light stimulation parameters (wavelength, intensity, pulse timing, on/off patterns) without any programming knowledge</li>
            <li>Optimized high-current vaporizer circuits to operate within safe current limits while maintaining the precise thermal profiles required for optogenetic stimulation</li>
            <li>Designed modular internal layout so individual components (power supply, Pi, driver boards) can be serviced independently without full disassembly</li>
            <li>Documented the complete system for lab handoff, including assembly guides, wiring diagrams, software documentation, and safety protocols to ensure long-term maintainability after departure</li>
          </ul>
          <div class="media-placeholders" style="display:flex;gap:16px;margin:12px 0;">
            <video controls style="flex:1;max-width:50%;border-radius:4px;"><source src="/images/Dr.%20Laing%20Research%20Video.mp4" type="video/mp4">Demonstration of the redesigned optogenetics system</video>
            <img src="/images/Dr.%20Laing%20Research%20Picture.JPG" alt="Dr. Laing Research - Optogenetics System" style="flex:1;max-width:50%;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
          </div>
          <div class="exp-tech">Raspberry Pi &middot; Python &middot; SolidWorks &middot; 3D Printing &middot; Circuit Design &middot; Touchscreen GUI</div>
        </div>

        <div class="exp-entry">
          <div class="exp-header"><h2>Student Research Assistant</h2><span class="exp-date">Dec. 2023 &ndash; May 2024</span></div>
          <h3>Dr. Sandeep Misra &middot; University of Mississippi</h3>
          <p class="exp-summary">Built custom control software for a chemistry lab's automated sample preparation system, enabling precise coordination between analytical instruments.</p>
          <ul>
            <li>Developed custom Python software coordinating a Valco multi-port switching valve with a Legato programmable syringe pump via serial communication protocols</li>
            <li>Designed a user-friendly front-end interface allowing researchers to define multi-step injection sequences with comprehensive data logging for experiment traceability</li>
            <li>Reduced manual sample preparation time by automating complex multi-valve switching sequences that previously required continuous researcher oversight</li>
          </ul>
          <div class="media-placeholders" style="margin:12px 0;">
            <video controls style="max-width:480px;width:100%;border-radius:4px;"><source src="/images/Dr.%20Misra%20Research%20Video.mp4" type="video/mp4">Demonstration of the control infrastructure working</video>
          </div>
          <div class="exp-tech">Python &middot; Serial Communication &middot; Lab Automation &middot; GUI Development</div>
        </div>

        <div class="research-detail" style="margin-top:24px;border-top:2px solid #ccc;padding-top:16px;">
          <h2 style="color:#003366;">Research Deep Dive: Autonomous Path Following</h2>
          <p class="subtitle" style="margin-bottom:12px;">NSF RII Track-4 &middot; Autonomous Robotics Laboratory &middot; University of Alabama</p>
          <h3>The Problem</h3><p>Planetary rovers must contend with extreme uncertainty, communication delays of up to twenty minutes, and highly deformable terrain. Classical control methods (PID, LQR, MPC) struggle with nonlinear wheel-terrain interactions. Pure deep RL requires extensive training and exhibits unstable behavior outside training distribution.</p>
          <h3>My Approach: Hybrid LQR + PPO</h3><p>I designed a hybrid controller augmenting a Linear Quadratic Regulator with a residual policy trained via Proximal Policy Optimization. The LQR provides baseline stability while PPO learns corrective actions for terrain disturbances, constrained to prevent fighting the baseline controller.</p><p>My framework targets <strong>skid-steered rovers on granular, deformable surfaces</strong> where wheel slip and sinkage are prevalent, addressing a literature gap.</p>
          <h3>Simulation</h3><p>Physics-based PyBullet simulation with procedurally generated terrain. Key parameters: <strong>Terrain Intensity</strong> (0&ndash;100%, height variation) and <strong>Friction Intensity</strong> (0&ndash;100%, surface friction).</p>
          <h3>Results</h3><div class="results-highlight"><table class="stats-table"><tr><th>Metric</th><th>Pure LQR</th><th>Hybrid LQR+PPO</th><th>Improvement</th></tr><tr><td>Mean CTE</td><td>0.1763 m</td><td>0.0917 m</td><td class="highlight">48.0% &#8595; </td></tr><tr><td>Success Rate</td><td>90.3%</td><td>94.0%</td><td class="highlight">3.7% &#8593; </td></tr></table><p>Both statistically significant (CTE: p = 4.57 &times; 10&#x207B;&#xB9;&#x2078;&#x2070;; Success: p = 1.65 &times; 10&#x207B;&#xB9;&#xB9;).</p></div>
          <h3>Next Steps</h3><ul><li>Fractional factorial screening for hyperparameter optimization</li><li>Reward function optimization</li><li>Physical sandpit testing</li></ul>
          <h3>Tools</h3><p>PyBullet &middot; TensorFlow &middot; PyTorch &middot; Stable Baselines3 &middot; OpenAI Gym &middot; MATLAB &middot; Python</p>
        </div>
      </div>`,
  },
  {
    id: 'awards',
    title: 'Awards',
    url: 'http://www.sharpxp.com/awards',
    content: `
      <div class="ie7-page"><div class="page-header"><h1>Awards &amp; Honors</h1></div>
        <div class="award-entry major-award"><div class="award-icon">&#127942;</div><div><h2>Goldwater Nominee</h2><p class="award-detail">University of Alabama · Dec. 2025</p><p>First transfer student nominee in UA history.</p></div></div>
        <div class="award-entry major-award"><div class="award-icon">&#129351;</div><div><h2>Grand Prize ($2,500) &amp; PrintLab Prize ($500)</h2><p class="award-detail">TOM Global Innovation Challenge · May 2025</p><p>Off-Roading Wheel Cover and QuickClamp assistive technology projects.</p></div></div>
        <div class="award-entry"><div class="award-icon">&#128640;</div><div><h2>NASA Lunabotics Competition</h2><p class="award-detail">UA Astrobotics · May 2025</p><p>1st Project Management · 2nd Autonomy · 3rd Berm Construction · HM Technical Presentation &amp; Systems Engineering</p></div></div>
        <div class="award-entry"><div class="award-icon">&#128161;</div><div><h2>1st &amp; 2nd Place ($1,250)</h2><p class="award-detail">UA River Pitch · Nov. 2025</p><p>Zero Gravity Rig and Wrapid wheelchair wheel cover.</p></div></div>
        <div class="award-entry"><div class="award-icon">&#128176;</div><div><h2>Levitetz Grant ($2,500)</h2><p class="award-detail">TOM UA QuickClamp · Oct. 2025</p></div></div>
        <div class="award-entry"><div class="award-icon">&#127941;</div><div><h2>3rd Place, Adtran Corporate Hackathon</h2><p class="award-detail">April 2025</p></div></div>
        <div class="award-entry"><div class="award-icon">&#127919;</div><div><h2>HM, Big Ideas Competition</h2><p class="award-detail">UA · April 2025 · CollarOptics (LiDAR + haptic feedback for visually impaired)</p></div></div>
        <div class="award-entry"><div class="award-icon">&#127942;</div><div><h2>1st Place, TOM UA Pitch-a-Thon</h2><p class="award-detail">March 2025</p></div></div>
      </div>`,
  },
  {
    id: 'education',
    title: 'Education',
    url: 'http://www.sharpxp.com/education',
    content: `
      <div class="ie7-page"><div class="page-header"><h1>Education</h1><p class="subtitle">Academic Journey</p></div>

        <div class="edu-entry">
          <h2>University of Alabama</h2>
          <p class="edu-location">Tuscaloosa, AL · Fall 2024 &ndash; Dec. 2027</p>
          <p><strong>B.S. in Computer Science</strong> · GPA: 3.57 · Major GPA: 3.70</p>
          <p>Minor in Robotics · Minor in Mathematics</p>
          <p class="edu-detail">Transferred to UA to pursue deeper involvement in robotics research and take advantage of the Autonomous Robotics Lab under Dr. Hongsheng He. Made history as the first transfer student Goldwater Nominee in UA history. Actively involved in multiple organizations including Tikkun Olam Makers (Secretary &amp; Head of Software), UA Astrobotics, and various entrepreneurship competitions.</p>
          <h3>Relevant Coursework</h3>
          <div class="course-grid">
            <div class="course">CS 201 Data Structures &amp; Algorithms</div>
            <div class="course">CS 200 Software Design &amp; Engineering</div>
            <div class="course">CS 415 Software Design/Development</div>
            <div class="course">CS 438 Computer Communication Networks</div>
            <div class="course">ECE 380 Digital Logic</div>
            <div class="course">MATH 237 Linear Algebra</div>
            <div class="course">MATH 301 Discrete Mathematics</div>
            <div class="course">MATH 126 Calculus II</div>
            <div class="course">PH 101/102 General Physics I &amp; II</div>
            <div class="course">GES 255 Engineering Statistics</div>
          </div>
          <h3>Honors &amp; Involvement</h3>
          <ul>
            <li>Goldwater Nominee, first transfer student nominated in UA history</li>
            <li>TOM Global Innovation Challenge Grand Prize ($2,500)</li>
            <li>NASA Lunabotics Competition, multiple top placements</li>
            <li>UA River Pitch, 1st &amp; 2nd Place ($1,250)</li>
          </ul>
        </div>

        <div class="edu-entry">
          <h2>University of Mississippi</h2>
          <p class="edu-location">Oxford, MS · Jan. 2023 &ndash; May 2024 · GPA: 3.43</p>
          <p class="edu-detail">Spent three semesters at Ole Miss building a strong CS foundation while pursuing research opportunities. Founded and co-led the IEEE &amp; Robotics Club, reviving it post-COVID. Served as a Teaching Assistant for CS I &amp; II. Was one of three practice players selected for the Ole Miss NCAA Women's Soccer Team.</p>
          <p class="edu-note">Coursework: CS I&ndash;III, Computer Organization &amp; Assembly, Models of Computation, Digital Systems, Software Design</p>
        </div>

        <div class="edu-entry">
          <h2>Mississippi University for Women</h2>
          <p class="edu-location">Columbus, MS · Fall 2021 &ndash; Fall 2022</p>
          <p class="edu-detail">Completed dual enrollment and early college credits while still in high school, gaining a head start on core coursework including mathematics and general education requirements.</p>
        </div>
      </div>`,
  },
  {
    id: 'projects',
    title: 'Projects',
    url: 'http://www.sharpxp.com/projects',
    content: `
      <div class="ie7-page"><div class="page-header"><h1>Projects</h1><p class="subtitle">Building things that matter</p></div>

        <div class="project-entry">
          &#129469; Wrapid: Off-Roading Wheel Cover</h2>
          <p class="project-tag">TOM UA · Grand Prize Winner ($2,500) &amp; PrintLab Prize ($500)</p>
          <p>A removable all-terrain wheel cover that enables wheelchair users to traverse off-road surfaces like grass, gravel, dirt, and sand without needing a separate wheelchair. The core insight: repurpose affordable off-road bicycle tires with custom 3D-printed TPU snap-on clips that attach directly to standard wheelchair wheels.</p>
          <p>The design went through multiple iterations of clip geometry and material testing (PLA, PETG, TPU at various infills) to find the right balance of flexibility, grip, and durability. The final prototype is tool-free to install, weighs under 3 lbs per wheel, and targets a retail price of $129&ndash;$139.</p>
          <p>Won the <strong>TOM Global Innovation Challenge Grand Prize</strong> (competing against teams worldwide) and <strong>1st Place at UA River Pitch</strong>. Currently pursuing further development with the Levitetz grant.</p>
          <div class="media-placeholders" style="margin:12px 0;">
            <video controls style="max-width:480px;width:100%;border-radius:4px;"><source src="/images/Wheel%20Cover%20video.mp4" type="video/mp4">Wrapid product demonstration</video>
          </div>
          <div class="exp-tech">SolidWorks · 3D Printing (TPU/PETG) · Mechanical Design · Prototyping · User Testing</div>
        </div>

        <div class="project-entry">
          <h2>&#128295; QuickClamp</h2>
          <p class="project-tag">TOM UA · Levitetz Grant ($2,500)</p>
          <p>A 3D-printed universal quick-deploy attachment system for securing manual wheelchair frames to motorized scooter bases. Designed for users who need powered mobility for longer distances but prefer their own wheelchair for daily use.</p>
          <p>The clamp uses a cam-lever mechanism for tool-free attachment/detachment in under 10 seconds. The design accommodates varying wheelchair tube diameters (22&ndash;28mm) through interchangeable sizing inserts. Won the PrintLab Prize at the TOM Global Innovation Challenge for innovative use of 3D printing in assistive technology.</p>
          <div class="media-placeholders" style="display:flex;gap:16px;margin:12px 0;">
            <video controls style="flex:1;max-width:50%;border-radius:4px;"><source src="/images/Quick%20Clamp%20Video.MP4" type="video/mp4">QuickClamp product demonstration</video>
            <img src="/images/Quick-Clamp%20Picture.JPG" alt="QuickClamp product photo" style="flex:1;max-width:50%;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
          </div>
          <div class="exp-tech">SolidWorks · 3D Printing · Mechanical Design · User-Centered Design</div>
        </div>

        <div class="project-entry">
          &#129302; Astrobotics Lunabotics Rover</h2>
          <p class="project-tag">UA Astrobotics · NASA Lunabotics Challenge</p>
          <p>Developed the autonomy software stack for UA's entry in NASA's 2025 Lunabotics Challenge, a university competition to design and build autonomous lunar regolith mining rovers.</p>
          <p>My focus was the SLAM (Simultaneous Localization and Mapping) pipeline and AprilTag-based visual localization system. The rover used a combination of wheel odometry, IMU data, and camera-based tag detection to build a real-time map of its environment and plan efficient mining paths.</p>
          <p>The team earned <strong>1st in Project Management</strong>, <strong>2nd in Autonomy</strong>, <strong>3rd in Berm Construction</strong>, plus Honorable Mentions for Technical Presentation and Systems Engineering, one of the strongest performances in UA Astrobotics history.</p>
          <div class="media-placeholders" style="margin:12px 0;">
            <video controls style="max-width:480px;width:100%;border-radius:4px;"><source src="/images/Astrobotics%20Recording.mp4" type="video/mp4">Lunabotics competition run</video>
          </div>
          <div class="exp-tech">ROS · SLAM · AprilTag · Python · C++ · Computer Vision · Sensor Fusion</div>
        </div>

        <div class="project-entry">
          &#127919; Zero Gravity Rig</h2>
          <p class="project-tag">River Pitch · 2nd Place</p>
          <p>An assistive clay target shooting device designed for users with limited upper-body mobility. The rig supports the weight of the shotgun on an adjustable counterbalanced arm, allowing the user to aim and fire with minimal effort.</p>
          <p>The design uses a pneumatic damping system to absorb recoil and a universal mount that accommodates standard 12-gauge and 20-gauge shotguns. Won 2nd Place at UA River Pitch ($750).</p>
          <div class="media-placeholders" style="margin:12px 0;">
            <video controls style="max-width:480px;width:100%;border-radius:4px;"><source src="/images/Skeet%20-Shooting%20Zero-Gravity%20Rig.mp4" type="video/mp4">Zero Gravity Rig demo</video>
          </div>
          <div class="exp-tech">SolidWorks · Mechanical Design · Prototyping · Pneumatics</div>
        </div>

        <div class="project-entry">
          <h2>&#128187; SharpXP: This Website!</h2>
          <p class="project-tag">Personal Project</p>
          <p>A Windows XP-themed interactive portfolio website built entirely in React + TypeScript. Features a fully functional windowing system with dragging, resizing, minimizing, and maximizing. Includes working apps: Internet Explorer (portfolio browser), Notepad (with virtual file system), Media Player, Video Player, Snake, Minesweeper, and more.</p>
          <p>Designed to showcase both technical ability and personality, because a standard portfolio site felt too boring.</p>
          <div class="exp-tech">React · TypeScript · Vite · Zustand · CSS · SVG</div>
        </div>
      </div>`,
  },
  {
    id: 'extracurriculars',
    title: 'Extracurricular',
    url: 'http://www.sharpxp.com/extracurriculars',
    content: `
      <div class="ie7-page"><div class="page-header"><h1>Extracurricular &amp; Leadership</h1><p class="subtitle">Making an impact beyond the classroom</p></div>

        <div class="extra-entry">
          <h2>Tikkun Olam Makers (TOM) UA</h2>
          <p class="extra-role">Secretary &amp; Head of Software Engineering · Aug. 2024 &ndash; Present</p>
          <p>TOM (Tikkun Olam Makers) is a global movement that connects makers and engineers with people with disabilities to develop open-source assistive technologies. Our UA chapter is one of the most active in the world.</p>
          <ul>
            <li>Lead the software engineering efforts for multiple assistive technology projects, including the Wrapid Off-Roading Wheel Cover and QuickClamp, both of which won international recognition</li>
            <li>As Secretary, manage organizational communications, meeting minutes, and coordinate with the global TOM network for project submissions and competition entries</li>
            <li>Increased TOM UA's Instagram engagement by over 400% through consistent content strategy, project showcases, and competition documentation</li>
            <li>Author and distribute a bi-weekly newsletter keeping members updated on project progress, competition deadlines, and workshop opportunities</li>
            <li>Mentor new members on CAD, 3D printing, programming, and the human-centered design process</li>
          </ul>
          <div class="media-placeholders" style="margin:12px 0;">
            <video controls style="max-width:480px;width:100%;border-radius:4px;"><source src="/images/TOM%20Mission.mp4" type="video/mp4">What is TOM? (Tikkun Olam Makers)</video>
          </div>
        </div>

        <div class="extra-entry">
          <h2>UA Astrobotics Team</h2>
          <p class="extra-role">Software Developer · Aug. 2024 &ndash; Present</p>
          <p>UA Astrobotics is the university's team for NASA's annual Lunabotics Challenge, where student teams design and build autonomous robots for lunar regolith mining.</p>
          <ul>
            <li>Developed the SLAM pipeline and AprilTag-based visual localization system for autonomous navigation in the simulated lunar environment</li>
            <li>Contributed to systems integration, connecting the autonomy stack with motor controllers, sensors, and the mining/berm-building subsystems</li>
            <li>Participated in youth STEM outreach at <strong>Bama in Your Town</strong> and <strong>Worlds of Work</strong>, demonstrating the rover and explaining robotics concepts to K-12 students</li>
            <li>Team earned 1st in Project Management, 2nd in Autonomy, 3rd in Berm Construction at the 2025 competition</li>
          </ul>
        </div>

        <div class="extra-entry">
          <h2>IEEE &amp; Robotics Club</h2>
          <p class="extra-role">Founding Member, Co-President &amp; Head Software Engineer · Sep. 2023 &ndash; May 2024</p>
          <p class="extra-location">University of Mississippi</p>
          <p>Co-founded and revived Ole Miss's robotics presence after the club dissolved during COVID. Built it from zero members to an active organization in one semester.</p>
          <ul>
            <li>Organized weekly workshops teaching members Arduino programming, circuit design, and mechanical assembly</li>
            <li>Led a team project to build an omnidirectional mecanum-wheel robot with wireless control</li>
            <li>Represented the club at the <strong>2024 IEEE Southeastern Conference in Atlanta</strong>, networking with professionals and other student chapters</li>
            <li>Established partnerships with the School of Engineering for funding and lab access</li>
          </ul>
          <div class="media-placeholders" style="display:flex;gap:16px;margin:12px 0;">
            <img src="/images/Atlanta%20IEEE%20Conference-Group-Pic.JPG" alt="2024 IEEE Southeastern Conference - Group Photo" style="flex:1;max-width:50%;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
            <img src="/images/Atlanta%20IEEE-Skyview.png" alt="2024 IEEE Southeastern Conference - Atlanta Skyview" style="flex:1;max-width:50%;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
          </div>
        </div>
      </div>`,
  },
  {
    id: 'hobbies',
    title: 'Hobbies',
    url: 'http://www.sharpxp.com/hobbies',
    content: `
      <div class="ie7-page"><div class="page-header"><h1>Hobbies &amp; Interests</h1><p class="subtitle">Life outside the lab</p></div>

        <div class="hobby-entry">
          <div class="hobby-icon">&#9917;</div>
          <div class="hobby-content">
            <h2>Soccer</h2>
            <p>I've played soccer since I was 5 years old, growing up as a member of <strong>Memphis Football Club (MFC)</strong>, playing a year up on the club team that made it all the way to the <strong>National Championship</strong>.</p>
            <p>During my time at Ole Miss, I was one of <strong>three practice players for the Ole Miss NCAA Women's Soccer Team</strong> and was also a member of the <strong>Men's Club Team</strong>.</p>
            <div class="hobby-funfact">
              <span class="funfact-badge">Fun Fact</span>
              I've torn my ACL <strong>4 times</strong>. And yes, I'm still playing.
            </div>
            <div class="media-placeholders" style="display:flex;gap:16px;margin:12px 0;">
              <img src="/images/ACL%20Picture.JPG" alt="ACL surgery photo" style="flex:1;max-width:50%;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/Soccer-Picture.JPG" alt="Playing soccer" style="flex:1;max-width:50%;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
            </div>
          </div>
        </div>

        <div class="hobby-entry">
          <div class="hobby-icon">&#128424;&#65039;</div>
          <div class="hobby-content">
            <h2>3D Printing &amp; Modeling</h2>
            <p>3D printing is a core part of both my research and personal projects. I design in SolidWorks and Fusion 360, and print with both FDM and resin printers. I've printed everything from research enclosures and PCB mounts to custom assistive devices and personal creative projects.</p>
            <p>Some of my favorite prints include a <strong>3D version of Carcassonne</strong> (the board game), a <strong>3D-printed electric guitar</strong> (see Guitar section below), a <strong>TPU pickleball</strong>, a <strong>3D-printed blue horn bouquet from How I Met Your Mother</strong>, and a <strong>topographic map of Zelda: Breath of the Wild</strong>.</p>
            <p>One of my proudest builds was a custom <strong>How I Met Your Mother diorama</strong> I made for my girlfriend for Christmas &mdash; it's our favorite show. I custom-designed the circuit for the lighting, and custom-modeled many of the parts in the scene from scratch in SolidWorks.</p>
            <div class="media-placeholders" style="display:flex;flex-wrap:wrap;gap:12px;margin:12px 0;">
              <img src="/images/How%20I%20Met%20Your%20Mother%20Diarama%20light.JPG" alt="HIMYM diorama (lights on)" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/How%20I%20Met%20Your%20Mother%20Diarama%20dark.JPG" alt="HIMYM diorama (lights off/dark)" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/How%20I%20Met%20Your%20Mother%20Diarama%20parts.JPG" alt="HIMYM diorama - all parts laid out" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/3d-printed-pickleball.JPG" alt="3D-printed TPU pickleball" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/Blue-Horn-Bouquet.JPG" alt="HIMYM blue horn bouquet" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/3d-map-legend-of-zelda-botw.PNG" alt="3D map of Zelda: Breath of the Wild" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
            </div>
          </div>
        </div>

        <div class="hobby-entry">
          <div class="hobby-icon">&#127928;</div>
          <div class="hobby-content">
            <h2>Guitar</h2>
            <p>Beyond building them, I also play guitar. Whether it's unwinding after a long day in the lab or jamming with friends, playing guitar is one of my favorite creative outlets.</p>
            <p>I'm currently building a <strong>fully 3D-printed electric guitar</strong> from scratch. It's still a work in progress &mdash; I still need to paint it, add the neck, and wire up the electronics &mdash; but it's coming along nicely.</p>
            <div class="hobby-photo-placeholder">
              <div class="hobby-photo-frame" style="overflow:hidden;">
                <img src="/images/3d-printed%20guitar%20base.PNG" alt="3D Printed Electric Guitar (WIP)" style="display:block;width:100%;margin-top:-25%;margin-bottom:-25%;" onerror="this.parentElement.innerHTML='<div class=\\'hobby-photo-fallback\\'>&#127928;<br/><span>Guitar Photo</span></div>'" />
              </div>
              <p class="hobby-photo-caption">The 3D-printed electric guitar &mdash; work in progress!</p>
            </div>
          </div>
        </div>

        <div class="hobby-entry">
          <div class="hobby-icon">&#127925;</div>
          <div class="hobby-content">
            <h2>Music &amp; Concerts</h2>
            <p>I love music and going to live shows &mdash; I've probably been to over <strong>20 concerts</strong> in the past 3 years. There's nothing quite like hearing your favorite band live.</p>
            <div class="media-placeholders" style="display:flex;gap:16px;margin:12px 0;">
              <img src="/images/Hippo-Campus%20Concert%201.png" alt="Hippo Campus concert" style="flex:1;max-width:33%;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/Hippo-Campus%20Concert%203.JPEG" alt="Hippo Campus concert" style="flex:1;max-width:33%;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/flipturn%20concert.JPG" alt="flipturn concert" style="flex:1;max-width:33%;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
            </div>
          </div>
        </div>

        <div class="hobby-entry">
          <div class="hobby-icon">&#127955;</div>
          <div class="hobby-content">
            <h2>Pickleball &amp; Staying Active</h2>
            <p>I love staying active, whether it's hitting the pickleball courts, spending time in the gym, or finding new ways to move. Pickleball has become a go-to for competitive fun without the full-contact toll on my much-repaired knees.</p>
          </div>
        </div>

        <div class="hobby-entry">
          <div class="hobby-icon">&#127859;</div>
          <div class="hobby-content">
            <h2>Cooking</h2>
            <p>I enjoy cooking and trying new recipes. Some of my favorites to make include orange olive oil cake, shakshuka, homemade bagels, chicken pasta, and street tacos.</p>
            <div class="media-placeholders" style="display:flex;flex-wrap:wrap;gap:12px;margin:12px 0;">
              <img src="/images/Orange%20Olive%20Oil%20Cake.PNG" alt="Orange olive oil cake" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/Shakshuka.JPG" alt="Shakshuka" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/Bagel.JPG" alt="Homemade bagel" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/chicken%20with%20pasta.JPG" alt="Chicken with pasta" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
              <img src="/images/Street-Tacos.JPG" alt="Street tacos" style="width:calc(33% - 8px);aspect-ratio:4/3;border-radius:4px;object-fit:cover;" onerror="this.style.display='none'" />
            </div>
          </div>
        </div>

        <div class="hobby-entry">
          <div class="hobby-icon">&#127918;</div>
          <div class="hobby-content">
            <h2>Rocket League</h2>
            <p>When I need some screen time that isn't code, I play <strong>Rocket League</strong>. I'm currently ranked <strong>Champion</strong>, the <strong>top 3.4 percentile</strong> of all players globally. It's basically soccer with rocket-powered cars, so it checks two boxes at once.</p>
            <div class="media-placeholders" style="margin:12px 0;">
              <video controls style="max-width:480px;width:100%;border-radius:4px;"><source src="/images/rocket%20league%20clip.mp4" type="video/mp4">Hitting a clip in Rocket League</video>
            </div>
          </div>
        </div>

        <div class="hobby-entry">
          <div class="hobby-icon">&#127916;</div>
          <div class="hobby-content">
            <h2>Top 10 Movies</h2>
            <p>These titles can be found in the <strong>Video Player</strong> app on the desktop! Click any movie to open it.</p>
            <div class="media-list" style="display:flex;flex-direction:column;gap:10px;margin:12px 0;">
              <div data-open-video="/videos/Scott-Pilgrim-VS-The-World.mp4" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Video Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">1.</span><span style="flex:1;">Scott Pilgrim vs. the World</span><img src="/videos/Scott-Pilgrim-VS-The-World.png" alt="Scott Pilgrim vs. the World poster" style="width:80px;height:110px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:80px;height:110px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;color:#666;font-size:9px;\\'>&#128247;<br/><em>scott-pilgrim.jpg</em></div>'" /></div>
              <div data-open-video="/videos/Spider-Man-Across-The-Spider-Verse.mp4" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Video Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">2.</span><span style="flex:1;">Spider-Man: Across the Spider-Verse</span><img src="/videos/Spider-Man-Across-The-Spider-Verse.png" alt="Spider-Man: Across the Spider-Verse poster" style="width:80px;height:110px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:80px;height:110px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;color:#666;font-size:9px;\\'>&#128247;<br/><em>spider-verse.jpg</em></div>'" /></div>
              <div data-open-video="/videos/The-Imitation-Game.mp4" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Video Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">3.</span><span style="flex:1;">The Imitation Game</span><img src="/videos/The-Imitation-Game.png" alt="The Imitation Game poster" style="width:80px;height:110px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:80px;height:110px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;color:#666;font-size:9px;\\'>&#128247;<br/><em>imitation-game.jpg</em></div>'" /></div>
              <div data-open-video="/videos/Moneyball.mp4" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Video Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">4.</span><span style="flex:1;">Moneyball</span><img src="/videos/Moneyball.png" alt="Moneyball poster" style="width:80px;height:110px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:80px;height:110px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;color:#666;font-size:9px;\\'>&#128247;<br/><em>moneyball.jpg</em></div>'" /></div>
              <div data-open-video="/videos/My-Neighbor-Totoro.mp4" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Video Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">5.</span><span style="flex:1;">My Neighbor Totoro</span><img src="/videos/My-Neighbor-Totoro.png" alt="My Neighbor Totoro poster" style="width:80px;height:110px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:80px;height:110px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;color:#666;font-size:9px;\\'>&#128247;<br/><em>totoro.jpg</em></div>'" /></div>
              <div data-open-video="/videos/Labyrinth.mp4" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Video Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">6.</span><span style="flex:1;">Labyrinth</span><img src="/videos/Labyrinth.png" alt="Labyrinth poster" style="width:80px;height:110px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:80px;height:110px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;color:#666;font-size:9px;\\'>&#128247;<br/><em>labyrinth.jpg</em></div>'" /></div>
              <div data-open-video="/videos/Good-Will-Hunting.mp4" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Video Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">7.</span><span style="flex:1;">Good Will Hunting</span><img src="/videos/Good-Will-Hunting.png" alt="Good Will Hunting poster" style="width:80px;height:110px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:80px;height:110px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;color:#666;font-size:9px;\\'>&#128247;<br/><em>good-will-hunting.jpg</em></div>'" /></div>
              <div data-open-video="/videos/Star-Wars-Episode-III-Revenge-Of-The-Sith.mp4" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Video Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">8.</span><span style="flex:1;">Star Wars: Revenge of the Sith</span><img src="/videos/Star-Wars-Episode-III-Revenge-Of-The-Sith.png" alt="Revenge of the Sith poster" style="width:80px;height:110px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:80px;height:110px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;color:#666;font-size:9px;\\'>&#128247;<br/><em>revenge-of-the-sith.jpg</em></div>'" /></div>
              <div data-open-video="/videos/High-Fidelity.mp4" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Video Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">9.</span><span style="flex:1;">High Fidelity</span><img src="/videos/High-Fidelity.png" alt="High Fidelity poster" style="width:80px;height:110px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:80px;height:110px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;color:#666;font-size:9px;\\'>&#128247;<br/><em>high-fidelity.jpg</em></div>'" /></div>
              <div data-open-video="/videos/Baby-Driver.mp4" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Video Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">10.</span><span style="flex:1;">Baby Driver</span><img src="/videos/Baby-Driver.png" alt="Baby Driver poster" style="width:80px;height:110px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:80px;height:110px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;color:#666;font-size:9px;\\'>&#128247;<br/><em>baby-driver.jpg</em></div>'" /></div>
            </div>
          </div>
        </div>

        <div class="hobby-entry">
          <div class="hobby-icon">&#127925;</div>
          <div class="hobby-content">
            <h2>Top 25 Songs</h2>
            <p>These tracks can be found in the <strong>Music Player</strong> app on the desktop!</p>
            <div class="media-list" style="display:flex;flex-direction:column;gap:8px;margin:12px 0;">
              <div data-open-music="/music/Swim-Between-Trees_Burnout-Days_flipturn.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">1.</span><span style="flex:1;">Swim Between Trees &mdash; flipturn</span><img src="/music/Swim-Between-Trees_Burnout-Days_flipturn.png" alt="Swim Between Trees album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Tokyo-Drifting_Dreamland_Glass-Animals.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">2.</span><span style="flex:1;">Tokyo Drifting &mdash; Glass Animals</span><img src="/music/Tokyo-Drifting_Dreamland_Glass-Animals.png" alt="Tokyo Drifting album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Purgatory-Silverstar_The-Crux-Deluxe_Djo.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">3.</span><span style="flex:1;">Purgatory Silverstar &mdash; Djo</span><img src="/music/Purgatory-Silverstar_The-Crux-Deluxe_Djo.png" alt="Purgatory Silverstar album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Mind-Over-Matter_Mind-Over-Matter_Young-the-Giant.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">4.</span><span style="flex:1;">Mind Over Matter &mdash; Young the Giant</span><img src="/music/Mind-Over-Matter_Mind-Over-Matter_Young-the-Giant.png" alt="Mind Over Matter album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/1980s-Horror-Film_Spring-EP_Wallows.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">5.</span><span style="flex:1;">1980s Horror Film &mdash; Wallows</span><img src="/music/1980s-Horror-Film_Spring-EP_Wallows.png" alt="1980s Horror Film album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Strange-Love_Golden-Age_Houndmouth.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">6.</span><span style="flex:1;">Strange Love &mdash; Houndmouth</span><img src="/music/Strange-Love_Golden-Age_Houndmouth.png" alt="Strange Love album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Comin'-To-You_Comin'-To-You_Kishi-Bashi.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">7.</span><span style="flex:1;">Comin' To You &mdash; Kishi Bashi</span><img src="/music/Comin'-To-You_Comin'-To-You_Kishi-Bashi.png" alt="Comin To You album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Roll-My-Stone_Roll-My-Stone_Arcy-Drive.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">8.</span><span style="flex:1;">Roll My Stone &mdash; Arcy Drive</span><img src="/music/Roll-My-Stone_Roll-My-Stone_Arcy-Drive.png" alt="Roll My Stone album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Stayaway_Saves-The-World_MUNA.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">9.</span><span style="flex:1;">Stayaway &mdash; MUNA</span><img src="/music/Stayaway_Saves-The-World_MUNA.png" alt="Stayaway album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Once-In-A-Lifetime_Reamin-in-Light_Talking-Heads.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">10.</span><span style="flex:1;">Once in a Lifetime &mdash; Talking Heads</span><img src="/music/Once-In-A-Lifetime_Reamin-in-Light_Talking-Heads.png" alt="Once in a Lifetime album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/She-Wants-To-Go-Dancing_She-Wants-To-Go-Dancing_Mt.-Joy.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">11.</span><span style="flex:1;">She Wants To Go Dancing &mdash; Mt. Joy</span><img src="/music/She-Wants-To-Go-Dancing_She-Wants-To-Go-Dancing_Mt.-Joy.png" alt="She Wants To Go Dancing album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Common-People_Different-Class_Pulp.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">12.</span><span style="flex:1;">Common People &mdash; Pulp</span><img src="/music/Common-People_Different-Class_Pulp.png" alt="Common People album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Yoshimi-Battles-the-Pink-Robots_Yoshimi-Battles-the-Pink-Robots_The-Flaming-Lips.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">13.</span><span style="flex:1;">Yoshimi Battles the Pink Robots &mdash; The Flaming Lips</span><img src="/music/Yoshimi-Battles-the-Pink-Robots_Yoshimi-Battles-the-Pink-Robots_The-Flaming-Lips.png" alt="Yoshimi Battles the Pink Robots album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Greek-Tragedy_Glitterbug_The-Wombats.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">14.</span><span style="flex:1;">Greek Tragedy &mdash; The Wombats</span><img src="/music/Greek-Tragedy_Glitterbug_The-Wombats.png" alt="Greek Tragedy album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Down-The-Road_Tetra_C2C.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">15.</span><span style="flex:1;">Down The Road &mdash; C2C</span><img src="/music/Down-The-Road_Tetra_C2C.png" alt="Down The Road album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Colors_BADLANDS_Halsey.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">16.</span><span style="flex:1;">Colors &mdash; Halsey</span><img src="/music/Colors_BADLANDS_Halsey.png" alt="Colors album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Basket-Case_Dookie_Green-Day.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">17.</span><span style="flex:1;">Basket Case &mdash; Green Day</span><img src="/music/Basket-Case_Dookie_Green-Day.png" alt="Basket Case album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Do-I-Wanna-Know_AM_Arctic-Monkeys.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">18.</span><span style="flex:1;">Do I Wanna Know? &mdash; Arctic Monkeys</span><img src="/music/Do-I-Wanna-Know_AM_Arctic-Monkeys.png" alt="Do I Wanna Know album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/The-Promise_When-In-Rome_When-In-Rome.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">19.</span><span style="flex:1;">The Promise &mdash; When In Rome</span><img src="/music/The-Promise_When-In-Rome_When-In-Rome.png" alt="The Promise album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Take-Me-Out_Franz-Ferdinand_Franz-Ferdinand.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">20.</span><span style="flex:1;">Take Me Out &mdash; Franz Ferdinand</span><img src="/music/Take-Me-Out_Franz-Ferdinand_Franz-Ferdinand.png" alt="Take Me Out album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Flagpole-Sitta_Where-Have-All-The-Merrymakers-Gone_Harvey-Danger.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">21.</span><span style="flex:1;">Flagpole Sitta &mdash; Harvey Danger</span><img src="/music/Flagpole-Sitta_Where-Have-All-The-Merrymakers-Gone_Harvey-Danger.png" alt="Flagpole Sitta album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/My-Old-Ways_Deadbeat_Tame-Impala.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">22.</span><span style="flex:1;">My Old Ways &mdash; Tame Impala</span><img src="/music/My-Old-Ways_Deadbeat_Tame-Impala.png" alt="My Old Ways album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/right_Burnout-Days_flipturn.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">23.</span><span style="flex:1;">right? &mdash; flipturn</span><img src="/music/right_Burnout-Days_flipturn.png" alt="right? album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/Major-Tom-(Coming-Home)_The-Different-Story-(World-Of-Lust-And-Crime)_Peter-Schilling.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">24.</span><span style="flex:1;">Major Tom (Coming Home) &mdash; Peter Schilling</span><img src="/music/Major-Tom-(Coming-Home)_The-Different-Story-(World-Of-Lust-And-Crime)_Peter-Schilling.png" alt="Major Tom album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
              <div data-open-music="/music/You-Are-What-You-Do_You-Are-What-You-Do_Aviram.mp3" style="display:flex;align-items:center;gap:12px;cursor:pointer;" title="Play in Music Player"><span style="font-weight:bold;color:#999;width:24px;text-align:right;">25.</span><span style="flex:1;">You Are What You Do</span><img src="/music/You-Are-What-You-Do_You-Are-What-You-Do_Aviram.png" alt="You Are What You Do album art" style="width:60px;height:60px;border-radius:4px;object-fit:cover;" onerror="this.outerHTML='<div class=\\'placeholder-media\\' style=\\'width:60px;height:60px;background:#e8e8e8;border:2px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;text-align:center;padding:2px;color:#666;font-size:8px;\\'>&#128247;<br/><em>album art</em></div>'" /></div>
            </div>
          </div>
        </div>
      </div>`,
  },
  {
    id: 'github',
    title: 'Aaron Sharp (asharpie) \u00b7 GitHub',
    url: 'https://github.com/asharpie',
    content: `
      <div class="gh-profile">
        <div class="gh-header">
          <div class="gh-topbar">
            <img src="/icons/github.svg" alt="GitHub" class="gh-logo" />
            <div class="gh-topbar-nav">
              <input class="gh-search" placeholder="Search or jump to..." readonly />
              <span class="gh-nav-item">Pull requests</span>
              <span class="gh-nav-item">Issues</span>
              <span class="gh-nav-item">Marketplace</span>
              <span class="gh-nav-item">Explore</span>
            </div>
          </div>
        </div>
        <div class="gh-body">
          <div class="gh-sidebar">
            <div class="gh-avatar"><img src="/githubpfp.jpg" alt="Aaron Sharp" class="gh-avatar-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" /><span class="gh-avatar-fallback" style="display:none;align-items:center;justify-content:center;width:100%;height:100%;font-size:72px;font-weight:700;color:#fff;">AS</span></div>
            <h1 class="gh-name">Aaron Sharp</h1>
            <p class="gh-username">asharpie</p>
            <p class="gh-bio">CS &amp; Robotics @ University of Alabama &middot; Researcher &middot; Builder &middot; 4x ACL survivor</p>
            <button class="gh-follow-btn">Follow</button>
            <div class="gh-meta">
              <span>&#128205; Tuscaloosa, AL</span>
              <span>&#127979; University of Alabama</span>
              <span>&#128188; Co-op @ Adtran</span>
              <span>&#128279; <a href="http://www.sharpxp.com/about" class="gh-link">sharpxp.com</a></span>
            </div>
            <div class="gh-stats-row">
              <span><strong>6</strong> repositories</span>
              <span><strong>&middot;</strong></span>
              <span><strong>12</strong> followers</span>
              <span><strong>&middot;</strong></span>
              <span><strong>8</strong> following</span>
            </div>
            <div class="gh-achievements">
              <h3 class="gh-sidebar-title">Achievements</h3>
              <div class="gh-badge-row">
                <span class="gh-badge" title="Pull Shark">&#x1F988;</span>
                <span class="gh-badge" title="Arctic Code Vault">&#x2744;&#xFE0F;</span>
                <span class="gh-badge" title="YOLO">&#x1F525;</span>
              </div>
            </div>
            <div class="gh-orgs">
              <h3 class="gh-sidebar-title">Organizations</h3>
              <div class="gh-org-row">
                <span class="gh-org-badge" title="TOM UA">T</span>
                <span class="gh-org-badge" title="UA Astrobotics">A</span>
              </div>
            </div>
          </div>
          <div class="gh-main">
            <div class="gh-profile-tabs">
              <span class="gh-tab active">&#128209; Overview</span>
              <span class="gh-tab">&#128193; Repositories <span class="gh-tab-count">6</span></span>
              <span class="gh-tab">&#11088; Stars <span class="gh-tab-count">15</span></span>
            </div>
            <h2 class="gh-section-title">Pinned</h2>
            <div class="gh-repo-grid">
              <div class="gh-repo-card">
                <div class="gh-repo-header">
                  <h3><span class="gh-repo-icon">&#128193;</span> <a class="gh-repo-link">sharpxp</a></h3>
                  <span class="gh-repo-visibility">Public</span>
                </div>
                <p>Windows XP&ndash;themed interactive portfolio website built with React + TypeScript + Vite</p>
                <div class="gh-repo-meta">
                  <span class="gh-lang-dot ts"></span> TypeScript
                  <span class="gh-stars">&#11088; 3</span>
                  <span class="gh-forks">&#127860; 1</span>
                </div>
              </div>
              <div class="gh-repo-card">
                <div class="gh-repo-header">
                  <h3><span class="gh-repo-icon">&#128193;</span> <a class="gh-repo-link">hybrid-rover-controller</a></h3>
                  <span class="gh-repo-visibility">Public</span>
                </div>
                <p>Hybrid LQR + PPO controller for autonomous path following on granular deformable terrain (NSF/JPL)</p>
                <div class="gh-repo-meta">
                  <span class="gh-lang-dot py"></span> Python
                  <span class="gh-stars">&#11088; 5</span>
                  <span class="gh-forks">&#127860; 2</span>
                </div>
              </div>
              <div class="gh-repo-card">
                <div class="gh-repo-header">
                  <h3><span class="gh-repo-icon">&#128193;</span> <a class="gh-repo-link">lunabotics-slam</a></h3>
                  <span class="gh-repo-visibility">Public</span>
                </div>
                <p>SLAM and AprilTag localization for UA Astrobotics Lunabotics rover &mdash; ROS2 + Python</p>
                <div class="gh-repo-meta">
                  <span class="gh-lang-dot py"></span> Python
                  <span class="gh-stars">&#11088; 2</span>
                  <span class="gh-forks">&#127860; 0</span>
                </div>
              </div>
              <div class="gh-repo-card">
                <div class="gh-repo-header">
                  <h3><span class="gh-repo-icon">&#128193;</span> <a class="gh-repo-link">optogenetics-controller</a></h3>
                  <span class="gh-repo-visibility">Public</span>
                </div>
                <p>Raspberry Pi-based optogenetics system for neuroscience research with touchscreen GUI</p>
                <div class="gh-repo-meta">
                  <span class="gh-lang-dot py"></span> Python
                  <span class="gh-stars">&#11088; 1</span>
                  <span class="gh-forks">&#127860; 0</span>
                </div>
              </div>
              <div class="gh-repo-card">
                <div class="gh-repo-header">
                  <h3><span class="gh-repo-icon">&#128193;</span> <a class="gh-repo-link">quickclamp-cad</a></h3>
                  <span class="gh-repo-visibility">Public</span>
                </div>
                <p>Open-source CAD files &amp; documentation for the QuickClamp assistive wheelchair attachment</p>
                <div class="gh-repo-meta">
                  <span class="gh-lang-dot other"></span> STEP/STL
                  <span class="gh-stars">&#11088; 1</span>
                  <span class="gh-forks">&#127860; 0</span>
                </div>
              </div>
              <div class="gh-repo-card">
                <div class="gh-repo-header">
                  <h3><span class="gh-repo-icon">&#128193;</span> <a class="gh-repo-link">3d-printed-guitar</a></h3>
                  <span class="gh-repo-visibility">Public</span>
                </div>
                <p>Fully functional 3D-printed electric guitar &mdash; CAD files, wiring diagrams, build guide</p>
                <div class="gh-repo-meta">
                  <span class="gh-lang-dot other"></span> Documentation
                  <span class="gh-stars">&#11088; 4</span>
                  <span class="gh-forks">&#127860; 1</span>
                </div>
              </div>
            </div>
            <h2 class="gh-section-title" style="margin-top:24px;">Contribution Activity</h2>
            <div class="gh-contrib-graph">
              <div class="gh-contrib-label">365 contributions in the last year</div>
              <div class="gh-contrib-row" id="gh-contrib-cells"></div>
              <div class="gh-contrib-legend">
                <span>Less</span>
                <span class="gh-contrib-cell gh-l0"></span>
                <span class="gh-contrib-cell gh-l1"></span>
                <span class="gh-contrib-cell gh-l2"></span>
                <span class="gh-contrib-cell gh-l3"></span>
                <span class="gh-contrib-cell gh-l4"></span>
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
        <div class="gh-visit-real">
          <a href="https://github.com/asharpie" target="_blank" rel="noopener noreferrer">Visit real profile on GitHub &#8599;</a>
        </div>
      </div>`,
  },
  {
    id: 'linkedin',
    title: 'Aaron Sharp · LinkedIn',
    url: 'https://www.linkedin.com/in/AaronSharp05',
    content: `
      <div class="li-profile">
        <div class="li-header">
          <div class="li-topbar">
            <img src="/icons/linkedin.svg" alt="LinkedIn" class="li-logo" />
            <div class="li-topbar-nav">
              <input class="li-search" placeholder="Search" readonly />
              <span class="li-nav-icon" title="Home">&#127968;</span>
              <span class="li-nav-icon" title="Network">&#128101;</span>
              <span class="li-nav-icon" title="Jobs">&#128188;</span>
              <span class="li-nav-icon" title="Messaging">&#128172;</span>
              <span class="li-nav-icon" title="Notifications">&#128276;</span>
            </div>
          </div>
          <div class="li-banner"></div>
          <div class="li-avatar"><img src="/linkedinpfp.jpg" alt="Aaron Sharp" class="li-avatar-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" /><span class="li-avatar-fallback" style="display:none;align-items:center;justify-content:center;width:100%;height:100%;font-size:42px;font-weight:700;color:#fff;">AS</span></div>
        </div>
        <div class="li-body">
          <div class="li-intro">
            <div class="li-open-badge">&#128994; Open to work</div>
            <h1>Aaron Sharp</h1>
            <p class="li-headline">Computer Science &amp; Robotics @ University of Alabama &middot; Co-op Software Engineer @ Adtran &middot; Undergraduate Researcher &middot; NSF/JPL &middot; TOM Grand Prize Winner</p>
            <p class="li-location">Tuscaloosa, Alabama, United States &middot; <span class="li-connections">500+ connections</span></p>
            <p class="li-mutual">12 mutual connections including <strong>Dr. Hongsheng He</strong> and <strong>2 others</strong></p>
            <div class="li-buttons">
              <span class="li-btn li-btn-primary">Connect</span>
              <span class="li-btn li-btn-secondary">Message</span>
              <span class="li-btn li-btn-secondary">More</span>
            </div>
          </div>

          <div class="li-section">
            <h2>About</h2>
            <p>Undergraduate researcher, software engineer, and maker passionate about developing intelligent systems that operate reliably in uncertain, dynamic environments &mdash; whether that's a rover navigating Martian terrain, an assistive device helping someone with a disability, or an agricultural robot adapting to changing conditions.</p>
            <p>Currently contributing to an NSF-funded multi-robot cooperation project in collaboration with NASA JPL, while also building assistive technologies that have won international recognition (TOM Global Innovation Challenge Grand Prize).</p>
            <p>First transfer student Goldwater Nominee in UA history. I bring a unique combination of software engineering rigor, hands-on hardware prototyping experience, and a maker mindset to everything I build.</p>
          </div>

          <div class="li-section">
            <h2>Experience</h2>
            <div class="li-exp-item">
              <div class="li-exp-icon">&#128188;</div>
              <div>
                <h3>Co-op Software Engineer</h3>
                <p class="li-exp-company">Adtran Inc.</p>
                <p class="li-exp-date">Jan 2025 &ndash; Present &middot; Huntsville, AL</p>
                <p class="li-exp-desc">Developing automated test pipelines for SDG infrastructure. Designing custom PCB testing boards for NXP microcontrollers. Python, C++, embedded systems.</p>
              </div>
            </div>
            <div class="li-exp-item">
              <div class="li-exp-icon">&#128300;</div>
              <div>
                <h3>Student Research Assistant</h3>
                <p class="li-exp-company">Autonomous Robotics Lab &middot; University of Alabama</p>
                <p class="li-exp-date">Oct 2024 &ndash; Present</p>
                <p class="li-exp-desc">NSF RII Track-4 project with NASA JPL. Developing hybrid LQR+PPO controllers for autonomous rover navigation on granular terrain. 48% CTE improvement over baseline.</p>
              </div>
            </div>
            <div class="li-exp-item">
              <div class="li-exp-icon">&#128300;</div>
              <div>
                <h3>Student Research Assistant</h3>
                <p class="li-exp-company">Dr. Brenton Laing Lab &middot; University of Mississippi</p>
                <p class="li-exp-date">May &ndash; Aug 2025</p>
                <p class="li-exp-desc">Re-engineered hazardous optogenetics prototype into safe research system with Raspberry Pi touchscreen GUI.</p>
              </div>
            </div>
            <div class="li-exp-item">
              <div class="li-exp-icon">&#127758;</div>
              <div>
                <h3>Software Engineer Intern</h3>
                <p class="li-exp-company">IoT Factory Pty Ltd. &middot; Australia (Remote)</p>
                <p class="li-exp-date">May &ndash; Aug 2024</p>
                <p class="li-exp-desc">IoT-enabled modular devices for precision agriculture and environmental monitoring.</p>
              </div>
            </div>
            <div class="li-exp-item">
              <div class="li-exp-icon">&#127891;</div>
              <div>
                <h3>Teaching Assistant &mdash; CS I/II</h3>
                <p class="li-exp-company">University of Mississippi</p>
                <p class="li-exp-date">Jan &ndash; Dec 2024</p>
              </div>
            </div>
          </div>

          <div class="li-section">
            <h2>Education</h2>
            <div class="li-exp-item">
              <div class="li-exp-icon">&#127891;</div>
              <div>
                <h3>University of Alabama</h3>
                <p class="li-exp-company">B.S. Computer Science &middot; Minors: Robotics, Mathematics</p>
                <p class="li-exp-date">2024 &ndash; 2027 &middot; GPA: 3.57</p>
                <p class="li-exp-desc">Activities: TOM UA (Secretary/Head of Software), UA Astrobotics, Goldwater Nominee</p>
              </div>
            </div>
            <div class="li-exp-item">
              <div class="li-exp-icon">&#127891;</div>
              <div>
                <h3>University of Mississippi</h3>
                <p class="li-exp-company">Computer Science</p>
                <p class="li-exp-date">2023 &ndash; 2024 &middot; GPA: 3.43</p>
                <p class="li-exp-desc">Activities: IEEE &amp; Robotics Club (Co-President), Women's Soccer Practice Player, Men's Club Soccer</p>
              </div>
            </div>
          </div>

          <div class="li-section">
            <h2>Honors &amp; Awards</h2>
            <div class="li-awards-list">
              <div class="li-award"><strong>Goldwater Nominee</strong> &middot; University of Alabama &middot; Dec 2025</div>
              <div class="li-award"><strong>Grand Prize ($2,500)</strong> &middot; TOM Global Innovation Challenge &middot; May 2025</div>
              <div class="li-award"><strong>1st &amp; 2nd Place ($1,250)</strong> &middot; UA River Pitch &middot; Nov 2025</div>
              <div class="li-award"><strong>NASA Lunabotics</strong> &middot; 1st PM, 2nd Autonomy, 3rd Berm &middot; May 2025</div>
              <div class="li-award"><strong>3rd Place</strong> &middot; Adtran Corporate Hackathon &middot; April 2025</div>
            </div>
          </div>

          <div class="li-section">
            <h2>Skills</h2>
            <div class="li-skills-list">
              <span class="li-skill">Python</span><span class="li-skill">C++</span><span class="li-skill">TypeScript</span>
              <span class="li-skill">React</span><span class="li-skill">TensorFlow</span><span class="li-skill">PyTorch</span>
              <span class="li-skill">ROS</span><span class="li-skill">SLAM</span><span class="li-skill">Embedded Systems</span>
              <span class="li-skill">SolidWorks</span><span class="li-skill">MATLAB</span><span class="li-skill">Git</span>
              <span class="li-skill">3D Printing</span><span class="li-skill">PCB Design</span><span class="li-skill">Arduino</span>
              <span class="li-skill">Raspberry Pi</span><span class="li-skill">OpenAI Gym</span><span class="li-skill">PyBullet</span>
            </div>
          </div>
        </div>
        <div class="li-visit-real">
          <a href="https://www.linkedin.com/in/AaronSharp05" target="_blank" rel="noopener noreferrer">Visit real profile on LinkedIn &#8599;</a>
        </div>
      </div>`,
  },
  {
    id: 'instagram',
    title: 'Instagram',
    url: 'https://www.instagram.com/aaronsharp_2/',
    content: `
      <div class="ig-profile">
        <div class="ig-topbar">
          <img src="/icons/instagram.svg" alt="Instagram" class="ig-logo" />
          <span class="ig-topbar-text">Instagram</span>
          <div class="ig-topbar-right">
            <span class="ig-nav-icon">&#10133;</span>
            <span class="ig-nav-icon">&#9829;</span>
            <span class="ig-nav-icon">&#128172;</span>
          </div>
        </div>
        <div class="ig-body">
          <div class="ig-header">
            <div class="ig-avatar-ring">
              <div class="ig-avatar"><img src="/instapfp.jpg" alt="Aaron Sharp" class="ig-avatar-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" /><span class="ig-avatar-fallback" style="display:none;align-items:center;justify-content:center;width:100%;height:100%;font-size:36px;font-weight:700;">AS</span></div>
            </div>
            <div class="ig-info">
              <div class="ig-username-row">
                <h1>asharpie</h1>
                <span class="ig-verified" title="Verified">&#10004;</span>
                <span class="ig-btn">Follow</span>
                <span class="ig-btn ig-btn-secondary">Message</span>
                <span class="ig-btn ig-btn-secondary">&#9660;</span>
              </div>
              <div class="ig-stats">
                <span><strong>24</strong> posts</span>
                <span><strong>340</strong> followers</span>
                <span><strong>285</strong> following</span>
              </div>
              <div class="ig-bio">
                <strong>Aaron Sharp</strong><br/>
                &#129302; CS &amp; Robotics @ University of Alabama<br/>
                &#128296; Builder of robots, assistive tech &amp; 3D-printed guitars<br/>
                &#128640; NSF/JPL Researcher &middot; TOM Grand Prize Winner<br/>
                &#9917; 4x ACL club &middot; Still playing<br/>
                &#127918; Rocket League Champ (top 3.4%)<br/>
                &#128205; Tuscaloosa, AL
              </div>
            </div>
          </div>
          <div class="ig-highlights">
            <div class="ig-highlight"><div class="ig-hl-circle">&#129302;</div><span>Robotics</span></div>
            <div class="ig-highlight"><div class="ig-hl-circle">&#127942;</div><span>Awards</span></div>
            <div class="ig-highlight"><div class="ig-hl-circle">&#127891;</div><span>UA</span></div>
            <div class="ig-highlight"><div class="ig-hl-circle">&#128187;</div><span>Code</span></div>
            <div class="ig-highlight"><div class="ig-hl-circle">&#9917;</div><span>Soccer</span></div>
            <div class="ig-highlight"><div class="ig-hl-circle">&#127928;</div><span>Guitar</span></div>
          </div>
          <div class="ig-tabs">
            <span class="ig-tab active">&#9638; POSTS</span>
            <span class="ig-tab">&#128254; REELS</span>
            <span class="ig-tab">&#127991;&#65039; TAGGED</span>
          </div>
          <div class="ig-grid">
            <div class="ig-post" style="background:linear-gradient(135deg,#1a1a2e,#16213e);">
              <img src="/insta1.jpg" alt="Post 1" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#129302;</div>
              <div class="ig-post-overlay"><span>&#9829; 142</span><span>&#128172; 8</span></div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#0f3460,#533483);">
              <img src="/insta2.jpg" alt="Post 2" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#127942;</div>
              <div class="ig-post-overlay"><span>&#9829; 287</span><span>&#128172; 24</span></div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#e94560,#0f3460);">
              <img src="/insta3.jpg" alt="Post 3" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#129468;</div>
              <div class="ig-post-overlay"><span>&#9829; 198</span><span>&#128172; 15</span></div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#2d6a4f,#40916c);">
              <img src="/insta4.jpg" alt="Post 4" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#128640;</div>
              <div class="ig-post-overlay"><span>&#9829; 156</span><span>&#128172; 11</span></div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#ff6b35,#f7c59f);">
              <img src="/insta5.jpg" alt="Post 5" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#127928;</div>
              <div class="ig-post-overlay"><span>&#9829; 324</span><span>&#128172; 31</span></div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#3a0ca3,#7209b7);">
              <img src="/insta6.jpg" alt="Post 6" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#128295;</div>
              <div class="ig-post-overlay"><span>&#9829; 89</span><span>&#128172; 6</span></div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#023e8a,#0077b6);">
              <img src="/insta7.jpg" alt="Post 7" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#9917;</div>
              <div class="ig-post-overlay"><span>&#9829; 201</span><span>&#128172; 18</span></div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#9d4edd,#c77dff);">
              <img src="/insta8.jpg" alt="Post 8" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#128300;</div>
              <div class="ig-post-overlay"><span>&#9829; 76</span><span>&#128172; 5</span></div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#2b2d42,#8d99ae);">
              <img src="/insta9.jpg" alt="Post 9" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#127918;</div>
              <div class="ig-post-overlay"><span>&#9829; 112</span><span>&#128172; 14</span></div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#264653,#2a9d8f);">
              <img src="/insta10.jpg" alt="Post 10" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#128200;</div>
              <div class="ig-post-overlay"><span>&#9829; 94</span><span>&#128172; 7</span></div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#6a040f,#d00000);">
              <img src="/insta11.jpg" alt="Post 11" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#127344;</div>
              <div class="ig-post-overlay"><span>&#9829; 265</span><span>&#128172; 22</span></div>
            </div>
            <div class="ig-post" style="background:linear-gradient(135deg,#495057,#adb5bd);">
              <img src="/insta12.jpg" alt="Post 12" class="ig-post-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
              <div class="ig-post-inner" style="display:none;">&#128424;</div>
              <div class="ig-post-overlay"><span>&#9829; 118</span><span>&#128172; 9</span></div>
            </div>
          </div>
        </div>
        <div class="ig-visit-real">
          <a href="https://www.instagram.com/aaronsharp_2/" target="_blank" rel="noopener noreferrer">Visit real Instagram &#8599;</a>
        </div>
      </div>`,
  },
]
