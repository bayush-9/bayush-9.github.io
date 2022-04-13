'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3bbb14b45dcdf09b418a3beec16a982b",
"assets/assets/images/10wmt-articleLarge-v4.webp": "9f8393bbe2cdc9872a5a2f1d7761d5e9",
"assets/assets/images/124021-modified.png": "c4b7cb82135477de5905ec66a267973c",
"assets/assets/images/124021.png": "88aa93c7d7d0b4f3bb45a0c7ad8f9a4b",
"assets/assets/images/Androidlogo201420191.png": "fa5e4c64fe877ceb1f65388988358620",
"assets/assets/images/apple_logo.jpg": "867cf66767b250c17fe2ddfe191083c4",
"assets/assets/images/ce5e0bb3-16b9-4d88-9bca-7d237fe725a8-cover.png": "274a26ef75cf42caa4da19d3e0f96a66",
"assets/assets/images/Ce5e0bb316b94d889bca7d237fe725a8cover1-modified.png": "4f148b7f212548c6533c95c5d0fb3311",
"assets/assets/images/Ce5e0bb316b94d889bca7d237fe725a8cover1.png": "274a26ef75cf42caa4da19d3e0f96a66",
"assets/assets/images/download%2520(1).png": "44edb7c9c6eeade97d93c3b1ec2d3d44",
"assets/assets/images/download.png": "dd19c654133580f6698db2af603363d1",
"assets/assets/images/fireblack.jpg": "50c7e1f4e2292d9c712660648b203e54",
"assets/assets/images/flutter-logo-768x768.jpg": "36f02becd11822ef436ccc8c285f0f4b",
"assets/assets/images/flutter5786.jpg": "67dc5865af6fbe3e060b9ddc23ea262e",
"assets/assets/images/flutter_intro-modified.png": "1be8a5a889b27107137fdf2c66865f7c",
"assets/assets/images/flutter_intro.webp": "a0150f099abae71c8c5df2d850ed9a45",
"assets/assets/images/FPGtDu2akAIH7pq.jpg": "2d2ae645c6dc47d4b5ac613abea7e889",
"assets/assets/images/GitHub-Mark-modified.png": "c250f7b9ae16e15f85789a084dfeea69",
"assets/assets/images/GitHub-Mark.png": "1fbf1eeb622038a1ea2e62036d33788a",
"assets/assets/images/IMG_6013-modified.png": "e1eeea00c88bc456d85d48c68b3906af",
"assets/assets/images/insta-modified.png": "b64d7c4ed2cbe26a23cccec7d72b500e",
"assets/assets/images/insta.png": "065cb2c1afca3b5d269bfdc11cee435c",
"assets/assets/images/kisspng.jpg": "c14435ca4f67516a7f9e6ee94be46c04",
"assets/assets/images/linkedin-modified.png": "017caac50ef751c1a8f44cd8e901270c",
"assets/assets/images/linkedin.png": "5544e967446f79d66ab095a41b0fffd7",
"assets/assets/images/logo-standard.png": "bf11af8710ebbf6c0cbfab9a57a386d3",
"assets/assets/images/png-transparent-firebase-cloud-messaging-computer-icons-google-cloud-messaging-android-angle-triangle-computer-programming.png": "a880cfc2dcd7b46a6a4281a4d5225676",
"assets/assets/images/Pngtransparentfirebasecloudmessagingcomputericonsgooglecloudmessagingandroidangletrianglecomputerprogramming1.png": "6357d645ec71e134301eafdeaabb90d3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "d43c660e8379a17ea807ca7f419b508f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1897a69d858575bf7a061c495611be4f",
"/": "1897a69d858575bf7a061c495611be4f",
"main.dart.js": "e4c5c0044a681812eaf0d5c9a6edf170",
"manifest.json": "d899e58ba79eeb01d040664e45f04ea5",
"version.json": "03acefc4795e8573b194262cd3a4419f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
