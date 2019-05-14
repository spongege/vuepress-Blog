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
    "revision": "8f017f248a60e085e9a2eec3c879a874"
  },
  {
    "url": "about.html",
    "revision": "2e74ca5a2e6b4ab9006acbfa9ff0037e"
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
    "url": "assets/js/10.b2b9db1b.js",
    "revision": "452949069af5ea77069b793b0115af5d"
  },
  {
    "url": "assets/js/11.fafc0e1d.js",
    "revision": "d22c227d45a20af1e26931202dbba9f9"
  },
  {
    "url": "assets/js/12.a3867a96.js",
    "revision": "4535c836bade70497bf90140cb7a3437"
  },
  {
    "url": "assets/js/13.8b18fa10.js",
    "revision": "934bbf6eb04c8aec956b23d7f8641987"
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
    "url": "assets/js/4.05a9910c.js",
    "revision": "37f9175a085956e410c8c79cf5b9a6e0"
  },
  {
    "url": "assets/js/5.ffffdb2b.js",
    "revision": "8b412d880ce50e23f079d5d5647ca8ff"
  },
  {
    "url": "assets/js/6.334e70a7.js",
    "revision": "6c69329b0c6de08a7d2312ffe50f9c80"
  },
  {
    "url": "assets/js/7.19b72361.js",
    "revision": "0d48c39f445b553fda834115434020ea"
  },
  {
    "url": "assets/js/8.2f20ced6.js",
    "revision": "12d5a89de0f7b8034b2259d5f04a8ccc"
  },
  {
    "url": "assets/js/9.624d7ce4.js",
    "revision": "45b778cb15113756b354f8fd1b6bfa6b"
  },
  {
    "url": "assets/js/app.21385443.js",
    "revision": "eeb1ace35fe3f798e7b233f519d8f32d"
  },
  {
    "url": "contact.html",
    "revision": "643f6a414bc8e09221fd816e46f9c48a"
  },
  {
    "url": "index.html",
    "revision": "c2b31fa26ef8345bef19074ffd9ba14e"
  },
  {
    "url": "jsNotes/arrSort.html",
    "revision": "35fa870ccaa98642af32dc9e54085408"
  },
  {
    "url": "jsNotes/index.html",
    "revision": "db222c818a747cb301fa8de9f0f90ecc"
  },
  {
    "url": "jsNotes/reflow.html",
    "revision": "8500ff23b5a23fbcf744bf0d7d98b93a"
  },
  {
    "url": "jsNotes/reg.html",
    "revision": "4027fdb77fb8ddb7fb7de190447d33e7"
  },
  {
    "url": "tips/arrSort.html",
    "revision": "8875b7c2529c6434e0125319986daa80"
  },
  {
    "url": "tips/index.html",
    "revision": "733d11430b912165165bd0a251159bdc"
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
