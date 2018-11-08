<template>
    <el-container>
        <el-header>

        <logo />

        </el-header>
        <el-container>
        <el-aside width="200px">
            <mnu></mnu>
        </el-aside>
        <el-main>
            <article class="article-post">
                <div class="article-post-image">
                    <img :src="data.imgUrl" alt="Eye">
                </div>
                <div class="article-post-content">
                    <h2 class="article-title"><a :href="data.link">{{ data.title }}</a></h2>
                    <p class="aarticle-description">{{ data.description }}</p>
                </div>
            </article>

        </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import logo from '@/components/logo/Logo.vue'
    import mnu from '@/components/menu/Menu.vue'
    export default {
        components:{
            logo,
            mnu
        },
        data() {
            return {
                data: 
                    {   
                        id: '1',
                        imgUrl: '/img/photo-eye.jpeg',
                        title: 'История об одном глазе и 20 операциях (не читать впечатлительным) или он хотел быть летчиком, а его не пускали в небо',
                        description: 'Как вы думаете, сколько операций можно сделать на одном глазу? Клинический случай одного из моих пациентов подтверждает, что более 20 операций разного рода – не предел. Хотя, вне сомнения, этот случай – рекорд для России и мировой офтальмологии.Как вы думаете, сколько операций можно сделать на одном глазу? Клинический случай одного из моих пациентов подтверждает, что более 20 операций разного рода – не предел. Хотя, вне сомнения, этот случай – рекорд для России и мировой офтальмологии.Как вы думаете, сколько операций можно сделать на одном глазу? Клинический случай одного из моих пациентов подтверждает, что более 20 операций разного рода – не предел. Хотя, вне сомнения, этот случай – рекорд для России и мировой офтальмологии.'
                    }
                
            }
        }
    }
</script>