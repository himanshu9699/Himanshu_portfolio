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
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Nutrii++ - AI Calorie tracker',
    desc: "Nutrii++ is an intelligent system that leverages advanced deep learning techniques, including Convolutional Neural Networks (CNNs), to accurately predict the calorie content of food from images.",
    subdesc: "By combining computer vision and nutritional science, Nutrii++ simplifies calorie tracking and promotes healthier eating habits. This innovative solution showcases expertise in machine learning and image processing.",
    texture: '/textures/project/project1.mp4',
    logo: 'assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: 'assets/icons8-python-48.png',
      },
      {
        id: 2,
        name: 'Tensorflow',
        path: 'assets/icons8-tensorflow-48.png',
      },
      {
        id: 3,
        name: 'OpenCv',
        path: 'assets/icons8-opencv-48.png',
      },
      {
        id: 4,
        name: 'Docker',
        path: 'assets/icons8-docker-48.png',
      },
    ],
  },
  {
    title: 'CUSTOMER SUPPORT CHATBOT',
    desc: 'Designed and developed an intelligent chatbot using LLaMA 2 to provide human-like responses and manage multi-turn conversations for enhanced customer engagement.',
    subdesc:
      'To ensure scalability and real-time query handling, the chatbot API was deployed using FastAPI and Docker. This robust deployment approach enabled efficient handling of customer queries, making the solution reliable and adaptable for dynamic business environments.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: 'assets/icons8-python-48.png',
      },
      {
        id: 2,
        name: 'Tensorflow',
        path: 'assets/icons8-tensorflow-48.png',
      },
      {
        id: 3,
        name: 'OpenCv',
        path: 'assets/icons8-opencv-48.png',
      },
      {
        id: 4,
        name: 'Docker',
        path: 'assets/icons8-docker-48.png',
      },
    ],  
  },
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: 'assets/icons8-python-48.png',
      },
      {
        id: 2,
        name: 'Tensorflow',
        path: 'assets/icons8-tensorflow-48.png',
      },
      {
        id: 3,
        name: 'OpenCv',
        path: 'assets/icons8-opencv-48.png',
      },
      {
        id: 4,
        name: 'Docker',
        path: 'assets/icons8-docker-48.png',
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
    name: 'Data Engineer',
    pos: 'Prescience Decision Solution',
    duration: '2024 - Present',
    title: "Developed a Data Transformation tool which gets the data from databases and cleans the data by applying some rules which is now deployed in AWS marketplace, Developed a summarization tool using llm to summarize the data which we got from Annual reports of company, Consulted with other teams to jump start cloud-technology adoption and solutions throughout the company, Developed a tutor chatbot that is used Socratic teaching for 1st to 12th class students in schools",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Data Analyst',
    pos: 'Naya Sawera Ngo',
    duration: '2022 - 2023',
    title: "Analyzed data for an NGO to identify optimal locations for student welfare campaigns and strategically targeted areas for potential donation requests based on historical data.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
];
