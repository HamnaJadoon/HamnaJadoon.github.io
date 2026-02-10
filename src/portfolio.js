/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hamna Khan",
  title: "Hi all, I'm Hamna",
  subTitle: emoji(
    "I'm Hamna Khan, a versatile professional with hands-on experience in operations management, content writing, content creation, HR support, and lead generation. Over the years, I've worked with both local and international clients, helping streamline processes, create impactful content, and drive growth through strategic outreach and communication. My work reflects a balance of creativity and structure, and I'm passionate about contributing to meaningful projects that make a difference."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/hani95/",
  gmail: "Khanhamna264@gmail.com",
  youtube: "https://youtube.com/@yourchannel",
  // Add your actual social media links above
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CREATIVE CONTENT WRITER AND STORYTELLER WHO BRINGS IDEAS TO LIFE THROUGH WORDS",
  skills: [
    emoji(
      "⚡ Craft compelling blog posts, articles, and web content that engage and convert readers"
    ),
    emoji(
      "⚡ Create engaging social media content and copywriting for brands and businesses"
    ),
    emoji(
      "⚡ Develop creative storytelling and content strategies for various platforms and audiences"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "Medium",
      fontAwesomeClassname: "fab fa-medium"
    },
    {
      skillName: "LinkedIn",
      fontAwesomeClassname: "fab fa-linkedin"
    },
    {
      skillName: "Instagram",
      fontAwesomeClassname: "fab fa-instagram"
    },
    {
      skillName: "Twitter",
      fontAwesomeClassname: "fab fa-twitter"
    },
    {
      skillName: "YouTube",
      fontAwesomeClassname: "fab fa-youtube"
    },
    {
      skillName: "TikTok",
      fontAwesomeClassname: "fab fa-tiktok"
    },
    {
      skillName: "Canva",
      fontAwesomeClassname: "fas fa-palette"
    },
    {
      skillName: "Google Docs",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "SEO",
      fontAwesomeClassname: "fas fa-search"
    },
    {
      skillName: "Copywriting",
      fontAwesomeClassname: "fas fa-pen-fancy"
    },
    {
      skillName: "Storytelling",
      fontAwesomeClassname: "fas fa-book-open"
    },
    {
      skillName: "Content Strategy",
      fontAwesomeClassname: "fas fa-lightbulb"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hazara University",
      logo: require("./assets/images/mansehra.jpg"),
      subHeader: "Bachelors – LLB",
      duration: "2021 – 2026",
      desc: "Currently pursuing Bachelor of Laws with excellent academic performance.",
      descBullets: ["CGPA: 3.9", "Location: Mansehra"]
    },
    {
      schoolName: "Tameer i Wattan Public School and College",
      logo: require("./assets/images/tameer.jpg"),
      subHeader: "Intermediate – Pre-Engineering",
      duration: "2019 – 2021",
      desc: "Completed intermediate studies with distinction in Pre-Engineering stream.",
      descBullets: ["Grade: A+", "Location: Abbottabad"]
    },
    {
      schoolName: "Tameer i Wattan Public School and College",
      logo: require("./assets/images/tameer.jpg"),
      subHeader: "Matriculation – Science",
      duration: "2017 – 2019",
      desc: "Completed matriculation with excellent performance in Science group.",
      descBullets: ["Grade: A+", "Location: Abbottabad"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Content Writing", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Social Media Handling",
      progressPercentage: "85%"
    },
    {
      Stack: "Content Strategy",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Dispatcher",
      company: "API Logistics",
      companylogo: require("./assets/images/api_logistics.png"),
      date: "April 2025 – June 2025",
      desc: "Coordinate drivers, manage routes, and ensure timely deliveries.",
      descBullets: [
        "Remote logistics coordination and dispatch software operations"
      ]
    },
    {
      role: "Freelancer",
      company: "Self-Employed",
      companylogo: require("./assets/images/company_logo.jpg"),
      date: "July 2024 – Present",
      desc: "Content writing for research papers and cybersecurity projects.",
      descBullets: [
        "International student tutoring and diverse project portfolio"
      ]
    },
    {
      role: "Operations Manager",
      company: "Stem Wizards Academia",
      companylogo: require("./assets/images/stem_wizard.jpg"),
      date: "Aug 2021 – Oct 2024",
      desc: "Operations management and STEM education content creation.",
      descBullets: ["Hybrid role combining operations and content development"]
    },
    {
      role: "Business Development Associate",
      company: "Webstergo",
      companylogo: require("./assets/images/webstergo.jpeg"),
      date: "Oct 2023 – May 2024",
      desc: "Team leadership and lead generation strategies.",
      descBullets: ["Remote business development and team management"]
    },
    {
      role: "Project Manager",
      company: "Air Academic",
      companylogo: require("./assets/images/airacademic.jpg"),
      date: "Feb 2023 – Aug 2024",
      desc: "Online education project and operations management.",
      descBullets: [
        "Remote educational service delivery and project coordination"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Portfolio",
  subtitle: "CREATIVE FOOD CONTENT AND VISUAL STORYTELLING PROJECTS",
  projects: [
    {
      image: require("./assets/images/burger.mp4"),
      projectName: "Crave in Every Layer",
      projectDesc:
        "Stacked to perfection. Shot to seduce. Every bite tells a story — and this one starts with your brand. Food content that sizzles for menus, ads, or socials."
    },
    {
      image: require("./assets/images/donuts.mp4"),
      projectName: "Sugar in Motion",
      projectDesc:
        "Hypnotic. Sweet. Scroll-stopping. Every frame crafted for maximum crave. Your treats deserve visuals that taste as good as they look."
    },
    {
      image: require("./assets/images/fresh lemons.mp4"),
      projectName: "FRESH — No Filter Needed",
      projectDesc:
        "The vibe: clean, crisp, unforgettable. Your product, front and center — no gimmicks, just perfection in motion. Let's shoot with style."
    },
    {
      image: require("./assets/images/layered craving.jpg"),
      projectName: "Breaking the Frame",
      projectDesc:
        "When your visuals leap off the screen — literally. Creative content that blends motion, imagination, and storytelling."
    },
    {
      image: require("./assets/images/new flavor.jpg"),
      projectName: "Layered Cravings",
      projectDesc:
        "Rich texture. Vivid design. Chocolate with a side of contrast. Food content that pops on the timeline — built for brands that want to be remembered (and devoured)."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "IHL Certificate Course",
      subtitle:
        "Two-Days International Humanitarian Law Certificate Course at Law Department Hazara University, Mansehra. Organized by ICRC (International Committee of the Red Cross).",
      image: require("./assets/images/certificate 1.jpg"),
      imageAlt: "IHL Certificate Course",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1jPFJ3RmkZxa5Jy6J_xwlDhQ9gs9tJNG4/view?usp=sharing"
        }
      ]
    },
    {
      title: "Academic Excellence Scholarship",
      subtitle:
        "Received scholarship of Rs. 121,200/- from Tameer-i-Wattan Public Schools & Colleges Abbottabad for outstanding academic performance and excellence.",
      image: require("./assets/images/certificate 2.jpg"),
      imageAlt: "Academic Excellence Scholarship",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1PFybAJl6COdPHPAGXRSiRvdkXvwtNhxs/view?usp=sharing"
        }
      ]
    },
    {
      title: "UN Resolution on Palestine Conference",
      subtitle:
        "Participated in One-Day Conference on 'UN Resolution on Palestine: Gaza's Humanitarian Crisis and International Response' at Hazara University, Mansehra.",
      image: require("./assets/images/certificate 3.jpg"),
      imageAlt: "UN Resolution on Palestine Conference",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/16zMpiyjaxJALZMCBUpG5T-jVkAOwC2JP/view"
        }
      ]
    },
    {
      title: "Genocide in Palestine Conference",
      subtitle:
        "Participated in National Conference on 'Genocide in Palestine: An International Law Perspective' organized by Department of Law, Hazara University, Mansehra.",
      image: require("./assets/images/certificate 4.jpg"),
      imageAlt: "Genocide in Palestine Conference",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1VR1h4pUgk8SeFjzy8YUbUfHD7VjT6IVo/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Work Sample",
  subtitle:
    "Academic research papers and technical content showcasing expertise in AI, technology, and analytical writing.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://drive.google.com/file/d/1HJftfwtJgijQV45lTNm5Taer5hZkKyng/view?usp=drive_link",
      title:
        "Artificial Intelligence in Cars: Revolutionizing the Future of the Automotive Industry",
      description:
        "Comprehensive research paper exploring AI integration in automotive systems, covering autonomous driving, ADAS, sensor fusion, and predictive maintenance technologies."
    },
    {
      url: "https://drive.google.com/file/d/1EaFn1lJMGz6itVvV6eaYhUp3Sjy0MuOs/view?usp=drive_link",
      title:
        "The Role of Artificial Intelligence in Transforming Traffic Systems, Road Infrastructure, and Vehicles",
      description:
        "Qualitative research methodology study examining AI's impact on transportation systems, focusing on technological readiness, policy frameworks, and ethical considerations."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "SHARING EXPERTISE ON CONTENT CREATION AND DIGITAL MARKETING STRATEGIES 🎤"
  ),

  talks: [
    {
      title: "Content Strategy for Digital Growth",
      subtitle: "Digital Marketing Conference 2023",
      slides_url: "#",
      event_url: "#"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92 311 5636597",
  email_address: "Khanhamna264@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
