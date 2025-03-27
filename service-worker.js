const cacheName = 'taxi-invoice-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json'
  // Füge hier weitere Dateien hinzu, z. B. Icons
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
