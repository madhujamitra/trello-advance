#!/bin/bash

# Get the PID of the process using port 3000
PID=$(lsof -ti:3000)

# Check if the PID exists and kill it
if [ ! -z "$PID" ]
then
  echo "Stopping server with PID $PID..."
  kill -9 $PID
  echo "Server stopped."
else
  echo "No server running on port 3000."
fi

# Start the server
echo "Starting server..."
npm run dev
echo "Server started on http://localhost:3000"

