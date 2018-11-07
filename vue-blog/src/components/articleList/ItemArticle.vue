<template>
    <article class="article">
        <div class="article-image">
            <img :src="data.imgUrl" alt="Eye">
        </div>
        <div class="article-content">
            <h2 class="article-title"><a :href="data.link">{{ data.title }}</a></h2>
            <p class="aarticle-description">{{ data.description }}</p>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }

}
</script>

<style>

</style>
