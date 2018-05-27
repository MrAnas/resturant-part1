const CACHE = "resturant-app-cache";

const urlToCache = [
    "./",
    "./sw-reg.js",
    "index.html",
    "resturant.html",
    "css/styles.css",
    "data/resturants.json",
    "js/dbhelper.js",
    "js/main.js",
    "js/resturant_info.js",
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
    "img/9.jpg",
    "img/10.jpg"
]


self.addEventListener("install", event =>{
    event.waitUntil(
        caches.open(CACHE)
        .then(cache =>{
            return cache.addAll(urlToCache);
        })
    )
})

self.addEventListener('activate', function(event) {  
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (urlToCache.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });