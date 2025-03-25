/* ------------------------------ */
/*       NAV - Toggle menu        */
/* ------------------------------ */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburguer-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* ------------------------------ */
/*     PROFILE - Change title     */
/* ------------------------------ */

const texts = [
  "Telecom Engineer",
  "Software developer",
  "Data Analyst",
  "Bedroom musician",
];

const textElement = document.querySelector('.section__text__p2');

let index = 0;

const updateText = () => {
  textElement.classList.add('fade-out');
  setTimeout(() => {
    textElement.textContent = texts[index];
    index = (index + 1) % texts.length;
    textElement.classList.remove('fade-out');
  }, 500);

  
};

updateText();
setInterval(updateText, 3000);

/* ------------------------------ */
/*    EXP SECTION - Detail box    */
/* ------------------------------ */

// Data structure for experience details and related technologies
const experienceData = {
  stratesys: {
      description: "As an <strong>SAP Consultant</strong>, I work on large-scale SAP implementations, focusing on cloud solutions, process optimization, and cross-functional team collaboration.<br><br>I am currently working in the international SAP implantation project for <a href='https://media.renaultgroup.com/horse-new-leading-powertrain-technology-company-is-now-fully-operational-and-ready-to-reinvent-combustion/' target='_blank'>HORSE (RENAULT’s automotive factory)</a>. My main tasks are focused on custom parameterization of the Transport Management module and providing training to users in different Supply Chain scenarios.",
      tech: ["sap", "office", "java"]
  },
  indie: {
      description: "I made simple <strong>VST3/AU</strong> plugins with the <a href='https://juce.com/' target='_blank'>JUCE framework</a> in order to satisfy my interest in audio plugins and further my understanding of <strong>DSP</strong>.<br><br>I tried to recreate real pedals and sometimes even give them my own twist. To get an accurate simulation, I've found two optimal solutions:<br><li>Find an schematic and re-implement the processing with complicated matrix calculus. This is quite tedious and I'm leaving it for the future.</li><li>Capture the processed sound of the pedal to train an LSTM model in order to do the heavy work for me. The final product is a bit too CPU-heavy, but both the building and the result are so satisfying that it feels like cheating.</li><br><br>If you are interested, feel free to check out this <a href='https://gmoican.github.io/punkfx_landingPage/' target='_blank'>landing page</a>.",
      tech: ["cpp", "cmake", "juce", "figma", "python", "pytorch", "collab"]
  },
  capgemini: {
      description: "Developed and implemented new features for backend systems using <strong>Java</strong>, <strong>Spring Boot</strong>, and <strong>Maven</strong> as part of two large-scale projects.<br><br>Designed and maintained <strong>RESTful APIs</strong>, ensuring robust and scalable architecture.<br><br>Collaborated closely with cross-functional teams to gather requirements and deliver solutions aligned with business goals.<br><br>Created comprehensive <strong>unit and integration tests</strong> to ensure high code quality and performance, improving system reliability and reducing production issues.<br><br>Actively participated in code reviews, sprint planning, and Agile ceremonies.",
      tech: ["java", "spring", "maven", "sql", "docker"]
  },
  bmat: {
      description: "Developed a web application using <strong>Django</strong>, with a focus on <strong>web scraping</strong> to collect and process music-related data from various online sources.<br><br>Designed and implemented efficient scraping scripts to automate <strong>data extraction</strong>, ensuring accuracy and consistency across multiple platforms.<br><br>Contributed to a <strong>Machine Learning</strong> project for music recognition and classification, applying data processing techniques and models, which served as the foundation for my <strong>Master's thesis</strong>.<br><br>Collaborated with a multidisciplinary team of developers and data scientists, gaining exposure to the intersection of technology and the music industry.",
      tech: ["python", "django", "postgre"]
  },
  upv: {
      description: "As the music industry digitizes, royalty distribution systems have become more complex and fragmented, making it difficult to fairly remunerate artists and creators. Metadata matching algorithms have limitations in certain contexts, such as the Asian market due to the heterogeneity of textual representations of music entities. In addition, existing tools do not allow to successfully address certain use cases to provide scalable back office services for the music industry.<br><br>My <strong>Master's Thesis</strong> investigates how to apply new <strong>Machine Learning</strong> techniques in the field of musical entity resolution and also dwells in how these tools could be implemented into the company production systems.<br><br>This work was developed in the context of BMAT's <a href='https://www.linkedin.com/company/matchinglearning/posts/?feedView=all' target='_blank'>Matching Learning project</a>.",
      tech: ["python", "scikit", "xgboost"]
  },

  ua: {
      description: "The Sentinel-1A and Sentinel-1B satellites provide images of the Earth's surface with large coverage (250 km) every 6 days, making them ideal for monitoring processes that evolve over time, such as crop development. The images are acquired by transmitting electromagnetic pulses (in the C-band frequency) in vertical polarization and receiving simultaneously in vertical and horizontal polarization. Therefore, two polarimetric combinations or channels are measured: VV and VH.<br><br>The PAZ satellite has a smaller coverage (up to 100km) and sends images to Earth every 11 days. Although the temporal resolution is lower than that provided by the Sentinel-1 satellites, these images have a considerably higher spatial resolution. The images are acquired by means of electromagnetic pulses (in the X-band frequency) with HH and VV configurations.<br><br>In my <a href='https://drive.google.com/file/d/104gdjeTiYrBXXRfM1TltLn6Z1bXicyQe/view?usp=drive_link' target='_blank'>Bachelor's Thesis</a> I study the polarimetric information extracted from SAR images of rice crops; from these data and with the help of the abundant field information available, I intend to evaluate the state of flooding in which the plots are located.<br><br>In view of the above results, a qualitative and quantitative comparison is made of the information that can be extracted from the SAR images of each satellite and how this polarimetric information could be exploited in crop monitoring.",
      tech: ["python", "scikit", "snap"]
  }
};

