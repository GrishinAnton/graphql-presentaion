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

        <itemsArticle></itemsArticle> 

        <section class="pagination">

          <!-- <el-pagination
            background
            layout="prev, pager, next"
            :page-size="1"
            :total="2">
          </el-pagination>		   -->
        </section>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import logo from '@/components/logo/Logo.vue'
import itemsArticle from '@/components/articleList/ItemsArticle.vue'
import mnu from '@/components/menu/Menu.vue'

export default {
  components: {
    logo,
    itemsArticle,
    mnu
  }
}
</script>