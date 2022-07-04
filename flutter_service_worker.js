'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "91bcf76923db8068dee5505e2b3b6192",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/FontManifest.json": "13c8ddae5a6c909a09a36f099680b5e3",
"assets/AssetManifest.json": "36eef75bddd8613143b33106fbf10b60",
"assets/assets/images/sook.png": "f73b7c776b4d777b4daa1e3b8617005e",
"assets/assets/images/sun.png": "ea13563c252ade74e557e5c4c52bd175",
"assets/assets/images/planets.png": "faa2fbf1cab0bd8ff01a35143cbcf2cd",
"assets/assets/audio/visibility.mp3": "57edb574fe7ac5aff723886970718cc8",
"assets/assets/audio/tile_tap_error.mp3": "63ccc75362ad8f9dc9c26b4042011693",
"assets/assets/audio/completion.mp3": "c55bad268cca44542d0482cf52a621f5",
"assets/assets/audio/count_down_begin.mp3": "0a1a4e0996ca24bade678397c405c1a8",
"assets/assets/audio/tile_tap_success.mp3": "7ced6fcc52d467fadd71b440c5125eb6",
"assets/assets/audio/planet_theme_music.mp3": "9b92d5e242850f89e98be8aa63e3dfb8",
"assets/assets/audio/button_click.mp3": "5a120b5092167143c549346f585f8083",
"assets/assets/fonts/freshman.ttf": "4e0a731a29f56f42431919e8cf234b9e",
"assets/assets/planets/mercury/mercury.svg": "940e8fc037edb6699923f96b562af053",
"assets/assets/planets/mercury/mercury_landscape.png": "3ed99341935a6915c2dd19094e8de853",
"assets/assets/planets/mercury/mercury.png": "c0abafea00d47b14fc3fa729bd6dd145",
"assets/assets/planets/mercury/mercury.riv": "f9499c0d52c9f3c9f6a1ed72c58e8892",
"assets/assets/planets/mercury/mercury_thumb.png": "94800c8757868e3e9a69241b757dad24",
"assets/assets/planets/earth/earth.svg": "7f9451f0cc3c18dec725d99acb81fec8",
"assets/assets/planets/earth/earth.riv": "0a2cc6badce119ce2710f111c9662192",
"assets/assets/planets/earth/earth.png": "2b40c8ba944ed7b10fc879584373b003",
"assets/assets/planets/earth/earth_thumb.png": "a853a379211c6ea6d92e053294325884",
"assets/assets/planets/earth/earth_landscape.png": "08b22b2b4367adef2e39c5206cce9b7f",
"assets/assets/planets/saturn/saturn_landscape.png": "868bad7e4722c2631cb1a498aacd2e7c",
"assets/assets/planets/saturn/saturn_thumb.png": "98e699d01ccb849c4114af83d9d8ac5b",
"assets/assets/planets/saturn/saturn.png": "6309eed046f94186abf3f6b69f4d1a7b",
"assets/assets/planets/saturn/saturn.riv": "3ff342aa9e3a8124f41a057777c13ac7",
"assets/assets/planets/saturn/saturn.svg": "9423ed9f54378e23f9d49f529d1577d5",
"assets/assets/planets/saturn/saturn_extra.png": "f615ecd6dc9d7e29114425a405f79e2c",
"assets/assets/planets/saturn/saturn_extra_thumb.png": "1b78b7280f72daf14c8fb268e75af4f3",
"assets/assets/planets/pluto/pluto_thumb.png": "fffe0faef2fb58c23cc3843cd4c5e8a8",
"assets/assets/planets/pluto/pluto.svg": "d7092f1a19a6bbd46dbc70c8cb3f695d",
"assets/assets/planets/pluto/pluto.png": "876f455f912ae61b2a7af3eaa7f0e0b0",
"assets/assets/planets/pluto/pluto_landscape.png": "f858a7ab7fca1467ff7baf1ab5169783",
"assets/assets/planets/pluto/pluto.riv": "b9a3ceba53fe6f72360c842cb8b897ac",
"assets/assets/planets/venus/venus.riv": "23274791950c054ca78e1b93888ee15a",
"assets/assets/planets/venus/venus_thumb.png": "2dabedc993ece0c1f0817a6502f2904d",
"assets/assets/planets/venus/venus.svg": "d93b5deb1b9d7afad2b55323e58ecc98",
"assets/assets/planets/venus/venus.png": "1c5c03646b581da1f36b0dfb555c2dc4",
"assets/assets/planets/venus/venus_landscape.png": "3b5aee0ccb59cffabfdb4ce52958c796",
"assets/assets/planets/neptune/neptune_thumb.png": "3ba5c7eaf5936b578a78d9c118343b86",
"assets/assets/planets/neptune/neptune.png": "aa1babbf3d3e0b7ad9a85ec3ded565de",
"assets/assets/planets/neptune/neptune.svg": "05c29d7ca40ccfd08f929f0cf292f966",
"assets/assets/planets/neptune/neptune.riv": "87ee0c02b6ff283e5816d9561d5ca328",
"assets/assets/planets/neptune/neptune_landscape.png": "501a0eed623b623897244e6ce96dcf74",
"assets/assets/planets/uranus/uranus_thumb.png": "fadb996c2ff9e2c827ba7467ec5be87c",
"assets/assets/planets/uranus/uranus_landscape.png": "dc558eae27efa0dbb241e5bb0db8b442",
"assets/assets/planets/uranus/uranus.svg": "45459f977d5e6164ca1e7f778fd2efa8",
"assets/assets/planets/uranus/uranus.riv": "5834f1ed2610380778e62f8ae2976183",
"assets/assets/planets/uranus/uranus.png": "a952a53950ecb599f0383dfbd118a9d2",
"assets/assets/planets/mars/mars_thumb.png": "cb28c17ee8e731fe6be217978f811847",
"assets/assets/planets/mars/mars.riv": "c3c81c23d0645bdfea9ed036bb6601b9",
"assets/assets/planets/mars/mars_landscape.png": "4fe27e21634c8922fb3739d39191fab0",
"assets/assets/planets/mars/mars.png": "d264e6fafcc58a6316d8d6a20e30eef7",
"assets/assets/planets/mars/mars.svg": "c0ce3b48f7e665afb3abd35bb2c7e110",
"assets/assets/planets/jupiter/Jupiter.riv": "12b2c44437fb827836f70c9049c7710c",
"assets/assets/planets/jupiter/jupiter_thumb.png": "7f27572e6730a3ac97e2b64ddc9f5a61",
"assets/assets/planets/jupiter/Jupiter.svg": "49c230150a8bd6ef81bb39c53091fee7",
"assets/assets/planets/jupiter/jupiter_landscape.png": "625fa1247fb4d7c7b28e1f0688dde9ef",
"assets/assets/planets/jupiter/Jupiter.png": "97af43b5ca82d6e00ae8f7421d033bd2",
"assets/NOTICES": "c01ce7d186d8ff5ef5745c146cd88f49",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"main.dart.js": "4d57d2fe8765faa882f19cccfaf05383",
"icons/Icon-maskable-512.png": "b8a78c630e09715f18e00e45cbb64e76",
"icons/Icon-maskable-192.png": "ee93baf31f486dfaaa2bc8ecc05bb910",
"icons/Icon-512.png": "b8a78c630e09715f18e00e45cbb64e76",
"icons/Icon-192.png": "ee93baf31f486dfaaa2bc8ecc05bb910",
"manifest.json": "36176372757db1375e74bd61c94d63e2",
"version.json": "135fd3331b4960b26fc1de4a03eafc0d",
"index.html": "2cd0b7c33884abe684474ece3b4a9610",
"/": "2cd0b7c33884abe684474ece3b4a9610",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
