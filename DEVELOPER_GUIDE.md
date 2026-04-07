# NR Invisible Grills Website - Developer Guide

## Project Overview

This is a professional, fully-responsive website for NR Invisible Grills built with modern web technologies including React, Vite, and CSS3. The website is optimized for both user experience and SEO.

## 🚀 Technology Stack

- **Frontend Framework**: React 19.2.4
- **Build Tool**: Vite 5.0.8
- **Styling**: Pure CSS3 (No frameworks)
- **Linting**: ESLint 9.39.4
- **Package Manager**: npm

## 📋 Available Scripts

### Development
```bash
npm run dev
```
Starts the development server at `http://localhost:5173/` with Hot Module Reload (HMR).

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing before deployment.

### Linting
```bash
npm run lint
```
Checks code quality using ESLint.

## 🏗️ Component Architecture

### Component Hierarchy

```
App
├── Header
├── Hero
├── Features
├── Services
├── About
├── Gallery
├── Testimonials
├── Process
├── Comparison
├── CTA
└── Footer
```

### Component Details

| Component | Purpose | Props | State |
|-----------|---------|-------|-------|
| Header | Navigation and branding | None | menuOpen |
| Hero | Hero banner with CTA | None | None |
| Features | Key features grid | None | None |
| Services | Service offerings | None | None |
| About | Company information | None | None |
| Gallery | Project showcase | None | None |
| Testimonials | Customer reviews | None | None |
| Process | Installation workflow | None | None |
| Comparison | Product comparison table | None | None |
| CTA | Contact form and info | None | formData |
| Footer | Footer links and info | None | None |

## 🎨 Styling Architecture

### CSS Organization

Each component has its own CSS file in `src/styles/`:
- `Header.css` - Navigation styling
- `Hero.css` - Hero section styling
- `Features.css` - Features grid styling
- `Services.css` - Services card styling
- `About.css` - About section styling
- `Gallery.css` - Gallery grid styling
- `Testimonials.css` - Testimonials card styling
- `Process.css` - Process steps styling
- `Comparison.css` - Comparison table styling
- `CTA.css` - Contact section styling
- `Footer.css` - Footer styling
- `App.css` - Global app styling
- `index.css` - Global variables and base styles

### CSS Variables System

All colors, spacing, and sizing use CSS custom properties defined in `index.css`:

```css
:root {
  /* Colors */
  --primary-color: #1e3c72;
  --secondary-color: #2a5298;
  --accent-color: #ff6b35;
  --light-color: #f4f4f4;
  --dark-color: #333;
  --text-color: #555;
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-xxl: 4rem;
  
  /* Other */
  --border-radius: 8px;
  --box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

## 📱 Responsive Design Strategy

### Mobile-First Approach

CSS is written mobile-first with media queries for larger screens:

```css
/* Mobile styles (default) */
.element {
  width: 100%;
}

/* Tablet and up */
@media (min-width: 768px) {
  .element {
    width: 50%;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .element {
    width: 33.33%;
  }
}
```

### Breakpoints

- `480px` - Small mobile
- `768px` - Tablet
- `1024px` - Small desktop
- `1200px` - Desktop

## 🔍 SEO Implementation

### Meta Tags (in index.html)
```html
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
```

### Semantic HTML
- Proper use of `<section>`, `<article>`, `<nav>` elements
- Proper heading hierarchy (h1 → h6)
- Alternative text for images (in implementation)
- Proper link text

### Performance
- Lazy loading ready
- Optimized images
- Minimized CSS and JS
- Fast loading times

## 🎯 Color Scheme

### Primary Colors
- **Primary Blue**: #1e3c72 - Main brand color
- **Secondary Blue**: #2a5298 - Hover states, gradients
- **Accent Orange**: #ff6b35 - Call-to-action, highlights

### Neutral Colors
- **Light Gray**: #f4f4f4 - Backgrounds, cards
- **Dark Gray**: #333 - Text, headings
- **Text Color**: #555 - Body text

### Semantic Colors
- **Success**: #27ae60 - Positive actions
- **Warning**: #f39c12 - Warnings
- **Danger**: #e74c3c - Errors

## 🔧 Customization Guide

### Change Brand Colors

Edit `src/index.css`:
```css
:root {
  --primary-color: #your-primary;
  --secondary-color: #your-secondary;
  --accent-color: #your-accent;
}
```

All components will automatically update.

### Update Company Information

**Contact Details** - Edit `src/components/CTA.jsx`:
```jsx
<a href="tel:+91XXXXXXXXXX">+91 XXXXXXXXXX</a>
<a href="mailto:your@email.com">your@email.com</a>
```

**Social Links** - Edit `src/components/Footer.jsx`:
```jsx
<a href="https://facebook.com/yourpage">Facebook</a>
<a href="https://instagram.com/yourpage">Instagram</a>
```

### Add/Remove Services

Edit `src/components/Services.jsx`:
```jsx
const services = [
  {
    id: 1,
    title: 'Your Service',
    description: '...',
    features: ['...']
  }
];
```

## 📊 Performance Metrics

### Lighthouse Scores Target
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

### Loading Times
- First Contentful Paint (FCP): < 2s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

## 🚀 Deployment Guide

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Deploy to GitHub Pages
1. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/repo-name"
```

2. Build and push to GitHub

## 🐛 Troubleshooting

### Dev Server Not Starting
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build Errors
```bash
# Check for syntax errors
npm run lint

# Rebuild from scratch
npm run build
```

### Styling Issues
- Check CSS variable definitions
- Ensure media queries are correct
- Clear browser cache (Ctrl+Shift+Del)

## 📚 Additional Resources

### Vite Documentation
https://vitejs.dev/guide/

### React Documentation
https://react.dev/

### CSS Best Practices
https://developer.mozilla.org/en-US/docs/Web/CSS/

## 🔐 Security Considerations

- Form submission sanitization
- No sensitive data in client code
- HTTPS recommended for production
- Regular dependency updates

## 📝 Version History

### v1.0.0 (Current)
- Initial website launch
- 11 main sections
- Full mobile responsiveness
- SEO optimization
- Contact form

## 📞 Support

For questions or issues:
- Check the README.md
- Review component comments
- Check Vite documentation

---

**Last Updated**: 2024
**Maintained By**: Development Team