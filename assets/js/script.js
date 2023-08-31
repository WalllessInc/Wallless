/* --------------------------------
*  Vue Application
* -------------------------------- */
import { createApp, defineComponent } from 'https://unpkg.com/vue@3.2.4/dist/vue.esm-browser.prod.js';

const Header = defineComponent({
	template: `
					<header class="header js-header">
						<h1 class="header__logo">
							<a class="js-pageSwitch" href="index.html">
								<img src="assets/images/logo.svg" alt="Wallless" width="144" height="32">
							</a>
						</h1>

						<button class="header__hamburger js-hamburger"  aria-label="メニューを開く">
							<span></span><span></span><span></span>
						</button>

						<nav class="header__nav js-headerNav">
							<ul class="header__nav__list">
								<li class="header__nav__list__logo">
									<img src="assets/images/logo_white.svg" alt="" width="144" height="652">
								</li>

								<li class="spOnly">
									<a class="js-pageSwitch" href="index.html">Home</a>
								</li>

								<li class="js-headerNavItem">
									<a class="js-pageSwitch" href="about.html">About</a>
								</li>

								<li class="js-headerNavItem">
									<a class="js-pageSwitch" href="service.html">Service</a>
								</li>

								<li class="js-headerNavItem">
									<a class="js-pageSwitch" href="works.html">Works</a>
								</li>

								<li class="js-headerNavItem">
									<a class="js-pageSwitch" href="news.html">News</a>
								</li>

								<li class="header__nav__list__btn">
									<a href="mailto:info@wallless-inc.com">
										<span>Contact</span>
									</a>
								</li>
							</ul>
						</nav>
					</header>
			`
});

const Footer = defineComponent({
	template: `
					<footer class="footer">
						<a class="footer__logo js-pageSwitch" href="index.html">
							<img src="assets/images/logo.svg" alt="Wallless" width="144" height="32">
						</a>

						<nav class="footer__nav">
							<ul class="footer__nav__list">
								<li>
									<a class="js-pageSwitch" href="about.html">About</a>
								</li>

								<li>
									<a class="js-pageSwitch" href="service.html">Service</a>
								</li>

								<li>
									<a class="js-pageSwitch" href="works.html">Works</a>
								</li>

								<li>
									<a class="js-pageSwitch" href="news.html">News</a>
								</li>

								<li>
									<a href="mailto:info@wallless-inc.comm">Contact</a>
								</li>
							</ul>
						</nav>

						<div class="footer__sns">
							<a href="https://twitter.com/wallless_yuki" target="_blank">
								<img src="assets/images/icon_x.svg" alt="twitter" width="24" height="24">
							</a>

							<a href="https://www.instagram.com/wallless_/" target="_blank">
								<img src="assets/images/icon_instagram.svg" alt="instagram" width="24" height="24">
							</a>
						</div>

						<p class="footer__copyright"><small>&copy;2023 Wallless.inc</small></p>
					</footer>
      `
});

const LowerHeader = defineComponent({
	template: `
					<header class="header js-header">
						<h1 class="header__logo">
							<a class="js-pageSwitch" href="../index.html">
								<img src="../assets/images/logo.svg" alt="Wallless" width="144" height="32">
							</a>
						</h1>

						<button class="header__hamburger js-hamburger"  aria-label="メニューを開く">
							<span></span><span></span><span></span>
						</button>

						<nav class="header__nav js-headerNav">
							<ul class="header__nav__list">
								<li class="header__nav__list__logo">
									<img src="../assets/images/logo_white.svg" alt="" width="144" height="652">
								</li>

								<li class="spOnly">
									<a class="js-pageSwitch" href="index.html">Home</a>
								</li>

								<li class="js-headerNavItem">
									<a class="js-pageSwitch" href="../about.html">About</a>
								</li>

								<li class="js-headerNavItem">
									<a class="js-pageSwitch" href="../service.html">Service</a>
								</li>

								<li class="js-headerNavItem">
									<a class="js-pageSwitch" href="../works.html">Works</a>
								</li>

								<li class="js-headerNavItem">
									<a class="js-pageSwitch" href="../news.html">News</a>
								</li>

								<li class="header__nav__list__btn">
									<a href="mailto:info@wallless-inc.com">
										<span>Contact</span>
									</a>
								</li>
							</ul>
						</nav>
					</header>
			`
});

