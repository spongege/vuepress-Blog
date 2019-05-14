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
    "revision": "91b03790471a012eedec956a2e007006"
  },
  {
    "url": "about.html",
    "revision": "c177cc9a3c468903a747b2dac1441e88"
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
    "url": "assets/js/app.5efcd56a.js",
    "revision": "98b89e7f43ddcba104a29d7ba2c4ecf9"
  },
  {
    "url": "contact.html",
    "revision": "1312566d4a4ef847c39d6a68ee861c78"
  },
  {
    "url": "index.html",
    "revision": "c63e31faff283390912f86568f99e986"
  },
  {
    "url": "jsNotes/arrSort.html",
    "revision": "865fad060bc5f849014846ca5eb26015"
  },
  {
    "url": "jsNotes/index.html",
    "revision": "ea767d08c5c08d60512d51899bd2a8de"
  },
  {
    "url": "jsNotes/reg.html",
    "revision": "75cd796ea14ceb70a0e57ae3d5a7a1bb"
  },
  {
    "url": "tips/arrSort.html",
    "revision": "db19085d41a3fa7350f4383373241688"
  },
  {
    "url": "tips/index.html",
    "revision": "4bff2e139a87acd10a8890a35aaf2f74"
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
