# Ashwini Vishal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. Deployed to GitHub Pages with automated CI/CD using GitHub Actions.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: shadcn/ui components with smooth animations
- **Dark Mode Support**: Built-in theme switching
- **Contact Form**: Integrated with Supabase for email submissions
- **Achievements Section**: Showcase your accomplishments
- **Skills & Projects**: Display your technical expertise and portfolio projects
- **Certifications**: Highlight professional certifications
- **SEO Optimized**: Meta tags and structured content
- **Accessible**: WCAG compliant components

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Package Manager**: Bun
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Backend**: Supabase
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Linting**: ESLint

## 📋 Prerequisites

- Bun 1.0 or higher ([Install Bun](https://bun.sh))
- Node.js 18+ (optional, for compatibility)
- Git

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ashwinihebbali/Ashwini-Vishal-Portfolio.git
   cd Ashwini-Vishal-Portfolio
   ```

2. **Install dependencies with Bun**
   ```bash
   bun install
   ```

## 🏃 Development

Start the development server:

```bash
bun run dev
```

The app will be available at `http://localhost:8080`

## 🔨 Build

Build for production:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```

## 📝 Linting

Check code quality:

```bash
bun run lint
```

## 🚢 Deployment

The project is automatically deployed to GitHub Pages whenever you push to the `main` branch.

**Deployment URL**: `https://Ashwinihebbali.github.io/ashwini-vishal-portfolio/`

### GitHub Actions Workflow

The workflow (`/.github/workflows/deploy.yml`) handles:
- Installing dependencies with Bun
- Building the project
- Deploying to GitHub Pages with write permissions

## 📂 Project Structure

```
src/
├── components/
│   ├── About.tsx              # About section
│   ├── Achievements.tsx       # Achievements showcase
│   ├── Certifications.tsx     # Certifications list
│   ├── Contact.tsx           # Contact form
│   ├── Footer.tsx            # Footer section
│   ├── Hero.tsx              # Hero/banner section
│   ├── Navbar.tsx            # Navigation bar
│   ├── Projects.tsx          # Projects portfolio
│   ├── Skills.tsx            # Skills section
│   ├── BackgroundEffects.tsx # Decorative animations
│   └── ui/                   # shadcn/ui components
├── pages/
│   ├── Index.tsx             # Main page
│   └── NotFound.tsx          # 404 page
├── hooks/
│   └── use-toast.ts          # Toast notification hook
├── integrations/
│   └── supabase/             # Supabase configuration
├── lib/
│   └── utils.ts              # Utility functions
├── assets/                   # Images and media
├── App.tsx                   # Root component
└── main.tsx                  # Entry point
```

## 🔧 Configuration

### Vite Config
- Base path: `/ashwini-vishal-portfolio/`
- Port: 8080 (development)
- SWC compiler for fast React builds

### Tailwind CSS
Configured in `tailwind.config.ts` with custom theme and plugins

### TypeScript
Strict mode enabled in `tsconfig.json`

## 📧 Contact Form Integration

The contact form integrates with Supabase. To set up:

1. Create a Supabase project
2. Set up the contact email function in `supabase/functions/send-contact-email/`
3. Update Supabase client configuration in `src/integrations/supabase/client.ts`

## 🐛 Troubleshooting

### Deployment fails with permission error
- Ensure `.github/workflows/deploy.yml` has `permissions: contents: write`
- GitHub token should have write access to the repository

### Build fails
- Clear node_modules and reinstall: `bun install --force`
- Check Node.js/Bun versions match requirements
- Verify all environment variables are set

### Port already in use
- Change the port in `vite.config.ts` server configuration

## 📝 License

This project is open source. Feel free to use it as a template for your own portfolio.

## 👥 Contributors

- Ashwini Hebbali
- Vishal

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues or questions, please create an issue on the GitHub repository.

---

**Last Updated**: March 7, 2026
**Live Site**: https://Ashwinihebbali.github.io/ashwini-vishal-portfolio/
