export const prefetch = (url) => {
  if ("caches" in window) {
    caches.match("https://bgsg-709a6.web.app" + url).then((response) => {
      if (response) {
        // resource is already cached, no need to fetch again
        return;
      }

      // fetch the resource and cache it
      fetch(url).then((response) => {
        caches.open("prefetch-cache").then((cache) => {
          cache.put(url, response);
        });
      });
    });
  }
};
