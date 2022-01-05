<script>
    import gsap from "gsap"
    import ScrollTrigger from 'gsap/ScrollTrigger';
    import createTimeline from "./components/timeline";
    import { onMount } from "svelte";
    
    import Section from "./components/Section.svelte"

    let title = 'Leader';

    onMount(() => {

        let tlTitleIn = createTimeline({
            trigger: `.${title.toLowerCase()}-section`, 
            tl_padding: 200, 
            pin: false,
            start: "top 10%"
        })
        let tlTitleOut = createTimeline({
            trigger: `.${title.toLowerCase()}-section`, 
            tl_padding: 200, 
            pin: false,
            start: "bottom bottom"
        })
        let tl = createTimeline({
            trigger: `.${title.toLowerCase()}-section`, 
            tl_padding: 3000, 
        })

        tlTitleIn.to(`.${title.toLowerCase()}-section .content-section__title`, {autoAlpha: 1, y:"-20%"})
        
        let targets = gsap.utils.toArray(`.${title.toLowerCase()}-section .content-section__text > *`);
        targets.forEach(element => {
            // add animations and labels to the timeline
            tl.from(element, {autoAlpha: 0, y:"20%"})
            tl.to(element, {autoAlpha: 0, y:"-10%"})
        })

        tlTitleOut.to(`.${title.toLowerCase()}-section .content-section__title`, {autoAlpha: 0, y:"-10%"})
    })
</script>

<Section title={title}>
    <p>
        Currently, I am the lead manager of 
        <span class="highlight-text">
            Online Hearing
        </span>
        , a nationwide online, e-commerce hearing aid retailer. 
    </p>

    <p>
        Under my leadership, I have managed to grow the business into a 
        <span class="highlight-text">
            multi-million dollar leader
        </span>
         in the online hearing aid industry and lead a team of 30+ Audiologist and Hearing Aid Specialist to help thousands of patients across the nation.
    </p>
</Section>