const LowerFooter = defineComponent({
	template: `
					<footer class="footer">
						<a class="footer__logo js-pageSwitch" href="../index.html">
							<img src="../assets/images/logo.svg" alt="Wallless" width="144" height="32">
						</a>

						<nav class="footer__nav">
							<ul class="footer__nav__list">
								<li>
									<a class="js-pageSwitch" href="../about.html">About</a>
								</li>

								<li>
									<a class="js-pageSwitch" href="../service.html">Service</a>
								</li>

								<li>
									<a class="js-pageSwitch" href="../works.html">Works</a>
								</li>

								<li>
									<a class="js-pageSwitch" href="../news.html">News</a>
								</li>

								<li>
									<a href="mailto:info@wallless-inc.com">Contact</a>
								</li>
							</ul>
						</nav>

						<div class="footer__sns">
							<a href="https://twitter.com/wallless_yuki" target="_blank">
								<img src="../assets/images/icon_x.svg" alt="twitter" width="24" height="24">
							</a>

							<a href="https://www.instagram.com/wallless_/" target="_blank">
								<img src="../assets/images/icon_instagram.svg" alt="instagram" width="24" height="24">
							</a>
						</div>

						<p class="footer__copyright"><small>&copy;2023 Wallless.inc</small></p>
					</footer>
      `
});

const Contact = defineComponent({
	template: `
					<section>
						<div class="stalker"></div>
						<a class="contact" href="mailto:info@wallless-inc.com">
							<h2 class="contact__title">
								<span class="contact__title__jp">
									お問い合わせ
								</span>
								<span class="contact__title__en">
									Contact
								</span>
							</h2>

							<p class="contact__text">
								お問い合わせやご依頼はこちら。<br>
								一週間以内に返信いたします。
							</p>
						</a>
					</section>
      `,
	mounted() {
		const mouse = document.querySelector(".stalker");
		const contact = document.querySelector(".contact");

		document.addEventListener("mousemove", (e) => {
			const x = e.clientX;
			const y = e.clientY;
			mouse.style.transform = `translate(${x}px, ${y}px)`;
		});

		contact.addEventListener("mouseenter", () => {
			mouse.classList.add("js-hover");
		});

		contact.addEventListener("mouseleave", () => {
			mouse.classList.remove("js-hover");
		});
	}
});

const ServiceImg = defineComponent({
	template: `
				<div class="service__img js-fadeIn">
					<a class="service__img__inner js-serviceImg js-pageSwitch" v-for="(item, index) in items" :key="index" :class="item.class" :href="item.href">
						<img :src="item.imageSrc" alt="" width="800" height="296">
					</a>
				</div>
      `,
	data() {
		return {
			items: [
				{
					class: "graphic active",
					href: "service.html#graphic",
					imageSrc: "assets/images/service_graphic.webp",
				},
				{
					class: "web",
					href: "service.html#web",
					imageSrc: "assets/images/service_web.webp",
				},
				{
					class: "movie",
					href: "service.html#movie",
					imageSrc: "assets/images/service_movie.webp",
				},
				{
					class: "photograph",
					href: "service.html#photograph",
					imageSrc: "assets/images/service_photograph.webp",
				},
			],
		}
	},
});

