#!/bin/bash

# IndexNow submission script for krishnabajpai.me
# Usage: ./submit-indexnow.sh [single-url] or ./submit-indexnow.sh (for all URLs)

KEY="26d2159b9aae38e86972e7718d7a22563ccb6b90d40a321ab01d286bcd83de72"
HOST="krishnabajpai.me"

if [ $# -eq 1 ]; then
    # Submit single URL
    URL="$1"
    echo "Submitting single URL: $URL"
    
    # Submit to Bing
    curl -s "https://www.bing.com/indexnow?url=${URL}&key=${KEY}" -w "\nBing Response Code: %{http_code}\n"
    
    # Submit to Yandex  
    curl -s "https://yandex.com/indexnow?url=${URL}&key=${KEY}" -w "\nYandex Response Code: %{http_code}\n"
    
    # Submit to generic API
    curl -s "https://api.indexnow.org/indexnow?url=${URL}&key=${KEY}" -w "\nIndexNow API Response Code: %{http_code}\n"
    
else
    # Submit all URLs
    echo "Submitting all URLs..."
    
    # Submit to Bing
    echo "Submitting to Bing..."
    curl -X POST -H "Content-Type: application/json; charset=utf-8" -d @indexnow-urls.json https://www.bing.com/indexnow -w "\nBing Response Code: %{http_code}\n"
    
    # Submit to Yandex
    echo "Submitting to Yandex..."
    curl -X POST -H "Content-Type: application/json; charset=utf-8" -d @indexnow-urls.json https://yandex.com/indexnow -w "\nYandex Response Code: %{http_code}\n"
    
    # Submit to generic API
    echo "Submitting to IndexNow API..."
    curl -X POST -H "Content-Type: application/json; charset=utf-8" -d @indexnow-urls.json https://api.indexnow.org/indexnow -w "\nIndexNow API Response Code: %{http_code}\n"
fi

echo "IndexNow submission completed!"