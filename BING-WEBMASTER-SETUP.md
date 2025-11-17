# Bing Webmaster API Setup Guide

## Why Use Both IndexNow AND Bing Webmaster API?

While IndexNow provides instant notifications, Bing's Webmaster API offers additional benefits:
- **Direct queue submission** to Bing's indexing pipeline
- **Quota management** - see how many URLs you can submit
- **Detailed response handling** for troubleshooting
- **Complementary coverage** alongside IndexNow

## Setup Steps

### 1. Access Bing Webmaster Tools
Go to: https://www.bing.com/webmasters/

### 2. Add Your Site
- Click "Add a site"
- Enter: `https://krishnabajpai.me`
- Verify ownership using one of these methods:
  - **XML file** (recommended): Upload provided XML file to your site root
  - **Meta tag**: Add the provided meta tag to your HTML head
  - **DNS**: Add TXT record to your domain DNS

### 3. Get Your API Key
1. After site verification, go to **Settings** → **API Access**
2. Click **Generate API Key**
3. Copy the API key (looks like: `abcdef123456789abcdef123456789ab`)

### 4. Configure the Script
Edit the comprehensive submission script:
```bash
nano submit-comprehensive.sh
```

Replace this line:
```bash
BING_API_KEY="YOUR_BING_WEBMASTER_API_KEY_HERE"
```

With your actual API key:
```bash
BING_API_KEY="your-actual-api-key-here"
```

### 5. Test the Setup
Run the comprehensive script:
```bash
./submit-comprehensive.sh
```

You should see:
```
✅ Bing Webmaster API submission successful
```

## API Quotas and Limits

- **Daily quota**: Check in Bing Webmaster Tools → Settings → API Access
- **Batch limit**: Maximum 500 URLs per batch
- **Rate limits**: Don't exceed recommended submission frequency

## Monitoring Results

### In Bing Webmaster Tools:
1. Go to **Configure My Site** → **Submit URLs**
2. View submission history and status
3. Monitor indexing progress in **Reports & Data** → **Page Traffic**

### Script Output:
```bash
# Successful submission
✅ Bing Webmaster API: Success (HTTP 200)

# Error responses
⚠️ Bing Webmaster API: HTTP 400  # Bad request - check URL format
⚠️ Bing Webmaster API: HTTP 401  # Unauthorized - check API key
⚠️ Bing Webmaster API: HTTP 403  # Forbidden - check site verification
```

## Usage Examples

### Submit all URLs:
```bash
./submit-comprehensive.sh
```

### Submit single URL:
```bash
./submit-single-url.sh "https://krishnabajpai.me/blog/new-post"
```

### Check quota before submission:
You can add quota checking to the script using:
```bash
curl -H "Authorization: Bearer $BING_API_KEY" \
"https://ssl.bing.com/webmaster/api.svc/json/GetUrlSubmissionQuota?siteUrl=https://krishnabajpai.me"
```

## Troubleshooting

### Common Issues:

1. **HTTP 401 (Unauthorized)**
   - Verify API key is correct
   - Check if API access is enabled

2. **HTTP 403 (Forbidden)**  
   - Ensure site is verified in Bing Webmaster Tools
   - Check site URL matches exactly

3. **HTTP 400 (Bad Request)**
   - Verify URL format is correct
   - Check JSON payload structure

### Getting Help:
- Bing Webmaster API Documentation: https://docs.microsoft.com/en-us/bingwebmaster/
- Support: Through Bing Webmaster Tools interface

## Benefits After Setup

✅ **Dual submission strategy**:
- IndexNow for instant notifications
- Webmaster API for direct Bing pipeline access

✅ **Maximum indexing speed**:
- Multiple submission channels
- Redundancy if one method fails

✅ **Better monitoring**:
- Track submission success rates
- Monitor quota usage
- Detailed error reporting