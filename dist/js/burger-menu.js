"use strict";window.MOBILE_WIDTH=576,window.TABLET_WIDTH=1024,window.debounce=function(e,t){var n=!1;return function(){n||(e.apply(this,arguments),n=!0,setTimeout((function(){return n=!1}),t))}},window.getWindowWidth=function(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)},document.querySelectorAll(".header__link").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),function(e,t){if(!(t&&window.getWindowWidth()>window.MOBILE_WIDTH)){var n=e.getAttribute("href").substring(1);if(Boolean(n)){var s=document.getElementById(n).getBoundingClientRect().top,i=0;window.getWindowWidth()<=window.TABLET_WIDTH&&(i=-102),window.scrollBy({top:s+i,behavior:"smooth"})}}}(this,!1)}))})),function(e){var t=document.querySelector(".".concat(e.btnClass)),n=document.querySelector(".".concat(e.menuClass)),s=n.querySelectorAll(".".concat(e.linksClass));function i(){window.getWindowWidth()<=window.TABLET_WIDTH&&(t.classList.toggle(e.activeClass),n.classList.contains(e.activeClass)||n.classList.contains(e.hiddenClass)?(n.classList.add(e.hiddenClass),document.body.removeAttribute("style"),t.classList.toggle(e.hiddenClass)):(n.classList.add(e.activeClass),document.body.style.overflow="hidden"))}n.addEventListener("animationend",(function(){n.classList.contains(e.hiddenClass)&&(n.classList.remove(e.activeClass),n.classList.remove(e.hiddenClass),t.classList.remove(e.hiddenClass))})),t.addEventListener("click",i),s.forEach((function(e){e.addEventListener("click",i)}))}({btnClass:"header__burger",menuClass:"header__cube",activeClass:"is-opened",hiddenClass:"is-closed",linksClass:"header__link"});