const ServiceContent = defineComponent({
	template: `
					<div class="service__content js-fadeIn">
						<div class="service__content__inner js-serviceContent"
						v-for="(item, index) in items" :key="index" :class="item.class">
							<h3 class="service__content__inner__title">
								<span class="service__content__inner__title__jp">
									{{ item.titleJp }}
								</span>
								<span class="service__content__inner__title__en">
									{{ item.titleEn }}
								</span>
							</h3>
							<p class="service__content__inner__text" v-html="item.text"></p>
							<a class="service__content__inner__btn  js-serviceNav js-pageSwitch" href="service.html">
								<span>Read More</span>
							</a>
						</div>
					</div>
      `,
	data() {
		return {
			items: [
				{
					class: "graphic active",
					href: "service.html#graphic",
					titleJp: "グラフィック制作",
					titleEn: "Graphic",
					text: 'クライアントのご要望に沿った制作物をご用意しております。<br>「こんなものほしいんだけど…」とお気軽にお問い合わせください。'
				},
				{
					class: "web",
					titleJp: "Webサイト制作",
					titleEn: "Web",
					text: 'クライアントに合わせたオーダーメイドのWebサイトを制作いたします。<br>ウェブアクセシビリティやSEOに配慮したサイトづくりを心がけています。'
				},
				{
					class: "movie",
					titleJp: "動画制作",
					titleEn: "Movie",
					text: 'PVからSNS用の動画に至るまで一貫して制作いたします。<br>動画を通して分かりやすく明確に表現し、効果的に訴求いたします。'
				},
				{
					class: "photograph",
					titleJp: "写真・動画撮影",
					titleEn: "Photograph",
					text: '物撮り・イベント撮影などオールジャンル撮影可能。<br>カメラジンバル・ドローン等もございますので、<br>空撮からシネマティック撮影までお任せください。'
				},
			],
		}
	},
});

const ServiceLower = defineComponent({
	template: `
					<section class="service__wrapper__container js-sideSection" v-for="(item, index) in items" :key="index" :id="item.id">
						<h3 class="service__wrapper__container__title">
							<span class="service__wrapper__container__title__en">
								{{ item.titleEn }}
							</span>
							<span class="service__wrapper__container__title__jp">
								{{ item.titleJp }}
							</span>
						</h3>

						<p class="service__wrapper__container__text" v-html="item.text"></p>

						<h4 class="service__wrapper__container__subheading">制作内容</h4>
							<p class="service__wrapper__container__text">
								{{ item.content }}
							</p>

							<h4 class="service__wrapper__container__subheading">制作事例</h4>
							<div class="service__wrapper__container__example">
								<a class="js-pageSwitch" :href="item.hrefA">
									<div class="service__wrapper__container__example__img js-fadeIn">
										<img :src="item.imageSrcA" alt="" width="336" height="240">
									</div>
									<h5 v-html="item.exampleA"></h5>
								</a>

								<a class="js-pageSwitch" :href="item.hrefB">
									<div class="service__wrapper__container__example__img js-fadeIn">
										<img :src="item.imageSrcB" alt="" width="336" height="240">
									</div>
									<h5 v-html="item.exampleB"></h5>
								</a>
							</div>
						</section>
      `,
	data() {
		return {
			items: [
				{
					id: "graphic",
					titleEn: "Graphic",
					titleJp: "グラフィック制作",
					text: "クライアントのご要望に沿った制作物をご用意しております。<br>「こんなものほしいんだけど…」とお気軽にお問い合わせください。",
					content: "リーフレット / ポスター / パンフレット / 名刺 / DM / 冊子(会社案内 / 学校案内)",

					hrefA: "works/kinjo_pamphlet.html",
					imageSrcA: "assets/images/works/kinjo_pamphlet-01.webp",
					exampleA: "金城学院大学 入学資料",

					hrefB: "works/rohto_poster.html",
					imageSrcB: "assets/images/works/rohto_poster-01.webp",
					exampleB: "ロート製薬 新卒採用ポスター",
				},
				{
					id: "web",
					titleEn: "Web",
					titleJp: "Webサイト制作",
					text: "クライアントに合わせたオーダーメイドのWebサイトを制作いたします。<br>ウェブアクセシビリティやSEOに配慮したサイトづくりを心がけています。",
					content: "新規サイトの制作 / 既存サイトのリニューアル / CMSを利用したサイトの制作 / サイト公開後の改善提案",

					hrefA: "works/trike_web.html",
					imageSrcA: "assets/images/works/trike_web-01.webp",
					exampleA: "EV-TRIKE ランディングページ",

					hrefB: "works/meihokan_web.html",
					imageSrcB: "assets/images/works/meihokan_web-01.webp",
					exampleB: "明蓬館高等学校 採用ページ",
				},
				{
					id: "movie",
					titleEn: "Movie",
					titleJp: "動画制作",
					text: "PVからSNS用の動画に至るまで一貫して制作いたします。<br>動画を通して分かりやすく明確に表現し、効果的に訴求いたします。",
					content: "プロモーションムービー / リール(Instagram) / Youtube Shout / モーショングラフィクス / 実写撮影",

					hrefA: "works/sumiyoshi_pv.html",
					imageSrcA: "assets/images/works/sumiyoshi_pv-01.webp",
					exampleA: "ホームカミングデイ プロモーションビデオ",

					hrefB: "works/tesla_event.html",
					imageSrcB: "assets/images/works/tesla_event-01.webp",
					exampleB: "ふれあいテスラ イベントツール",
				},
				{
					id: "photograph",
					titleEn: "Photograph",
					titleJp: "写真撮影・動画撮影",
					text: "物撮り・イベント撮影などオールジャンル撮影可能。<br>カメラジンバル・ドローン等もございますので、空撮からシネマティック撮影までお任せください。",
					content: "物撮り / イベント撮影 / 空撮 / シネマティック撮影 / レタッチ",

					hrefA: "works/tesla_event.html",
					imageSrcA: "assets/images/works/tesla_event-01.webp",
					exampleA: "ふれあいテスラ イベントツール",

					hrefB: "works/photograph.html",
					imageSrcB: "assets/images/works/photograph-01.webp",
					exampleB: "写真撮影・動画撮影",
				},
			],
		}
	},
});

