<script>
    export let title
</script>

<section class="content-section {`${title.toLowerCase()}-section`} h-screen w-full px-8 sm:px-20 xl:px-0 py-8 relative">
    <h2 class="content-section__title">{title}</h2>
    <div class="content-section__text relative w-full mt-8">
        <slot></slot>
    </div>
</section>

<style lang="scss">

    .content-section__title {
        font-size: clamp(3rem, 4vw + 2.5rem, 7rem);
        color: hsl(0, 0%, 90%);
        font-weight: 100;
        opacity: 1;
    }

    .content-section :global(p) {
        color: white;
        font-size: clamp(1.5rem, 3vw + 1.25rem, 3rem);
        position: absolute;
        top: 0;
        left: 0;
    }

</style>