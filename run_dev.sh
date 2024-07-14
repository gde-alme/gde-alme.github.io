#!/bin/bash
python -m http.server 8001 &

SERVER_PID=$!

sleep 2

xdg-open http://localhost:8000

wait $SERVER_PID
