#!/bin/bash

echo "Starting Tailored Learning Platform Server..."
echo
echo "Choose your preferred server method:"
echo "1. Python HTTP Server (Recommended - No installation required)"
echo "2. Node.js HTTP Server (Recommended - Best compatibility)"
echo "3. Node.js Serve Server (Alternative)"
echo "4. Exit"
echo
read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo
        echo "Starting Python HTTP Server on http://localhost:8080"
        echo "Press Ctrl+C to stop the server"
        echo
        python3 -m http.server 8080
        ;;
    2)
        echo
        echo "Installing dependencies (first time only)..."
        npm install
        echo
        echo "Starting Node.js HTTP Server on http://localhost:8080"
        echo "Opening browser automatically..."
        echo "Press Ctrl+C to stop the server"
        echo
        npm start
        ;;
    3)
        echo
        echo "Installing dependencies (first time only)..."
        npm install
        echo
        echo "Starting Node.js Serve Server on http://localhost:8080"
        echo "Press Ctrl+C to stop the server"
        echo
        npm run serve
        ;;
    4)
        echo "Exiting..."
        exit 0
        ;;
    *)
        echo "Invalid choice. Please run the script again."
        ./start-server.sh
        ;;
esac