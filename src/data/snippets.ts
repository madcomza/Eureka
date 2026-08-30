// Simplified snippets generator to prevent oversized files and syntax corruption
export function getPageSnippets(page: string): { html: string; css: string } {
  const pageTitle = page.replace(/-/g, ' ').toUpperCase();
  const html = `<!-- EUREKA FACILITIES MANAGEMENT SOLUTIONS - ${pageTitle} -->
<section class="efms-section efms-${page}">
  <div class="efms-container">
    <div class="efms-header-block">
      <h2>${pageTitle}</h2>
      <p>Professional Facilities Management & Construction Advisory Services across South Africa.</p>
    </div>
  </div>
</section>`;

  const css = `/* EUREKA ${pageTitle} STYLES */
.efms-${page} {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #0f172a;
  background-color: #f8fafc;
  padding: 40px 20px;
}
.efms-container {
  max-width: 1200px;
  margin: 0 auto;
}
.efms-header-block h2 {
  font-size: 28px;
  font-weight: 800;
  color: #0b1b3d;
  margin-bottom: 8px;
}`;

  return { html, css };
}
