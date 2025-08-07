# Himanshu Salunke - Data Scientist & ML Engineer

A modern, responsive portfolio website built with Next.js 15, featuring a clean design, dark mode, and comprehensive project showcase. This portfolio demonstrates my journey as an aspiring data scientist, showcasing projects in machine learning, AI, and software development.

## 🌟 Features

### Core Features
- **Modern Design**: Clean, professional interface with smooth animations and glassmorphism effects
- **Enhanced Header**: Custom-designed navigation with unique SVG icons and responsive layout
- **Dark Mode**: Built-in dark theme with system preference detection and smooth transitions
- **Responsive Layout**: Optimized for all devices and screen sizes with adaptive navigation
- **Performance Optimized**: Fast loading with Next.js 15 optimizations and code splitting
- **SEO Optimized**: Meta tags, sitemap, and structured data for better search visibility
- **Automatic OG Images**: Dynamic Open Graph image generation using Vercel OG
- **Analytics**: Vercel Analytics and Speed Insights integration

### Content Management
- **MDX Support**: Rich content with Markdown and React components for projects
- **Dynamic Project Showcase**: 7 comprehensive data science and ML projects
- **Article System**: 40+ technical blog posts covering AI/ML concepts
- **Contact Form**: Integrated with Slack notifications for real-time alerts
- **Newsletter Integration**: LinkedIn newsletter subscription system

### Technical Features
- **TypeScript**: Full type safety and better development experience
- **SASS/SCSS**: Advanced styling with CSS modules and custom animations
- **Component Library**: Custom UI system with Once UI and enhanced components
- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Code Splitting**: Optimized bundle sizes and lazy loading
- **Custom Icons**: Unique SVG icons designed specifically for navigation

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 15.3.1** - React framework with App Router and latest features
- **React 19.0.0** - Latest React with concurrent features and improved performance
- **TypeScript 5.8.3** - Type-safe JavaScript with strict configuration

### UI & Styling
- **@once-ui-system/core 1.2.4** - Custom design system with enhanced components
- **SASS 1.86.3** - Advanced CSS preprocessing with modern features
- **React Icons 5.5.0** - Icon library with custom SVG implementations
- **Classnames 2.5.1** - Conditional CSS classes for dynamic styling

### Content & Data
- **MDX** - Markdown with React components for rich project content
- **@next/mdx 15.3.1** - MDX support for Next.js with custom extensions
- **next-mdx-remote 5.0.0** - Remote MDX content processing
- **gray-matter 4.0.3** - Front matter parsing for metadata

### Development Tools
- **ESLint 9.25.0** - Code linting with strict rules
- **Biome** - Fast formatter and linter with modern configuration
- **Node.js** - Runtime environment with latest LTS features

### Deployment & Analytics
- **Vercel** - Hosting and deployment platform with edge functions
- **@vercel/analytics 1.5.0** - Web analytics and user behavior tracking
- **@vercel/speed-insights 1.2.0** - Performance monitoring and Core Web Vitals
- **@vercel/og 0.6.8** - Dynamic Open Graph image generation

### External Integrations
- **Slack Webhooks** - Contact form notifications and real-time alerts
- **LinkedIn Newsletter** - Newsletter subscription and content distribution
- **Google Fonts** - Typography (Geist font family) for modern aesthetics

## 📁 Project Structure

