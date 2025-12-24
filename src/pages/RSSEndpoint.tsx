import React, { useEffect } from 'react';
import { getAllRSSItems } from '../data/rssContentCollector';
import { Helmet } from 'react-helmet';

const RSSEndpoint: React.FC = () => {
  useEffect(() => {
    const generateAndServeRSS = () => {
      const items = getAllRSSItems().slice(0, 50);
      const currentDate = new Date().toUTCString();
      
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
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
    <lastBuildDate>${currentDate}</lastBuildDate>
    <pubDate>${currentDate}</pubDate>
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

${items.map(item => `    <item>
      <title>${escapeXML(item.title)}</title>
      <description>${escapeXML(item.description)}</description>
      <link>${escapeXML(item.link)}</link>
      <guid isPermaLink="false">${escapeXML(item.guid)}</guid>
      <pubDate>${item.pubDate}</pubDate>
      ${item.category ? `<category>${escapeXML(item.category)}</category>` : ''}
      ${item.author ? `<author>${escapeXML(item.author)}</author>` : ''}
      ${item.content ? `<content:encoded>${item.content}</content:encoded>` : ''}
    </item>`).join('\n')}
  </channel>
</rss>`;

      // For SPA deployment, we'll render the XML as text
      // The user can copy this or set up server-side rendering for proper content-type
      document.body.innerHTML = `<pre style="font-family: monospace; white-space: pre-wrap; padding: 20px; line-height: 1.4;">${xml.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`;
      
      // Also log the raw XML to console for easy copying
      console.log('Raw RSS XML (copy this for your RSS feed):');
      console.log(xml);
    };

    generateAndServeRSS();
  }, []);

  return (
    <>
      <Helmet>
        <title>RSS Feed - Krishna Bajpai</title>
        <meta name="description" content="RSS feed for Krishna Bajpai's AI/ML research, case studies, and consulting insights" />
        <meta httpEquiv="Content-Type" content="application/rss+xml; charset=utf-8" />
      </Helmet>
      <div style={{ 
        fontFamily: 'monospace', 
        whiteSpace: 'pre-wrap', 
        padding: '20px',
        backgroundColor: '#f9f9f9',
        fontSize: '14px',
        lineHeight: '1.4',
        border: '1px solid #ddd'
      }}>
        <h1 style={{ fontFamily: 'sans-serif', marginBottom: '20px' }}>RSS Feed Generator</h1>
        <p style={{ fontFamily: 'sans-serif', marginBottom: '20px' }}>
          This page generates the RSS feed dynamically. Check the browser console for the raw XML to copy.
        </p>
        <div>Loading RSS feed...</div>
      </div>
    </>
  );
};

// Utility function to escape XML special characters
function escapeXML(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export default RSSEndpoint;