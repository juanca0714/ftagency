self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('ftagency-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/Portrait.webp',
                '/page2.html',
                '/hombres.html',
                '/mujeres.html'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
