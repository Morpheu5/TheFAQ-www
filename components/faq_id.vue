<template>
  <b-container>
    <b-row class="mt-md-5 mt-3">
      <b-col md="8" offset-md="2">
        <div v-if="Array.isArray(data)">
          <div v-for="c in data" :key="c.id" v-html="$md.render(c.content || '')" />
        </div>
        <div v-else v-html="$md.render(data.content || '')" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  async asyncData ({ app, params }) {
    const { data } = await app.$axios.get('/faq/' + (params.pathMatch || ''))
    return { data }
  }
}
</script>
