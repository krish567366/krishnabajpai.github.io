#!/bin/bash

# Comprehensive URL submission script using both IndexNow and Bing Webmaster API
# This provides maximum coverage for search engine notifications

# Configuration
INDEXNOW_KEY="26d2159b9aae38e86972e7718d7a22563ccb6b90d40a321ab01d286bcd83de72"
HOST="krishnabajpai.me"
SITE_URL="https://krishnabajpai.me"

# Bing Webmaster API configuration
# TODO: Replace with your actual Bing Webmaster API key
# Get your API key from: https://www.bing.com/webmasters/help/webmaster-api-guide-30fba23a
BING_API_KEY="YOUR_BING_WEBMASTER_API_KEY_HERE"

echo "🚀 Starting comprehensive URL submission for krishnabajpai.me..."
echo "   Using both IndexNow and Bing Webmaster API for maximum coverage"
echo ""

# Check if key file is accessible
echo "🔍 Verifying IndexNow key file access..."
KEY_RESPONSE=$(curl -s -w "%{http_code}" "https://${HOST}/${INDEXNOW_KEY}.txt" -o /dev/null)

if [ "$KEY_RESPONSE" != "200" ]; then
    echo "❌ IndexNow key file not accessible (HTTP $KEY_RESPONSE). Please wait for deployment to complete."
    exit 1
fi

echo "✅ IndexNow key file verified successfully"
echo ""

# Read URLs from the JSON file
if [ ! -f "indexnow-urls.json" ]; then
    echo "❌ indexnow-urls.json not found. Please run from the project root directory."
    exit 1
fi

URL_COUNT=$(jq '.urlList | length' indexnow-urls.json)
echo "📊 Found $URL_COUNT URLs to submit"
echo ""

# ===============================
# INDEXNOW SUBMISSIONS
# ===============================
echo "📤 PART 1: IndexNow Submissions"
echo "================================"

# Submit to Yandex (most reliable)
echo "📤 Submitting to Yandex IndexNow..."
YANDEX_RESPONSE=$(curl -X POST -s -w "%{http_code}" -H "Content-Type: application/json; charset=utf-8" -d @indexnow-urls.json https://yandex.com/indexnow -o /tmp/yandex_response.json)

if [ "$YANDEX_RESPONSE" = "202" ]; then
    echo "✅ Yandex IndexNow submission successful"
else
    echo "⚠️ Yandex IndexNow submission returned HTTP $YANDEX_RESPONSE"
fi

# Submit to Bing IndexNow
echo "📤 Submitting to Bing IndexNow..."
BING_INDEXNOW_RESPONSE=$(curl -X POST -s -w "%{http_code}" -H "Content-Type: application/json; charset=utf-8" -d @indexnow-urls.json https://www.bing.com/indexnow -o /tmp/bing_indexnow_response.json)

if [ "$BING_INDEXNOW_RESPONSE" = "202" ] || [ "$BING_INDEXNOW_RESPONSE" = "200" ]; then
    echo "✅ Bing IndexNow submission successful"
elif [ "$BING_INDEXNOW_RESPONSE" = "403" ]; then
    echo "⏳ Bing IndexNow key verification pending - this is normal for new keys"
else
    echo "⚠️ Bing IndexNow submission returned HTTP $BING_INDEXNOW_RESPONSE"
fi

echo ""

# ===============================
# BING WEBMASTER API SUBMISSIONS
# ===============================
echo "📤 PART 2: Bing Webmaster API Submissions"
echo "=========================================="

if [ "$BING_API_KEY" = "YOUR_BING_WEBMASTER_API_KEY_HERE" ]; then
    echo "⚠️ Bing Webmaster API key not configured"
    echo "   To enable Bing Webmaster API submissions:"
    echo "   1. Go to https://www.bing.com/webmasters/"
    echo "   2. Add and verify your site: $SITE_URL"
    echo "   3. Get your API key from Settings > API Access"
    echo "   4. Replace YOUR_BING_WEBMASTER_API_KEY_HERE in this script"
    echo "   5. Re-run this script"
    echo ""
    echo "   Skipping Bing Webmaster API submission..."
else
    echo "📤 Submitting URLs via Bing Webmaster API..."
    
    # Create JSON payload for Bing Webmaster API
    URLS_ARRAY=$(jq -c '.urlList' indexnow-urls.json)
    BING_PAYLOAD=$(jq -n --arg site "$SITE_URL" --argjson urls "$URLS_ARRAY" '{siteUrl: $site, urlList: $urls}')
    
    # Submit to Bing Webmaster API (max 500 URLs per batch)
    BING_API_RESPONSE=$(echo "$BING_PAYLOAD" | curl -X POST -s -w "%{http_code}" \
        -H "Content-Type: application/json; charset=utf-8" \
        -d @- \
        "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch?apikey=${BING_API_KEY}" \
        -o /tmp/bing_api_response.json)
    
    if [ "$BING_API_RESPONSE" = "200" ]; then
        echo "✅ Bing Webmaster API submission successful"
        # Check if response contains any error details
        if [ -f "/tmp/bing_api_response.json" ]; then
            ERROR_CHECK=$(jq -r '.d // "null"' /tmp/bing_api_response.json 2>/dev/null)
            if [ "$ERROR_CHECK" != "null" ] && [ "$ERROR_CHECK" != "" ]; then
                echo "📋 API Response: $ERROR_CHECK"
            fi
        fi
    else
        echo "⚠️ Bing Webmaster API submission returned HTTP $BING_API_RESPONSE"
        if [ -f "/tmp/bing_api_response.json" ]; then
            echo "📋 Response details:"
            cat /tmp/bing_api_response.json | jq . 2>/dev/null || cat /tmp/bing_api_response.json
        fi
    fi
fi

echo ""

# ===============================
# SUMMARY
# ===============================
echo "🎉 URL Submission Complete!"
echo "============================"
echo "📊 Summary:"
echo "   - Total URLs: $URL_COUNT"
echo "   - Yandex IndexNow: HTTP $YANDEX_RESPONSE"
echo "   - Bing IndexNow: HTTP $BING_INDEXNOW_RESPONSE"
if [ "$BING_API_KEY" != "YOUR_BING_WEBMASTER_API_KEY_HERE" ]; then
    echo "   - Bing Webmaster API: HTTP $BING_API_RESPONSE"
else
    echo "   - Bing Webmaster API: Not configured"
fi

echo ""
echo "💡 Benefits of this dual approach:"
echo "   ✅ IndexNow: Instant notifications to multiple search engines"
echo "   ✅ Bing Webmaster API: Direct submission to Bing's index queue"
echo "   ✅ Maximum coverage and fastest possible indexing"
echo ""

if [ "$BING_API_KEY" = "YOUR_BING_WEBMASTER_API_KEY_HERE" ]; then
    echo "🔧 Next steps:"
    echo "   1. Set up Bing Webmaster API key for even better coverage"
    echo "   2. Monitor indexing performance in Bing Webmaster Tools"
    echo "   3. Run this script after each content update"
fi

# Clean up temporary files
rm -f /tmp/yandex_response.json /tmp/bing_indexnow_response.json /tmp/bing_api_response.json