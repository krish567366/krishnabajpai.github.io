import React, { useEffect, useState } from 'react';
import { getAllRSSItems, type RSSItem } from '../data/rssContentCollector';

interface RSSFeedProps {
  limit?: number;
}

const RSSFeed: React.FC<RSSFeedProps> = ({ limit = 50 }) => {
  const [rssXML, setRssXML] = useState<string>('');

  useEffect(() => {
    const generateRSSXML = () => {
      const items = getAllRSSItems().slice(0, limit);
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

      setRssXML(xml);
    };

    generateRSSXML();
  }, [limit]);

  // Set proper content type for RSS
  useEffect(() => {
    if (rssXML) {
      // Set the content-type header for RSS
      document.querySelector('meta[http-equiv="Content-Type"]')?.setAttribute('content', 'application/rss+xml; charset=utf-8');
    }
  }, [rssXML]);

  return (
    <div style={{ 
      fontFamily: 'monospace', 
      whiteSpace: 'pre-wrap', 
      padding: '20px',
      backgroundColor: '#f5f5f5',
      fontSize: '12px',
      lineHeight: '1.4'
    }}>
      {rssXML || 'Loading RSS feed...'}
    </div>
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

export default RSSFeed;