Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr",{videos:["./cubvi1.mp4"]});

gsap.to(".fleftelm",{
    scrollTrigger:{
        trigger:"#fimages",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub :1
    },
    y:"-300%",
    ease:Power1
})


Shery.hoverWithMediaCircle(".images",{videos:["./cubvi1.mp4"]});
Shery.makeMagnet(".btn");
Shery.makeMagnet(".wri");
Shery.makeMagnet("#dev");
Shery.makeMagnet(".fheading");


Shery.hoverWithMediaCircle("#homelast",{videos:["./cubvi1.mp4"]});

Shery.hoverWithMediaCircle("#slides",{videos:["./cubvi1.mp4"]});
