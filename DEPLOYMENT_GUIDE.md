# Deployment Guide - NR Invisible Grills Website to Vercel

## Quick Deployment Steps

### Step 1: Prepare Your Project

Before deploying, make sure everything is working locally:

```bash
npm run build
```

This should create a `dist/` folder without any errors.

### Step 2: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign up (if you haven't already)
2. Create a new repository:
   - Click **New** button
   - Name it: `nr-invisible-grills` or similar
   - Add description: "Professional website for NR Invisible Grills Bangalore"
   - Choose **Public** (for free deployment)
   - Click **Create Repository**

### Step 3: Push Your Code to GitHub

Open PowerShell in your project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: NR Invisible Grills website"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/nr-invisible-grills.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Vercel

#### Option A: Direct Vercel Dashboard (Easiest)

1. Go to [Vercel.com](https://vercel.com)
2. Click **Sign Up** (use GitHub account for easier setup)
3. Click **New Project**
4. Select your GitHub repository `nr-invisible-grills`
5. Vercel auto-detects it's a Vite + React project
6. Click **Deploy** - Done! ✅

#### Option B: Vercel CLI (Advanced)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy your project
vercel

# For production deployment
vercel --prod
```

### Step 5: Configure Domain (Optional)

After deployment, you can connect a custom domain:

1. In Vercel Dashboard, go to your project
2. Click **Settings** → **Domains**
3. Add your domain (e.g., `nrinvisiblegrills.com`)
4. Update DNS records with provider

---

## Environment Setup Before Deployment

### 1. Create `.gitignore` File

Your project should already have this, but verify it includes:

```
node_modules/
dist/
.env
.env.local
.DS_Store
*.log
.vite
```

### 2. Update `package.json` (if needed)

Verify build script exists:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 3. Verify SEO Meta Tags

Ensure your `index.html` has all important meta tags:

```html
<title>NR Invisible Grills Bangalore - Safety Nets & Bird Control</title>
<meta name="description" content="Premium invisible grills for balconies, cat protection, and bird control in Bangalore. Professional installation across Karnataka.">
<meta name="keywords" content="invisible grills, bird control nets, cat protection, balcony safety, window grills Bangalore">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## Post-Deployment Checklist

### ✅ SEO Setup

- [ ] Submit sitemap to Google Search Console
- [ ] Submit site to Bing Webmaster Tools
- [ ] Add Google Analytics tracking
- [ ] Set up Google Business Profile

### ✅ Performance Optimization

- [ ] Test site speed on [PageSpeed Insights](https://pagespeed.web.dev)
- [ ] Compress images for web
- [ ] Enable caching headers in Vercel

### ✅ Security

- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Set up SSL certificate (automatic)
- [ ] Configure security headers

### ✅ Testing

- [ ] Test all forms and CTAs
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify all links work

---

## Monitoring & Updates

### View Deployment Logs

1. Go to Vercel Dashboard
2. Select your project
3. Click **Deployments** tab
4. View build logs and error messages

### Auto-Deployment on Git Push

Once connected to GitHub, every push to `main` branch automatically deploys:

```bash
# Make changes locally
git add .
git commit -m "Update content"
git push origin main
# Automatically deploys to Vercel! 🚀
```

### Rollback to Previous Deployment

In Vercel Dashboard:
1. Go to **Deployments**
2. Find the previous deployment
3. Click **Promote to Production**

---

## Troubleshooting Common Issues

### Issue: Build Fails with "Cannot find module"

**Solution:**
```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
npm run build
```

### Issue: Images Not Displaying

**Solution:**
- Verify image paths are correct
- Use relative paths like `../assets/image.jpg`
- Check that images are in `src/assets/` folder

### Issue: Styling Issues After Deployment

**Solution:**
- Ensure CSS files are imported in components
- Check for hardcoded absolute paths
- Rebuild and redeploy

### Issue: Slow Performance

**Solution:**
- Compress images to <100KB each
- Enable image optimization in Vercel settings
- Remove unused CSS/JavaScript

---

## Advanced Vercel Configuration

### Create `vercel.json` for Custom Build Settings

Create file in project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "env": {
    "CI": "true"
  },
  "headers": [
    {
      "source": "/index.html",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600, must-revalidate"
        }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## Live Deployment URLs

After deployment, your site will be available at:
- **Vercel Domain:** `https://nr-invisible-grills.vercel.app`
- **Custom Domain:** `https://nrinvisiblegrills.com` (once configured)

---

## Need Help?

- **Vercel Documentation:** https://vercel.com/docs
- **React Vite Deployment:** https://vitejs.dev/guide/static-deploy.html
- **GitHub Help:** https://docs.github.com

---

## Next Steps After Deployment

1. **SEO Optimization**
   - Submit to Google Search Console
   - Build backlinks
   - Monitor search rankings

2. **Content Updates**
   - Add blog posts
   - Update testimonials
   - Add new portfolio images

3. **Analytics**
   - Set up Google Analytics 4
   - Track user behavior
   - Monitor conversion rates

4. **Email Integration**
   - Set up EmailJS for contact form
   - Configure email notifications
   - Test form submissions

---

**Your website is now ready for the world! 🎉**
