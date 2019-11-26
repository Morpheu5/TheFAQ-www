<template>
  <div class="default layout">
    <SiteHeader />
    <nuxt />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader'

export default {
  components: {
    SiteHeader
  }
}
</script>
