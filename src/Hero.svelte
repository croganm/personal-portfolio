<script>
    let imgWidth;
    let sectionWidth;
    let textWidth = sectionWidth-imgWidth
</script>

<section class="hero w-screen h-screen bg-neutral-800 text-white relative" bind:clientWidth={sectionWidth}>
    <div class="hero__content">
        <h2>Mathew</h2>
        <h1>Crogan</h1>
        <h4>Leader - Marketer - Developer</h4>
    </div>
    <div class="hero__img__container" bind:clientWidth={imgWidth}>
        <img src="images/Profile Pic.png" alt="" class="hero__img">
    </div>
        
</section>

<style lang="scss">
    section {
        padding: 0 5rem;
    }

    .hero__content {
        width: 60%;
        display: flex;
        flex-direction: column;
        &>* {
            display: inline-block;
        }
        h2 {
            font-size: 4vw;
            font-weight: 700;
        }
        h1 {
            font-size: 8vw;
            font-weight: 300;
        }
    }
    
    
    .hero__img__container {
        position: absolute;
        right: 0;
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
            height: 100%;
            z-index: -1;
        }

        @media (max-width:768px) {
            right: -20%;
        }
    }

</style>