```
himanshu-portfolio-main/
├── public/                    # Static assets
│   ├── favicon.svg           # Site favicon
│   ├── resume.pdf            # Resume file
│   ├── images/               # Images and media assets
│   │   ├── avatar.jpg        # Profile avatar
│   │   ├── articles/         # Article cover images (40+ ML articles)
│   │   │   ├── Machine-Learning.jpg
│   │   │   ├── Hypothesis.jpg
│   │   │   ├── Linear Regression.jpg
│   │   │   ├── Deep Learning.jpg
│   │   │   ├── Reinforcement Learning.jpg
│   │   │   └── ... (40+ more ML concept images)
│   │   ├── newsletter/       # Newsletter images
│   │   │   └── NewsletterImg.jpg
│   │   └── projects/         # Project images
│   │       ├── cover-01.jpg
│   │       ├── cover-02.jpg
│   │       ├── cover-03.jpg
│   │       ├── cover-04.jpg
│   │       ├── image-01.jpg
│   │       ├── image-02.jpg
│   │       ├── image-03.jpg
│   │       ├── DashboardImg1.jpg
│   │       ├── DashboardImg2.jpg
│   │       └── DashboardImg3.jpg
├── src/                      # Source code
│   ├── app/                  # Next.js App Router
│   │   ├── about/            # About page
│   │   │   └── page.tsx
│   │   ├── api/              # API routes
│   │   │   ├── download-resume/
│   │   │   │   └── route.ts
│   │   │   └── submit-form/
│   │   │       └── route.ts
│   │   ├── article/          # Articles listing
│   │   │   ├── ArticleListClient.tsx
│   │   │   └── page.tsx
│   │   ├── contact/          # Contact page
│   │   │   ├── ContactClient.tsx
│   │   │   ├── page.module.scss
│   │   │   └── page.tsx
│   │   ├── work/             # Projects page
│   │   │   ├── [slug]/       # Dynamic project pages
│   │   │   │   └── page.tsx
│   │   │   ├── projects/     # MDX project files (7 projects)
│   │   │   │   ├── exploratory-data-analysis-iris.mdx
│   │   │   │   ├── moving-vehicle-number-plate-detection.mdx
│   │   │   │   ├── sentiment-analysis-with-bert.mdx
│   │   │   │   ├── uplifting-happiness-index.mdx
│   │   │   │   ├── world-layoff-data-analysis.mdx
│   │   │   │   ├── worlds-biggest-data-breaches.mdx
│   │   │   │   └── youtube-data-engineering-pipeline.mdx
│   │   │   ├── page.tsx
│   │   │   └── WorkPage.module.scss
│   │   ├── layout.tsx        # Root layout with providers
│   │   ├── not-found.tsx     # 404 page
│   │   ├── page.tsx          # Homepage
│   │   ├── robots.ts         # Robots.txt generation
│   │   └── sitemap.ts        # Sitemap generation
│   ├── components/           # React components
│   │   ├── about/            # About page components
│   │   │   └── about.module.scss
│   │   ├── home/             # Homepage components
│   │   │   ├── CurrentFocus.module.scss
│   │   │   ├── CurrentFocus.tsx
│   │   │   ├── QuickStats.module.scss
│   │   │   ├── QuickStats.tsx
│   │   │   ├── RecentArticles.module.scss
│   │   │   ├── RecentArticles.tsx
│   │   │   ├── RecentProjects.module.scss
│   │   │   └── RecentProjects.tsx
│   │   ├── work/             # Project components
│   │   │   ├── FeaturedProjectCard.module.scss
│   │   │   ├── FeaturedProjectCard.tsx
│   │   │   ├── ProjectCard.module.scss
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectGridCard.module.scss
│   │   │   ├── ProjectGridCard.tsx
│   │   │   ├── ProjectImageCarousel.module.scss
│   │   │   ├── ProjectImageCarousel.tsx
│   │   │   ├── ProjectPageButtons.tsx
│   │   │   ├── Projects.module.scss
│   │   │   ├── Projects.tsx
│   │   │   └── WorkPageClient.tsx
│   │   ├── AnimatedHeadline.tsx
│   │   ├── AnimatedSubline.tsx
│   │   ├── BackToTop.module.scss
│   │   ├── BackToTop.tsx
│   │   ├── Footer.tsx        # Site footer
│   │   ├── Header.module.scss # Enhanced header styles
│   │   ├── Header.tsx        # Enhanced header with custom icons
│   │   ├── HeadingLink.tsx   # Heading links
│   │   ├── index.ts          # Component exports
│   │   ├── LoadingSpinner.tsx
│   │   ├── Mailchimp.tsx     # Newsletter integration
│   │   ├── mdx.tsx           # MDX components
│   │   ├── NewsletterCard.module.scss
│   │   ├── NewsletterCard.tsx
│   │   ├── Portal.tsx
│   │   ├── ProjectCard.tsx   # Project cards
│   │   ├── Providers.tsx     # Context providers
│   │   ├── ScrollToHash.tsx  # Smooth scrolling
│   │   ├── ThemeToggle.module.scss
│   │   └── ThemeToggle.tsx   # Theme switcher
│   ├── data/                 # Data files
│   │   └── currentFocus.json
│   ├── resources/            # Configuration and content
│   │   ├── content.js        # Site content and metadata
│   │   ├── custom.css        # Custom global styles
│   │   ├── icons.ts          # Custom SVG icon definitions
│   │   ├── index.ts          # Resource exports
│   │   └── once-ui.config.js # Once UI configuration
│   └── utils/                # Utility functions
│       ├── currentFocus.ts
│       ├── formatDate.ts     # Date formatting
│       └── utils.ts          # General utilities
├── .env.example              # Environment variables example
├── .eslintrc.json            # ESLint configuration
├── .gitignore                # Git ignore rules
├── biome.json                # Biome configuration
├── next-env.d.ts             # Next.js types
├── next.config.mjs           # Next.js configuration
├── package-lock.json         # Dependency lock file
├── package.json              # Dependencies and scripts
├── README.md                 # Project documentation
├── tsconfig.json             # TypeScript configuration
└── tsconfig.tsbuildinfo      # TypeScript build info
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HRS0221/himanshu-portfolio.git
   cd himanshu-portfolio-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   SLACK_WEBHOOK_URL=your_slack_webhook_url
   NEXT_PUBLIC_BASE_URL=https://your-domain.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run clean` - Clean build cache
