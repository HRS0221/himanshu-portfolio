import { Logo } from "@once-ui-system/core";

// ✅ Add baseURL at the top
const baseURL = "https://himanshu-portfolio-six.vercel.app/"; // Change to your custom domain later

const person = {
  firstName: "Himanshu",
  lastName: "Salunke",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "GATE - 2026 Aspirant",
  avatar: "/images/avatar.jpg",
  email: "contact.himanshusalunke@gmail.com",
  languages: ["English", "Hindi", "Marathi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write a monthly newsletter called <strong>The Minimalist Life</strong>{" "}
      where I share insights on personal growth, digital clarity, and mindful
      living in an AI-driven world.
    </>
  ),
  imagePath: "/images/newsletter/NewsletterImg.png",
  subscribeLink: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7085106786910769152",
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/HRS0221",
  },
  {
    name: "CodeChef",
    link: "https://www.codechef.com/users/hr0221",
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/himanshusalunke/",
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
        Recent project:{" "}
        <strong className="ml-4">
          Moving Vehicle Registration Plate Detection
        </strong>
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
    title: "My Journey",
    description: (
      <>
        My path to a B.Tech in Data Science has been unconventional. Early in my
        studies, I sustained a major leg fracture that required several years of
        recovery and multiple surgeries, which extended my academic timeline.
        <br />
        <br />
        This period was a profound test of discipline and resilience. I
        successfully returned to my studies with a renewed determination,
        completing both my diploma and my degree. This experience has given me a
        unique perspective on overcoming obstacles and a proven commitment to
        seeing complex challenges through to completion.
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
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20%
            increase in user engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows,
            enabling designers to iterate 50% faster.
          </>,
        ],
        images: [],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple
            platforms, improving design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </>,
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
        institution:
          "R. C. Patel Institute of Technology, An Autonomous Institute",
        degree: "Bachelor of Technology in Data Science",
        timeframe: "Dec 2021 – June 2024",
        cgpa: "CGPA: 7.39",
      },
      {
        institution: "R. C. Patel Polytechnic",
        degree: "Diploma in Computer Science",
        timeframe: "Aug 2017 – May 2021",
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
        description:
          "Computer Vision, Image Processing, Machine Learning, Deep Learning, Data Analysis, Microsoft Excel",
        images: [],
      },
      {
        title: "Languages",
        description: "Python, SQL, Java, C, C++, HTML, CSS",
        images: [],
      },
      {
        title: "Frameworks & Libraries",
        description: "Flask, Tensorflow, PyTorch, Keras, YOLO, scikit-learn",
        images: [],
      },
      {
        title: "Technologies",
        description:
          "QuickSight, Amazon Athena, AWS Glue, AWS Lambda, Amazon S3, IBM Watson Studio, Docker",
        images: [],
      },
      {
        title: "Developer Tools",
        description: "Tableau, PowerBI",
        images: [],
      },
    ],
  },
  credentials: {
    display: true,
    title: "Credentials",
    items: [
      {
        name: "DataCamp Certified: Associate Data Analyst",
        issuer: "DataCamp",
        date: "May 2024",
        link: "https://drive.google.com/file/d/1sRj_7Guc-tVBmw_bNZnBh6EcVmZUj1es/view",
      },
      {
        name: "DataCamp Certified: Associate Data Engineer",
        issuer: "DataCamp",
        date: "May 2024",
        link: "https://drive.google.com/file/d/1JseSVzsLL9maBkDioIufZIjpuhb07bSX/view",
      },
      {
        name: "Google Business Intelligence Certification",
        issuer: "Google",
        date: "April 2024",
        link: "https://drive.google.com/file/d/1CSfaO1kV1XpbChKfmWojA44Ge3xgVRvM/view",
      },
      {
        name: "Google Data Analytics Certification",
        issuer: "Google",
        date: "February 2024",
        link: "https://drive.google.com/file/d/1lrOPW3huOrYh1s5oakKSYOCJZHOKMq93/view",
      },
      {
        name: "Data Scientist Professional Certificate",
        issuer: "DataCamp",
        date: "October 2023",
        link: "https://drive.google.com/file/d/1CQIOT7vUbOoVcX7dwVmBBZNH9FOPiKrm/view",
      },
    ],
  },
  achievements: {
    display: true,
    title: "Leadership & Achievements",
    items: [
      {
        title: "Internal Hackathon Lead (SIH 2023)",
        description:
          "Led and coordinated an Internal Hackathon for Smart India Hackathon 2023, overseeing 85 teams and fostering innovation and collaboration.",
      },
      {
        title: "Grand Finalist (SUNHACKS 2022)",
        description:
          "Spearheaded a cross-functional effort at SUNHACKS 2022, an International Level Hackathon, securing Grand Finalist recognition among 15 elite teams.",
      },
      {
        title: "Grand Finalist (SIH 2022)",
        description:
          "Achieved Grand Finalist status at the National level in the Smart India Hackathon 2022, competing against 50 teams.",
      },
    ],
  },
};

