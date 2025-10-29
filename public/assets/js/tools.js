// Tools page rendering logic
const toolsApp = {
  manifest: null,

  async init() {
    await this.loadManifest();
    this.renderPage();
  },

  async loadManifest() {
    try {
      const response = await fetch('/tools/manifest.json');
      this.manifest = await response.json();
    } catch (error) {
      console.error('Error loading tools manifest:', error);
    }
  },

  getSlugFromPath() {
    return location.pathname.split('/').filter(Boolean).pop();
  },

  renderToolDetails(tool) {
    document.title = `${tool.name} — Krishna Bajpai's Tools`;
    return `
      <div class="tool-details">
        <header class="tool-header">
          <h1>${tool.name} <span class="version">v${tool.version}</span></h1>
          <div class="tool-category">${tool.category}</div>
        </header>
        
        <div class="tool-description">
          <p>${tool.description}</p>
        </div>
        
        <div class="tool-tags">
          ${tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        
        <div class="tool-links">
          <a href="${tool.pypi}" class="button primary" target="_blank">
            <i class="fas fa-box"></i> View on PyPI
          </a>
          <a href="${tool.github}" class="button secondary" target="_blank">
            <i class="fab fa-github"></i> View on GitHub
          </a>
        </div>
      </div>
    `;
  },

  renderToolsList() {
    document.title = "Tools — Krishna Bajpai";
    
    const categorizedTools = {};
    this.manifest.tools.forEach(tool => {
      if (!categorizedTools[tool.category]) {
        categorizedTools[tool.category] = [];
      }
      categorizedTools[tool.category].push(tool);
    });

    const categoryHtml = Object.entries(categorizedTools).map(([category, tools]) => `
      <section class="category-section">
        <h2>${category}</h2>
        <div class="tools-grid">
          ${tools.map(tool => `
            <a href="/tools/${tool.slug}" class="tool-card">
              <h3>${tool.name}</h3>
              <p>${tool.description}</p>
              <div class="tool-tags">
                ${tool.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
              </div>
            </a>
          `).join('')}
        </div>
      </section>
    `).join('');

    return `
      <div class="tools-page">
        <header class="page-header">
          <h1>Python Tools & Libraries</h1>
          <p>A collection of open-source Python packages for AI, ML, and quantum computing</p>
        </header>
        ${categoryHtml}
      </div>
    `;
  },

  renderPage() {
    if (!this.manifest) {
      document.body.innerHTML = '<div class="error">Error loading tools data</div>';
      return;
    }

    const slug = this.getSlugFromPath();
    const tool = this.manifest.tools.find(t => t.slug === slug);
    
    const mainContent = tool ? this.renderToolDetails(tool) : this.renderToolsList();
    document.getElementById('tools-container').innerHTML = mainContent;
  }
};

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => toolsApp.init());