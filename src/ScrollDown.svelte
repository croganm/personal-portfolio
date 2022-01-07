<script>
    import gsap from "gsap"
    import ScrollTrigger from 'gsap/ScrollTrigger';
    import createTimeline from "./components/timeline";
    import { onMount } from "svelte";

    onMount(() => { 
        let tl = createTimeline({
            trigger: ".scroll-down", 
            tl_padding: 1, 
            pin: true,
            start: "top top",
        })

        tl.to(".scroll-down__animation", {autoAlpha: 0})
    })
</script>
<div class="scroll-down h-screen w-full">
    <div class="scroll-down__animation h-full w-full flex flex-col justify-center items-center text-white text-center">
        <h1>Allow Me to Introduce Myself</h1>
        <img src="images/chevron-down.svg" alt="">
        <p>(Scroll Down)</p>
    </div>
</div>
<style lang="scss">
    h1 {
        font-size: clamp(3rem, 5vw + 1rem, 5rem);
        font-weight: 100;
    }
    
    img {
        height: 15%;
        animation: pulsate 1s ease-in-out 500ms infinite alternate;
    }
    
    p {
        opacity: 0;
        font-size: clamp(2rem, 3vw + 1rem, 3.5rem);
        animation: fade-in 500ms ease-in-out 3s 1 normal forwards;
    }

    @keyframes fade-in {
        100% {opacity: 1;}
    }

    @keyframes pulsate {
        100% {transform: translateY(10%);}
    }
</style>