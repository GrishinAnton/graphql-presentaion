<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Catalog from '@/components/catalog/Catalog.vue'

export default {
  components: {
    Catalog
  }
}
</script>