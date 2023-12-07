'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"version.json": "ca7e2bf88d789b3153b1181345a53ac9",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"index.html": "cf540043503b6b2c0e0fdea74738ed3a",
"/": "cf540043503b6b2c0e0fdea74738ed3a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/NOTICES": "4d4e276ac11147672360c2abe2d91b9d",
"assets/AssetManifest.json": "60abbd04c15457b62f33af630a716687",
"assets/AssetManifest.bin.json": "23bac3b9c065c7b7fa31e79f5c176e0e",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/pyjama6.webp": "71bdf8f274004b92c7ff3dd0e18ff9a3",
"assets/assets/images/magazine5.webp": "29ed20f93dfe476668cd6e94401d40f2",
"assets/assets/images/productcare1.webp": "844680717bd84868d4bcdbae54f1e4e0",
"assets/assets/images/product1.jpg": "b9fccaca7ee6fe8b64d4880b18788d3d",
"assets/assets/images/pyjama4.webp": "73049b048a3e19ecc88ff07b23951cf7",
"assets/assets/images/product2.jpg": "aa11543c70496b6567bd70bf8b347fcf",
"assets/assets/images/homepage-4.webp": "f00112a7271a37b94d0f068041fb8bdf",
"assets/assets/images/magazine2.webp": "3aa71cad2d3b17f58dd6a6736d687c42",
"assets/assets/images/product3.webp": "a251058ca3b5560447b8aaac3e94dff0",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/product-color.png": "de6c5771326e1f33474aec1fe2f383cb",
"assets/assets/images/pyjamas-2.webp": "a1fcea1abbcb053be0834f24e944d204",
"assets/assets/images/productcare2.webp": "806dd9b02bd0183b4dfd9c9f1638c299",
"assets/assets/images/homepage-1.webp": "ef5fb53124648d9eea164de783f51dd5",
"assets/assets/images/pyjama1.webp": "d43bc61f732d875d9e0e2dec96b8ae8f",
"assets/assets/images/pyjama2.webp": "10c1ff0950f4c122f1fb5aa1948ec87a",
"assets/assets/images/pyjama5.webp": "63dcdefd3965f3d9a0ae7587b8102b71",
"assets/assets/images/product6.webp": "6929997200954a8751d44f305ff1234f",
"assets/assets/images/location.png": "83620de2e889b20a609c784acd04f9f6",
"assets/assets/images/icon2.png": "5f495d9311feb6041e03a6388aa3f3df",
"assets/assets/images/magazine8.webp": "da0d78b55d5b771fd7818e5b7a482efb",
"assets/assets/images/pyjama7.webp": "898dc7923215455b430bdde0b0fd0275",
"assets/assets/images/homepage-3.webp": "4e99ee50c5035d9ca2a5b7faac9de0aa",
"assets/assets/images/icon1.png": "5a6a0ddf912e047db27ea6efdac09ec4",
"assets/assets/images/productcare3.webp": "ad62ebb93f4e80a241cacd65c0faf5dd",
"assets/assets/images/magazine9.webp": "5637751037a3b358c963ac7eefe6ed8c",
"assets/assets/images/magazine3.webp": "1d96697f55d3dc79df503ebf5b7fdf0d",
"assets/assets/images/pyjama3.webp": "ba0d5b4340ec66e506907547bc030643",
"assets/assets/images/pyjamas-3.webp": "6c6f7cfb081f90b52fec9d5a85c49226",
"assets/assets/images/product4.webp": "51830cc0db5ff148aa6d58f7a987f1b5",
"assets/assets/images/pyjamas-0.webp": "63a42acc286325d0b70cfc95cc86c838",
"assets/assets/images/magazine4.webp": "4acbeff96d5b2334facd48f38773d565",
"assets/assets/images/product5.webp": "0bba377ed38c5693264d42ff582fe180",
"assets/assets/images/magazine1.webp": "1397cafe2c8facc90a3c292d9542417f",
"assets/assets/images/magazine6.webp": "d6d869370c04599dd1029de44801e412",
"assets/assets/images/productcare4.webp": "0395320c9f4ea2d2b4cfac95f500a395",
"assets/assets/images/homepage-2.webp": "e35df7ae395160dd318efdc7a5fddf34",
"assets/assets/images/magazine7.webp": "bae4dd22fa025316ec1c32ae3c9fe2d8",
"assets/assets/images/pyjamas-1.webp": "014a2bd5a933dbde5a35a30c14bde3d7",
"assets/assets/images/icon3.png": "1ab6d64f360c057f535989b2bd189b94",
"assets/assets/images/icon4.png": "891c3e9f410b5ac2fd756209d5c9fc6a",
"assets/assets/videos/productcare-video.mp4": "aa26ed89fd02ee3f92e68b2859dc4826",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.bin": "a4178f506a5e55b906ca2df96538899f",
"assets/fonts/MaterialIcons-Regular.otf": "9a0d64b45313084f54054c2f15b5c5f2",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"main.dart.js": "442a872262b04418f96ade5021d788e8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
