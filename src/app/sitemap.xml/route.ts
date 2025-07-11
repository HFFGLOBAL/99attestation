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
  '/countries',
  '/services',
  '/apostille',
  '/attestation',
  '/commercial-attestation',
  '/educational-attestation',
  '/personal-attestation',
  '/hrd-attestation',
  '/mea-attestation',
  '/pcc',
  '/translation',
  '/wes-verification',
  '/track',
];

// Example dynamic country codes (should be generated from your data source in production)
const countryCodes = ['uae', 'oman', 'usa', 'uk', 'canada'];

export async function GET() {
  const baseUrl = 'https://yourdomain.com'; // <-- CHANGE THIS TO YOUR DOMAIN
  const urls = staticRoutes.map(
    (route) => `<url><loc>${baseUrl}${route}</loc></url>`
  );

  // Dynamic country pages
  countryCodes.forEach((code) => {
    urls.push(`<url><loc>${baseUrl}/countries/${code}</loc></url>`);
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