const Works = defineComponent({
	template: `
					<div class="works__grid">
						<a class="works__grid__content js-pageSwitch" v-for="(item, index) in items" :key="index" :href="item.href">
							<div class="works__grid__content__img js-fadeIn">
								<img :src="item.imageSrc" alt="" width="352" height="248">
							</div>
							<h3 class="works__grid__content__title" v-html="item.title"></h3>
							<p class="works__grid__content__category">
								{{ item.category }}
							</p>
						</a>
					</div>
      `,
	data() {
		return {
			items: [
				{
					href: "works/kinjo_pamphlet.html",
					imageSrc: "assets/images/works/kinjo_pamphlet-01.webp",
					title: "金城学院大学 入学資料",
					category: "Graphic"
				},
				{
					href: "works/rohto_poster.html",
					imageSrc: "assets/images/works/rohto_poster-01.webp",
					title: "ロート製薬 新卒採用ポスター",
					category: "Graphic"
				},
				{
					href: "works/seshuraku_branding.html",
					imageSrc: "assets/images/works/seshuraku_branding-01.webp",
					title: "せしゅらく マーケティングツール",
					category: "Graphic / Movie"
				},
				{
					href: "works/tesla_event.html",
					imageSrc: "assets/images/works/tesla_event-01.webp",
					title: "ふれあいテスラ イベントツール",
					category: "Graphic / Web / Movie / Photograph"
				},
				{
					href: "works/polaris_branding.html",
					imageSrc: "assets/images/works/polaris_branding-01.webp",
					title: "ポラリスエクスポート クリエイティブブランディング",
					category: "Graphic / Web"
				},
				{
					href: "works/integral_card.html",
					imageSrc: "assets/images/works/integral_card-01.webp",
					title: "積分サークル さるえる様 名刺",
					category: "Graphic"
				},
				{
					href: "works/cooonworks_support.html",
					imageSrc: "assets/images/works/cooonworks_support-01.webp",
					title: "COOON WORKS CFクリエイティブサポート",
					category: "Graphic"
				},
				{
					href: "works/trike_web.html",
					imageSrc: "assets/images/works/trike_web-01.webp",
					title: "EV-TRIKE ランディングページ",
					category: "Web"
				},
				{
					href: "works/meihokan_web.html",
					imageSrc: "assets/images/works/meihokan_web-01.webp",
					title: "明蓬館高等学校 採用ページ",
					category: "Web"
				},
				{
					href: "works/sumiyoshi_pv.html",
					imageSrc: "assets/images/works/sumiyoshi_pv-01.webp",
					title: "ホームカミングデイ プロモーションビデオ",
					category: "Movie / Photograph"
				},
				{
					href: "works/photograph.html",
					imageSrc: "assets/images/works/photograph-01.webp",
					title: "写真撮影・動画撮影",
					category: "Photograph"
				},
			],
		}
	},
});

