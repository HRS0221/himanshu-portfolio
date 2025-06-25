import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Himanshu",
  lastName: "Salunke",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "GATE - 2026 Aspirant",
  avatar: "/images/avatar.jpg", // Path to your avatar image
  email: "contact.himanshusalunke@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Marathi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write a monthly newsletter called <strong>The Minimalist Life</strong> where I share insights on personal growth, digital clarity, and mindful living in an AI-driven world.
    </>
  ),
};


const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/HRS0221",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/hr0221/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/Wiser_0221",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transforming raw data into real-world impact</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Moving Vehicle Registration Plate Detection</strong></>,
    href: "https://github.com/HRS0221/Smart-India-Hackathon-2022", // Replace with actual link
  },
  subline: (
    <>
        I'm Himanshu - decoding data, designing intelligence.
      <br /> Preparing for GATE - 2026 while building AI that matters.
    </>
  ),
};


const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://topmate.io/himanshu_salunke",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>Beyond lines of code and models, I'm driven by a deeper question: 
      “What if tech could think with empathy?” My approach blends precision 
      with purpose,   valuing clarity over complexity and curiosity over convention. 
      I believe in building quietly, learning relentlessly, and letting the work speak before the resume does.
      </>
),

  },

  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },

/**Original CODE */

  // studies: {
  //   display: true, // set to false to hide this section
  //   title: "Studies",
  //   institutions: [
  //     {
  //       name: "R. C. Patel Institute of Technology, Shirpur An Autonomous Institute",
  //       description: <>Data Science</>,
  //     },
  //     {
  //       name: "R. C. Patel Polytechnic, Shirpur",
  //       description: <>Computer Engineering</>,
  //     },
  //   ],
  // },

/**MY CODE */

studies: {
  display: true,
  title: "Education",
  institutions: [
    {
      institution: "R. C. Patel Institute of Technology, Shirpur (An Autonomous Institute)",
      degree: "Bachelor of Technology in Data Science",
      timeframe: "Dec 2021 - June 2024",
      cgpa: "CGPA: 7.39",
    },
    {
      institution: "R. C. Patel Polytechnic, Shirpur",
      degree: "Diploma in Computer Science",
      timeframe: "Aug 2017 - May 2021",
      cgpa: "CGPA: 9.4",
    },
  ],
},


  /**Original Code*/

  // technical: {
  //   display: true, // set to false to hide this section
  //   title: "Technical skills",
  //   skills: [
  //     {
  //       title: "Figma",
  //       description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
  //       // optional: leave the array empty if you don't want to display images
  //       images: [
  //         {
  //           src: "/images/projects/project-01/cover-02.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //         {
  //           src: "/images/projects/project-01/cover-03.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Next.js",
  //       description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
  //       // optional: leave the array empty if you don't want to display images
  //       images: [
  //         {
  //           src: "/images/projects/project-01/cover-04.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //       ],
  //     },
  //   ],
  // },

/** My code*/

technical: {
  display: true,
  title: "Technical Skills",
  skills: [
    {
      title: "Areas of Focus",
      description: (
        <>
          Computer Vision, Image Processing, Machine Learning, Deep Learning, Data Analysis, Microsoft Excel
        </>
      ),
      images: [],
    },
    {
      title: "Languages",
      description: (
        <>
          Python, SQL, Java, C, C++, HTML, CSS
        </>
      ),
      images: [],
    },
    {
      title: "Frameworks & Libraries",
      description: (
        <>
          Flask, TensorFlow, PyTorch, Keras, YOLO, Scikit-learn
        </>
      ),
      images: [],
    },
    {
      title: "Cloud & Platforms",
      description: (
        <>
          AWS (Amazon S3, Amazon Athena, AWS Glue, AWS Lambda, QuickSight), Google Cloud, IBM Watson Studio, Docker
        </>
      ),
      images: [],
    },
    {
      title: "Data Visualization",
      description: (
        <>
          Tableau, Power BI
        </>
      ),
      images: [],
    },
    {
      title: "Developer Tools",
      description: (
        <>
          Git, GitHub, VS Code, Google Colab, Jupyter Notebook
        </>
      ),
      images: [],
    },
  ],
},
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects - ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
