# Himanshu Salunke - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, featuring a clean design, dark mode, and comprehensive project showcase. This portfolio demonstrates expertise in data science, machine learning, and software development.

> **Note**: This portfolio is based on the [Once UI Portfolio Template](https://github.com/once-ui-system/magic-portfolio) by Once UI System. I've customized it extensively to showcase my projects and skills while maintaining the excellent foundation they provided.

## 🌟 Features

### Core Features
- **Modern Design**: Clean, professional interface with smooth animations
- **Dark Mode**: Built-in dark theme with system preference detection
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading with Next.js 15 optimizations
- **SEO Optimized**: Meta tags, sitemap, and structured data
- **Analytics**: Vercel Analytics and Speed Insights integration

### Content Management
- **MDX Support**: Rich content with Markdown and React components
- **Dynamic Project Showcase**: Easy project addition and management
- **Article System**: Technical blog posts and insights
- **Contact Form**: Integrated with Slack notifications
- **Newsletter Integration**: LinkedIn newsletter subscription

### Technical Features
- **TypeScript**: Full type safety and better development experience
- **SASS/SCSS**: Advanced styling with CSS modules
- **Component Library**: Custom UI system with Once UI
- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Code Splitting**: Optimized bundle sizes and lazy loading

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 15.3.1** - React framework with App Router
- **React 19.0.0** - Latest React with concurrent features
- **TypeScript 5.8.3** - Type-safe JavaScript

### UI & Styling
- **@once-ui-system/core 1.2.4** - Custom design system
- **SASS 1.86.3** - Advanced CSS preprocessing
- **React Icons 5.5.0** - Icon library
- **Classnames 2.5.1** - Conditional CSS classes

### Content & Data
- **MDX** - Markdown with React components
- **@next/mdx 15.3.1** - MDX support for Next.js
- **next-mdx-remote 5.0.0** - Remote MDX content
- **gray-matter 4.0.3** - Front matter parsing

### Development Tools
- **ESLint 9.25.0** - Code linting
- **Biome** - Fast formatter and linter
- **Node.js** - Runtime environment

### Deployment & Analytics
- **Vercel** - Hosting and deployment platform
- **@vercel/analytics 1.5.0** - Web analytics
- **@vercel/speed-insights 1.2.0** - Performance monitoring

### External Integrations
- **Slack Webhooks** - Contact form notifications
- **LinkedIn Newsletter** - Newsletter subscription
- **Google Fonts** - Typography (Geist font family)

## 📁 Project Structure

```
himanshu-portfolio-main/
├── public/                    # Static assets
│   ├── favicon.svg           # Site favicon
│   ├── resume.pdf            # Resume file
│   ├── images/               # Images and media assets
│   │   ├── avatar.jpg        # Profile avatar
│   │   ├── articles/         # Article cover images (40+ ML articles)
│   │   ├── gallery/          # Gallery images
│   │   ├── icons/            # Icon assets
│   │   ├── newsletter/       # Newsletter images
│   │   ├── og/               # Open Graph images
│   │   └── projects/         # Project images
│   └── trademarks/           # Brand assets
│       ├── wordmark-dark.svg
│       └── wordmark-light.svg
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
│   │   │   ├── projects/     # MDX project files
│   │   │   │   ├── exploratory-data-analysis-iris.mdx
│   │   │   │   ├── moving-vehicle-number-plate-detection.mdx
│   │   │   │   ├── sentiment-analysis-with-bert.mdx
│   │   │   │   ├── uplifting-happiness-index.mdx
│   │   │   │   ├── world-layoff-data-analysis.mdx
│   │   │   │   ├── worlds-biggest-data-breaches.mdx
│   │   │   │   └── youtube-data-engineering-pipeline.mdx
│   │   │   ├── page.tsx
│   │   │   └── WorkPage.module.scss
│   │   ├── layout.tsx        # Root layout
│   │   ├── not-found.tsx     # 404 page
│   │   ├── page.tsx          # Homepage
│   │   ├── robots.ts         # Robots.txt
│   │   └── sitemap.ts        # Sitemap generation
│   ├── components/           # React components
│   │   ├── about/            # About page components
│   │   │   ├── about.module.scss
│   │   │   └── TableOfContents.tsx
│   │   ├── article/          # Article components
│   │   │   ├── Article.tsx
│   │   │   ├── Articles.tsx
│   │   │   ├── HomepageArticleCard.tsx
│   │   │   ├── Post.tsx
│   │   │   ├── Posts.module.scss
│   │   │   └── Posts.tsx
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
│   │   │   ├── ProjectGridCard.module.scss
│   │   │   ├── ProjectGridCard.tsx
│   │   │   ├── ProjectImageCarousel.module.scss
│   │   │   ├── ProjectImageCarousel.tsx
│   │   │   ├── Projects.module.scss
│   │   │   └── Projects.tsx
│   │   ├── Footer.module.scss
│   │   ├── Footer.tsx        # Site footer
│   │   ├── Header.module.scss
│   │   ├── Header.tsx        # Site header
│   │   ├── HeadingLink.module.scss
│   │   ├── HeadingLink.tsx   # Heading links
│   │   ├── index.ts          # Component exports
│   │   ├── LoadingSpinner.tsx
│   │   ├── Mailchimp.tsx     # Newsletter integration
│   │   ├── mdx.tsx           # MDX components
│   │   ├── NewsletterCard.module.scss
│   │   ├── NewsletterCard.tsx
│   │   ├── ProjectCard.tsx   # Project cards
│   │   ├── Providers.tsx     # Context providers
│   │   ├── ScrollToHash.tsx  # Smooth scrolling
│   │   ├── ThemeToggle.module.scss
│   │   └── ThemeToggle.tsx   # Theme switcher
│   ├── resources/            # Configuration and content
│   │   ├── content.js        # Site content and metadata
│   │   ├── custom.css        # Custom global styles
│   │   ├── icons.ts          # Icon definitions
│   │   ├── index.ts          # Resource exports
│   │   └── once-ui.config.js # Once UI configuration
│   └── utils/                # Utility functions
│       ├── formatDate.ts     # Date formatting
│       ├── server-utils.ts   # Server-side utilities
│       └── utils.ts          # General utilities
├── .env.example              # Environment variables example
├── .eslintrc.json            # ESLint configuration
├── .gitignore                # Git ignore rules
├── biome.json                # Biome configuration
├── next-env.d.ts             # Next.js types
├── next.config.mjs           # Next.js configuration
├── package-lock.json         # Dependency lock file
├── package.json              # Dependencies and scripts
├── project-structure.txt     # This file structure
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

## 📝 Adding Content

### Adding New Projects

1. Create a new `.mdx` file in `src/app/work/projects/`
2. Use the following frontmatter structure:

```yaml
---
title: "Your Project Title"
publishedAt: "2024-01-01"
order: 1
status: "completed"
featured: true
summary:
  - "First bullet point about the project"
  - "Second bullet point about the project"
images:
  - "/images/projects/image1.jpg"
  - "/images/projects/image2.jpg"
link: "https://github.com/yourusername/project"
tag: "Data Science"
techStack:
  - "Python"
  - "Pandas"
  - "Machine Learning"
---
```

3. Add project images to `public/images/projects/`
4. The project will automatically appear on the homepage and work page

### Adding Articles

1. Create a new `.mdx` file in `src/app/article/`
2. Use similar frontmatter structure as projects
3. Articles will appear in the articles section

## 🎨 Customization

### Theme Configuration
Edit `src/resources/once-ui.config.js` to customize:
- Color schemes (brand, accent, neutral)
- Typography (Geist font family)
- Layout and spacing
- Theme preferences

### Content Management
Update `src/resources/content.js` to modify:
- Personal information
- Social media links
- Newsletter settings
- Site metadata

### Styling
- Global styles: `src/resources/custom.css`
- Component styles: Individual `.module.scss` files
- Design system: `@once-ui-system/core`

## 📊 Performance Optimizations

- **Image Optimization**: WebP/AVIF formats with responsive sizes
- **Code Splitting**: Automatic chunk splitting with 250KB limits
- **Bundle Optimization**: Tree shaking and dead code elimination
- **Caching**: Static generation with ISR for dynamic content
- **Analytics**: Performance monitoring with Vercel Speed Insights

## 🔧 Configuration Files

### Next.js Configuration (`next.config.mjs`)
- MDX support with custom extensions
- Image optimization settings
- Webpack optimizations
- Build optimizations

### TypeScript Configuration (`tsconfig.json`)
- Strict type checking
- Path aliases for clean imports
- Modern JavaScript features

### Biome Configuration (`biome.json`)
- Code formatting rules
- Linting configuration
- Import organization

## 🌐 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables
- `SLACK_WEBHOOK_URL` - For contact form notifications
- `NEXT_PUBLIC_BASE_URL` - Your domain URL

## 📈 Analytics & Monitoring

- **Vercel Analytics**: Track page views and user behavior
- **Speed Insights**: Monitor Core Web Vitals
- **Error Tracking**: Built-in error boundaries
- **SEO**: Automatic sitemap and meta tag generation

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
- **Portfolio**: [himanshu-portfolio-six.vercel.app](https://himanshu-portfolio-six.vercel.app)

## 🙏 Acknowledgments

- **Once UI System** - For the excellent [Magic Portfolio Template](https://github.com/once-ui-system/magic-portfolio) that served as the foundation for this project
- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and deployment platform
- **React Community** - For the incredible ecosystem and tools

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies. 