const News = defineComponent({
	template: `
					<ul class="news__list">
						<li v-for="(item, index) in items" :key="index">
							<a class="news__list__item js-news js-pageSwitch" :href="item.href">
								<div>
									<time class="news__list__item__date" :datetime="item.dateTime" >
										{{ item.date }}
									</time>
									<p class="news__list__item__category js-unify" >
										{{ item.category }}
									</p>
								</div>

								<h3 class="news__list__item__title">
									{{ item.title }}
								</h3>
							</a>
						</li>
					</ul>
      `,
	data() {
		return {
			items: [
				{
					href: "news/230527.html",
					dateTime: "2023-05-27",
					date: "2023.05.27",
					category: "Event",
					title: "デザイン体験会#4（オンライン）開催決定！"
				},
				{
					href: "news/230221.html",
					dateTime: "2023-02-21",
					date: "2023.02.21",
					category: "Event",
					title: "デザイン体験会#3（オンライン）開催決定！"
				},
				{
					href: "news/230219.html",
					dateTime: "2023-02-19",
					date: "2023.02.19",
					category: "Event",
					title: "デザイン体験会#2開催決定！"
				},
				{
					href: "news/230211.html",
					dateTime: "2023-02-11",
					date: "2023.02.11",
					category: "Event",
					title: "デザイン体験会#1開催決定！"
				},
				{
					href: "news/230203.html",
					dateTime: "2023-02-03",
					date: "2023.02.03",
					category: "News",
					title: "HPを公開しました"
				},
			],
		}
	}
});

const NewsSession01 = defineComponent({
	template: `
					<div>
						<h3 class="newsArticle__subheading">岐阜市初のクリエイティブスクール<wbr />ついに開校！</h3>
						<p class="newsArticle__promotion">
							皆さんがよく使っている「YouTube」や「Instagram」などの起業は、創業期にデザイナーがいました。<br>
							また、会社全体でもデザイナーを迎え入れたいという会社は多く全体の55％にまで登ります。<br>
							そんな大デザイン時代で、デザインの基礎を知らなくても大丈夫ですか？<br>
							今こそ私達と一緒にデザインを学びましょう。
						</p>

						<div class="newsArticle__content">
							<h4 class="newsArticle__content__title">【こんな方におすすめ】</h4>
							<ul class="newsArticle__content__list">
								<li>デザイン業界に将来就職したい方</li>
								<li>Web業界に将来就職したい方</li>
								<li>綺麗に資料作成をしたい方など！</li>
							</ul>
							<p class="newsArticle__content__text">
								デザインの【デ】を知らない人方でもわかりやすく解説！<br>
								2時間たったあとにはワンランクUPした資料の作り方を覚えて帰っていただけます！<br>
								現役デザイナーからフィードバックをするので、良いところ・悪いところがしっかりわかって安心！
							</p>
						</div>

						<div class="newsArticle__content">
							<h4 class="newsArticle__content__title">【講師紹介】</h4>
							<p class="newsArticle__content__teacher">
								クリエイティブチーム『Wallless』代表<br>
								直井 祐樹
							</p>
							<p class="newsArticle__content__text">
								岐阜市生まれ。<br>
								専門学校HAL名古屋に入学後、インハウスデザイナーや<br class="pcOnly">中部圏最大のドラッグストアの販促ポスター、大手製薬メーカーの新卒採用ポスターを手掛ける。<br>
								2023年1月クリエイティブチーム「Wallless」を立ち上げ。<br>
								これまで培ったデザインノウハウをもとに、地元岐阜で若者に新しい道を差し伸べるためクリエイティブスクール「Wac」を設立。
							</p>
						</div>
					</div>
      `
});

