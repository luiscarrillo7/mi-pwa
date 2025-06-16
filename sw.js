self.addEventListener('install', function(event) {
  self.skipWaiting();
  console.log('Service worker instalado');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
