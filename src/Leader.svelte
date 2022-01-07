<script>
    import gsap from "gsap"
    import ScrollTrigger from 'gsap/ScrollTrigger';
    import createTimeline from "./components/timeline";
    import { onMount } from "svelte";
    
    import Section from "./components/Section.svelte"

    let title = 'Leader';

    onMount(() => {
        const sectionTitle = document.querySelector(`.${title.toLowerCase()}-section .content-section__title`)

        const tlTitleIn = createTimeline({
            trigger: `.${title.toLowerCase()}-section`, 
            tl_padding: 800, 
            pin: false,
            start: "top 25%",
        })
        const tl = createTimeline({
            
            trigger: `.${title.toLowerCase()}-section`, 
            tl_padding: 4000, 
        })

        tlTitleIn.to(sectionTitle, {autoAlpha: 1, y:"-20%"})
        tlTitleIn.set(sectionTitle, {opacity: 1})
        
        const targets = gsap.utils.toArray(`.${title.toLowerCase()}-section .content-section__text > *`);
        const revenueGraph = targets.splice(2)
        targets.forEach(element => {
            // add animations and labels to the timeline
            tl.from(element, {autoAlpha: 0, y:"20%", duration: 1})
            tl.to(element, {autoAlpha: 1, duration: 4})
            tl.to(element, {autoAlpha: 0, y:"-10%", duration: 1})
        })
        
        tl.from(revenueGraph, {autoAlpha: 0, y:"20%", duration: 1})
        tl.to(revenueGraph, {autoAlpha: 1, duration: 1})
        tl.from(".revenue-graph__small-bar img", {y:100, duration: 2, delay: 3})
        tl.from(".revenue-graph__tall-bar img", {y:300, duration: 2,})
        tl.to(revenueGraph, {autoAlpha: 1, duration: 1})
        tl.to(revenueGraph, {autoAlpha: 0, y:"-10%", duration: 1})
        
        tl.from(sectionTitle, {opacity: 1, duration: 1})
        tl.to(sectionTitle, {opacity: 0, y:"-20%", duration: 2})

    })
</script>

<Section title={title}>
    <div>
        Currently, I am the lead manager of 
        <span class="highlight-text">
            Online Hearing
        </span>
        , a nationwide online, e-commerce hearing aid retailer. 
    </div>

    <div>
        Under my leadership, I have managed to grow the business into a 
        <span class="highlight-text">
            multi-million dollar leader
        </span>
         in the online hearing aid industry and lead a team of 30+ Audiologist and Hearing Aid Specialist to help thousands of patients across the nation.
    </div>

    <div class="revenue-graph">
        <div class="revenue-graph__text">
            <div class="revenue-graph__percentage-text">
                <span class="highlight-text">
                    300%
                </span>
                <img src="images/UpArrow.svg" alt="Increase">
            </div>
            <div class="revenue-graph__revenue-text">
                Revenue
            </div>
            <div class="revenue-graph__desc-text">
                Within the First Year of Management
            </div>
        </div>
        <div class="revenue-graph__small-bar">
            <img src="images/SmallBar.svg" alt="">
        </div>
        <div class="revenue-graph__tall-bar">
            <img src="images/TallBar.svg" alt="">
        </div>
    </div>
        

</Section>

<style lang="scss">
    div.revenue-graph {
        position: relative;
        height: 100%;
        
        &__text {
            position: relative;
            height: 100%;
            @apply top-2/12 xs:top-1/12 lg:top-0 z-10;
            &>* {
                font-size: clamp(4rem, 5vw + 1rem, 6rem) !important;
                line-height: 1;
                position: relative;
    
            }
        }

        &__percentage-text {
            
            white-space: nowrap;
            left: clamp(0rem, 10% - 2rem, 10%);
            img {
                display: inline;
                height: clamp(3rem, 5vw + .5rem, 5rem);
                vertical-align: baseline;
                animation: pulsate 1s ease-in-out 500ms infinite alternate;
            }
        }
        
        &__revenue-text {
            white-space: nowrap;
            left: clamp(0.25rem, 15% - 2rem, 15%);
            @apply text-gray-300;
        }
        
        &__desc-text {
            font-size: clamp(1.75rem, 3vw + 1rem, 3rem) !important;
            font-weight: 300;
            max-width: 40rem;
            left: clamp(0.5rem, 20% - 2rem, 20%);
        }

        &__small-bar {
            position: absolute;
            height: 150px;
            @apply top-4/12 xs:top-4/12 lg:top-4/12 right-4/12 md:right-4/12 lg:right-3/12 z-0;
            overflow: hidden;

            img {
                height: 100%;
            }
        }
        
        &__tall-bar {
            position: absolute;
            height: 350px;
            right:20%;
            @apply top-1/12 md:top-1/12 right-0 md:right-2/12 lg:right-2/12 z-0;
            overflow: hidden;

            img {
                height: 100%;
            }
        }
    }

    @keyframes pulsate {
        100% {transform: translateY(-10%);}
    }
</style>