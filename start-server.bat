@echo off
echo Starting Tailored Learning Platform Server...
echo.
echo Choose your preferred server method:
echo 1. Python HTTP Server (Recommended - No installation required)
echo 2. Node.js HTTP Server (Recommended - Best compatibility)
echo 3. Node.js Serve Server (Alternative)
echo 4. Exit
echo.
set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" (
    echo.
    echo Starting Python HTTP Server on http://localhost:8080
    echo Press Ctrl+C to stop the server
    echo.
    python -m http.server 8080
) else if "%choice%"=="2" (
    echo.
    echo Installing dependencies (first time only)...
    call npm install
    echo.
    echo Starting Node.js HTTP Server on http://localhost:8080
    echo Opening browser automatically...
    echo Press Ctrl+C to stop the server
    echo.
    call npm start
) else if "%choice%"=="3" (
    echo.
    echo Installing dependencies (first time only)...
    call npm install
    echo.
    echo Starting Node.js Serve Server on http://localhost:8080
    echo Press Ctrl+C to stop the server
    echo.
    call npm run serve
) else if "%choice%"=="4" (
    echo Exiting...
    exit /b 0
) else (
    echo Invalid choice. Please run the script again.
    pause
    call start-server.bat
)