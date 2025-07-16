import { NextResponse } from 'next/server';

// List of static routes
const staticRoutes = [
  '/',
  '/about',
  '/contact',
  '/faq',
  '/terms',
  '/privacy-policy',
  '/get-quote',
  '/how-it-works',
  '/services',
  '/apostille',
  '/attestation',
  '/commercial-attestation',
  '/educational-attestation',
  '/personal-attestation',
  '/hrd-attestation',
  '/mea-attestation',
  '/pcc',
  '/wes-verification',
  '/track',
];

// Updated dynamic country codes from attestation and apostille pages
const countryCodes = [
  'uae', 'oman', 'qatar', 'kuwait', 'saudi', 'bahrain', 'usa', 'uk', 'canada', 'australia', 'italy', 'france', 'germany', 'singapore', 'southafrica', 'malaysia', 'newzealand', 'spain', 'netherlands', 'switzerland', 'japan',
  'poland', 'brazil', 'argentina', 'mexico', 'chile', 'sweden', 'norway', 'denmark', 'finland', 'greece', 'israel', 'southkorea', 'estonia', 'hungary', 'portugal', 'turkey'
];

export async function GET() {
  const baseUrl = 'https://99attestation.com';
  const urls = staticRoutes.map(
    (route) => `<url><loc>${baseUrl}${route}</loc></url>`
  );

  // Dynamic country pages
  countryCodes.forEach((code) => {
    urls.push(`<url><loc>${baseUrl}/attestation/${code}</loc></url>`);
    urls.push(`<url><loc>${baseUrl}/apostille/${code}</loc></url>`);
  });

  // Sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join('\n      ')}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 