// ✅ This 'articles' object has been re-ordered from oldest to newest
const articles = {
  display: true,
  title: "My AI Articles",
  label: "Articles",
  items: [
    {
      title: "What is Machine Learning?",
      image: "/images/articles/Machine-Learning.jpg",
      link: "https://www.linkedin.com/pulse/what-machine-learning-himanshu-salunke-dwgef/",
      publishedAt: "2024-03-01",
      slug: "what-is-machine-learning",
    },
    {
      title: "Hypothesis and Inductive Bias",
      image: "/images/articles/Hypothesis.jpg",
      link: "https://www.linkedin.com/pulse/what-hypothesis-inductive-bias-machine-learning-himanshu-salunke-yvqzf/",
      publishedAt: "2024-03-03",
      slug: "hypothesis-and-inductive-bias",
    },
    {
      title: "Linear Regression",
      image: "/images/articles/Linear Regression.jpg",
      link: "https://www.linkedin.com/pulse/what-regression-machine-learning-himanshu-salunke-m0zff/",
      publishedAt: "2024-03-06",
      slug: "linear-regression",
    },
    {
      title: "Least Mean Square (LMS)",
      image: "/images/articles/Least Mean Square.jpg",
      link: "https://www.linkedin.com/pulse/what-least-mean-square-lms-machine-learning-himanshu-salunke-mtp3f/",
      publishedAt: "2024-03-09",
      slug: "least-mean-square-lms",
    },
    {
      title: "Gradient Descent",
      image: "/images/articles/Gradient Descent.jpg",
      link: "https://www.linkedin.com/pulse/what-gradient-descent-machine-learning-himanshu-salunke-ray0f/",
      publishedAt: "2024-03-12",
      slug: "gradient-descent",
    },
    {
      title: "Lasso and Ridge Regression",
      image: "/images/articles/Lasso and Ridge.jpg",
      link: "https://www.linkedin.com/pulse/what-lasso-ridge-regression-machine-learning-himanshu-salunke-eg3ff/",
      publishedAt: "2024-03-15",
      slug: "lasso-and-ridge-regression",
    },
    {
      title: "Polynomial Regression",
      image: "/images/articles/Polynomial Regression.jpg",
      link: "https://www.linkedin.com/pulse/what-polynomial-regression-machine-learning-himanshu-salunke-xfqgc/",
      publishedAt: "2024-03-18",
      slug: "polynomial-regression",
    },
    {
      title: "Logistic Regression",
      image: "/images/articles/Logistic Regression.jpg",
      link: "https://www.linkedin.com/pulse/what-logistic-regression-machine-learning-himanshu-salunke-266zf/",
      publishedAt: "2024-03-21",
      slug: "logistic-regression",
    },
    {
      title: "Maximum Likelihood Estimation",
      image: "/images/articles/Maximum Likelihood Estimation.jpg",
      link: "https://www.linkedin.com/pulse/maximum-likelihood-estimation-machine-learning-himanshu-salunke-igcbc/",
      publishedAt: "2024-03-24",
      slug: "maximum-likelihood-estimation",
    },
    {
      title: "Decision Tree",
      image: "/images/articles/Decision Tree.jpg",
      link: "https://www.linkedin.com/pulse/decision-tree-machine-learning-himanshu-salunke-y02mf/",
      publishedAt: "2024-03-27",
      slug: "decision-tree",
    },
    {
      title: "CART in Machine Learning",
      image: "/images/articles/Classification and Regression Tree.jpg",
      link: "https://www.linkedin.com/pulse/cart-machine-learning-himanshu-salunke-jh3xf/",
      publishedAt: "2024-03-30",
      slug: "cart-in-machine-learning",
    },
    {
      title: "Overfitting and Underfitting",
      image: "/images/articles/Overfitting and Underfitting.jpg",
      link: "https://www.linkedin.com/pulse/overfitting-underfitting-machine-learning-himanshu-salunke-aba5c/",
      publishedAt: "2024-04-02",
      slug: "overfitting-and-underfitting",
    },
    {
      title: "Ensemble Methods: Bagging, Boosting, Random Forest & XGBoost",
      image: "/images/articles/Bagging and Boosting.jpg",
      link: "https://www.linkedin.com/pulse/ensemble-methods-bagging-boosting-random-forest-xgboost-salunke-0j60f/",
      publishedAt: "2024-04-05",
      slug: "ensemble-methods",
    },
    {
      title: "Bayesian Learning: A Dive into Probabilistic Modeling",
      image: "/images/articles/Bayesian Learning.jpg",
      link: "https://www.linkedin.com/pulse/bayesian-learning-dive-probabilistic-modeling-himanshu-salunke-clctf/",
      publishedAt: "2024-04-08",
      slug: "bayesian-learning",
    },
    {
      title: "Support Vector Machine (SVM)",
      image: "/images/articles/Support Vector Machine.jpg",
      link: "https://www.linkedin.com/pulse/support-vector-machine-svm-learning-himanshu-salunke-u0r1f/",
      publishedAt: "2024-04-11",
      slug: "support-vector-machine-svm",
    },
    {
      title: "K-Means Clustering: Centroid, Inertia, Convergence & More",
      image: "/images/articles/K-Means.jpg",
      link: "https://www.linkedin.com/pulse/k-means-clustering-centroid-inertia-convergence-more-himanshu-salunke-0rkxf/",
      publishedAt: "2024-04-14",
      slug: "k-means-clustering",
    },
    {
      title: "Adaptive Hierarchical Clustering & Gaussian Mixture Models",
      image: "/images/articles/Adaptive Hierarchical.jpg",
      link: "https://www.linkedin.com/pulse/adaptive-hierarchical-clustering-gaussian-mixture-models-salunke-e8b0f/",
      publishedAt: "2024-04-17",
      slug: "adaptive-hierarchical-clustering",
    },
    {
      title: "Biological Neural Network in Artificial Neural Network",
      image: "/images/articles/Biological Neural Network.jpg",
      link: "https://www.linkedin.com/pulse/biological-neural-network-artificial-himanshu-salunke-slypf/",
      publishedAt: "2024-04-20",
      slug: "biological-neural-network",
    },
    {
      title:
        "Terminologies in ANN: Activation Function, Weights, Bias & Learning Rate",
      image: "/images/articles/Terminologies of ANN.jpg",
      link: "https://www.linkedin.com/pulse/terminologies-ann-activation-function-weights-bias-learning-salunke-7dgnf/",
      publishedAt: "2024-04-23",
      slug: "terminologies-in-ann",
    },
    {
      title: "McCulloch-Pitts Neuron & Hebb Network",
      image: "/images/articles/Mcculloch and Hebb Network.jpg",
      link: "https://www.linkedin.com/pulse/mcculloch-pitts-neuron-hebb-network-himanshu-salunke-amaof/",
      publishedAt: "2024-04-26",
      slug: "mcculloch-pitts-neuron-hebb-network",
    },
    {
      title:
        "Power of Perceptron: Training Rule, Gradient Descent & Delta Rule",
      image: "/images/articles/Perceptron, Gradient Descent, Delta Rule.jpg",
      link: "https://www.linkedin.com/pulse/power-perceptron-training-rule-gradient-descent-delta-salunke-nd5nc/",
      publishedAt: "2024-04-29",
      slug: "power-of-perceptron",
    },
    {
      title: "Multilayer Network: Threshold Unit & Feedforward Networks",
      image: "/images/articles/Multilayer and feedforward.jpg",
      link: "https://www.linkedin.com/pulse/multilayer-network-threshold-unit-feedforward-himanshu-salunke-tti5f/",
      publishedAt: "2024-05-02",
      slug: "multilayer-network",
    },
    {
      title:
        "Backpropagation Algorithm: Convergence, Local Minima & Space Complexity",
      image: "/images/articles/BackPropagation.jpg",
      link: "https://www.linkedin.com/pulse/backpropagation-algorithm-convergence-local-minima-space-salunke-4ekze/",
      publishedAt: "2024-05-05",
      slug: "backpropagation-algorithm",
    },
    {
      title: "Regularization: Parameter Norm Penalties, Dataset Noise & More",
      image: "/images/articles/Regularization Techniques.jpg",
      link: "https://www.linkedin.com/pulse/regularization-parameter-norm-penalties-dataset-noise-salunke-oyg7f/",
      publishedAt: "2024-05-08",
      slug: "regularization-techniques",
    },
    {
      title:
        "Training Deep Models: Neural Network Optimization & Basic Algorithms",
      image: "/images/articles/Deep Models.jpg",
      link: "https://www.linkedin.com/pulse/training-deep-models-neural-network-optimization-basic-salunke-mghwf/",
      publishedAt: "2024-05-11",
      slug: "training-deep-models",
    },
    {
      title: "Convolution Network: Sparse Interactions & Parameter Sharing",
      image: "/images/articles/Convolution Network.jpg",
      link: "https://www.linkedin.com/pulse/convolution-network-sparse-interactions-parameter-sharing-salunke-vpywf/",
      publishedAt: "2024-05-14",
      slug: "convolution-network",
    },
    {
      title: "Recurrent Neural Network: Bidirectional RNN & Deep Networks",
      image: "/images/articles/Recurrent Neural Network.jpg",
      link: "https://www.linkedin.com/pulse/recurrent-neural-network-bidirectional-rnn-deep-networks-salunke-9f66f/",
      publishedAt: "2024-05-17",
      slug: "recurrent-neural-network",
    },
    {
      title: "Unsupervised Learning: Kohonen Self-Organizing Feature Maps",
      image: "/images/articles/Kohonen Algorithm.jpg",
      link: "https://www.linkedin.com/pulse/unsupervised-learning-kohonen-self-organizing-feature-salunke-cj6tf/",
      publishedAt: "2024-05-20",
      slug: "kohonen-self-organizing-feature-maps",
    },
    {
      title:
        "Linear Factor Methods: Probabilistic PCA Analysis & Sparse Coding",
      image: "/images/articles/Linear Factor Methods.jpg",
      link: "https://www.linkedin.com/pulse/linear-factor-methods-probabilistic-pca-analysis-sparse-salunke-mibdf/",
      publishedAt: "2024-05-23",
      slug: "linear-factor-methods",
    },
    {
      title: "Undercomplete Autoencoders: Regularized & Stochastic Encoders",
      image: "/images/articles/Autoencoders.jpg",
      link: "https://www.linkedin.com/pulse/undercomplete-autoencoders-regularized-stochastic-encoders-salunke-zhfaf/",
      publishedAt: "2024-05-26",
      slug: "undercomplete-autoencoders",
    },
    {
      title: "Generative Adversarial Networks (GAN) vs Discriminative Models",
      image: "/images/articles/GAN.jpg",
      link: "https://www.linkedin.com/pulse/generative-adversarial-networks-gan-vs-discriminative-salunke-lskif/",
      publishedAt: "2024-05-29",
      slug: "generative-adversarial-networks-gan",
    },
    {
      title:
        "Explaining & Interpreting Black Box to White Box Models: SHAP & Shapley Values",
      image: "/images/articles/Explainable AI.jpg",
      link: "https://www.linkedin.com/pulse/explaining-interpreting-black-box-white-models-shap-shapley-salunke-cjldf/",
      publishedAt: "2024-06-01",
      slug: "explainable-ai-shap-shapley-values",
    },
    {
      title:
        "Reinforcement Learning Elements vs Supervised & Policy-based Methods",
      image: "/images/articles/Reinforcement Learning.jpg",
      link: "https://www.linkedin.com/pulse/reinforcement-learning-elements-vs-supervised-policy-based-salunke-ykhff/",
      publishedAt: "2024-06-04",
      slug: "reinforcement-learning-elements",
    },
    {
      title:
        "Bandit Problems: Value & Action-based Methods, Greedy Problem Solving",
      image: "/images/articles/Bandit Problems.jpg",
      link: "https://www.linkedin.com/pulse/bandit-problems-value-action-based-methods-greedy-problem-salunke-xonef/",
      publishedAt: "2024-06-07",
      slug: "bandit-problems",
    },
    {
      title: "Linear Reward Penalty Algorithm & Parameterized Policy Gradient",
      image: "/images/articles/Linear Reward.jpg",
      link: "https://www.linkedin.com/pulse/linear-reward-penalty-algorithm-parameterized-policy-himanshu-salunke-mwtif/",
      publishedAt: "2024-06-10",
      slug: "linear-reward-penalty-algorithm",
    },
    {
      title: "Immediate & Full Reinforcement Learning: Agents, Goals & Rewards",
      image: "/images/articles/Reinforcement Learning.jpg",
      link: "https://www.linkedin.com/pulse/immediate-full-reinforcement-learning-agents-goals-rewards-salunke-njx4f/",
      publishedAt: "2024-06-12",
      slug: "immediate-full-reinforcement-learning",
    },
    {
      title:
        "Markov Decision Process: Property, Finite Value & Bellman's Equations",
      image: "/images/articles/Markov Decision.jpg",
      link: "https://www.linkedin.com/pulse/markov-decision-process-property-finite-value-bellmans-salunke-dfzof/",
      publishedAt: "2024-06-15",
      slug: "markov-decision-process",
    },
    {
      title:
        "Policy Evaluation, Improvement & Iteration: Value & Dynamic Programming",
      image: "/images/articles/Policy Evaluation.jpg",
      link: "https://www.linkedin.com/pulse/policy-evaluation-improvement-iteration-value-dynamic-salunke-ci9af/",
      publishedAt: "2024-06-18",
      slug: "policy-evaluation-and-improvement",
    },
    {
      title: "Monte Carlo Method over Dynamic Programming: Control & More",
      image: "/images/articles/Monte Carlo.jpg",
      link: "https://www.linkedin.com/pulse/monte-carlo-method-over-dynamic-programming-control-more-salunke-drcuf/",
      publishedAt: "2024-06-20",
      slug: "monte-carlo-method",
    },
    {
      title: "Temporal Difference Learning Methods over Monte Carlo",
      image: "/images/articles/Temporal Difference.jpg",
      link: "https://www.linkedin.com/pulse/temporal-difference-learning-methods-over-monte-carlo-salunke-qbcmf/",
      publishedAt: "2024-06-22",
      slug: "temporal-difference-learning",
    },
    {
      title:
        "Function Approximation: Tabular Implementation & Gradient Methods",
      image: "/images/articles/Function Approximation.jpg",
      link: "https://www.linkedin.com/pulse/function-approximation-tabular-implementation-gradient-salunke-q4nqf/",
      publishedAt: "2024-06-25",
      slug: "function-approximation-in-reinforcement-learning",
    },
    {
      title: "Deep Learning in Reinforcement: Training Workflow & More",
      image: "/images/articles/Deep Learning.jpg",
      link: "https://www.linkedin.com/pulse/deep-learning-reinforcement-training-workflow-more-himanshu-salunke-s7cgf/",
      publishedAt: "2024-06-28",
      slug: "deep-learning-in-reinforcement-learning",
    },
  ],
};

