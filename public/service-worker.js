self.addEventListener('install', function(event) {
    console.log('Installing service worker...');
    event.waitUntil(
      caches.open('myapp-static-v1').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/static/js/bundle.js',
          '/static/css/main.css'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    console.log('Fetch event:', event.request.url);
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          console.log('Found in cache:', event.request.url);
          return response;
        }
        console.log('Not found in cache, fetching from network:', event.request.url);
        return fetch(event.request);
      })
    );
  });
  