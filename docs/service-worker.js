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
    "revision": "55881cfd70b9ea4e97b120445f94322e"
  },
  {
    "url": "about.html",
    "revision": "2f08981749c57830b0f6714e6960db67"
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
    "url": "assets/js/8.974c8d4e.js",
    "revision": "201b657cd8997cc549d6959e76d014a5"
  },
  {
    "url": "assets/js/9.25d64890.js",
    "revision": "a2f5413e56932c91d118408ca4ea13a3"
  },
  {
    "url": "assets/js/app.fcba0aec.js",
    "revision": "a5765fac1443d0e6596bc070fca50c12"
  },
  {
    "url": "contact.html",
    "revision": "4c27385e82b0c9aa5ca69be97775900e"
  },
  {
    "url": "index.html",
    "revision": "ba06ee355db948e205ddd4d098ec43f8"
  },
  {
    "url": "tips/a.html",
    "revision": "dfdf66733fdd429ffddbac40d78aa883"
  },
  {
    "url": "tips/index.html",
    "revision": "fe6ff6c8571c29120fae6b2116a4ca52"
  },
  {
    "url": "web/a.html",
    "revision": "693f05e75f158cbdaa9e99983663ec7f"
  },
  {
    "url": "web/index.html",
    "revision": "1de6665874782db68e815f18c368356e"
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