const NewsSession02 = defineComponent({
	template: `
					<div>
						<dl class="newsArticle__hold">
							<div>
								<dt>【主催】</dt>
								<dd>Creative Team 『Wallless』</dd>
							</div>

							<div>
								<dt>【後援】</dt>
								<dd>株式会社COOON</dd>
							</div>
						</dl>

						<a class="newsArticle__btn" href="" target="_blank">
							<span>ENTRY</span>
						</a>

						<the-news_share></the-news_share>
					</div>
      `
});

const NewsShare = defineComponent({
	template: `
					<div>
						<dl class="newsArticle__share">
							<dt>この記事をシェアする</dt>
							<dd>
								<a :href="twitterShareLink"  target="_blank">
									<img src="../assets/images/icon_x.svg" alt="X"  width="24" height="24">
								</a>
								<a :href="lineShareLink" target="_blank">
									<img src="../assets/images/icon_line.svg" alt="liner" width="24" height="24">
								</a>
							</dd>
						</dl>
					</div>
      `,
	data() {
		return {
			canonicalUrl: '',
			h2Content: '',
		};
	},
	computed: {
		twitterShareLink() {
			const encodedUrl = encodeURIComponent(this.canonicalUrl);
			const encodedTitle = encodeURIComponent(this.h2Content);
			return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}%0a`;
		},
		lineShareLink() {
			const encodedUrl = encodeURIComponent(this.canonicalUrl);
			const encodedTitle = encodeURIComponent(this.h2Content);
			return `https://social-plugins.line.me/lineit/share?url=${encodedUrl}&text=${encodedTitle}`;
		},
	},
	mounted() {
		// rel="canonical"の取得
		const canonicalElement = document.querySelector('link[rel="canonical"]');
		if (canonicalElement) {
			this.canonicalUrl = canonicalElement.getAttribute('href');
		}

		// h2タグの中身の取得
		const h2Element = document.querySelector('h2');
		if (h2Element) {
			this.h2Content = h2Element.textContent.trim();
		}
	},
});

const app = createApp({});
app.component('the-header', Header);
app.component('the-footer', Footer);
app.component('the-lower_header', LowerHeader);
app.component('the-lower_footer', LowerFooter);
app.component('the-contact', Contact);
app.component('app-service_img', ServiceImg);
app.component('app-service_content', ServiceContent);
app.component('app-service_lower', ServiceLower);
app.component('app-works', Works);
app.component('app-news', News);
app.component('the-news_session-01', NewsSession01);
app.component('the-news_session-02', NewsSession02);
app.component('the-news_share', NewsShare);
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

/* --------------------------------
*  Disable Empty a Tag
* -------------------------------- */
const anchorElements = document.querySelectorAll('a[href=""]');
anchorElements.forEach((element) => {
	element.addEventListener("click", (event) => {
		event.preventDefault();
		alert("リンク先がありません");
	});
});

/* --------------------------------
*  Lower Content
* -------------------------------- */
const header = document.querySelector('.js-header');
const headerHeight = header.offsetHeight;
const main = document.querySelector('.js-main');

main.style.marginTop = `${headerHeight}px`;

/* --------------------------------
*  Hide Header
* -------------------------------- */
let pastPos = window.pageYOffset;

window.addEventListener('scroll', function () {
	const scroll = window.pageYOffset;
	if (scroll > pastPos && scroll > headerHeight) {
		header.classList.add('hide');
	} else {
		header.classList.remove('hide');
	}

	pastPos = scroll;
});

