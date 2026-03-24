const CACHE_NAME = 'qm-store-v4.5';

self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open(CACHE_NAME).then((cache) => cache.addAll([
        './',
        './index.html',
        './styles.css',
        './app.js',
        './manifest.json'
      ]))
    );
    // Force the waiting service worker to become the active service worker.
    self.skipWaiting();
});
  
self.addEventListener('activate', (e) => {
    // Clean up old caches if the cache name changes
    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
