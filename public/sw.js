if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const r=e=>a(e,t),o={module:{uri:t},exports:i,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/120.a9522bfc22ebe1f8.js",revision:"a9522bfc22ebe1f8"},{url:"/_next/static/chunks/191.6939b93406748a9f.js",revision:"6939b93406748a9f"},{url:"/_next/static/chunks/236.2c65912726b04e8b.js",revision:"2c65912726b04e8b"},{url:"/_next/static/chunks/26.9ee0838580416da4.js",revision:"9ee0838580416da4"},{url:"/_next/static/chunks/29.ef131f7a0e726896.js",revision:"ef131f7a0e726896"},{url:"/_next/static/chunks/309.9b34b2115b34bedb.js",revision:"9b34b2115b34bedb"},{url:"/_next/static/chunks/318.930eb01bda0cecf1.js",revision:"930eb01bda0cecf1"},{url:"/_next/static/chunks/319.57a10463adce1ad8.js",revision:"57a10463adce1ad8"},{url:"/_next/static/chunks/331.aad606880be1b27b.js",revision:"aad606880be1b27b"},{url:"/_next/static/chunks/346.443f9650c9be1294.js",revision:"443f9650c9be1294"},{url:"/_next/static/chunks/359.445c8aedd638a88e.js",revision:"445c8aedd638a88e"},{url:"/_next/static/chunks/376.2dab355e83e7149b.js",revision:"2dab355e83e7149b"},{url:"/_next/static/chunks/457.bd41b3508ddd34ff.js",revision:"bd41b3508ddd34ff"},{url:"/_next/static/chunks/460.8f20302a3f2427c8.js",revision:"8f20302a3f2427c8"},{url:"/_next/static/chunks/495.0c64050c7fd87c63.js",revision:"0c64050c7fd87c63"},{url:"/_next/static/chunks/547.0ee25da3bb7229df.js",revision:"0ee25da3bb7229df"},{url:"/_next/static/chunks/595.a93a3b3afb8880d0.js",revision:"a93a3b3afb8880d0"},{url:"/_next/static/chunks/627.2379854035170225.js",revision:"2379854035170225"},{url:"/_next/static/chunks/677.809e03b44ca80c6e.js",revision:"809e03b44ca80c6e"},{url:"/_next/static/chunks/744.253a9a0f12bdb0d3.js",revision:"253a9a0f12bdb0d3"},{url:"/_next/static/chunks/780.66f8d438f78ac5ee.js",revision:"66f8d438f78ac5ee"},{url:"/_next/static/chunks/843.7d8dc85f4e2b64ee.js",revision:"7d8dc85f4e2b64ee"},{url:"/_next/static/chunks/894.884bc9854a9cfe85.js",revision:"884bc9854a9cfe85"},{url:"/_next/static/chunks/902.8884e3b946313dd5.js",revision:"8884e3b946313dd5"},{url:"/_next/static/chunks/915.12ab78b85c566680.js",revision:"12ab78b85c566680"},{url:"/_next/static/chunks/927.a4d82988f85fabfb.js",revision:"a4d82988f85fabfb"},{url:"/_next/static/chunks/958.a5e5e678a4156da7.js",revision:"a5e5e678a4156da7"},{url:"/_next/static/chunks/994.26b99642a2e42c88.js",revision:"26b99642a2e42c88"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-246f19125e0ef237.js",revision:"246f19125e0ef237"},{url:"/_next/static/chunks/pages/_app-7050e776aaefb65a.js",revision:"7050e776aaefb65a"},{url:"/_next/static/chunks/pages/_error-815e492bede44f3e.js",revision:"815e492bede44f3e"},{url:"/_next/static/chunks/pages/index-2d9ff5e3e36284de.js",revision:"2d9ff5e3e36284de"},{url:"/_next/static/chunks/pages/result-2759903631f095c6.js",revision:"2759903631f095c6"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-c54ba94440c048d2.js",revision:"c54ba94440c048d2"},{url:"/_next/static/dRspIqs77g_3zsqX-le1C/_buildManifest.js",revision:"3b1357b3b40cbea3c31c309acb1d51c4"},{url:"/_next/static/dRspIqs77g_3zsqX-le1C/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/dRspIqs77g_3zsqX-le1C/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/app.png",revision:"ab4beaa4b92e6246652f7546e687bf31"},{url:"/assets/clean_architecture_book.jpg",revision:"a19da4eab27ab2949b65af9c061a2a99"},{url:"/assets/clean_code_book.jpg",revision:"3cda8dce4d3fa622575e7ca676cde80b"},{url:"/assets/eletronics-icon.svg",revision:"30e0e5fbf130d7dba0adbf4370371b6d"},{url:"/assets/icon-16.png",revision:"5a283295194fec79b0a57c8fe15bb894"},{url:"/assets/icon-180.png",revision:"2545390ecc24d2cb47cd15d74ba18f73"},{url:"/assets/icon-32.png",revision:"8d3142dbf4efb2679baa0d412149b2ec"},{url:"/assets/icon-512.png",revision:"f96bc2be3ccab2f08bbd69e42bd4cc00"},{url:"/assets/icon-96.png",revision:"2b0967fa77fc035da1bfe03193179241"},{url:"/assets/js-circle-icon.svg",revision:"14154192bfdad6db361a69ae665ea21c"},{url:"/assets/snake.svg",revision:"8499667a6d75da244b4def7f5d0176fb"},{url:"/manifest.json",revision:"9ba4609613f7cdf921ef5c85cc9fe0bf"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));