/* --------------------------------
*  Hamburger Menu
* -------------------------------- */
const headerHamburger = document.querySelector('.js-hamburger');
const headerNav = document.querySelector('.js-headerNav');
const bodyElement = document.querySelector('body');


headerHamburger.addEventListener('click', function () {
	this.classList.toggle('active');
	headerNav.classList.toggle('active');
	bodyElement.classList.toggle('active');
});

const headerNavLinks = headerNav.querySelectorAll('.js-headerNav a');
headerNavLinks.forEach(function (link) {
	link.addEventListener('click', function () {
		headerHamburger.classList.remove('active');
		headerNav.classList.remove('active');
	});
});

/* --------------------------------
*  Header Current
* -------------------------------- */
const links = document.querySelectorAll(".js-headerNavItem > a");

links.forEach(function (link) {
	let ariaCurrentValue = null;

	if (link.href === location.href) {
		ariaCurrentValue = "page";
	} else if (location.href.includes("works") && link.href.includes("works.html")) {
		ariaCurrentValue = "page";
	} else if (location.href.includes("news") && link.href.includes("news.html")) {
		ariaCurrentValue = "page";
	}

	if (ariaCurrentValue) {
		link.setAttribute("aria-current", ariaCurrentValue);
		link.closest(".js-headerNavItem").classList.add("current");
	}
});


/* --------------------------------
*  Page Transition
* -------------------------------- */
const blindfoldContainer = document.querySelector('.blindfold');
const blindfoldItem = document.querySelectorAll('.blindfold__item');
gsap.set(blindfoldContainer, { yPercent: 0 });
gsap.set(blindfoldItem, { scaleY: 1 });

// 画面遷移 前のアニメーション
const pageTransitionBefore = () => {
	const tl = gsap.timeline({});
	tl.fromTo(blindfoldContainer, {
		yPercent: 0,
	}, {
		yPercent: 0,
		duration: 0.4,
	}).fromTo(blindfoldItem, {
		scaleY: 0
	}, {
		scaleY: 1,
		duration: 0.4,
		transformOrigin: 'bottom left',
		ease: 'expo.inOut',
		stagger: { each: 0.1 }
	});
};

// 画面遷移 後のアニメーション
const pageTransitionAfter = () => {
	const tl = gsap.timeline({});
	tl.fromTo(blindfoldContainer, {
		yPercent: 0,
	}, {
		yPercent: -100,
		duration: 1,
		ease: "expo.inOut",
	}).fromTo(blindfoldItem, {
		scaleY: 1,
	}, {
		scaleY: 1,
		duration: 1,
	});
};

const pageSwitchElements = document.querySelectorAll('.js-pageSwitch');

pageSwitchElements.forEach((element) => {
	element.addEventListener('click', (event) => {
		event.preventDefault();
		const href = element.getAttribute('href');
		pageTransitionBefore();
		setTimeout(() => {
			window.location.href = href;
		}, 1200);
	});
});

// ページ読み込みで発火
window.addEventListener('pageshow', (e) => {
	if (document.querySelector('.js-main')) {
		pageTransitionAfter();
	};
});

/* --------------------------------
*  Scroll Animation
* -------------------------------- */
window.addEventListener('load', function () {

	// IntersectionObserverの作成
	const observer = new IntersectionObserver(function (entries) {
		for (let i = 0; i < entries.length; i++) {

			// 領域内なら処理を実行
			if (entries[i].intersectionRatio <= 0) continue;
			showElm(entries[i].target);
		};
	}, {
		rootMargin: '-10% 0% -10% 0%'
	});

	// 監視対象の追加
	const elements = document.querySelectorAll('.js-fadeIn');
	for (let i = 0; i < elements.length; i++) {
		observer.observe(elements[i]);
	};

	// 領域内に入ったとき実行する処理
	function showElm(e) {
		e.classList.add('view');
		observer.unobserve(e);
	};
}, false);

