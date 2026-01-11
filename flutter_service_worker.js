'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d83946460194e511b7b20d876246e5ac",
"assets/AssetManifest.bin.json": "cec887cc6e2f0002ee7ba0c8ae99983c",
"assets/AssetManifest.json": "553bb6ab59309aed8d884ebbfaccab3f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "954031dc9b25f3701cd397a9ee85718f",
"assets/lib/images/admins.jpg": "77e89df481139be4134cc50c67f6322d",
"assets/lib/images/admins.png": "504b1eda8f4ad301fba71c8594e52510",
"assets/lib/images/ads.png": "359f53b42f4299f68030faaa989f500d",
"assets/lib/images/bar.png": "e034cb5066fc85d3b177297cfca681f7",
"assets/lib/images/black.png": "cd3106244bf9d3a1413f139298c29a94",
"assets/lib/images/dash.png": "e832bdb584b5ec041fb2a615d1f411b9",
"assets/lib/images/gear.jpg": "1a366146ef532d54fd961a29d33d1254",
"assets/lib/images/icons8-alarm-clock-94.png": "6b72254cdc373cd89696a761c6b112ac",
"assets/lib/images/icons8-database-94.png": "c32b45aa8539bda1f9c5c9b86b156736",
"assets/lib/images/icons8-delivery-man-64.png": "ab3d08d48382a302514b76f7ccf6b083",
"assets/lib/images/icons8-discount-94.png": "6b0c133f04c1f0b7d9750a54c106c998",
"assets/lib/images/icons8-empty-box-94.png": "eb05b96c8056b4933005f0b23fc8ab1f",
"assets/lib/images/icons8-error-48.png": "48f225e747dd5d636f1e9337188f5c27",
"assets/lib/images/icons8-mail-94.png": "0b7e0ee8cf7921344612b1368ac32544",
"assets/lib/images/icons8-map-94.png": "c580d70c8f9fef15077cf53387652a8b",
"assets/lib/images/icons8-settings-94.png": "0b75d514cd58b582bc2962f178a796e9",
"assets/lib/images/icons8-shopaholic-94.png": "57285bcd6a6d5005046646f1f1afed0d",
"assets/lib/images/icons8-total-sales-94.png": "df3a3379b1a44e947752624b5ced3cdb",
"assets/lib/images/icons8-users-94.png": "1215385060eac63cd5c44b1daf59fcb9",
"assets/lib/images/logo.png": "b3236a206f3550a9a9e4a75b25f9dc8f",
"assets/lib/images/mobile.png": "5c5c8719604a1fe3622e234fb6845da4",
"assets/lib/images/mobile2.png": "4c3ed49a107361f1bc33742f02afa517",
"assets/lib/images/obox.png": "c54e3c634285d5ec6138b74a832b64dc",
"assets/lib/images/posts.png": "b28eadcb311e6ec052b01c720a379874",
"assets/lib/images/riderLogo.png": "71a2ad8d4547f4f783ba093b57e8537b",
"assets/lib/images/stocks.png": "cc76fd553dc508f236483f3daece018b",
"assets/lib/images/warehouseicon.png": "54d8de778357f9cda27dcada49c2fe47",
"assets/lib/images/wordhenshy.png": "621ce67f2719e8f1560ea933b821bce6",
"assets/NOTICES": "ac52f1d54512452d945c94a2ca61e15b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "83702ed7b950907257df85acd61eb6df",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "357f52002e23e80f24109d60b4cb3c95",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "977d8544882bf4eb9dd250efc8973ce8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "849801c0982b8af7dab8498fcfbf39c7",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "120998c1943d599869f226c44aaf5e21",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7a9d690cb3cdc0f12ae570b6b59e9218",
"/": "7a9d690cb3cdc0f12ae570b6b59e9218",
"main.dart.js": "0179dddcfdf7c359b2b7dec72c30fb26",
"manifest.json": "b7b11db6f7168d3e4a9cab7b6f090d0a",
"version.json": "f0fcb06ea7aeb4c5ae4ed9e07d84f16e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
