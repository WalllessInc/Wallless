/* --------------------------------
*  Vue Application
* -------------------------------- */
import { createApp, defineComponent } from 'https://unpkg.com/vue@3.2.4/dist/vue.esm-browser.prod.js';

const Header = defineComponent({
	template: `
    <header class="header" id="header">
			<h1 class="header__logo">
				<a href="index.html">
					<img src="assets/images/logo.svg" alt="ロゴ">
				</a>
			</h1>

			<nav class="header__nav">
				<ul class="header__nav__list">
					<li>
						<a href="about.html">About</a>
					</li>

					<li>
						<a href="service.html">Service</a>
					</li>

					<li>
						<a href="works.html">Works</a>
					</li>

					<li>
						<a href="news.html">News</a>
					</li>

					<li class="header__nav__list__btn">
						<a href="#">
							<span>Contact</span>
						</a>
					</li>
				</ul>
			</nav>
		</header>
      `
});

const Contact = defineComponent({
	template: `
		<section>
			<a href="#" class="contact">
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
      `
});

const Footer = defineComponent({
	template: `
		<footer class="footer">
			<a href="index.html" class="footer__logo">
				<img src="assets/images/logo.svg" alt="ロゴ">
			</a>

			<a href="https://twitter.com/wallless_yuki" target="_blank" class="footer__sns">
				<img src="assets/images/icon_twitter.svg" alt="">
			</a>

			<nav class="footer__nav">
				<ul class="footer__nav__list">
					<li>
						<a href="about.html">About</a>
					</li>

					<li>
						<a href="service.html">Service</a>
					</li>

					<li>
						<a href="works.html">Works</a>
					</li>

					<li>
						<a href="news.html">News</a>
					</li>

					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</nav>

			<p class="footer__copyright"><small>&copy;2023 Wallless.inc</small></p>
		</footer>
      `
});

const Service = defineComponent({
	template: `
					<div class="service__content__inner js-serviceContent"
					v-for="(item, index) in items" :key="index" :id="item.id" :class="item.class">
						<img class="service__content__inner__img" :src="item.imageSrc" :alt="item.titleEn">
						<h3 class="service__content__inner__title">
							<span class="service__content__inner__title__jp">
								{{ item.titleJp }}
							</span>
							<span class="service__content__inner__title__en">
								{{ item.titleEn }}
							</span>
						</h3>
						<p class="service__content__inner__text"  v-html="item.text">
						</p>
					</div>
      `,
	data() {
		return {
			items: [
				{
					id: "graphic",
					class: "view",
					imageSrc: "assets/images/service_movie.webp",
					titleJp: "グラフィック制作",
					titleEn: "Graphic",
					text: "クライアントのご要望に沿った制作物をご用意しております。<br>「こんなものほしいんだけど…」とお気軽にお問い合わせください。"
				},
				{
					id: "web",
					imageSrc: "assets/images/service_movie.webp",
					titleJp: "Web制作",
					titleEn: "Web",
					text: "クライアントに合わせたオーダーメイドのWebサイトを制作いたします。<br>ウェブアクセシビリティやSEOに配慮したサイトづくりを心がけています。"
				},
				{
					id: "movie",
					imageSrc: "assets/images/service_movie.webp",
					titleJp: "動画制作",
					titleEn: "Movie",
					text: "PVからSNS用の動画に至るまで一貫して制作いたします。<br>動画を通して分かりやすく明確に表現し、効果的に訴求いたします。"
				},
				{
					id: "photograph",
					imageSrc: "assets/images/service_movie.webp",
					titleJp: "写真・動画撮影",
					titleEn: "Photograph",
					text: "物撮り・イベント撮影などオールジャンル撮影可能。<br>カメラジンバル・ドローン等もございますので、空撮からシネマティック撮影までお任せください。"
				},
			],
		}
	},
});

const News = defineComponent({
	template: `
        <ul>
				<li v-for="item in items">
					{{ item.title }}-{{ item.price }}
				</li>
			</ul>
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
app.component('the-contact', Contact);
app.component('the-footer', Footer);
app.component('the-service', Service);
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


/* --------------------------------
*  Lower Content
* -------------------------------- */
$(function () {
	const headerHeight = $('#header').innerHeight()
	$('#main').css('margin-top', headerHeight);
});


/* --------------------------------
*  Scroll Toggle Animation
* -------------------------------- */
gsap.set('.js-hero', {
	opacity: 0,
	y: 10,
});
const fadeInTimeline = gsap.to('.js-hero', {
	opacity: 1,
	y: 0,
	stagger: {
		each: 0.1,
	},
	scrollTrigger: {
		trigger: '.js-trigger',
		start: 'top center+=200',
		// markers: true,
		onLeaveBack: function () {
			fadeInTimeline.reverse();
		},
	},
});

gsap.set('.js-scroll', {
	opacity: 1,
	y: 0,
});
const fadeOutScroll = gsap.to('.js-scroll', {
	opacity: 0,
	y: 20,
	scrollTrigger: {
		trigger: '.js-trigger',
		start: 'top center+=200',
		onLeaveBack: function () {
			fadeOutScroll.reverse();
		},
	},
});


/* --------------------------------
*  Service Toggle
* -------------------------------- */
$('.js-serviceNav').on('click', function () {
	$('.js-serviceNav, .js-serviceContent').removeClass('view');
	const target = $(this).data('target');
	$(this).addClass('view');
	$('#' + target).addClass('view');
});
