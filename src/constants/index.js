export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Nijin KV',
    position: 'CEO FindAStartup',
    img: 'assets/nijin.jpeg',
    review:
      'Working with Adith was an inspiring experience. He brought fresh ideas and a clear technical vision to the project, helping us turn our startup concept into a polished, scalable product. His problem-solving skills and dedication made a real difference  truly a reliable and innovative developer.',
  },
  {
    id: 2,
    name: 'Augustine Vadakumcherry',
    position: 'Founder of LenientTree',
    img: 'assets/Agustine.jpeg',
    review:
      'Adith has an exceptional eye for design and functionality. He seamlessly blended creativity with technical precision to deliver exactly what our brand needed. His ability to understand requirements and execute them efficiently sets him apart from the rest.',
  },
  {
    id: 3,
    name: 'Dr. Pramod Gopinath',
    position: 'Chair,IEEE Photonics Society KS  ',
    img: 'assets/pramod.jpeg',
    review:
      'I can’t say enough good things about Adith. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Hari Prasad',
    position: 'AI Researcher, Minus Zero',
    img: 'assets/HP.jpeg',
    review:
      'Adith is an exceptional developer with a deep understanding of AI and its real-world applications. His ability to combine creativity with technical precision makes him stand out in every project he takes on. Working with him was a seamless experience'
  },
];

export const myProjects = [
  {
    title: 'Licensure',
    desc: 'Licensure is a modern pharmacy institute dedicated to building skilled, confident, and career-ready pharmacy professionals. With expert faculty, practical training, and a student-first approach, it prepares you to thrive in the healthcare industry',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript,  Podcastr is designed for optimal performance and scalability.',
    href: 'https://github.com/FindAStartup/Licensure',
    texture: '/textures/project/licensure.mp4',
    logo: '/assets/licensure.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Alumni connect',
    desc: 'Alumni Connect is a professional networking platform built to bridge the gap between students, faculty, and alumni fostering collaboration, mentorship, and career growth within college communities',
    subdesc:
      'With Alumni connect, users can experience the future of collaboration, where people can connect and  work together in real time without any lag, by using Next.js and Supabase newest features.',
    texture: '/textures/project/connect.mp4',
    logo: '/assets/connect.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Pollo-Mio',
    desc: 'Pollo Mio is a modern restaurant website designed to showcase the vibrant flavors and welcoming atmosphere of Pollo Mio Chicken & Sides a brand known for its fresh, flame-grilled dishes and signature burgers.',
    subdesc:
      'With a focus on efficiency and built using Next.js,Twillind and Email.JS that enhance operational workflows.',
    href: 'https://www.pollomio.in/',
    texture: '/textures/project/pollomio.mp4',
    logo: '/assets/pollomio.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Job Management ',
    desc: 'Developed a full-stack job estimation and management platform designed for automobile workshops. The system allows estimators to create detailed job cards, assign workers and machines, and automatically calculate total costs based on category hourly rates, machine operation time, and material costs',
    subdesc:
      'Built with React.js, Node.js, and MongoDB, this smart workshop estimator automates real-time job costing by integrating dynamic machine rates, man-hour calculations, and material tracking through RESTful APIs.',
    href: 'https://jobmanagementsystem-1.onrender.com/',
    texture: '/textures/project/job.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/js.png',
      },
      {
        id: 4,
        name: 'Mongo DB',
        path: '/assets/mongo.png',
      },
    ],
  },
  {
    title: 'ShareTaste',
    desc: 'ShareTaste is a web application designed to help users discover, share, and organize recipes based on their dietary preferences, allergies, and ingredient availability. The platform promotes safe and personalized cooking experiences by using AI-driven validation to ensure ingredient combinations are non-toxic and cooking instructions are reliable.',
    subdesc:
      'Built using the MERN stack and powered by Google’s Gemini AI, ShareTaste offers an intelligent, user-friendly platform for sharing and discovering personalized recipes effortlessly.',
    href: 'https://client-lqzc.onrender.com',
    texture: '/textures/project/sharetaste.mp4',
    logo: '/assets/circlelogo.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongo.png',
      },
      {
        id: 4,
        name: 'Gemini',
        path: '/assets/gemini.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'FindAStartup',
    pos: 'Full Stack Developer',
    duration: 'Nov 2024 - Present',
    title: "At FindAStartup, I contributed to developing full-stack web projects, collaborated on outsourced client solutions, and led technical teaching sessions for budding developers, bridging practical skills with real-world applications.",
    icon: '/assets/FAS.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'LenientTree',
    pos: 'Full Stack Developer',
    duration: 'Jan 2025 - July 2025',
    title: "At LenientTree, I worked as a Full Stack Developer, building scalable applications using microservices architecture. I also designed and implemented cloud-based solutions on AWS, optimizing performance and reliability across multiple projects.",
    icon: '/assets/lt.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Webmaster',
    pos: 'IEEE Pphotonics Society  Kerala Chapter',
    duration: ' March 2024 - Jan  2025',
    title: "As the Webmaster of the IEEE Photonics Society Kerala Chapter, I developed a WordPress-based website to enhance the Society’s digital presence and streamline communication. The platform significantly improved student engagement and activity visibility across member institutions.",
    icon: '/assets/pho.jpg',
    animation: 'salute',
  },
];