const article = {
  ...articles,
  path: "/article",
  label: "Articles",
  description: `Explore 40+ AI articles written by ${person.name}, covering Machine Learning, Deep Learning, and more.`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects - ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const contact = {
  path: "/contact",
  label: "Contact",
  title: "Get in Touch",
  description: "Always excited to connect with new people. Feel free to reach out about projects, new opportunities, or anything else.",
};




const skills = [
  {
    name: "Computer Vision",
    description:
      "I applied advanced computer vision techniques using OpenCV to detect and recognize vehicle registration plates in real-time for the Smart India Hackathon.",
    projectSlug: "smart-india-hackathon-2022",
  },
  {
    name: "Deep Learning",
    description:
      "Leveraged TensorFlow and Keras to build and train a convolutional neural network for classifying plant leaf diseases from images with high accuracy.",
    projectSlug: "plant-leaf-disease-prediction",
  },
  {
    name: "Data Analysis",
    description:
      "Conducted a full-scale analysis of the Google Play Store dataset to uncover trends and insights about the Android app market.",
    projectSlug: "android-app-market-analysis",
  },
];

// At the bottom of src/resources/content.js

export {
  person,
  social,
  newsletter,
  home,
  about,
  articles,
  article,
  work,
  contact, // ✅ Make sure this line is here
  skills,
};