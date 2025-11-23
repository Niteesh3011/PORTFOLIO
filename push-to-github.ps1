# PowerShell Script to Push Portfolio to GitHub
# Run this AFTER installing Git

Write-Host "🚀 Portfolio GitHub Push Script" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check if Git is installed
try {
    $gitVersion = git --version
    Write-Host "✅ Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Git first:" -ForegroundColor Yellow
    Write-Host "1. Download from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "2. Install with default settings" -ForegroundColor Yellow
    Write-Host "3. Restart PowerShell and run this script again" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Or use GitHub Desktop: https://desktop.github.com/" -ForegroundColor Yellow
    exit
}

Write-Host ""
Write-Host "📁 Current directory: $(Get-Location)" -ForegroundColor Cyan
Write-Host ""

# Check if we're in the right directory
$expectedPath = "3dPortfolio-main"
if (-not (Get-Location).Path.Contains($expectedPath)) {
    Write-Host "⚠️  Warning: You might not be in the project directory" -ForegroundColor Yellow
    Write-Host "   Expected to be in a folder containing: $expectedPath" -ForegroundColor Yellow
    Write-Host ""
    $continue = Read-Host "Continue anyway? (y/n)"
    if ($continue -ne "y") {
        exit
    }
}

Write-Host "🔧 Setting up Git repository..." -ForegroundColor Cyan
Write-Host ""

# Initialize Git (if not already initialized)
if (-not (Test-Path ".git")) {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
} else {
    Write-Host "✅ Git repository already initialized" -ForegroundColor Green
}

# Add remote (remove if exists, then add)
Write-Host ""
Write-Host "Setting up remote repository..." -ForegroundColor Yellow
$remoteExists = git remote get-url origin 2>$null
if ($remoteExists) {
    Write-Host "Remote 'origin' already exists. Updating..." -ForegroundColor Yellow
    git remote set-url origin https://github.com/Niteesh3011/PORTFOLIO.git
} else {
    git remote add origin https://github.com/Niteesh3011/PORTFOLIO.git
}
Write-Host "✅ Remote configured" -ForegroundColor Green

# Add all files
Write-Host ""
Write-Host "📦 Adding all files..." -ForegroundColor Yellow
git add .
Write-Host "✅ Files staged" -ForegroundColor Green

# Commit
Write-Host ""
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
$commitMessage = "Initial commit: Complete portfolio with 3D components"
git commit -m $commitMessage
Write-Host "✅ Changes committed" -ForegroundColor Green

# Set branch to main
Write-Host ""
Write-Host "🌿 Setting branch to 'main'..." -ForegroundColor Yellow
git branch -M main
Write-Host "✅ Branch set to 'main'" -ForegroundColor Green

# Push to GitHub
Write-Host ""
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "⚠️  You may be prompted for GitHub credentials" -ForegroundColor Yellow
Write-Host "   Use a Personal Access Token (not password)" -ForegroundColor Yellow
Write-Host "   Create one at: https://github.com/settings/tokens" -ForegroundColor Yellow
Write-Host ""
$push = Read-Host "Ready to push? (y/n)"
if ($push -eq "y") {
    git push -u origin main
    Write-Host ""
    Write-Host "✅ Done! Check your repository at:" -ForegroundColor Green
    Write-Host "   https://github.com/Niteesh3011/PORTFOLIO" -ForegroundColor Cyan
} else {
    Write-Host "Push cancelled. Run 'git push -u origin main' when ready." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "📝 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Deploy to Vercel: https://vercel.com" -ForegroundColor White
Write-Host "2. Or deploy to Netlify: https://netlify.com" -ForegroundColor White
Write-Host "3. See DEPLOYMENT_GUIDE.md for details" -ForegroundColor White
Write-Host ""

