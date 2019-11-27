<template>
  <b-container>
    <b-row class="mt-5">
      <b-col class="mt-md-5" md="8" offset-md="2">
        <SimpleSearch v-model="results" :initialQuery="pageQuery" />
      </b-col>
    </b-row>
    <div v-if="results.length" class="mt-3">
      <b-row v-for="result in results" :key="result.id">
        <b-col md="8" offset-md="2">
          <b-card class="mb-3">
            <b-card-title>
              <a :href="`/faq/${result['id']}`">{{ result['title'] }}</a>
            </b-card-title>
            <b-card-text>
              <div v-html="$md.render(result['summary'])" class="mt-3" />
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import SimpleSearch from '@/components/SimpleSearch'

export default {
  components: {
    SimpleSearch
  },
  data() {
    return {
      results: [],
      pageQuery: ''
    }
  },
  created() {
    if (this.$route.query.q) {
      this.pageQuery = this.$route.query.q
    }
  }
}
</script>