- `npm run lint` - Run ESLint

## 📝 Content Overview

### Projects (7 Data Science & ML Projects)
1. **Exploratory Data Analysis - Iris Dataset** - Comprehensive EDA with statistical insights
2. **Moving Vehicle Number Plate Detection** - Computer vision project using OpenCV
3. **Sentiment Analysis with BERT** - NLP project using transformer models
4. **Uplifting Happiness Index** - Data analysis and visualization project
5. **World Layoff Data Analysis** - Global layoff trends analysis
6. **World's Biggest Data Breaches** - Cybersecurity data analysis
7. **YouTube Data Engineering Pipeline** - ETL pipeline and data engineering

### Current Status
- **Student**: Currently preparing for GATE - 2026
- **Focus**: Building AI/ML projects and learning new technologies
- **Goal**: Transitioning into a Data Scientist role
- **Work Experience**: Design engineering background with UI/UX expertise

### Articles (40+ AI/ML Articles)
Comprehensive series covering:
- **Machine Learning Fundamentals** - Linear/Logistic Regression, Decision Trees
- **Deep Learning** - Neural Networks, CNN, RNN, Backpropagation
- **Advanced ML** - SVM, K-Means, Ensemble Methods, Bayesian Learning
- **Reinforcement Learning** - MDP, Monte Carlo, Temporal Difference
- **AI Ethics & Explainability** - SHAP, Interpretable AI
- **Generative AI** - GANs, Autoencoders, Transformers

### Technical Skills
- **AI/ML Stack**: TensorFlow, PyTorch, LangChain, OpenAI API
- **Programming**: Python, JavaScript/TypeScript, SQL, Java
- **Cloud & Infrastructure**: AWS, Google Cloud, Docker, Kubernetes
- **Web Development**: Next.js, React, SASS, Flask
- **Data Visualization**: Plotly, Tableau, PowerBI, Matplotlib

## 🎨 Customization

### Enhanced Header Features
- **Custom SVG Icons**: Unique navigation icons designed specifically for the portfolio
- **Responsive Design**: Adaptive layout that works on all screen sizes
- **Glassmorphism Effects**: Modern blur and transparency effects
- **Smooth Animations**: Hover effects and transitions
- **Theme Integration**: Seamless dark/light mode switching

### Theme Configuration
Edit `src/resources/once-ui.config.js` to customize:
- Color schemes (brand, accent, neutral)
- Typography (Geist font family)
- Layout and spacing
- Theme preferences

### Content Management
Update `src/resources/content.js` to modify:
- Personal information and bio
- Social media links and profiles
- Newsletter settings and configuration
- Site metadata and SEO settings

