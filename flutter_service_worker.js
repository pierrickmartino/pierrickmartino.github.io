'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a8eb999bb302138acc6e1f641b57e5b6",
"assets/data/crypto.json": "1d31879b670734884f8e91b8c94f9c82",
"assets/data/info200.json": "bf7b830f5efdfc7505a34c724a48d63c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/icons/Documents.svg": "0d66436fde3818811c82319665ef91fd",
"assets/icons/doc_file.svg": "c6c3abe38f2b4e22ab33399b26966b1f",
"assets/icons/drop_box.svg": "d427e188a7aee4612446d0e9d26e76f1",
"assets/icons/excle_file.svg": "9986607c30659e3d222f9908141884f9",
"assets/icons/Figma_file.svg": "90224db6835092a278153e0f60e8c203",
"assets/icons/folder.svg": "8c11f522cd36f0cbd9c02eb2b689cbb9",
"assets/icons/google_drive.svg": "a4cd4325c28cee54264a4942fcf6ef48",
"assets/icons/logo.svg": "6194acb4fae31a2a2ee26ff61d8c644e",
"assets/icons/media.svg": "e790cb1d2138f7a9d1b404abf8346eb1",
"assets/icons/media_file.svg": "5b8f2b094278f5d9378bca249cf80fc1",
"assets/icons/menu_dashbord.svg": "5e8d164243b3e28c22a8a5e35719c96e",
"assets/icons/menu_doc.svg": "c5a576281e34f54d9e041410d002443c",
"assets/icons/menu_notification.svg": "f49436dd0acd00dc43ab287c7ac3ff4f",
"assets/icons/menu_profile.svg": "134c2274ffaca9441fe7523b2f476608",
"assets/icons/menu_setting.svg": "32ab0402dc07a66d078c758ddb0aa798",
"assets/icons/menu_store.svg": "45f31f1388616a22053ea6a99ed5904a",
"assets/icons/menu_task.svg": "fa731cbcb073759bd82c699331ef7e93",
"assets/icons/menu_tran.svg": "acdaeac5ea677c4a479a1d656ea3d5c1",
"assets/icons/one_drive.svg": "0b0ca635ef35ec9beebb18aaf20cd5d9",
"assets/icons/pdf_file.svg": "4ea6d2b9e631ee54164987b57fa240c7",
"assets/icons/Search.svg": "82ad5e39b306dc6a42809cbeef651e64",
"assets/icons/sound_file.svg": "d346e8558ced623138787011e0ca7e88",
"assets/icons/unknown.svg": "2fc91e195e7a0d6279c01552403c3b89",
"assets/icons/xd_file.svg": "fd95a4cd96e6c7251ebeac76b7b7c8b9",
"assets/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/images/settings.png": "ed85154418b25ac7506e08025482230e",
"assets/NOTICES": "346c49592c231fd6988605a031dcd8f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "766c8cc582887d79fd06bb0d7caf09e0",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"firebase_init.js": "0e0f56e30d109846de2b4bd4855d298d",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "483e7c45c5a87e901be3cb23dd9604dc",
"/": "483e7c45c5a87e901be3cb23dd9604dc",
"main.dart.js": "fcfc328cbc9dad7e4c1b596d2ddceea8",
"manifest.json": "2d215d05aaa64529b7b4adb5ad96527a",
"version.json": "ec6a4d1e9d6a65953ce1a6b4ea1041ee"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
