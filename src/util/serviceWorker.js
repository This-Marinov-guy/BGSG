// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

import packageJson from "../../package.json";

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener("load", () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        checkValidServiceWorker(swUrl, config);
        navigator.serviceWorker.ready.then(() => {
          console.log(
            "This web app is being served cache-first by a service " +
              "worker. To learn more, visit https://bit.ly/CRA-PWA"
          );
        });
      } else {
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.addEventListener("updatefound", () => {
        console.log("New version available, refreshing...");
        if (registration.active) {
          registration.waiting.postMessage({ type: "SKIP_WAITING" });
        }
      });

      if (registration.waiting) {
        console.log("Service worker already waiting, refreshing...");
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
      }

      registration.addEventListener("activate", () => {
        let CACHE_NAME = `bgsg-static-v${packageJson.version}`;
        console.log("Service worker activated!");
        // clear the old cache
        caches.keys().then(function (cacheNames) {
          return Promise.all(
            cacheNames.map(function (cacheName) {
              if (cacheName !== CACHE_NAME) {
                console.log("Deleting old cache:", cacheName);
                return caches.delete(cacheName);
              }
            })
          );
        });
        // add the new cache
        caches.open(CACHE_NAME).then(function (cache) {
          console.log("Adding new cache:", CACHE_NAME);
          return cache.addAll([
            "/",
            "/index.html",
            "/manifest.json",
            "/static/js/bundle.[hash].js",
            "/static/css/main.[hash].css",
          ]);
        });
        registration.active.skipWaiting();
      });

      console.log("Service worker registered!");
    })
    .catch((error) => {
      console.error("Error registering service worker:", error);
    });

  if (config && config.cacheName) {
    let CACHE_NAME = config.cacheName;
    navigator.serviceWorker.ready.then(function (registration) {
      registration.active.postMessage({
        action: "change-cache-name",
        newCacheName: CACHE_NAME,
      });
    });
  }
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)
    .then((response) => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get("content-type");
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf("javascript") === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    });
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}
