import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const routes = [
  {
    slug: 'about',
    canonical: 'https://eurekasolutions.co.za/about',
    title: 'About Us | Eureka Facilities Management Solutions (EFMS)',
    description: 'Learn about Eureka Facilities Management Solutions, our leadership under Monwabisi Makinana, certifications (CIPC, SACPCMP, PMI), and mission.',
  },
  {
    slug: 'solutions',
    canonical: 'https://eurekasolutions.co.za/solutions',
    title: 'All Solutions & Services | Eureka Facilities Management',
    description: 'Explore our full spectrum of facilities management, commercial cleaning, pest control, construction management, and strategic consultancy.',
  },
  {
    slug: 'facilities-management',
    canonical: 'https://eurekasolutions.co.za/facilities-management',
    title: 'Integrated Facilities Management Services | Eureka Solutions',
    description: 'Comprehensive hard and soft facilities management services, building maintenance, compliance, and asset life-cycle solutions.',
  },
  {
    slug: 'commercial-cleaning',
    canonical: 'https://eurekasolutions.co.za/commercial-cleaning',
    title: 'Commercial Cleaning & Industrial Hygiene | Eureka Solutions',
    description: 'Deep cleaning, daily commercial hygiene, corporate office sanitation, and specialized industrial cleaning solutions in South Africa.',
  },
  {
    slug: 'pest-control',
    canonical: 'https://eurekasolutions.co.za/pest-control',
    title: 'Professional Pest Control & Fumigation | Eureka Solutions',
    description: 'Certified commercial & residential pest eradication, SAPCA compliant eco-friendly fumigation, rodent, insect, and termite control.',
  },
  {
    slug: 'pre-soil-treatment',
    canonical: 'https://eurekasolutions.co.za/pre-soil-treatment',
    title: 'Pre-Construction Soil Poisoning & Termite Proofing | Eureka Solutions',
    description: 'Certified pre-construction termite barrier treatments and soil poisoning with NHBRC warranty certificates for residential & commercial builds.',
  },
  {
    slug: 'office-relocation',
    canonical: 'https://eurekasolutions.co.za/office-relocation',
    title: 'Turnkey Office Relocation & Corporate Moves | Eureka Solutions',
    description: 'Zero-downtime office moves, IT infrastructure disconnection/recommissioning, furniture decommissioning, and churn management.',
  },
  {
    slug: 'construction-management',
    canonical: 'https://eurekasolutions.co.za/construction-management',
    title: 'Construction Project Management & Site Oversight | Eureka Solutions',
    description: 'SACPCMP registered construction managers ensuring safety compliance, timeline acceleration, quality assurance, and milestone delivery.',
  },
  {
    slug: 'project-management',
    canonical: 'https://eurekasolutions.co.za/project-management',
    title: 'Professional Built Environment Project Management | Eureka Solutions',
    description: 'End-to-end CAPEX project governance, stakeholder coordination, procurement planning, and risk management across Gauteng and South Africa.',
  },
  {
    slug: 'freelance-pm',
    canonical: 'https://eurekasolutions.co.za/freelance-pm',
    title: 'Freelance Project Management & Client Representation | Eureka Solutions',
    description: 'Flexible, high-impact freelance project manager and principal agent services for developers, property funds, and public sector bodies.',
  },
  {
    slug: 'construction-consultancy',
    canonical: 'https://eurekasolutions.co.za/construction-consultancy',
    title: 'Built Environment Strategic Consultancy | Eureka Solutions',
    description: 'Strategic advisory on feasibility, buildability, infrastructure audits, condition assessments, and governance for major capital works.',
  },
  {
    slug: 'quantity-surveying',
    canonical: 'https://eurekasolutions.co.za/quantity-surveying',
    title: 'Quantity Surveying & Commercial Cost Management | Eureka Solutions',
    description: 'Rigorous bills of quantities, cost modeling, tender evaluation, interim payment valuations, and final account settlement.',
  },
  {
    slug: 'construction-claims',
    canonical: 'https://eurekasolutions.co.za/construction-claims',
    title: 'Construction Contract Advisory & Dispute Assessment | Eureka Solutions',
    description: 'JBCC, GCC, NEC3/4, and FIDIC contractual claim preparation, dispute evaluation, quantum quantification, and mediation advisory.',
  },
  {
    slug: 'delay-analysis',
    canonical: 'https://eurekasolutions.co.za/delay-analysis',
    title: 'Forensic Delay Analysis & Programme Scheduling | Eureka Solutions',
    description: 'Time Impact Analysis (TIA), Windows Analysis, As-Built vs As-Planned delay claim modeling, and critical path disruption advisory.',
  },
  {
    slug: 'projects',
    canonical: 'https://eurekasolutions.co.za/projects',
    title: 'Featured Projects & Case Studies | Eureka Solutions',
    description: 'Track record of delivered commercial, educational, healthcare, and retail infrastructure projects across South Africa.',
  },
  {
    slug: 'gallery',
    canonical: 'https://eurekasolutions.co.za/gallery',
    title: 'Visual Portfolio & Project Gallery | Eureka Solutions',
    description: 'High-resolution photographs of commercial cleaning, facilities maintenance, and construction management work in progress.',
  },
  {
    slug: 'pricing',
    canonical: 'https://eurekasolutions.co.za/pricing',
    title: 'Service Pricing & Cost Estimator | Eureka Solutions',
    description: 'Transparent rate cards, instant online price estimates, and custom quote requests for facilities and construction services.',
  },
  {
    slug: 'contact',
    canonical: 'https://eurekasolutions.co.za/contact',
    title: 'Contact Us & Request a Quote | Eureka Solutions',
    description: 'Get in touch with Eureka Solutions. Call or WhatsApp +27 60 880 9635, or visit us at 170 Pitts Avenue, Weavind Park, Pretoria.',
  },
  {
    slug: 'privacy-policy',
    canonical: 'https://eurekasolutions.co.za/privacy-policy',
    title: 'Privacy Policy & POPIA Compliance | Eureka Solutions',
    description: 'Our Protection of Personal Information Act (POPIA) compliance policy, data retention terms, and client privacy commitments.',
  },
  {
    slug: 'terms-conditions',
    canonical: 'https://eurekasolutions.co.za/terms-conditions',
    title: 'Terms and Conditions of Service | Eureka Solutions',
    description: 'General terms and conditions of engagement, contract specifications, and legal governance for Eureka Facilities Management Solutions.',
  },
];

