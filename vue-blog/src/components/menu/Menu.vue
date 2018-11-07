<template>
    <ul>
        <li v-for="(item, index) in data" :key="index"><a :href="item.link">{{ item.title }}</a></li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            data: [
                {
                    link: '#',
                    title: 'Новости'
                },
                {
                    link: '#',
                    title: 'Статьи'
                },
                {
                    link: '#',
                    title: 'Впечатления'
                },
                {
                    link: '#',
                    title: 'События'
                },
                {
                    link: '#',
                    title: 'Истории'
                },
            ]
        }
    }

}
</script>