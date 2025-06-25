import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Himanshu",
  lastName: "Salunke",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "GATE - 2026 Aspirant",
  avatar: "/images/avatar.jpg",
  email: "contact.himanshusalunke@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi", "Marathi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write a monthly newsletter called <strong>The Minimalist Life</strong> where I share
      insights on personal growth, digital clarity, and mindful living in an AI-driven world.
    </>
  ),
};

const social = [
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
    title: (
      <>
        Recent project: <strong className="ml-4">Moving Vehicle Registration Plate Detection</strong>
      </>
    ),
    href: "https://github.com/HRS0221/Smart-India-Hackathon-2022",
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
      <>
        Beyond lines of code and models, I'm driven by a deeper question:
        “What if tech could think with empathy?” My approach blends precision
        with purpose, valuing clarity over complexity and curiosity over convention.
        I believe in building quietly, learning relentlessly, and letting the work speak before the resume does.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
          <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>,
        ],
        images: [
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
          <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
          <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>,
        ],
        images: [],
      },
    ],
  },
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
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Areas of Focus",
        description: (
          <>Computer Vision, Image Processing, Machine Learning, Deep Learning, Data Analysis, Microsoft Excel</>
        ),
        images: [],
      },
      {
        title: "Languages",
        description: <>Python, SQL, Java, C, C++, HTML, CSS</>,
        images: [],
      },
      {
        title: "Frameworks & Libraries",
        description: <>Flask, TensorFlow, PyTorch, Keras, YOLO, Scikit-learn</>,
        images: [],
      },
      {
        title: "Cloud & Platforms",
        description: <>AWS (Amazon S3, Amazon Athena, AWS Glue, AWS Lambda, QuickSight), Google Cloud, IBM Watson Studio, Docker</>,
        images: [],
      },
      {
        title: "Data Visualization",
        description: <>Tableau, Power BI</>,
        images: [],
      },
      {
        title: "Developer Tools",
        description: <>Git, GitHub, VS Code, Google Colab, Jupyter Notebook</>,
        images: [],
      },
    ],
  },
};

