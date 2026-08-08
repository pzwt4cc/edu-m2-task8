const fileNames = [
  'index.html',
  'styles.css',
  'script.js',
  'about.html',
  'contact.html',
  'home.html',
  'blog-post-1.html',
  'blog-post-2.html',
  'services.html',
  'portfolio.html',
  'projects.html',
  'gallery.html',
  'faq.html',
  'terms.html',
  'privacy-policy.html',
];

const publicPage = fileNames.filter((f) => f.endsWith('.html'));

console.log('All files:', fileNames);
console.log('Public web-pages:', publicPage);
