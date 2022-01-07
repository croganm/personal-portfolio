import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function createTimeline(object) {
    var defaultParams = {
        trigger: object.trigger,
        tl_padding: object.tl_padding || 2000,
        pin: object.pin || true,
        start: object.start || "top top",
        markers: object.markers || false,
    }
    gsap.registerPlugin(ScrollTrigger)

    let tl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
            trigger: defaultParams.trigger,
            pin: defaultParams.pin,   // pin the trigger element while active
            start: defaultParams.start, // when the top of the trigger hits the top of the viewport
            end: `+=${defaultParams.tl_padding}`, // end after scrolling 1000px beyond the start
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            markers: defaultParams.markers,
        }
    });

    return tl
}
