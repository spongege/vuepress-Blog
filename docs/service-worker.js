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
    "revision": "db0147d59ddf5206ff50718955db055f"
  },
  {
    "url": "about.html",
    "revision": "68b20c74e294f6bad47e3e1b17fd9018"
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
    "url": "assets/js/app.266ae782.js",
    "revision": "92b309fa0550085f8cd341721633a661"
  },
  {
    "url": "contact.html",
    "revision": "e17bb29c26703b0c72cf9fe0699b33f7"
  },
  {
    "url": "index.html",
    "revision": "3b6ce9bfc1cf36df25eef4f9ba507304"
  },
  {
    "url": "jsNotes/arrSort.html",
    "revision": "62c6d2738353eb706f66ce74ee7006a4"
  },
  {
    "url": "jsNotes/index.html",
    "revision": "c446b4212a42b5788f8a10dde8098b14"
  },
  {
    "url": "jsNotes/reg.html",
    "revision": "7c63e9ef20b964059d37be68c0fd9de9"
  },
  {
    "url": "tips/arrSort.html",
    "revision": "1f67e6e71f07a9a8b5ef5df0c0c66f18"
  },
  {
    "url": "tips/index.html",
    "revision": "74047429d49336e7a88b636ee32e3720"
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
