'use strict';(function(a){a.notify=function(c){var e=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'Notification',f=arguments[2];return new function(){this;(function(){var h,i={body:JSON.stringify(c)};'Notification'in window?'granted'===Notification.permission?h=new Notification(e,i):'denied'!==Notification.permission&&Notification.requestPermission(function(j){'granted'===j&&(h=new Notification(e,i))}):alert(c),f&&console[f](e+': '+c)})()}}})(window.UIKit=window.UIKit||{},window.jQuery=window.jQuery||window.$);