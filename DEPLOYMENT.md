# 🚀 Deployment Guide

## Quick Local Test

### Option 1: Use the Start Scripts (Easiest)
```bash
# Windows
double-click start-server.bat

# Mac/Linux
./start-server.sh
```

### Option 2: Manual Start
```bash
# Install dependencies
npm install

# Start server (opens browser automatically)
npm start

# Or start manually
npm run serve
```

Then visit: **http://localhost:8080**

## Test Navigation
1. Open **http://localhost:8080/test-navigation.html** in your browser
2. Test all the links to ensure they work without redirects
3. Open browser console (F12) to check for errors
4. If everything works, you're ready for deployment!

## Railway Deployment Steps

### 1. Prepare Your Repository
```bash
git init
git add .
git commit -m "Fixed Railway deployment with proper healthcheck"
```

### 2. Push to GitHub
```bash
# Create repository on GitHub first
git remote add origin https://github.com/yourusername/tailored-learning-platform.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Railway
1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway will automatically detect and deploy
5. Your app will be live at: `https://your-app-name.railway.app`

### 4. Railway Fixes Applied
- ✅ **Fixed healthcheck**: Uses `/health.html` endpoint
- ✅ **Proper port binding**: Binds to `0.0.0.0` with PORT environment variable
- ✅ **CORS enabled**: Prevents cross-origin issues
- ✅ **Longer timeout**: 60 seconds for healthcheck
- ✅ **Silent mode**: Reduces log noise

## Alternative Hosting Options

### Netlify (Drag & Drop)
1. Go to [netlify.com](https://netlify.com)
2. Drag your entire project folder to the deploy area
3. Your site is live instantly!

### Vercel (Git-based)
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Automatic deployment with global CDN

### GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select source branch
4. Live at `https://username.github.io/repo`

## Troubleshooting

### Game Page Not Loading?
- ✅ **Fixed**: Use http-server instead of serve command
- ✅ **Fixed**: Changed to port 8080 (avoids conflicts)
- ✅ **Fixed**: Updated all configuration files

### Railway Healthcheck Failures?
- ✅ **Fixed**: Added `/health.html` endpoint
- ✅ **Fixed**: Server binds to `0.0.0.0` instead of localhost
- ✅ **Fixed**: Uses PORT environment variable with fallback
- ✅ **Fixed**: Increased healthcheck timeout to 60 seconds

### Railway Deployment Issues?
- Ensure package.json has correct start command: `PORT=${PORT:-5000} npx http-server -p $PORT -a 0.0.0.0 --cors --silent`
- Check railway.toml configuration
- Verify all files are committed to Git
- Check Railway logs for specific error messages

### Port Already in Use?
- Change port in package.json scripts
- Use `npm run serve-5000` or `npm run serve-8000`
- Update start-server scripts accordingly

### Common Railway Errors & Solutions
1. **"Service unavailable"**: Fixed with proper port binding and healthcheck
2. **"Healthcheck timeout"**: Increased to 60 seconds with dedicated health.html
3. **"Port already in use"**: Using PORT environment variable correctly
4. **"Build failed"**: Ensure all dependencies are in devDependencies

## File Structure After Setup
```
Tailored Game DEMO/
├── index.html          # Entry page
├── game.html           # Game page (with larger text)
├── data.js             # Student data service
├── package.json        # Node.js configuration
├── railway.toml        # Railway deployment config
├── .gitignore          # Git ignore file
├── start-server.bat    # Windows launcher
├── start-server.sh     # Mac/Linux launcher
├── test-navigation.html # Server test page
├── DEPLOYMENT.md       # This guide
├── README.md           # Full documentation
├── Students.csv        # Student data
└── Tempelate/          # Original template
```

## Production URL Examples
- **Railway**: `https://tailored-learning.up.railway.app`
- **Netlify**: `https://amazing-einstein-123456.netlify.app`
- **Vercel**: `https://tailored-learning.vercel.app`
- **GitHub Pages**: `https://username.github.io/tailored-learning-platform`

---

**🎉 Your learning platform is now ready for local testing and production deployment!**