var staticCacheName="Amieldev-Chat-v1";
var cacheItems=[

]

self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open(staticCacheName).then(cache=>{
            return cache.addAll(cacheItems);
        })
    )
});


self.addEventListener("activate",e=>{
    e.waitUntil(
        caches.keys().then(keys=>{
            return Promise.all(keys
             .filter(key=>key!==staticCacheName)
             .map(key=>caches.delete(key)) 
            )
        })
    )
})



self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
})