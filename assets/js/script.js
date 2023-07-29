/* --------------------------------
*  JavaScript Document
* -------------------------------- */
const app = new Vue({
  el: '#app',

  components: {
    'the-header': httpVueLoader('assets/components/the-header.vue'),
    'the-footer': httpVueLoader('assets/components/the-footer.vue'),
  },

  data() {
    return {
      //連想配列を定義
      items: [
        { title: "リンゴ", price: "200円" },
        { title: "メロン", price: "500円" }
      ],
    }
  },
});

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
