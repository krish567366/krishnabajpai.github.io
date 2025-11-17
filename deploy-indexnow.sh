#!/bin/bash

# Automated IndexNow deployment script
# This script should be run after each deployment to notify search engines of updates

KEY="26d2159b9aae38e86972e7718d7a22563ccb6b90d40a321ab01d286bcd83de72"
HOST="krishnabajpai.me"

echo "🚀 Starting IndexNow submission for krishnabajpai.me..."

# Check if key file is accessible
echo "Verifying key file access..."
KEY_RESPONSE=$(curl -s -w "%{http_code}" "https://${HOST}/${KEY}.txt" -o /dev/null)

if [ "$KEY_RESPONSE" != "200" ]; then
    echo "❌ Key file not accessible (HTTP $KEY_RESPONSE). Please wait for deployment to complete."
    exit 1
fi

echo "✅ Key file verified successfully"

# Submit to Yandex (most reliable)
echo "📤 Submitting to Yandex..."
YANDEX_RESPONSE=$(curl -X POST -s -w "%{http_code}" -H "Content-Type: application/json; charset=utf-8" -d @indexnow-urls.json https://yandex.com/indexnow -o /tmp/yandex_response.json)

if [ "$YANDEX_RESPONSE" = "202" ]; then
    echo "✅ Yandex submission successful"
else
    echo "⚠️ Yandex submission returned HTTP $YANDEX_RESPONSE"
fi

# Submit to Bing (may take time to verify key)
echo "📤 Submitting to Bing..."
BING_RESPONSE=$(curl -X POST -s -w "%{http_code}" -H "Content-Type: application/json; charset=utf-8" -d @indexnow-urls.json https://www.bing.com/indexnow -o /tmp/bing_response.json)

if [ "$BING_RESPONSE" = "202" ] || [ "$BING_RESPONSE" = "200" ]; then
    echo "✅ Bing submission successful"
elif [ "$BING_RESPONSE" = "403" ]; then
    echo "⏳ Bing key verification pending - this is normal for new keys"
else
    echo "⚠️ Bing submission returned HTTP $BING_RESPONSE"
fi

# Submit to generic IndexNow API
echo "📤 Submitting to IndexNow API..."
API_RESPONSE=$(curl -X POST -s -w "%{http_code}" -H "Content-Type: application/json; charset=utf-8" -d @indexnow-urls.json https://api.indexnow.org/indexnow -o /tmp/indexnow_response.json)

if [ "$API_RESPONSE" = "202" ] || [ "$API_RESPONSE" = "200" ]; then
    echo "✅ IndexNow API submission successful"
elif [ "$API_RESPONSE" = "403" ]; then
    echo "⏳ IndexNow API key verification pending - this is normal for new keys"
else
    echo "⚠️ IndexNow API submission returned HTTP $API_RESPONSE"
fi

echo ""
echo "🎉 IndexNow submission completed!"
echo "📊 Summary:"
echo "   - Total URLs submitted: $(jq '.urlList | length' indexnow-urls.json)"
echo "   - Yandex: HTTP $YANDEX_RESPONSE"
echo "   - Bing: HTTP $BING_RESPONSE"  
echo "   - IndexNow API: HTTP $API_RESPONSE"
echo ""
echo "💡 Note: Search engines may take a few minutes to verify your key for first-time submissions."
echo "    Future submissions should be processed immediately once verified."