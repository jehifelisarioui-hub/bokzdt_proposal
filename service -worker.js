self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("Disposal-cache").then(function(cache) {
      return cache.addAll(["index.html"]);
    })
  );
});