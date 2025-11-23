# How to Install Git on Windows

## Quick Installation Guide

### Step 1: Download Git
1. Go to: **https://git-scm.com/download/win**
2. Click the download button (it will detect your system automatically)
3. The download will start automatically

### Step 2: Install Git
1. **Run the installer** (Git-x.x.x-64-bit.exe)
2. **Important Settings** during installation:
   - ✅ Keep clicking "Next" for most screens
   - ✅ **IMPORTANT**: On "Adjusting your PATH environment" screen:
     - Select: **"Git from the command line and also from 3rd-party software"**
   - ✅ On "Choosing the default editor" - choose your preferred editor (or keep default)
   - ✅ Keep default options for everything else
   - ✅ Click "Install"

### Step 3: Verify Installation
1. **Close and reopen PowerShell** (important!)
2. Type:
   ```powershell
   git --version
   ```
3. You should see something like: `git version 2.x.x`

### Step 4: Configure Git (First Time Only)
```powershell
git config --global user.name "Niteesh Pandit"
git config --global user.email "your-email@example.com"
```
Replace with your actual email address.

---

## After Installation

Once Git is installed, you can:

### Option A: Run the PowerShell Script
1. Open PowerShell in your project folder
2. Run:
   ```powershell
   .\push-to-github.ps1
   ```
3. Follow the prompts

### Option B: Run Commands Manually
```powershell
cd "d:\Programmer\Portfolio-main\3dPortfolio-main"
git init
git remote add origin https://github.com/Niteesh3011/PORTFOLIO.git
git add .
git commit -m "Initial commit: Complete portfolio"
git branch -M main
git push -u origin main
```

---

## Alternative: GitHub Desktop (No Command Line Needed)

If you prefer a visual interface:

1. **Download**: https://desktop.github.com/
2. **Install** GitHub Desktop
3. **Sign in** with your GitHub account
4. **Add Repository**:
   - Click "File" → "Add Local Repository"
   - Browse to: `d:\Programmer\Portfolio-main\3dPortfolio-main`
5. **Publish**:
   - Click "Publish repository" button
   - Name: `PORTFOLIO`
   - Make sure it's set to "Public" (or Private if you prefer)
   - Click "Publish Repository"

That's it! No command line needed.

---

## Troubleshooting

### Git still not recognized after installation?
1. **Restart your computer** (sometimes needed)
2. **Close and reopen PowerShell**
3. **Check PATH**:
   ```powershell
   $env:Path -split ';' | Select-String git
   ```
   If nothing shows, Git might not be in PATH

### Need to add Git to PATH manually?
1. Find Git installation (usually: `C:\Program Files\Git\cmd`)
2. Add to System Environment Variables → Path
3. Restart PowerShell

### Authentication Issues?
- Use **Personal Access Token** instead of password
- Create at: https://github.com/settings/tokens
- Select scope: `repo`

---

## Quick Links

- **Git Download**: https://git-scm.com/download/win
- **GitHub Desktop**: https://desktop.github.com/
- **GitHub Personal Access Tokens**: https://github.com/settings/tokens

---

**Once Git is installed, come back and run the push script!** 🚀

