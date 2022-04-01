const cacheName = 'shell-content::static';
var filesToCache = [
    '/',
    '/styles/inline.css',
    '/js/scripts.js',
    '/images/logo.svg',
    '/offline.html'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(filesToCache).then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName).then(cache => {
            return cache.match(event.request).then(res => {
                return res || fetch(event.request)
            });
        })
    );
});