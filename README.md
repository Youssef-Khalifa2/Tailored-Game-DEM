# Personalized Learning Platform

A comprehensive educational platform that provides personalized vocabulary learning games with both student and guest modes.

## Features

- **Dual Mode System**: Choose between Student Mode (personalized) and Guest Mode (general practice)
- **Student ID Authentication**: Simple form-based login using student IDs
- **Personalized Content**: Games adapt to individual student weaknesses
- **Comprehensive Vocabulary**: 50 words per difficulty level (150 total words)
- **English-Arabic Translation**: Match English words with Arabic translations only
- **Difficulty Scaling**: Games scale complexity based on English proficiency level
- **Responsive Design**: Works on desktop and mobile devices
- **Session Management**: Maintains student data across pages using localStorage

## How to Use

### Student Mode (Personalized Learning)
1. **Start at Home Page**: Open `index.html` in your web browser
2. **Select Student Mode**: Click the "Student Mode" button
3. **Enter Student ID**: Use one of the available IDs (1001-1005)
4. **Play Personalized Game**: Match vocabulary words with Arabic translations
5. **Natural Learning**: Your weakness words are included naturally without special marking
6. **Navigate**: Use the navigation buttons to return home, try a new student, or restart

### Guest Mode (General Practice)
1. **Start at Home Page**: Open `index.html` in your web browser
2. **Select Guest Mode**: Click the "Guest Mode" button
3. **Choose Difficulty**: Select Beginner, Intermediate, or Advanced level
4. **Play Game**: Match English words with Arabic translations
5. **Navigate**: Use the navigation buttons to return home, change difficulty, or restart

## Student Data

The platform uses the following student data from `Students.csv`:

| ID   | Name      | Weaknesses                  | English Level |
|------|-----------|-----------------------------|---------------|
| 1001 | 王东      | Rabbit, Convince, Peripheral | Level 2       |
| 1002 | 张巍译    | Future, Grades, Green       | Level 1       |
| 1003 | 穆春蓉    | Phenomenon, Background, Proof | Level 3     |
| 1004 | Omar      | Culture, Convince, Loop     | Level 2       |
| 1005 | Khalifa   | Emotions, Numbers, Black    | Level 1       |

## Game Features

### Difficulty Levels
- **Level 1 (Beginner)**: 6 word pairs (12 bubbles), large bubbles, 2 minutes
- **Level 2 (Intermediate)**: 12 word pairs (24 bubbles), medium bubbles, 1.5 minutes
- **Level 3 (Advanced)**: 18 word pairs (36 bubbles), small bubbles, 1 minute

### Vocabulary Database
- **150 total words**: 50 words per difficulty level
- **Mixed Learning**: Student mode combines weakness words with level-appropriate vocabulary
- **Full Practice**: Guest mode uses only level-appropriate vocabulary

### Translation Support
- **English-Arabic only**: All translations are between English and Arabic
- **Consistent Language**: No Chinese translations regardless of student nationality
- **High-Quality Translations**: Professional Arabic translations for all vocabulary

### User Experience
- Sound effects for interactions
- Timer to track completion time
- Success messages and animations
- Multiple navigation options
- Responsive design that fills one screen perfectly
- Dynamic font sizing for optimal readability
- Adaptive grid layout for all screen sizes

## Technical Implementation

### File Structure
```
├── index.html          # Student ID entry page
├── game.html           # Personalized learning game
├── data.js             # Student data service
├── Students.csv        # Student data source
├── Tempelate/          # Original game template
└── README.md           # This documentation
```

### Data Management
- **localStorage**: Maintains student session data
- **Client-side processing**: All data handled in browser
- **No server requirements**: Fully client-side application

### Browser Compatibility
- Modern browsers with ES6 support
- Responsive design for mobile devices
- Audio API support (graceful fallback included)

## Getting Started

### Option 1: Quick Start (Browser)
1. Clone or download the project files
2. Open `index.html` in a web browser
3. Enter a student ID (1001-1005) to start
4. Enjoy the personalized learning experience!

### Option 2: Local Development Server

#### Method A: Python HTTP Server (Recommended - No Installation Required)
```bash
# If you have Python 3 installed
python3 -m http.server 8080

# If you have Python 2 installed
python -m SimpleHTTPServer 8080

# Open your browser and go to:
# http://localhost:8080
```

#### Method B: Node.js HTTP Server (Best Compatibility)
```bash
# Install dependencies (first time only)
npm install

# Start the local server (opens browser automatically)
npm start

# Manual server start
npm run serve    # Port 8080
npm run dev      # Port 3000
```

#### Method C: VS Code Live Server Extension
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Production Deployment

### Railway Deployment (Recommended)

#### Prerequisites
- Railway account (free tier available)
- GitHub account
- Git installed

#### Step-by-Step Deployment

1. **Initialize Git Repository**
```bash
git init
git add .
git commit -m "Initial commit - Learning Platform"
```

2. **Push to GitHub**
```bash
# Create a new repository on GitHub first
git remote add origin https://github.com/yourusername/tailored-learning-platform.git
git branch -M main
git push -u origin main
```

3. **Deploy to Railway**
- Login to [Railway Dashboard](https://railway.app/dashboard)
- Click **"New Project"** → **"Deploy from GitHub repo"**
- Select your repository
- Railway will automatically detect the Node.js configuration
- Your app will be deployed and available at: `https://your-app-name.railway.app`

4. **Automatic Updates**
- Push changes to GitHub
- Railway will automatically redeploy your app

### Alternative Free Hosting Options

#### Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site is instantly live with a free SSL certificate

#### Vercel
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Automatic deployment with global CDN

#### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select source branch and folder
4. Your site is live at `https://username.github.io/repository-name`

## Testing Your Deployment

### Local Testing Checklist
- [ ] Student login works (IDs: 1001-1005)
- [ ] Guest mode functions properly
- [ ] Mobile responsive design works
- [ ] Sound effects play correctly
- [ ] All navigation buttons work
- [ ] Data persists between pages

### Production Testing Checklist
- [ ] App loads correctly on deployment URL
- [ ] All functionality works in production
- [ ] Mobile devices function properly
- [ ] No console errors
- [ ] HTTPS works correctly

## Configuration Files

The project includes several configuration files for deployment:

- **`package.json`** - Node.js configuration with deployment scripts
- **`railway.toml`** - Railway-specific deployment settings
- **`.gitignore`** - Git ignore file for Node.js projects

## Future Enhancements

- Add more student records
- Expand vocabulary database
- Implement score tracking
- Add more game modes
- Include progress analytics
- Add user authentication system
- Implement multiplayer features