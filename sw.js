const CACHE='hfugue-course-app-v4-newborn';
const ASSETS=['./','./index.html','./wheel.html','./organ.html','./config.js','./manifest.json','./assets/icon.svg','./assets/hla_lifecycle_newborn_updated.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{}));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>r)));});
