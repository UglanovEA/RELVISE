/*=============== VIDEO YOUTUBE ===============*/

function findVideos() {
	let videos = document.querySelectorAll(".who__video");
	for (let i = 0; i < videos.length; i++) {
		setupVideo(videos[i]);
	}
}

function setupVideo(video) {
	let link = video.querySelector(".video__link");
	let media = video.querySelector(".video__media");
	let button = video.querySelector(".video__button");
	let id = parseMediaURL(media);
	video.addEventListener("click", () => {
		let iframe = createIframe(id);
		link.remove();
		button.remove();
		video.appendChild(iframe);
	});
	link.removeAttribute("href");
	video.classList.add("video--enabled");
}

function parseMediaURL(media) {
	let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
	let url = media.src;
	let match = url.match(regexp);
	return match[1];
}

function createIframe(id) {
	let iframe = document.createElement("iframe");
	iframe.setAttribute("allowfullscreen", "");
	iframe.setAttribute("allow", "autoplay");
	iframe.setAttribute("src", generateURL(id));
	iframe.classList.add("video__media");
	return iframe;
}

function generateURL(id) {
	let query = "?rel=0&showinfo=0&autoplay=1";
	return "https://www.youtube.com/embed/" + id + query;
}

findVideos();

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	origin: "top",
	distance: "60px",
	duration: 1500,
	delay: 100,
	// reset: true
});

sr.reveal(`.main-block__title, .header-block__title`);

sr.reveal(`.main-block__image, .header__logo `, { distance: "0px", opacity: 0, duration: 2500 });

sr.reveal(`.main-block__text, .header-block__subtitle`, { delay: 200 });
sr.reveal(`.subscribe__body`, { origin: "left", delay: 200 });

sr.reveal(`.who__video, .contactus__content, .footer__copy`, { origin: "left", delay: 300 });
sr.reveal(`.who__title, .contactus__button, .footer__social`, { origin: "right", delay: 300 });
sr.reveal(`.who__text`, { origin: "right", delay: 400 });
sr.reveal(`.who__item`, { origin: "right", delay: 500, interval: 200 });

sr.reveal(`.main-block__button`, { origin: "bottom", delay: 300, interval: 100 });

sr.reveal(`.menu__link`, { origin: "left", delay: 300, interval: 100 });

sr.reveal(`.services__column, .advantages__column, .practice__column, .clients__item, .getintouch__item, .footer__column`, {
	origin: "bottom",
	distance: "70px",
	delay: 400,
	interval: 150,
});
