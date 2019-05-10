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
    "revision": "d1ddec2ca4d1476671f47968ff70c1ab"
  },
  {
    "url": "about.html",
    "revision": "69a3fb558beaab713061e9e0bf012a71"
  },
  {
    "url": "assets/css/0.styles.5d74642e.css",
    "revision": "754c2cddfe9a26737fc249d6ed09ef60"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f9a6b768.js",
    "revision": "01241a05c00179b93fd65d4ca6d37116"
  },
  {
    "url": "assets/js/11.d8b55b3d.js",
    "revision": "46ab43f5ccbf7a5e51ec3450b61023e7"
  },
  {
    "url": "assets/js/2.86eb4ff0.js",
    "revision": "357c6a83e99b1b81ad4db9906344ba61"
  },
  {
    "url": "assets/js/3.0f79bc30.js",
    "revision": "b1cde1ea036dc850beded2ef3db5946c"
  },
  {
    "url": "assets/js/4.324d3886.js",
    "revision": "0670d6b8da1422958bbc7b0ea73d0dec"
  },
  {
    "url": "assets/js/5.91298cc6.js",
    "revision": "ce70873f5120c5b03565d9b0348e08a7"
  },
  {
    "url": "assets/js/6.6f9a99d1.js",
    "revision": "638773abc55244caf79438cfb512a84d"
  },
  {
    "url": "assets/js/7.0371d89d.js",
    "revision": "7f0503908e5adec515d123353162f5ff"
  },
  {
    "url": "assets/js/8.f2bb7128.js",
    "revision": "f9c0f18ef12fbc82eab74d3ba2d14fb8"
  },
  {
    "url": "assets/js/9.25d64890.js",
    "revision": "a2f5413e56932c91d118408ca4ea13a3"
  },
  {
    "url": "assets/js/app.6b7a7d3d.js",
    "revision": "0ab0c8fb44e5c09f68a24dc61e8f8a9b"
  },
  {
    "url": "contact.html",
    "revision": "b60244ce2576642a93d72eb73c88a6f7"
  },
  {
    "url": "index.html",
    "revision": "a18715036e9256dffb0172527009c452"
  },
  {
    "url": "tips/a.html",
    "revision": "ee628e0e6ecaf114f0dabafef5f80746"
  },
  {
    "url": "tips/index.html",
    "revision": "e5080d0defff26e430714c9cfbb9f602"
  },
  {
    "url": "web/a.html",
    "revision": "415aa5436c641fc87687fe8f21f23ddb"
  },
  {
    "url": "web/index.html",
    "revision": "1d091ba45c635ecf5e00275d96fcf2ba"
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
