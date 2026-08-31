# Project & Deployment Guidelines (AGENTS.md)

This project follows a streamlined **AI Studio → GitHub → cPanel / Custom Domain** workflow. 

---

## 1. Core Architecture Principles

1. **Standalone Modern Single Page Web Apps (SPA)**:
   - Built with React, TypeScript, Tailwind CSS, and Lucide icons.
   - **No WordPress / Elementor code export tooling**: Do not generate raw HTML/CSS snippet modals, copy buttons, or CMS exporters unless explicitly requested. Build genuine, interactive user-facing web applications.
2. **Asset Portability**:
   - `vite.config.ts` **MUST** always include `base: './'` so that all bundled scripts, stylesheets, and images use relative paths. This ensures the output works seamlessly on root domains, subdomains, subfolders (e.g. GitHub Pages repo URLs), and cPanel directories without asset 404s.
3. **Clean Component Architecture**:
   - Keep page views modular inside `src/components/`.
   - Maintain client-side navigation/routing in `src/App.tsx`.
   - Keep TypeScript types centralized in `src/types.ts`.

---

## 2. Automated GitHub Actions CI/CD Pipeline

The repository includes an automated deployment workflow at `.github/workflows/deploy.yml`:
- **Node Environment**: Node 22 (LTS).
- **Dependency Resolution**: Uses `npm install --legacy-peer-deps` to guarantee non-blocking CI builds across modern React & Tailwind versions.
- **Build Output**: Generates static production artifacts into `dist/` and deploys automatically to GitHub Pages.

---

## 3. Deployment Flow (Step-by-Step)

### A. Developing & Updating in AI Studio
- Implement UI features and verify builds using `tsc --noEmit` and `npm run build`.

### B. Syncing to GitHub
- Export/commit files to the `main` branch on GitHub.
- GitHub Actions automatically validates the build and publishes preview staging to GitHub Pages (`https://<username>.github.io/<repo>/`).

### C. Publishing to cPanel / Custom Domain
1. Run `npm run build` to generate the production `dist/` bundle.
2. In cPanel **File Manager**, navigate to the target domain's document root (e.g., `public_html` or `/home/user/domain.com/`).
3. Upload the **contents of the `dist/` directory** (`index.html`, `assets/`, static images/icons).
4. For Single Page App client-side routing fallback on Apache/cPanel, include an `.htaccess` file in the document root if needed:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 4. Automated cPanel Git Version Control (Optional Direct Deploy)
When connecting cPanel directly to GitHub via cPanel's **Git™ Version Control**:
- Maintain `.cpanel.yml` at the project root pointing to the domain's deployment path:
  ```yaml
  ---
  deployment:
    tasks:
      - export DEPLOYPATH=/home/madcomxyg/dev1.madcom.co.za/
      - /bin/cp -R dist/* $DEPLOYPATH
  ```
