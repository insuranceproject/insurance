var iscompatible=function(){var e=window.navigator.userAgent;return-1!==e.indexOf("Mobile")&&(-1!==e.indexOf("Android")&&(!(e.indexOf("MicroMessenger")>=0)&&10*e.substr(e.indexOf("Android")+8,3)<=50))}(),css=document.createElement("link");if(css.rel="stylesheet",css.href=iscompatible?"compatible/index.min.css":"standard/index.min.css",window.document.head.appendChild(css),iscompatible){var vendor=document.createElement("script");vendor.src=iscompatible?"compatible/vendor.cf0b643cb8bc8f4ace11.js":"standard/",vendor.onload=function(){var e=document.createElement("script");e.src=iscompatible?"compatible/index.4fee3bb060c4a77979f7.js":"standard/index.00b39.js",window.document.body.appendChild(e)},window.document.body.appendChild(vendor)}else{var index=document.createElement("script");index.src=iscompatible?"compatible/index.4fee3bb060c4a77979f7.js":"standard/index.00b39.js",window.document.body.appendChild(index)}