// You already have 42 articles in this object:
const articles = {
  display: true,
  title: "My AI Articles",
  label: "Articles", // ✅ <-- Add this line
  items: [
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/what-machine-learning-himanshu-salunke-dwgef/?trackingId=X4XnUN3VRbK89it6zk8mnA%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/what-hypothesis-inductive-bias-machine-learning-himanshu-salunke-yvqzf/?trackingId=X4XnUN3VRbK89it6zk8mnA%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/what-regression-machine-learning-himanshu-salunke-m0zff/?trackingId=MsXFqA49TmyrQBT0QZgClg%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/what-least-mean-square-lms-machine-learning-himanshu-salunke-mtp3f/?trackingId=MsXFqA49TmyrQBT0QZgClg%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/what-gradient-descent-machine-learning-himanshu-salunke-ray0f/?trackingId=MsXFqA49TmyrQBT0QZgClg%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/what-lasso-ridge-regression-machine-learning-himanshu-salunke-eg3ff/?trackingId=MsXFqA49TmyrQBT0QZgClg%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/what-polynomial-regression-machine-learning-himanshu-salunke-xfqgc/?trackingId=MsXFqA49TmyrQBT0QZgClg%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/what-logistic-regression-machine-learning-himanshu-salunke-266zf/?trackingId=MsXFqA49TmyrQBT0QZgClg%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/maximum-likelihood-estimation-machine-learning-himanshu-salunke-igcbc/?trackingId=MsXFqA49TmyrQBT0QZgClg%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/decision-tree-machine-learning-himanshu-salunke-y02mf/?trackingId=MsXFqA49TmyrQBT0QZgClg%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/cart-machine-learning-himanshu-salunke-jh3xf/?trackingId=MsXFqA49TmyrQBT0QZgClg%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/overfitting-underfitting-machine-learning-himanshu-salunke-aba5c/?trackingId=MsXFqA49TmyrQBT0QZgClg%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/ensemble-methods-bagging-boosting-random-forest-xgboost-salunke-0j60f/?trackingId=MsXFqA49TmyrQBT0QZgClg%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/bayesian-learning-dive-probabilistic-modeling-himanshu-salunke-clctf/?trackingId=MsXFqA49TmyrQBT0QZgClg%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/support-vector-machine-svm-learning-himanshu-salunke-u0r1f/?trackingId=MsXFqA49TmyrQBT0QZgClg%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/k-means-clustering-centroid-inertia-convergence-more-himanshu-salunke-0rkxf/?trackingId=MsXFqA49TmyrQBT0QZgClg%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/adaptive-hierarchical-clustering-gaussian-mixture-models-salunke-e8b0f/?trackingId=MsXFqA49TmyrQBT0QZgClg%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/biological-neural-network-artificial-himanshu-salunke-slypf/?trackingId=MsXFqA49TmyrQBT0QZgClg%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/terminologies-ann-activation-function-weights-bias-learning-salunke-7dgnf/?trackingId=MsXFqA49TmyrQBT0QZgClg%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/mcculloch-pitts-neuron-hebb-network-himanshu-salunke-amaof/?trackingId=MsXFqA49TmyrQBT0QZgClg%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/power-perceptron-training-rule-gradient-descent-delta-salunke-nd5nc/?trackingId=MsXFqA49TmyrQBT0QZgClg%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/multilayer-network-threshold-unit-feedforward-himanshu-salunke-tti5f/?trackingId=MsXFqA49TmyrQBT0QZgClg%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/backpropagation-algorithm-convergence-local-minima-space-salunke-4ekze/?trackingId=OSfQ%2F3t3RK%2BhZtaaUxsUPw%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/regularization-parameter-norm-penalties-dataset-noise-salunke-oyg7f/?trackingId=OSfQ%2F3t3RK%2BhZtaaUxsUPw%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/training-deep-models-neural-network-optimization-basic-salunke-mghwf/?trackingId=OSfQ%2F3t3RK%2BhZtaaUxsUPw%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/convolution-network-sparse-interactions-parameter-sharing-salunke-vpywf/?trackingId=OSfQ%2F3t3RK%2BhZtaaUxsUPw%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/recurrent-neural-network-bidirectional-rnn-deep-networks-salunke-9f66f/?trackingId=OSfQ%2F3t3RK%2BhZtaaUxsUPw%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/unsupervised-learning-kohonen-self-organizing-feature-salunke-cj6tf/?trackingId=OSfQ%2F3t3RK%2BhZtaaUxsUPw%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/linear-factor-methods-probabilistic-pca-analysis-sparse-salunke-mibdf/?trackingId=OSfQ%2F3t3RK%2BhZtaaUxsUPw%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/undercomplete-autoencoders-regularized-stochastic-encoders-salunke-zhfaf/?trackingId=OSfQ%2F3t3RK%2BhZtaaUxsUPw%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/generative-adversarial-networks-gan-vs-discriminative-salunke-lskif/?trackingId=OSfQ%2F3t3RK%2BhZtaaUxsUPw%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/explaining-interpreting-black-box-white-models-shap-shapley-salunke-cjldf/?trackingId=OSfQ%2F3t3RK%2BhZtaaUxsUPw%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/reinforcement-learning-elements-vs-supervised-policy-based-salunke-ykhff/?trackingId=OSfQ%2F3t3RK%2BhZtaaUxsUPw%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/bandit-problems-value-action-based-methods-greedy-problem-salunke-xonef/?trackingId=OSfQ%2F3t3RK%2BhZtaaUxsUPw%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/linear-reward-penalty-algorithm-parameterized-policy-himanshu-salunke-mwtif/?trackingId=OSfQ%2F3t3RK%2BhZtaaUxsUPw%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/immediate-full-reinforcement-learning-agents-goals-rewards-salunke-njx4f/?trackingId=OSfQ%2F3t3RK%2BhZtaaUxsUPw%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/markov-decision-process-property-finite-value-bellmans-salunke-dfzof/?trackingId=OSfQ%2F3t3RK%2BhZtaaUxsUPw%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/policy-evaluation-improvement-iteration-value-dynamic-salunke-ci9af/?trackingId=OSfQ%2F3t3RK%2BhZtaaUxsUPw%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/monte-carlo-method-over-dynamic-programming-control-more-salunke-drcuf/?trackingId=OSfQ%2F3t3RK%2BhZtaaUxsUPw%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/temporal-difference-learning-methods-over-monte-carlo-salunke-qbcmf/?trackingId=OSfQ%2F3t3RK%2BhZtaaUxsUPw%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/function-approximation-tabular-implementation-gradient-salunke-q4nqf/?trackingId=OSfQ%2F3t3RK%2BhZtaaUxsUPw%3D%3D",
    },
    {
      title: "",
      image: "",
      link: "https://www.linkedin.com/pulse/deep-learning-reinforcement-training-workflow-more-himanshu-salunke-s7cgf/?trackingId=OSfQ%2F3t3RK%2BhZtaaUxsUPw%3D%3D",
    },
  ],
};

// 🧠 Alias for backward compatibility:
const blog = {
  ...articles,
  path: "/blog",
  label: "Articles",
  description: `Explore 40+ AI articles written by ${person.name}, covering Machine Learning, Deep Learning, and more.`,
};


const work = {
  path: "/work",
  label: "Work",
  title: `Projects - ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
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

// ✅ Final export
export {
  person,
  social,
  newsletter,
  home,
  about,
  articles,
  blog,        // ✅ add this line
  work,
  gallery,
};


