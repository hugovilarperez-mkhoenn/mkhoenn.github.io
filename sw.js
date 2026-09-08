const CACHE_NAME = 'panel-tcg-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/inicio.html',
  '/dashboard.html',
  '/torneos.html',
  '/equipo.html',
  '/perfil.html',
  '/configuracion.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});