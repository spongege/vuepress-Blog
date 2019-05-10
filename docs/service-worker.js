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
    "revision": "cc7148e12698558b1b9ba69c03f33c48"
  },
  {
    "url": "about.html",
    "revision": "4c225e2e9c8517bf72f4789646fa06da"
  },
  {
    "url": "assets/css/0.styles.276b7cab.css",
    "revision": "bb8ef2dcdcae2839bb814c8a69e8e042"
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
    "url": "assets/js/app.0d7dbf55.js",
    "revision": "b4144e394b68ca2533cb5a5f9c2653dd"
  },
  {
    "url": "contact.html",
    "revision": "250caad38a1f6642f6e44f5f20112323"
  },
  {
    "url": "index.html",
    "revision": "6f3ff8c615a184a592c318167a470216"
  },
  {
    "url": "tips/a.html",
    "revision": "6e21cfd305518cc134a896f0fda3dc50"
  },
  {
    "url": "tips/index.html",
    "revision": "2a7e03de0c086b8929f0d12dfd0344a5"
  },
  {
    "url": "web/a.html",
    "revision": "fda5a2a652cb407bc16769abc3e4aca7"
  },
  {
    "url": "web/index.html",
    "revision": "83c7797e8ed8bbe0ebc19012d6caab2d"
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
