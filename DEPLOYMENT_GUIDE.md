# Deployment Guide for Portfolio

## Step 1: Push to GitHub

### Prerequisites
- Git must be installed on your system
- GitHub account (you already have: Niteesh3011)

### Commands to Run in Terminal/Command Prompt

1. **Navigate to your project directory:**
   ```bash
   cd "d:\Programmer\Portfolio-main\3dPortfolio-main"
   ```

2. **Initialize Git (if not already initialized):**
   ```bash
   git init
   ```

3. **Add the remote repository:**
   ```bash
   git remote add origin https://github.com/Niteesh3011/PORTFOLIO.git
   ```
   
   If remote already exists, update it:
   ```bash
   git remote set-url origin https://github.com/Niteesh3011/PORTFOLIO.git
   ```

4. **Add all files:**
   ```bash
   git add .
   ```

5. **Commit your changes:**
   ```bash
   git commit -m "Initial commit: Complete portfolio with 3D components"
   ```

6. **Push to GitHub:**
   ```bash
   git branch -M main
   git push -u origin main
   ```

   If you get authentication errors, you may need to:
   - Use a Personal Access Token instead of password
   - Or use GitHub Desktop/Git GUI

---

## Step 2: Deploy to Vercel (Recommended - Free & Easy)

### Option A: Deploy via Vercel Website

1. **Go to [vercel.com](https://vercel.com)**
   - Sign up/Login with your GitHub account

2. **Import your repository:**
   - Click "Add New Project"
   - Select your `PORTFOLIO` repository
   - Vercel will auto-detect Vite settings

3. **Configure build settings:**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy:**
   - Click "Deploy"
   - Your site will be live in minutes!

5. **Get your live URL:**
   - Vercel will provide a URL like: `your-portfolio.vercel.app`
   - You can add a custom domain later

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **For production:**
   ```bash
   vercel --prod
   ```

---

## Step 3: Deploy to Netlify (Alternative - Also Free)

1. **Go to [netlify.com](https://netlify.com)**
   - Sign up/Login with your GitHub account

2. **Add new site:**
   - Click "Add new site" → "Import an existing project"
   - Select your `PORTFOLIO` repository

3. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Deploy:**
   - Click "Deploy site"
   - Your site will be live!

---

## Step 4: Deploy to GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.js:**
   Add base path:
   ```js
   export default {
     base: '/PORTFOLIO/',
     // ... rest of config
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select source: `gh-pages` branch
   - Your site will be at: `https://niteesh3011.github.io/PORTFOLIO/`

---

## Important Notes:

### Before Deploying:
1. **Build your project locally first:**
   ```bash
   npm run build
   ```
   Check if `dist` folder is created successfully

2. **Test the build:**
   ```bash
   npm run preview
   ```

3. **Update environment variables if needed:**
   - Formspree form ID is already in code
   - No additional env vars needed

### After Deployment:
1. **Update Formspree settings:**
   - Go to your Formspree dashboard
   - Add your deployed domain to allowed domains
   - This ensures your contact form works

2. **Test your contact form:**
   - Make sure submissions are working
   - Check your email for notifications

3. **Share your portfolio:**
   - Your portfolio is now live!
   - Share the URL with potential employers/clients

---

## Troubleshooting:

### Git Issues:
- If git is not recognized, install Git from: https://git-scm.com/download/win
- Use GitHub Desktop as an alternative: https://desktop.github.com/

### Build Issues:
- Make sure all dependencies are installed: `npm install`
- Check for any console errors
- Ensure Node.js version is compatible (v16+ recommended)

### Deployment Issues:
- Check build logs in Vercel/Netlify dashboard
- Ensure all environment variables are set
- Verify build command and output directory

---

## Quick Commands Summary:

```bash
# Git Setup
git init
git remote add origin https://github.com/Niteesh3011/PORTFOLIO.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main

# Build
npm run build

# Deploy (Vercel CLI)
vercel --prod
```

Good luck with your deployment! 🚀

