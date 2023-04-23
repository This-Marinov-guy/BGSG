const CACHE_NAME = `bgsg-static-v${APP_VERSION}`;

this.addEventListener("install", function (event) {
  console.log("Installing service worker...");
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/static/js/bundle.[hash].js",
        "/static/css/main.[hash].css",
      ]);
    })
  );
});

this.addEventListener("fetch", function (event) {
  console.log("Fetch event:", event.request.url);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        console.log("Found in cache:", event.request.url);
        return response;
      }

      console.log(
        "Not found in cache, fetching from network:",
        event.request.url
      );
      return fetch(event.request).then(function (response) {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // Clone the response and store it in the cache
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

this.addEventListener("activate", function (event) {
  console.log("Activating new service worker...");

  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
