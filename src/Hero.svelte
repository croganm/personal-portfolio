<script>
    import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';
    import createTimeline from './components/timeline';
    import { onMount } from 'svelte';

    onMount(() => {
		gsap.registerPlugin(ScrollTrigger)
        let timelines = []
        
        let targets = gsap.utils.toArray(".hero__content>*");
        
        // INITAL FADE IN OF ELEMENTS AND INITILIZATION OF TIMELINE
        targets.forEach((element, index) => {
            let tl = createTimeline({
                trigger: ".hero",
                tl_padding: "2000",
                start: "top top",
            })
            timelines.push(tl)
            // add animations and labels to the timeline
            tl.to(element, {autoAlpha: 1, y:"-20%", duration: 5, delay:index})
        })

        // CREATE FALSE PALSE
        targets.forEach((element, index) => {
            let tl = timelines[index]
            // add animations and labels to the timeline
            tl.to(element, {autoAlpha: 1, duration: 3})
        })

        //FADEOUT
        targets.forEach((element, index) => {
            let tl = timelines[index]
            // add animations and labels to the timeline
            tl.to(element, {autoAlpha: 0, y:"-10%", duration: 5, delay: index*1.5})
        })
    });
</script>

<section class="hero w-full h-screen text-white relative">
    <div class="hero__content flex flex-col z-50">
        <h2>Mathew</h2>
        <h1>Crogan</h1>
        <h4>Leader - Marketer - Developer</h4>
    </div>
    <div class="hero__img__container overflow-x-clip xl:overflow-visible">
        <img src="images/Profile Pic.png" alt="" class="hero__img">
    </div>
        
</section>

<style lang="scss">

    .hero__content {
        position: relative;
        top: 20%;
        left: 10%;
        width: 60%;
        height: 100%;
        &>* {
            display: inline-block;
            line-height: 1.15;
            visibility: hidden;
        }
        h2 {
            font-size: clamp(2rem, 4vw + 1rem, 3.5rem);
            font-weight: 700;
        }
        h1 {
            font-size: clamp(4rem, 8vw + 1.5rem, 7rem);
            font-weight: 300;
            margin-bottom: .3em;
            position: relative;
            color: theme("colors.lightgreen");
        }
        h4 {
            font-size: clamp(1.45rem, 3vw + 1rem, 2.25rem);
            font-weight: 700;
            margin-bottom: .3em;
        }

        // @media (max-width: theme('screens.md')) {
            
        // }
    }
    
    
    .hero__img__container {
        position: absolute;
        right: -20%;
        top: 0;
        height: 100%;
        .hero__img{
            max-height: 100%;
            z-index: 2;
        }

        @media (max-width:theme('screens.md')) {
            right: -30%;
        }
        
        @media (max-width:theme('screens.sm')) {
            right: -40%;
        }
    }

</style>