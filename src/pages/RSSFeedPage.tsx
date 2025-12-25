import React, { useEffect, useState } from 'react';
import { getAllRSSItems } from '../data/rssContentCollector';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout/Layout';
import { Button } from '../components/ui/button';

const RSSFeedPage: React.FC = () => {
  const [rssXML, setRssXML] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const generateRSSXML = () => {
      const items = getAllRSSItems().slice(0, 50);
      const currentDate = new Date().toUTCString();
      
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Krishna Bajpai - AI/ML Research &amp; Consulting</title>
    <description>Revolutionary AI discoveries, research publications, case studies, and insights from Krishna Bajpai. Featuring breakthrough systems achieving sub-microsecond performance, quantum optimization, and advanced machine learning solutions.</description>
    <link>https://krishnabajpai.me</link>
    <atom:link href="https://krishnabajpai.me/rss-feed" rel="self" type="application/rss+xml"/>
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
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(rssXML);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy RSS XML:', err);
    }
  };

  const downloadRSS = () => {
    const blob = new Blob([rssXML], { type: 'application/rss+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'krishna-bajpai-rss-feed.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const items = getAllRSSItems().slice(0, 10); // Show preview of first 10 items

  return (
    <>
      <Helmet>
        <title>RSS Feed Generator - Krishna Bajpai</title>
        <meta name="description" content="Dynamic RSS feed generator for Krishna Bajpai's AI/ML research, case studies, and consulting insights" />
        <link rel="canonical" href="https://krishnabajpai.me/rss-feed" />
      </Helmet>
      
      <Layout>
        <div className="container mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-light text-foreground mb-6">
                RSS Feed{" "}
                <span className="font-sketch font-bold relative">
                  Generator
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform -rotate-1"></div>
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Dynamic RSS feed generated from all site content including revolutionary discoveries, 
                research publications, case studies, services, and tools.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button onClick={copyToClipboard} variant="default" size="lg">
                  {copied ? 'Copied!' : 'Copy RSS XML'}
                </Button>
                <Button onClick={downloadRSS} variant="outline" size="lg">
                  Download RSS File
                </Button>
              </div>
            </div>

            {/* RSS Feed Info */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-card border border-border p-8">
                <h2 className="text-2xl font-light text-foreground mb-4">Feed Information</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Items:</span>
                    <span className="text-foreground font-medium">{getAllRSSItems().length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Updated:</span>
                    <span className="text-foreground font-medium">{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Feed URL:</span>
                    <span className="text-foreground font-medium text-xs">krishnabajpai.me/rss</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Format:</span>
                    <span className="text-foreground font-medium">RSS 2.0</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border p-8">
                <h2 className="text-2xl font-light text-foreground mb-4">Content Categories</h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Revolutionary Discoveries</span>
                    <span className="text-accent">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Research Publications</span>
                    <span className="text-accent">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Blog Posts</span>
                    <span className="text-accent">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Case Studies</span>
                    <span className="text-accent">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Services</span>
                    <span className="text-accent">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tools</span>
                    <span className="text-accent">10+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Items Preview */}
            <div className="mb-12">
              <h2 className="text-3xl font-light text-foreground mb-8 text-center">
                Recent Items Preview
              </h2>
              
              <div className="space-y-6">
                {items.map((item, index) => (
                  <div key={item.guid} className="bg-card border border-border p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-medium text-foreground flex-1 mr-4">
                        {item.title.replace(/Krishna Bajpai - |: Krishna Bajpai/g, '')}
                      </h3>
                      <div className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                        {item.category}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>{new Date(item.pubDate).toLocaleDateString()}</span>
                      <a 
                        href={item.link} 
                        className="text-accent hover:text-foreground transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Raw XML Display */}
            <div className="bg-card border border-border p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-light text-foreground">Generated RSS XML</h2>
                <div className="text-xs text-muted-foreground">
                  {rssXML.length} characters
                </div>
              </div>
              
              <div className="bg-secondary border border-border rounded p-4 max-h-96 overflow-y-auto">
                <pre className="text-xs text-foreground font-mono leading-relaxed whitespace-pre-wrap">
                  {rssXML || 'Generating RSS feed...'}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Layout>
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

export default RSSFeedPage;