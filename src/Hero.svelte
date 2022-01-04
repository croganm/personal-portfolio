<script>
    import { onMount } from 'svelte';

    let imgWidth;
    let sectionWidth;
    let widthDiff = sectionWidth-imgWidth;
    let textWidth = widthDiff ? `${widthDiff}px` : "60%";

    $: {
        console.log(imgWidth);
        console.log(sectionWidth);
        console.log(sectionWidth-imgWidth)
        console.log(textWidth);
    }

</script>

<section class="hero w-full h-screen bg-neutral-800 text-white relative overflow-x-hidden" bind:clientWidth={sectionWidth}>
    <div class="hero__content flex flex-col z-50" style="width: {textWidth};">
        <h2>Mathew</h2>
        <h1>Crogan</h1>
        <h4>Leader - Marketer - Developer</h4>
    </div>
    <div class="hero__img__container" bind:clientWidth={imgWidth}>
        <img src="images/Profile Pic.png" alt="" class="hero__img object-cover" width="3024" height="4023">
    </div>
        
</section>

<style lang="scss">

    .hero__content {
        position: absolute;
        top: 20%;
        left: 20%;
        &>* {
            display: inline-block;
            line-height: 1;
        }
        h2 {
            font-size: 4vw;
            font-weight: 700;
        }
        h1 {
            font-size: 8vw;
            font-weight: 300;
            margin-bottom: .3em;
        }
        h4 {
            font-size: 3vw;
            font-weight: 700;
            margin-bottom: .3em;
        }
    }
    
    
    .hero__img__container {
        position: absolute;
        right: 0%;
        top: 0;
        height: 100%;
        &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            background: linear-gradient(180deg, rgba(30, 30, 30, 0) 20.31%, theme('colors.neutral.800') 79.69%);
            z-index: 5;
        }
        .hero__img{
            max-height: 100%;
            z-index: -1;
        }

        @media (max-width:768px) {
            transform: translateX(30%);
        }
        
        @media (max-width:480px) {
            transform: translateX(30%);
        }
    }

</style>