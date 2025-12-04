self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("tinyday-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/css/main.css",
        "/js/app-init.js"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) =>
      cached ||
      fetch(e.request).catch(() =>
        new Response("Offline", { status: 503 })
      )
    )
  );
});
