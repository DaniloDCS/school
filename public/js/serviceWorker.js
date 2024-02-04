const CACHE_NAME = 'my-app-cach';
const urlsToCach = [
  '/',
  '/dashboard',
  '/public/json/manifast.json',
  '/public/images/stuudy.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCach))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});