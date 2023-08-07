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

						<nav class="header__nav">
							<ul class="header__nav__list">
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

								<li class="header__nav__list__btn">
									<a href="">
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

						<a class="footer__sns" href="https://twitter.com/wallless_yuki" target="_blank">
							<img src="assets/images/icon_twitter.svg" alt="twitter" width="24" height="24">
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
									<a href="">Contact</a>
								</li>
							</ul>
						</nav>

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

						<nav class="header__nav">
							<ul class="header__nav__list">
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

								<li class="header__nav__list__btn">
									<a href="">
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

						<a class="footer__sns" href="https://twitter.com/wallless_yuki" target="_blank">
							<img src="../assets/images/icon_twitter.svg" alt="twitter" width="24" height="24">
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
									<a href="">Contact</a>
								</li>
							</ul>
						</nav>

						<p class="footer__copyright"><small>&copy;2023 Wallless.inc</small></p>
					</footer>
      `
});

const Contact = defineComponent({
	template: `
					<section>
						<div class="stalker"></div>
						<a class="contact" href="">
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
		const mouse = $(".stalker");
		$(document).on("mousemove", (e) => {
			const x = e.clientX;
			const y = e.clientY;
			mouse.css({
				"transform": `translate(${x}px, ${y}px)`,
			});
			$(".contact").on({
				"mouseenter": () => {
					mouse.addClass("js-hover");
				},
				"mouseleave": () => {
					mouse.removeClass("js-hover");
				}
			});
		});
	}
});

