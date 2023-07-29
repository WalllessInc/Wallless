/* --------------------------------
*  JavaScript Document
* -------------------------------- */
import { createApp } from "https://unpkg.com/vue@3.2.4/dist/vue.esm-browser.prod.js";
const app = createApp({
  el: '#app',

  components: {
    'the-header': httpVueLoader('assets/components/the-header.vue'),
    'the-footer': httpVueLoader('assets/components/the-footer.vue'),
  },
});
app.mount("#app");

/* --------------------------------
*  Decrease Display Magnification
* -------------------------------- */
const adjustViewport = (triggerWindowWidth = 370) => {
  const metaViewport = document.querySelector('meta[name="viewport"]');
  const viewportValue =
    window.outerWidth < triggerWindowWidth
      ? `width=${triggerWindowWidth}, user-scalable=no, target-densitydpi=device-dpi`
      : 'width=device-width, initial-scale=1';
  metaViewport.setAttribute('content', viewportValue);
};

window.addEventListener('DOMContentLoaded', () => {
  adjustViewport(); // 引数に画面幅の数値を与えると、その値が画面幅が縮小される起点になる
});
