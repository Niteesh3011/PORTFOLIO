# Git Setup Instructions

## Step 1: Install Git

### Download and Install:
1. Go to: https://git-scm.com/download/win
2. Download the latest version for Windows
3. Run the installer
4. **Important**: During installation, make sure to check:
   - ✅ "Add Git to PATH" option
   - ✅ "Git Bash Here" option
5. Complete the installation

### Verify Installation:
Open a NEW PowerShell window and run:
```powershell
git --version
```

If you see a version number, Git is installed correctly!

---

## Step 2: Configure Git (First Time Only)

```powershell
git config --global user.name "Niteesh Pandit"
git config --global user.email "your-email@example.com"
```

Replace with your actual email address.

---

## Step 3: Push Your Code to GitHub

Once Git is installed, run these commands in PowerShell:

```powershell
# Navigate to your project
cd "d:\Programmer\Portfolio-main\3dPortfolio-main"

# Initialize Git repository
git init

# Add remote repository
git remote add origin https://github.com/Niteesh3011/PORTFOLIO.git

# Check if remote was added
git remote -v

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Complete portfolio with 3D components"

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note**: When you push, GitHub will ask for authentication:
- Use a **Personal Access Token** (not your password)
- Create one at: https://github.com/settings/tokens
- Select scope: `repo` (full control of private repositories)

---

## Alternative: Use GitHub Desktop (Easier)

If you prefer a GUI:

1. **Download GitHub Desktop**: https://desktop.github.com/
2. **Install and sign in** with your GitHub account
3. **Add your repository**:
   - Click "File" → "Add Local Repository"
   - Browse to: `d:\Programmer\Portfolio-main\3dPortfolio-main`
4. **Publish to GitHub**:
   - Click "Publish repository"
   - Name: `PORTFOLIO`
   - Description: "My Data Science Portfolio"
   - Make sure "Keep this code private" is unchecked (if you want it public)
   - Click "Publish Repository"

---

## Troubleshooting

### If Git is still not recognized after installation:
1. Close and reopen PowerShell
2. Or restart your computer
3. Check if Git is in PATH:
   ```powershell
   $env:Path -split ';' | Select-String git
   ```

### If you get authentication errors:
- Use Personal Access Token instead of password
- Or use GitHub Desktop (handles auth automatically)

### If you get "remote already exists" error:
```powershell
git remote remove origin
git remote add origin https://github.com/Niteesh3011/PORTFOLIO.git
```

---

## Quick Command Reference

```powershell
# Check Git status
git status

# See what files will be committed
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main
```

