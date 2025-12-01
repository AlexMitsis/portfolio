# Alex Mitsis - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, featuring smooth animations, interactive components, and a contact form integration with Resend. Feel free to use this as reference for your own portfolio project.

## Features

- **Responsive Design**: Fully responsive layout optimized for all devices
- **Smooth Animations**: Framer Motion animations with spring physics
- **Interactive Components**:
  - Color-changing orb in tech stack section
  - Scroll-based navbar visibility
  - Project carousel with Embla
- **Contact Form**: Integrated with Resend for email delivery
- **Modern UI**: Monokai Pro-inspired color scheme with frosted glass effects
- **SEO Ready**: Static generation for optimal performance

## Tech Stack

- **Framework**: [Next.js 15.5.3](https://nextjs.org/) with Turbopack
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Email Service**: [Resend](https://resend.com/)
- **Language**: TypeScript

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your credentials:
   - `RESEND_API_KEY`: Get from [Resend API Keys](https://resend.com/api-keys)
   - `CONTACT_EMAIL`: Your email address (must be verified in Resend)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
portfolio/
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   │   └── contact/          # Contact form endpoint
│   │       └── route.ts      # Resend email handler
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Main page component
│   └── globals.css           # Global styles
├── components/               # React components
│   ├── About.tsx             # About Me section
│   ├── Contact.tsx           # Contact form and footer
│   ├── Education.tsx         # Education timeline
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Landing section
│   ├── Navbar.tsx            # Navigation bar
│   ├── ProjectCarouselEmbla.tsx  # Project carousel
│   ├── Projects.tsx          # Projects section wrapper
│   ├── Skills.tsx            # Tech stack with orb effect
│   └── WorkExperience.tsx    # Work experience timeline
├── public/                   # Static assets
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore rules
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies
├── tailwind.config.ts        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

## Component Overview

### Hero Section
Landing page with animated name, badges, and description.

### About Me
Profile card with image and personal introduction.

### Work Experience
Timeline of professional experience with company logos and descriptions.

### Education
Academic background with institution details.

### Skills (Tech Stack)
Interactive grid of technologies with:
- Color-changing orb that follows cursor
- Hover tooltips
- Technology icons from Simple Icons CDN

### Projects
Carousel showcasing projects with:
- Draggable slides
- Navigation arrows and indicators
- GitHub links
- Technology badges

### Contact
Contact form with:
- Real-time validation
- Loading states
- Success/error messages
- Resend email integration

## Configuration

### Resend Setup

1. Sign up at [resend.com](https://resend.com)
2. Verify your email address
3. Generate an API key
4. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_key_here
   CONTACT_EMAIL=your.email@example.com
   ```

**Note**: For production, you can verify your own domain in Resend and update the `from` address in `app/api/contact/route.ts`.

### Image Optimization

The project uses Next.js Image component for LinkedIn profile pictures. To add more remote image sources, update `next.config.js`:

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-image-host.com',
      pathname: '/path/**',
    },
  ],
}
```

### Styling

The project uses a Monokai Pro-inspired color palette:
- Background: `#2D2A2E`
- Text: `#FCFCFA`
- Accent colors: Purple (`#AB9DF2`), Green (`#A9DC76`), Yellow (`#FFD866`), Red (`#FF6188`), Blue (`#78DCE8`)

Update colors in components or add to `tailwind.config.ts`.

##  Customization

### Adding Projects

Edit `components/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Your Project",
    subtitle: "Brief tagline",
    description: "Detailed description",
    features: ["Feature 1", "Feature 2"],
    technologies: ["Tech1", "Tech2"],
    github: "https://github.com/username/repo",
    icon: "🚀",
    gradient: "from-[#FF6188] to-[#AB9DF2]",
    badge: "BADGE TEXT",
    badgeColor: "from-[#A9DC76]/20 to-[#78DCE8]/20 text-[#A9DC76] border-[#A9DC76]/30"
  }
];
```

### Adding Skills

Edit `components/Skills.tsx`:

```typescript
const skills = [
  {
    name: 'Skill Name',
    icon: 'iconname',  // From simple-icons.org
    color: '#HexColor'
  }
];
```

### Updating Experience

Edit `components/WorkExperience.tsx` to add/modify work experience entries.

### Updating Education

Edit `components/Education.tsx` to add/modify education entries.

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "feat: complete portfolio"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your repository
   - Add environment variables:
     - `RESEND_API_KEY`
     - `CONTACT_EMAIL`
   - Click "Deploy"

3. **Post-Deployment**
   - Test the contact form
   - Verify all sections load correctly
   - Check mobile responsiveness

### Other Platforms

The project can be deployed to any platform supporting Next.js:
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Build Output

The production build uses static generation for optimal performance:
- Static pages are pre-rendered at build time
- API routes are server-rendered on demand
- Optimized bundle size with code splitting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
