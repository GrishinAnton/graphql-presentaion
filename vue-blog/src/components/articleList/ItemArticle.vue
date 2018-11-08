<template>
    <article class="article">
        <div class="article-image">
            <img :src="data.imgUrl" alt="Eye">
        </div>
        <div class="article-content">
            <h2 class="article-title">
                <router-link :to="{ name: 'article', params: { id: data.id } }">{{ data.title }}</router-link>
            </h2>
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
