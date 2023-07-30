/* --------------------------------
*  Vue Application
* -------------------------------- */
import { createApp, defineComponent } from 'https://unpkg.com/vue@3.2.4/dist/vue.esm-browser.prod.js';

const Header = defineComponent({
  template: `
        <div>
          <h1>This is the header component</h1>
          <!-- 他のコンテンツをここに追加 -->
        </div>
      `
});

const News = defineComponent({
  template: `
        <ul>
				<li v-for="item in items">
					{{ item.title }}-{{ item.price }}
				</li>
			</ul>
			フルーツ: <input v-model="additem"><br>
			値段: <input v-model="addprice"><br>
      `,
  data() {
    return {
      items: [
        { title: "リンゴ", price: "200円" },
        { title: "メロン", price: "500円" }
      ],
    }
  },
});

const app = createApp({});
app.component('the-header', Header);
app.component('the-news', News);
app.mount('#app');


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
