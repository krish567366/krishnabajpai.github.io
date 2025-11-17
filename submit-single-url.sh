#!/bin/bash

# Single URL submission script for both IndexNow and Bing Webmaster API
# Usage: ./submit-single-url.sh "https://krishnabajpai.me/blog/new-post"

if [ $# -eq 0 ]; then
    echo "❌ Error: Please provide a URL to submit"
    echo "Usage: $0 \"https://krishnabajpai.me/blog/new-post\""
    exit 1
fi

URL="$1"
INDEXNOW_KEY="26d2159b9aae38e86972e7718d7a22563ccb6b90d40a321ab01d286bcd83de72"
HOST="krishnabajpai.me"
SITE_URL="https://krishnabajpai.me"
BING_API_KEY="YOUR_BING_WEBMASTER_API_KEY_HERE"

echo "🚀 Submitting single URL: $URL"
echo ""

# Validate URL format
if [[ ! "$URL" =~ ^https://krishnabajpai\.me/.* ]]; then
    echo "❌ Error: URL must be from krishnabajpai.me domain"
    echo "   Provided: $URL"
    echo "   Expected format: https://krishnabajpai.me/page-path"
    exit 1
fi

# ===============================
# INDEXNOW SUBMISSIONS
# ===============================
echo "📤 IndexNow Submissions"
echo "======================="

# Submit to Yandex
echo "📤 Submitting to Yandex..."
YANDEX_RESPONSE=$(curl -s -w "%{http_code}" "https://yandex.com/indexnow?url=${URL}&key=${INDEXNOW_KEY}" -o /tmp/yandex_single_response.json)

if [ "$YANDEX_RESPONSE" = "202" ] || [ "$YANDEX_RESPONSE" = "200" ]; then
    echo "✅ Yandex IndexNow: Success (HTTP $YANDEX_RESPONSE)"
else
    echo "⚠️ Yandex IndexNow: HTTP $YANDEX_RESPONSE"
fi

# Submit to Bing IndexNow
echo "📤 Submitting to Bing IndexNow..."
BING_INDEXNOW_RESPONSE=$(curl -s -w "%{http_code}" "https://www.bing.com/indexnow?url=${URL}&key=${INDEXNOW_KEY}" -o /tmp/bing_indexnow_single_response.json)

if [ "$BING_INDEXNOW_RESPONSE" = "202" ] || [ "$BING_INDEXNOW_RESPONSE" = "200" ]; then
    echo "✅ Bing IndexNow: Success (HTTP $BING_INDEXNOW_RESPONSE)"
elif [ "$BING_INDEXNOW_RESPONSE" = "403" ]; then
    echo "⏳ Bing IndexNow: Key verification pending (HTTP $BING_INDEXNOW_RESPONSE)"
else
    echo "⚠️ Bing IndexNow: HTTP $BING_INDEXNOW_RESPONSE"
fi

echo ""

# ===============================
# BING WEBMASTER API SUBMISSION
# ===============================
echo "📤 Bing Webmaster API Submission"
echo "================================"

if [ "$BING_API_KEY" = "YOUR_BING_WEBMASTER_API_KEY_HERE" ]; then
    echo "⚠️ Bing Webmaster API key not configured (skipping)"
    echo "   Set up API key for additional coverage"
else
    echo "📤 Submitting to Bing Webmaster API..."
    
    # Create JSON payload for single URL
    BING_PAYLOAD=$(jq -n --arg site "$SITE_URL" --arg url "$URL" '{siteUrl: $site, urlList: [$url]}')
    
    BING_API_RESPONSE=$(echo "$BING_PAYLOAD" | curl -X POST -s -w "%{http_code}" \
        -H "Content-Type: application/json; charset=utf-8" \
        -d @- \
        "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=${BING_API_KEY}" \
        -o /tmp/bing_api_single_response.json)
    
    if [ "$BING_API_RESPONSE" = "200" ]; then
        echo "✅ Bing Webmaster API: Success (HTTP $BING_API_RESPONSE)"
    else
        echo "⚠️ Bing Webmaster API: HTTP $BING_API_RESPONSE"
        if [ -f "/tmp/bing_api_single_response.json" ]; then
            echo "📋 Error details:"
            cat /tmp/bing_api_single_response.json | jq . 2>/dev/null || cat /tmp/bing_api_single_response.json
        fi
    fi
fi

echo ""

# ===============================
# SUMMARY
# ===============================
echo "🎉 Single URL Submission Complete!"
echo "=================================="
echo "🔗 URL: $URL"
echo "📊 Results:"
echo "   - Yandex IndexNow: HTTP $YANDEX_RESPONSE"
echo "   - Bing IndexNow: HTTP $BING_INDEXNOW_RESPONSE"
if [ "$BING_API_KEY" != "YOUR_BING_WEBMASTER_API_KEY_HERE" ]; then
    echo "   - Bing Webmaster API: HTTP $BING_API_RESPONSE"
else
    echo "   - Bing Webmaster API: Not configured"
fi

echo ""
echo "💡 This URL has been submitted via multiple channels for fastest indexing!"

# Clean up temporary files
rm -f /tmp/yandex_single_response.json /tmp/bing_indexnow_single_response.json /tmp/bing_api_single_response.json