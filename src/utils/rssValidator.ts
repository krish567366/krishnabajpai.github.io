import { getAllRSSItems } from '../data/rssContentCollector';

// Test function to validate RSS content
export function validateRSSContent() {
  const items = getAllRSSItems();
  
  console.log('RSS Feed Validation Results:');
  console.log('==========================');
  console.log(`Total Items: ${items.length}`);
  console.log('');
  
  // Group by category
  const categories = items.reduce((acc, item) => {
    const category = item.category || 'Uncategorized';
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  console.log('Items by Category:');
  Object.entries(categories).forEach(([category, count]) => {
    console.log(`  ${category}: ${count} items`);
  });
  console.log('');
  
  // Show recent items
  console.log('Recent Items (Top 10):');
  items.slice(0, 10).forEach((item, index) => {
    console.log(`${index + 1}. ${item.title}`);
    console.log(`   Category: ${item.category}`);
    console.log(`   Date: ${new Date(item.pubDate).toLocaleDateString()}`);
    console.log(`   Link: ${item.link}`);
    console.log('');
  });
  
  // Validate required RSS fields
  const validationErrors: string[] = [];
  items.forEach((item, index) => {
    if (!item.title) validationErrors.push(`Item ${index + 1}: Missing title`);
    if (!item.description) validationErrors.push(`Item ${index + 1}: Missing description`);
    if (!item.link) validationErrors.push(`Item ${index + 1}: Missing link`);
    if (!item.guid) validationErrors.push(`Item ${index + 1}: Missing guid`);
    if (!item.pubDate) validationErrors.push(`Item ${index + 1}: Missing pubDate`);
  });
  
  if (validationErrors.length > 0) {
    console.log('Validation Errors:');
    validationErrors.forEach(error => console.log(`  ❌ ${error}`));
  } else {
    console.log('✅ All RSS items have required fields');
  }
  
  return {
    totalItems: items.length,
    categories,
    validationErrors,
    items: items.slice(0, 5) // Return first 5 items for inspection
  };
}

// Export function to generate RSS XML for testing
export function generateRSSXML() {
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

  return xml;
}

function escapeXML(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export default { validateRSSContent, generateRSSXML };