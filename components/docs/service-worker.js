"use strict";var precacheConfig=[["./cn.html","36f5eb9bd004ba8040e3c531fbf6490c"],["./index.html","57b0ce4479827389cbe98c9530574568"],["./static/css/cn.0726442c.css","10d0b9d602b3b657c55a1385c1844c28"],["./static/css/index.0726442c.css","2767bdf2b32295812e42d9d1a0293da3"],["./static/js/0.459a1f9a.chunk.js","60d2a3dab8778a8ad64dada091fe97d0"],["./static/js/1.0b60b0be.chunk.js","38551db307bd7b376b6a901d001aef0e"],["./static/js/10.c1bda6a1.chunk.js","f8bd4fdeca8242f8f2e1e5cea98c70e4"],["./static/js/11.bbbfb95c.chunk.js","d36924ef01c671f9f3db2c2b3b798dcd"],["./static/js/2.6eaf3e3d.chunk.js","5d319f3f6577b69440889b047db2ca47"],["./static/js/3.ee309ff8.chunk.js","b663e0ace360e52fdd558d3d4fc734db"],["./static/js/4.108ef249.chunk.js","9bede6a52c2cfe36c1ad240596653ff5"],["./static/js/5.064458f0.chunk.js","5a0b45446aec3158cd7b7f1a81cb8332"],["./static/js/6.2b5791b9.chunk.js","6bab02a06ca901a8e10995118627e376"],["./static/js/7.cb2d0a47.chunk.js","e975cc4e6aa90ffd04c39234a49285e3"],["./static/js/8.c80f3edf.chunk.js","fbf3e539bcf4d9d67d301c96ac24e9cc"],["./static/js/9.9381695f.chunk.js","24f272b2997214da02ea94ff26f0a0a2"],["./static/js/cn.811bc79a.js","9929b6fe623f94b57838f5eff2749e36"],["./static/js/index.643ef7d6.js","7c981af7ffaf8426312796b2b93cd7b8"],["./static/media/omi-logo2019.923166c3.svg","923166c362dce831a15c447b19a622f9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var c="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});