'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/asset/font/electrolize/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/asset/font/lato/Lato-Black.ttf": "e631d2735799aa943d93d301abf423d2",
"assets/asset/font/lato/Lato-Bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/asset/font/lato/Lato-Light.ttf": "2fe27d9d10cdfccb1baef28a45d5ba90",
"assets/asset/font/lato/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/asset/font/lato/Lato-Thin.ttf": "9a77fbaa85fa42b73e3b96399daf49c5",
"assets/asset/font/montserrat/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/asset/images/africa.jpg": "27fc2c6667bd5bd7bba8117fafe28d86",
"assets/asset/images/animals.jpg": "2e218a94e7842a946d772082ac8c5590",
"assets/asset/images/antarctica.jpg": "71e86242fca831839833d1caa23f107e",
"assets/asset/images/antelope-canyon-457495_1920.jpg": "aa084e213b8e30ddc706e3450d23fd71",
"assets/asset/images/asia.jpg": "bbcf97c1be29e77360e8407b7e2eaa05",
"assets/asset/images/australia.jpg": "6170e8a703652c6b814dca7020050086",
"assets/asset/images/butterfly-5820052_1920.jpg": "7ebfa12f3bf287bf32d57389956639c6",
"assets/asset/images/butterfly-5952415_1920.jpg": "72b72fa74e1a383f12e9197fe57257d7",
"assets/asset/images/canyon-1740973_1920.jpg": "f84f69d0e1f4e97c1a43fb434db709aa",
"assets/asset/images/cover.jpg": "b76379616b118dca67a0e3158f8b4aaf",
"assets/asset/images/cover_old.jpg": "e1e4b2e46b8d6eabb7330afb0c0d30ff",
"assets/asset/images/cover_transactions.jpg": "ca9d58ee4267ea160213f00a8280448e",
"assets/asset/images/europe.jpg": "29a721b78efc7f928faf042c88806468",
"assets/asset/images/flowers-5820050_1920.jpg": "dbf46919591d0b2982994f8dee85a06f",
"assets/asset/images/flowers-5839544_1920.jpg": "ebe2fb5e57ad0e0a4172aef71a66d82c",
"assets/asset/images/flowers-5839553_1920.jpg": "61f07b525c760d6e62455c1dec585ec2",
"assets/asset/images/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/asset/images/mountain-5678172_1920.jpg": "628ac9675aebd5d6f60093e65d31b526",
"assets/asset/images/north_america.jpg": "867d729d34a03bf38136bd45954ec218",
"assets/asset/images/old_cover.jpg": "1f899bc9c3bec2770ee1a088cbd67857",
"assets/asset/images/old_cover_transactions.jpg": "6f4a647b8474874e054f514b402ce4bb",
"assets/asset/images/person.png": "c7ed75c0fc451352ade741e05ad72bc8",
"assets/asset/images/photography.jpeg": "b0d14d6d4a94d33404a7df1344e7533b",
"assets/asset/images/road-5837403_1920.jpg": "77353ba6df1b820197efbabd37a19ca0",
"assets/asset/images/south_america.jpg": "1920c86e11a06921b339f00ff1d0ddea",
"assets/asset/images/trekking.jpg": "283eae13ae9587874b93fed5c9b4a118",
"assets/asset/images/wallpaper-5911380_1920.jpg": "010e2921f6e66537e22f98f0dfb13df8",
"assets/asset/images/wallpaper-5911382_1920.jpg": "1eb1bfcb12ac266a7799aa818debfd00",
"assets/asset/images/wallpaper-5911383_1920.jpg": "00adfacdbba124ba1d7ccc98e0a3174b",
"assets/AssetManifest.json": "faa163d04b38300eb3dfbf164ba1c704",
"assets/FontManifest.json": "be6975789c5810044384635bcab0cdb4",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "abf363f3f5092ed6dca555a218b9c4dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"assets/packages/line_awesome_icons/assets/fonts/icon_font.ttf": "4d42f5f0c62a8f51e876c14575354a6e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "53b093a478229197f0172cfb7d8c7ba4",
"/": "53b093a478229197f0172cfb7d8c7ba4",
"main.dart.js": "4cbf262d00d56b3f6523b3eb24c678e7",
"manifest.json": "f2b4aabb906537cf06de485cc4978a21",
"sql-wasm.js": "04b960431ad6c0314a115558cff07880",
"sql-wasm.wasm": "ea7edc8cc0702b48cc93bf41e5b6cc61",
"version.json": "f1772e8b92f95818fe0e2a5633321c44"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
