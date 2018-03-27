



self.addEventListener('install', event => event.waitUntil(
    caches.open('pokemon')
        .then(cache => cache.add('../views/offline/offline.html'))
        .then(self.skipWaiting())
));