/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d4357fb0413b690cee78e0eed8b8a6b3"
  },
  {
    "url": "about.html",
    "revision": "cbcccf7ff9108471825912a683a15032"
  },
  {
    "url": "assets/css/0.styles.5d74642e.css",
    "revision": "754c2cddfe9a26737fc249d6ed09ef60"
  },
  {
    "url": "assets/img/hero.02dea6b2.jpg",
    "revision": "02dea6b2c3d2cfd099f66d26cf218d72"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1eb10113.js",
    "revision": "11c7e022d249a69464ea157ea254da40"
  },
  {
    "url": "assets/js/11.013fc9ee.js",
    "revision": "b793820e7c5e89afee2981341c7c5a1b"
  },
  {
    "url": "assets/js/12.9dafc267.js",
    "revision": "35389e52dd474c44294eb16c3f8c5473"
  },
  {
    "url": "assets/js/2.2e3e2c34.js",
    "revision": "04ff5026464761bebcb7a4a54bf8644b"
  },
  {
    "url": "assets/js/3.dc26014a.js",
    "revision": "087b109ee5a35ba29bc2fc6f7b4dd445"
  },
  {
    "url": "assets/js/4.3613c063.js",
    "revision": "7c14dd2b64aa1813d11443f8b8a0e17b"
  },
  {
    "url": "assets/js/5.bb0bec76.js",
    "revision": "cdf162a8fe516b175bac6ca6202bdd99"
  },
  {
    "url": "assets/js/6.d23b7b72.js",
    "revision": "cf8fc4d1bc4f52740fab4ab53f64e5cc"
  },
  {
    "url": "assets/js/7.7fe27af3.js",
    "revision": "1b349d77cc124e27819a18b9335bb47f"
  },
  {
    "url": "assets/js/8.68f18bb7.js",
    "revision": "1e64424d8254ac95506502c7f91d0dd0"
  },
  {
    "url": "assets/js/9.849d7c8e.js",
    "revision": "a6bd9bec321f6f3eca839aeb49a2379c"
  },
  {
    "url": "assets/js/app.f79a0e15.js",
    "revision": "36684f39d2cf9aa33a067a84a95707eb"
  },
  {
    "url": "contact.html",
    "revision": "436fa2c62612b024938d1aa74e441b8e"
  },
  {
    "url": "index.html",
    "revision": "e0dd5589ae66115e39ef4207e653c334"
  },
  {
    "url": "jsNotes/arrSort.html",
    "revision": "a1405469f6670476a2c551362757d82f"
  },
  {
    "url": "jsNotes/index.html",
    "revision": "4205f36179fc5b8288ee2f5c7336dd7c"
  },
  {
    "url": "jsNotes/reg.html",
    "revision": "47f41caf971c4420a0da6c6f063492ef"
  },
  {
    "url": "tips/arrSort.html",
    "revision": "92a4985c9c1452d93261d1558c1e5ea3"
  },
  {
    "url": "tips/index.html",
    "revision": "cba5689fc417a055a3c7354658712dc5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