function generateStaticRoutes() {
  const rootIndexHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(rootIndexHtmlPath)) {
    console.error('Error: dist/index.html not found. Run vite build first.');
    process.exit(1);
  }

  const rootHtml = fs.readFileSync(rootIndexHtmlPath, 'utf-8');

  // Also create a visible htaccess.txt copy for cPanel users whose File Manager hides dotfiles (.htaccess)
  const htaccessPath = path.join(distDir, '.htaccess');
  if (fs.existsSync(htaccessPath)) {
    fs.copyFileSync(htaccessPath, path.join(distDir, 'htaccess.txt'));
    console.log('✓ Created visible dist/htaccess.txt for cPanel upload safety.');
  }

  let generatedCount = 0;

  for (const route of routes) {
    const routeDir = path.join(distDir, route.slug);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    let pageHtml = rootHtml;

    // 1. Point relative ./assets and ./branding to parent ../
    pageHtml = pageHtml.replace(/(href|src)="\.\/assets\//g, '$1="../assets/');
    pageHtml = pageHtml.replace(/(href|src)="\.\/branding\//g, '$1="../branding/');

    // 2. Insert <base href="/" /> right after <head> for absolute browser asset resolution
    pageHtml = pageHtml.replace('<head>', '<head>\n    <base href="/" />');

    // 3. Update Title
    pageHtml = pageHtml.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

    // 4. Update Meta Description
    pageHtml = pageHtml.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/,
      `<meta name="description" content="${route.description}" />`
    );

    // 5. Update Canonical link
    pageHtml = pageHtml.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/,
      `<link rel="canonical" href="${route.canonical}" />`
    );

    // 6. Update OpenGraph tags
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/,
      `<meta property="og:title" content="${route.title}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/,
      `<meta property="og:description" content="${route.description}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/,
      `<meta property="og:url" content="${route.canonical}" />`
    );

    const targetFilePath = path.join(routeDir, 'index.html');
    fs.writeFileSync(targetFilePath, pageHtml, 'utf-8');
    generatedCount++;
  }

  console.log(`✓ Successfully generated ${generatedCount} static route directories in dist/`);
}

generateStaticRoutes();
