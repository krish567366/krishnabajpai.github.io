#!/usr/bin/env node

// RSS Generator Script - Generates static RSS XML file from React data
const fs = require('fs');
const path = require('path');

// This would be used in a build process to generate a static RSS file
const generateStaticRSS = () => {
  // Import the RSS generator (in a real scenario, you'd need to transpile this)
  const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Krishna Bajpai - AI/ML Research &amp; Consulting</title>
    <description>Revolutionary AI discoveries, research publications, case studies, and insights from Krishna Bajpai. Featuring breakthrough systems achieving sub-microsecond performance, quantum optimization, and advanced machine learning solutions.</description>
    <link>https://krishnabajpai.me</link>
    <atom:link href="https://krishnabajpai.me/rss" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <copyright>© 2025 Krishna Bajpai. All rights reserved.</copyright>
    <managingEditor>krishna@krishnabajpai.me (Krishna Bajpai)</managingEditor>
    <webMaster>krishna@krishnabajpai.me (Krishna Bajpai)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <category>Artificial Intelligence</category>
    <category>Machine Learning</category>
    <category>Quantum Computing</category>
    <category>Research</category>
    <category>Technology</category>
    <generator>React RSS Generator by Krishna Bajpai</generator>
    <image>
      <url>https://krishnabajpai.me/assets/me.jpg</url>
      <title>Krishna Bajpai - AI/ML Research &amp; Consulting</title>
      <link>https://krishnabajpai.me</link>
      <width>144</width>
      <height>144</height>
      <description>Krishna Bajpai - AI/ML Expert, Researcher, and Consultant</description>
    </image>

    <!-- Revolutionary Discoveries -->
    <item>
      <title>Ultra-Low Latency Trading Execution Engine: 890ns Revolutionary Breakthrough</title>
      <description>Revolutionary deterministic execution engine achieving 890ns median latency for quantitative trading systems. Creator: Krishna Bajpai.</description>
      <link>https://krishnabajpai.me/#ultra-low-latency-execution-engine</link>
      <guid isPermaLink="false">https://krishnabajpai.me/discoveries/ultra-low-latency-execution-engine</guid>
      <pubDate>${new Date('2025-12-24').toUTCString()}</pubDate>
      <category>Revolutionary Discovery</category>
      <author>Krishna Bajpai (krishna@krishnabajpai.me)</author>
    </item>
    
    <item>
      <title>BareMetalNIC Framework: 20-50ns Networking Revolutionary Discovery</title>
      <description>Revolutionary zero-abstraction NIC driver framework achieving 20-50ns packet latency through direct memory-mapped access. Creator: Krishna Bajpai.</description>
      <link>https://krishnabajpai.me/#baremetalnic-framework</link>
      <guid isPermaLink="false">https://krishnabajpai.me/discoveries/baremetalnic-framework</guid>
      <pubDate>${new Date('2025-12-24').toUTCString()}</pubDate>
      <category>Revolutionary Discovery</category>
      <author>Krishna Bajpai (krishna@krishnabajpai.me)</author>
    </item>

  </channel>
</rss>`;

  const outputPath = path.join(process.cwd(), 'public', 'rss-fallback.xml');
  fs.writeFileSync(outputPath, rssContent, 'utf8');
  console.log(`Static RSS file generated: ${outputPath}`);
};

if (require.main === module) {
  generateStaticRSS();
}

module.exports = { generateStaticRSS };