### Styling
- Global styles: `src/resources/custom.css`
- Component styles: Individual `.module.scss` files
- Design system: `@once-ui-system/core`
- Custom icons: `src/resources/icons.ts`

## 📊 Performance Optimizations

- **Image Optimization**: WebP/AVIF formats with responsive sizes and lazy loading
- **Code Splitting**: Automatic chunk splitting with 250KB limits for optimal loading
- **Bundle Optimization**: Tree shaking and dead code elimination
- **Caching**: Static generation with ISR for dynamic content
- **Analytics**: Performance monitoring with Vercel Speed Insights
- **Header Optimization**: Efficient rendering with custom SVG icons
- **TypeScript Safety**: Strict type checking and error-free compilation

## 🔧 Configuration Files

### Next.js Configuration (`next.config.mjs`)
- MDX support with custom extensions
- Image optimization settings with modern formats
- Webpack optimizations for better performance
- Build optimizations and chunk splitting
- Package import optimization

### TypeScript Configuration (`tsconfig.json`)
- Strict type checking for better code quality
- Path aliases for clean imports
- Modern JavaScript features enabled
- Comprehensive type coverage

### Biome Configuration (`biome.json`)
- Code formatting rules with 100 character line width
- Linting configuration with recommended rules
- Import organization and sorting
- Modern JavaScript formatting

## 🌐 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch
4. Enable analytics and speed insights

### Environment Variables
- `SLACK_WEBHOOK_URL` - For contact form notifications
- `NEXT_PUBLIC_BASE_URL` - Your domain URL for SEO

## 📈 Analytics & Monitoring

- **Vercel Analytics**: Track page views and user behavior
- **Speed Insights**: Monitor Core Web Vitals and performance metrics
- **Error Tracking**: Built-in error boundaries and monitoring
- **SEO**: Automatic sitemap and meta tag generation
- **Performance**: Real-time monitoring of loading times
- **TypeScript Compilation**: Error-free build process with strict type checking

## 🎯 Recent Enhancements

### Header Improvements
- **Custom Navigation Icons**: Unique SVG icons for Home, About, Work, Articles, and Contact
- **Responsive Design**: Optimized for all screen sizes and zoom levels
- **Enhanced Styling**: Glassmorphism effects and smooth animations
- **Better Accessibility**: Improved focus states and keyboard navigation
- **Performance**: Optimized rendering and reduced bundle size

### Content Updates
- **40+ AI/ML Articles**: Comprehensive coverage of machine learning concepts
- **7 Data Science Projects**: Real-world projects with detailed documentation
- **Enhanced About Section**: Detailed technical skills and achievements
- **Professional Credentials**: Multiple certifications and achievements
- **Work Experience**: Design engineering background with UI/UX expertise
- **Accurate Status**: Properly reflects current student status and career goals

### Technical Improvements
- **Automatic OG Image Generation**: Dynamic Open Graph images using Vercel OG API
- **Enhanced SEO**: Comprehensive Schema.org structured data with social media links
- **Removed Unused Assets**: Cleaned up gallery folder, trademarks, and static OG images
- **Enhanced Favicon**: Modern geometric H logo with gradient design
- **Optimized Performance**: Reduced bundle size and improved loading times
- **Removed Third-party Branding**: Cleaned up all Once UI references and credits
- **Fixed TypeScript Errors**: Resolved all compilation issues and type safety
- **Simplified Contact Form**: Streamlined contact form without OTP verification
- **Clean API Structure**: Removed unused OTP-related API routes and dependencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: contact.himanshusalunke@gmail.com
- **LinkedIn**: [Himanshu Salunke](https://www.linkedin.com/in/hr0221/)
- **GitHub**: [HRS0221](https://github.com/HRS0221)
- **Portfolio**: [himanshusalunke.vercel.app](https://himanshusalunke.vercel.app)
- **Newsletter**: [The Minimalist Life](https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7085106786910769152)

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework and continuous improvements
- **Vercel** - For hosting and deployment platform with excellent developer experience
- **React Community** - For the incredible ecosystem and tools
- **AI/ML Community** - For the knowledge and resources that inspired the content
- **TypeScript Community** - For robust type safety and developer experience

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies. 

*Last updated: December 2024* 