gsap.set('.js-hero', {
	y: 10,
	opacity: 0,
});
const fadeInTimeline = gsap.to('.js-hero', {
	y: 0,
	opacity: 1,
	stagger: { each: 0.1 },
	scrollTrigger: {
		trigger: '.js-trigger',
		start: 'top center+=200',
		// 上スクロールで逆再生
		onLeaveBack: function () {
			fadeInTimeline.reverse();
		},
	},
});

gsap.set('.js-scroll', {
	y: 0,
	opacity: 1,
});
const fadeOutScroll = gsap.to('.js-scroll', {
	y: 20,
	opacity: 0,
	scrollTrigger: {
		trigger: '.js-trigger',
		start: 'top center+=200',
		// 上スクロールで逆再生
		onLeaveBack: function () {
			fadeOutScroll.reverse();
		},
	},
});

gsap.fromTo('.js-serviceNav', {
	y: 50,
	opacity: 0,
}, {
	y: 0,
	opacity: 1,
	stagger: { each: 0.1 },
	scrollTrigger: {
		// markers: true,
		trigger: '.service__nav',
		start: 'top center+=100',
	}
});

gsap.fromTo('.js-news', {
	y: 50,
	opacity: 0,
}, {
	y: 0,
	opacity: 1,
	stagger: { each: 0.1 },
	scrollTrigger: {
		trigger: '.news__list',
		start: 'top center+=100',
	},
});

gsap.fromTo('.js-vision', {
	y: 50,
	opacity: 0,
}, {
	y: 0,
	opacity: 1,
	scrollTrigger: {
		trigger: '.vision',
		start: 'top center+=100',
	},
});

gsap.fromTo('.js-value', {
	y: 50,
	opacity: 0,
}, {
	y: 0,
	opacity: 1,
	stagger: { each: 0.1 },
	scrollTrigger: {
		trigger: '.value',
		start: 'top center+=100',
	},
});

/* --------------------------------
*  Unify Width
* -------------------------------- */
function unifyWidth(elements) {
	let maxWidth = 0;
	elements.forEach(function (element) {
		const width = element.offsetWidth;
		if (width > maxWidth) {
			maxWidth = width;
		};
	});

	elements.forEach(function (element) {
		element.style.width = `${maxWidth}px`;
	});
};

window.addEventListener('load', function () {
	const unifyElements = document.querySelectorAll('.js-unify');
	unifyWidth(unifyElements);

	const timeElements = document.querySelectorAll('time');
	unifyWidth(timeElements);
});

/* --------------------------------
*  Service Toggle
* -------------------------------- */
const serviceNav = document.querySelectorAll('.js-serviceNav');
const serviceElements = document.querySelectorAll('.js-serviceImg, .js-serviceContent');

serviceNav.forEach(nav => {
	nav.addEventListener('click', function () {
		const target = this.getAttribute('data-target');

		serviceNav.forEach(navItem => navItem.classList.toggle('active', navItem === nav));
		serviceElements.forEach(element => element.classList.toggle('active', element.classList.contains(target)));
	});
});

/* --------------------------------
*  Side Nav Current
* -------------------------------- */
const sections = document.querySelectorAll(".js-sideSection");
const contentsList = document.querySelector(".js-sideNav");

const sectionsArray = Array.from(sections);

// IntersectionObserverの作成
const options = {
	root: null,
	rootMargin: "-40% 0px -60% 0%",
	threshold: 0,
};
const observer = new IntersectionObserver(callback, options);

// 対象を監視
sections.forEach((section) => {
	observer.observe(section);
});

// コールバック
function callback(entries, observer) {
	entries.forEach((entry) => {
		const indexList = sectionsArray.indexOf(entry.target);
		const currentList = document.querySelector(".js-sideNavItem.current");
		if (entry.isIntersecting) {
			if (currentList !== null) {
				currentList.classList.remove("current");
			};
			contentsList.children[indexList].classList.add("current");
		} else {
			if (indexList === 0) {
				if (currentList !== null) {
					currentList.classList.remove("current");
				};
			};
		};
	});
};
