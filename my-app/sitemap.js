
const hostname = 'https://somos-todos-especiais.web.app/';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/atividades', changefreq: 'monthly', priority: 0.8 },
  { url: '/contacto', changefreq: 'monthly', priority: 0.8 },
  { url: '/jogos', changefreq: 'monthly', priority: 0.8 },
  { url: '/constituicao', changefreq: 'monthly', priority: 0.8 },
  { url: '/faq', changefreq: 'monthly', priority: 0.8 },
  { url: '/revista', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];


const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemapStream = new SitemapStream({ hostname });

const writeStream = createWriteStream('./public/sitemap.xml');
sitemapStream.pipe(writeStream);

urls.forEach(url => sitemapStream.write(url));
sitemapStream.end();

streamToPromise(sitemapStream)
  .then(() => console.log('Sitemap created successfully'))
  .catch(err => console.error(err));