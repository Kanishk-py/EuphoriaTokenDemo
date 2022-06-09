gsap.registerPlugin(ScrollTrigger);
// console.log(window.screen.width > 800);
if (window.screen.width > 800) {
	let tl = gsap.timeline();

	tl.from(".logo", { opacity: 0, scale: 0, rotation: 360, ease: "back", duration: 2 });
	// tl.from(".homeSideImg", { opacity: 0, y: 50, ease: "power1.out", duration: 1 });
	tl.to(".logo", {
		y: 10,
		yoyo: true,
		ease: "power1.inOut",
		repeat: -1,
	});

	tl.fromTo(
		".logo",
		{ x: 0, rotation: 0 },
		{
			scrollTrigger: {
				trigger: ".about",
				scrub: 1,
				// markers: true,
				end: "20% center",
			},
			x: 500,
			rotation: 120,
		}
	);

	tl.fromTo(
		".logo",
		{ x: 500, rotation: 120 },
		{
			scrollTrigger: {
				trigger: ".about",
				scrub: 1,
				// markers: true,
				start: "65% center",
				end: "150% center",
			},
			x: -500,
			rotation: 0,
		}
	);

	tl.fromTo(
		".logo",
		{ x: -500, rotation: 0 },
		{
			scrollTrigger: {
				trigger: ".roadmap",
				scrub: 1,
				// markers: true,
				start: "65% center",
				end: "100% center",
			},
			x: 0,
			rotation: 120,
		}
	);

	tl.fromTo(
		".logo",
		{ scale: 1, x: 0 },
		{
			scrollTrigger: {
				trigger: ".tokenomics",
				scrub: 1,
				// markers: true,
				start: "top center",
				end: "90% center",
			},
			scale: 1.3,
			repeat: 1,
			yoyo: true,
		}
	);

	tl.fromTo(
		".logo",
		{ rotation: 120 },
		{
			scrollTrigger: {
				trigger: ".footer",
				scrub: 1,
				// markers: true,
				start: "top center",
				end: "center center",
			},
			x: -170,
			rotation: 0,
		}
	);

	gsap.to(".tokenomics .head", {
		scrollTrigger: {
			trigger: ".tokenomics",
			scrub: 1,
			// markers: true,
			start: "10% bottom",
			end: "10% center",
		},
		width: "100%",
		padding: "30px 0",
	});
}
gsap.from(".about", {
	scrollTrigger: {
		trigger: ".about",
		// markers: true,
		start: "top center",
	},
	y: 50,
	opacity: 0,
});

gsap.from(".phase1, .phase2 ", {
	scrollTrigger: {
		trigger: ".roadmap",
		// markers: true,
		start: "top center",
	},
	y: 50,
	opacity: 0,
});

gsap.from(".cont1, .cont2 ", {
	scrollTrigger: {
		trigger: ".tokenomics",
		// markers: true,
		start: "top center",
	},
	y: 50,
	opacity: 0,
});

gsap.to("#img1", {
	scrollTrigger: {
		trigger: ".about",
		scrub: true,
		// markers: true,
		start: "center bottom",
		end: "bottom center",
	},
	clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
});

// gsap.to("#img2", {
// 	scrollTrigger: {
// 		trigger: ".tokenomics",
// 		scrub: true,
// 		markers: true,
// 		start: "top bottom",
// 		end: "center center",
// 	},
// 	clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
// 	// clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
// });

// gsap.to("#img3", {
// 	scrollTrigger: {
// 		trigger: ".footer",
// 		scrub: true,
// 		markers: true,
// 		start: "top bottom",
// 		end: "center center",
// 	},
// 	clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
// 	// clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
// });