const Service = defineComponent({
	template: `
					<div class="service__content js-fadeIn">
						<div class="service__content__inner js-serviceContent"
						v-for="(item, index) in items" :key="index" :id="item.id" :class="item.class">
							<a class="service__content__inner__img js-pageSwitch" :href="item.href">
								<img :src="item.imageSrc" :alt="item.titleEn" width="800" height="296">
							</a>
							<h3 class="service__content__inner__title">
								<span class="service__content__inner__title__jp">
									{{ item.titleJp }}
								</span>
								<span class="service__content__inner__title__en">
									{{ item.titleEn }}
								</span>
							</h3>
							<p class="service__content__inner__text" v-html="item.text"></p>
						</div>
					</div>
      `,
	data() {
		return {
			items: [
				{
					id: "graphic",
					class: "active",
					href: "service.html#graphic",
					imageSrc: "assets/images/service_graphic.webp",
					titleJp: "グラフィック制作",
					titleEn: "Graphic",
					text: "クライアントのご要望に沿った制作物をご用意しております。<br>「こんなものほしいんだけど…」とお気軽にお問い合わせください。"
				},
				{
					id: "web",
					href: "service.html#web",
					imageSrc: "assets/images/service_web.webp",
					titleJp: "Web制作",
					titleEn: "Web",
					text: "クライアントに合わせたオーダーメイドのWebサイトを制作いたします。<br>ウェブアクセシビリティやSEOに配慮したサイトづくりを心がけています。"
				},
				{
					id: "movie",
					href: "service.html#movie",
					imageSrc: "assets/images/service_movie.webp",
					titleJp: "動画制作",
					titleEn: "Movie",
					text: "PVからSNS用の動画に至るまで一貫して制作いたします。<br>動画を通して分かりやすく明確に表現し、効果的に訴求いたします。"
				},
				{
					id: "photograph",
					href: "service.html#photograph",
					imageSrc: "assets/images/service_photograph.webp",
					titleJp: "写真・動画撮影",
					titleEn: "Photograph",
					text: "物撮り・イベント撮影などオールジャンル撮影可能。<br>カメラジンバル・ドローン等もございますので、空撮からシネマティック撮影までお任せください。"
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
							<h3 class="works__grid__content__title">
								{{ item.title }}
							</h3>
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
					href: "works/kinjo.html",
					imageSrc: "assets/images/works/kinjo_pamphlet-01.webp",
					title: "金城学院大学 入学資料",
					category: "Graphic"
				},
				{
					href: "works/rohto.html",
					imageSrc: "assets/images/works/rohto_poster-01.webp",
					title: "ロート製薬 新卒採用ポスター",
					category: "Graphic"
				},
				{
					href: "works/ensupport.html",
					imageSrc: "assets/images/works/seshuraku_branding-01.webp",
					title: "せしゅらく ブランディングツール",
					category: "Graphic / Movie"
				},
				{
					href: "works/tesla_event.html",
					imageSrc: "assets/images/works/tesla_event-01.webp",
					title: "ふれあいテスラ イベントツール",
					category: "Graphic / Web / Movie / Photograph"
				},
				{
					href: "works/polaris.html",
					imageSrc: "assets/images/works/polaris_branding-01.webp",
					title: "ポラリスエクスポート ブランディングツール",
					category: "Graphic / Web"
				},
				{
					href: "works/sarrouel.html",
					imageSrc: "assets/images/works/integral_card-01.webp",
					title: "積分サークル さるえる様 名刺",
					category: "Graphic"
				},
				{
					href: "works/cooonworks.html",
					imageSrc: "assets/images/works/cooonworks_support-01.webp",
					title: "COOON WORKS CFクリエイティブサポート",
					category: "Graphic"
				},
				{
					href: "works/trike.html",
					imageSrc: "assets/images/works/trike_web-01.webp",
					title: "EV-TRIKE ランディングページ",
					category: "Web"
				},
				{
					href: "works/photograph.html",
					imageSrc: "assets/images/works/photograph-01.webp",
					title: "写真・動画撮影",
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
								<time class="news__list__item__date" :datetime="item.dateTime" :style="{ width: calculateTimeWidth(item.date) + 'px' }">
									{{ item.date }}
								</time>
								<p class="news__list__item__category" :style="{ width: calculateCategoryWidth(item.category) + 'px' }">
									{{ item.category }}
								</p>
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
	},
	methods: {
		calculateTimeWidth(date) {
			return this.calculateElementWidth(date);
		},
		calculateCategoryWidth(category) {
			return this.calculateElementWidth(category);
		},
		calculateElementWidth(text) {
			const dummyElement = document.createElement('span');
			dummyElement.innerText = text;
			document.body.appendChild(dummyElement);
			const width = dummyElement.offsetWidth;
			document.body.removeChild(dummyElement);
			return width;
		},
	},
});

const NewsSession01 = defineComponent({
	template: `
					<div>
						<h3 class="newsArticle__subheading">岐阜市初のクリエイティブスクールついに開校！</h3>
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
								専門学校HAL名古屋に入学後、インハウスデザイナーや<br>
								中部圏最大のドラッグストアの販促ポスター、大手製薬メーカーの新卒採用ポスターを手掛ける。<br>
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
							<span>Entry</span>
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
								<a href="" target="_blank">
									<img src="../assets/images/icon_line.svg" alt="line"  width="24" height="24">
								</a>
								<a href="" target="_blank">
									<img src="../assets/images/icon_twitter.svg" alt="twitter" width="24" height="24">
								</a>
							</dd>
						</dl>
					</div>
      `
});

const app = createApp({});
app.component('the-header', Header);
app.component('the-footer', Footer);
app.component('the-lower_header', LowerHeader);
app.component('the-lower_footer', LowerFooter);
app.component('the-contact', Contact);
app.component('app-service', Service);
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
*  Disable Empty a Tags
* -------------------------------- */
$(function () {
	$('a[href=""]').each((i, e) => {
		$(e).on('click', (a) => {
			a.preventDefault();
			alert('リンク先がありません');
		});
	});
});

/* --------------------------------
*  Lower Content
* -------------------------------- */
$(function () {
	const headerHeight = $('.js-header').innerHeight();
	$('.js-main').css('margin-top', headerHeight);
});

/* --------------------------------
*  Hide Header
* -------------------------------- */
$(function () {
	let pastPos = $(window).scrollTop();
	let headerHeight = $('.js-header').innerHeight();

	$(window).on('scroll', function () {
		const scroll = $(window).scrollTop();
		if (scroll > pastPos && scroll > headerHeight) {
			$('.js-header').addClass('hide');
		} else {
			$('.js-header').removeClass('hide');
		}

		pastPos = scroll;
	});
});

/* --------------------------------
*  Page Transition
* -------------------------------- */
$(function () {
	const blindfoldContainer = $('.blindfold');
	const blindfoldItem = $('.blindfold__item');
	gsap.set(blindfoldContainer, { yPercent: 0 });
	gsap.set(blindfoldItem, { scaleY: 0 });

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

	$('.js-pageSwitch').each((i, e) => {
		$(e).on('click', (a) => {
			a.preventDefault();
			const href = $(e).attr('href');
			pageTransitionBefore();
			setTimeout(() => {
				window.location.href = href;
			}, 1200);
		});
	});

	if ($('.js-main').length) {
		pageTransitionAfter();
	}
});

/* --------------------------------
*  Scroll Animation
* -------------------------------- */
$(function () {
	$('.js-fadeIn').on('inview', function () {
		$(this).addClass('view');
	});
});

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
		// markers: true,
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

/* --------------------------------
*  Service Toggle
* -------------------------------- */
$(function () {
	$('.js-serviceNav').on('click', function () {
		const target = $(this).data('target');

		$('.js-serviceNav, .js-serviceContent').removeClass('active');
		$(this).addClass('active');
		$('#' + target).addClass('active');
	});
});