const techIcons = {
  // Language
  java: "assets/img/tech/java.png",
  cpp: "assets/img/tech/cpp.png",
  python: "assets/img/tech/python.png",

  // Frontend
  angular: "assets/img/tech/angular.png",
  react: "assets/img/tech/react.png",

  // Backend
  spring: "assets/img/tech/springboot.png",
  maven: "assets/img/tech/maven.png",
  django: "assets/img/tech/django.png",
  flask: "assets/img/tech/flask.png",

  // Database
  sql: "assets/img/tech/sql.png",
  postgre: "assets/img/tech/postgresql.png",

  // Cloud
  aws: "assets/img/tech/aws.png",
  collab: "assets/img/tech/collab.png",
  docker: "assets/img/tech/docker.png",

  // Framework + Libraries
  juce: "assets/img/tech/juce.png",
  cmake: "assets/img/tech/cmake.png",
  scikit: "assets/img/tech/scikit.png",
  xgboost: "assets/img/tech/xgboost.png",
  pytorch: "assets/img/tech/pytorch.png",

  // Other tools
  sap: "assets/img/tech/sap.png",
  office: "assets/img/tech/office.png",
  snap: "assets/img/tech/snap.png",
  figma: "assets/img/tech/figma.png",
  
};

const expContainers = document.querySelectorAll('.exp-container');
const detailDescription = document.querySelector('.exp-detail-container p');
const techContainer = document.querySelector('.exp-detail-tech');

// Change description and tech for each experience entry
function updateExperienceDetails(experience) {
  
  // Update description
  detailDescription.innerHTML = experienceData[experience].description;

  // Update tech icons
  techContainer.innerHTML = "";
  experienceData[experience].tech.forEach(tech => {
      const img = document.createElement('img');
      img.src = techIcons[tech];
      img.alt = `${tech} icon`;
      techContainer.appendChild(img);
  });
}

// Makes the HOVER effect last on selected item
function selectExperience(expElement) {
  expContainers.forEach(container => container.classList.remove('selected'));
  expElement.classList.add('selected');
}

expContainers.forEach(container => {
  container.addEventListener('click', () => {
      selectExperience(container);
      const experienceId = container.querySelector('img').alt.split(" ")[0].toLowerCase();
      updateExperienceDetails(experienceId);
  });
});

// Default entry
// updateExperienceDetails('stratesys');

window.onload = function() {
  const firstExp = expContainers[0];
  const expId = firstExp.querySelector('img').alt.split(" ")[0].toLowerCase();
  selectExperience(firstExp);
  updateExperienceDetails(expId);
}