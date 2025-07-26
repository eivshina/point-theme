# Netlify Deployment Setup

This document explains how to set up automatic deployment from GitHub to Netlify for your personal website.

## Current Configuration

Your website now includes the following configuration files for automatic deployment:

### 1. `netlify.toml`
- **Purpose**: Main Netlify configuration file
- **Features**:
  - Automatic deployment from GitHub
  - Clean URL redirects (removes `.html` extensions)
  - Security headers for better protection
  - Performance headers for faster loading
  - Caching configuration

### 2. `_redirects`
- **Purpose**: URL routing configuration
- **Features**:
  - Clean URLs: `/about` instead of `/about.html`
  - SEO-friendly redirects
  - 404 fallback handling

### 3. `.gitignore`
- **Purpose**: Prevents unnecessary files from being tracked
- **Includes**: OS files, IDE files, build directories, environment files

## Setting Up Netlify (One-time setup)

To connect your GitHub repository to Netlify for automatic deployment:

### Step 1: Create Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Sign up with your GitHub account

### Step 2: Connect Repository
1. Click "New site from Git"
2. Choose "GitHub" as your Git provider
3. Select your repository: `eivshina/point-theme`
4. Configure build settings:
   - **Branch to deploy**: `main` (or your default branch)
   - **Build command**: Leave empty (static site)
   - **Publish directory**: `.` (root directory)

### Step 3: Deploy
1. Click "Deploy site"
2. Netlify will automatically detect the `netlify.toml` configuration
3. Your site will be deployed and given a random URL (e.g., `amazing-site-123.netlify.app`)

### Step 4: Custom Domain (Optional)
1. In Netlify dashboard, go to "Domain settings"
2. Add your custom domain
3. Follow DNS configuration instructions

## How Automatic Deployment Works

Once set up, here's what happens when you make changes:

1. **Edit your files** locally or on GitHub
2. **Commit and push** to your main branch
3. **Netlify automatically detects** the changes
4. **Site rebuilds and deploys** in seconds
5. **Your live site is updated** automatically

## Making Changes to Your Website

### Content Updates
To update content on different pages:

- **Homepage**: Edit `index.html`
- **About page**: Edit `about.html`
- **Contact page**: Edit `contact.html`
- **CV page**: Edit `cv.html`
- **Research page**: Edit `research.html`
- **Resources page**: Edit `resources.html`
- **PhD Guide**: Edit `phd-guide.html`

### Styling Updates
- **Main styles**: Edit files in the `css/` directory
- **Images**: Add/update files in the `images/` directory

### Workflow for Updates
```bash
# 1. Make your changes to HTML, CSS, or other files
# 2. Commit your changes
git add .
git commit -m "Update about page content"

# 3. Push to GitHub
git push origin main

# 4. Netlify automatically deploys (usually takes 1-2 minutes)
```

## URL Structure

With the new configuration, your URLs are cleaner:

- ✅ `yoursite.com/about` (clean)
- ❌ `yoursite.com/about.html` (old, automatically redirects)

## Benefits of This Setup

1. **No manual deployment**: Changes automatically go live when you push to GitHub
2. **Fast updates**: Deployments typically complete in 1-2 minutes
3. **Clean URLs**: Better for SEO and user experience
4. **Security headers**: Better protection against common web vulnerabilities
5. **Performance optimization**: Proper caching headers for faster loading
6. **Version control**: Full history of changes in Git
7. **Preview deployments**: Netlify can show previews for pull requests

## Troubleshooting

### Site Not Updating
1. Check Netlify dashboard for deployment status
2. Verify changes were pushed to the correct branch
3. Check for any build errors in Netlify logs

### Links Not Working
1. Update internal links to use clean URLs (without `.html`)
2. Check the `_redirects` file for proper configuration

### Need Help?
- Netlify Documentation: [docs.netlify.com](https://docs.netlify.com)
- Netlify Community: [community.netlify.com](https://community.netlify.com)