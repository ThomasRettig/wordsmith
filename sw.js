var CACHE = "cache-v1";

var urls = [
  "/",
  "fonts/MayenneSans-Regular-Web.woff2",
  "css/style.css",
  "images/share.svg",
  "images/copy.svg",
  "images/favicon.svg",
  "images/icon-192x192.png",
  "images/icon-256x256.png",
  "images/banner-600x380.png",
  "images/banner2-600x380.png",
  "js/scripts.js",
  "js/word-data-set.js",
  "manifest.webmanifest"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(urls);
    })
  );
});

self.addEventListener("fetch", function (event) {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
  }
});

self.addEventListener("activate", function (event) {
  var cacheWhitelist = [CACHE];
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (cacheWhitelist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});
