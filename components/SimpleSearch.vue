<template>
  <div>
    <b-input-group>
      <b-input v-model="query" placeholder="e.g., Hitchen's razor ⏎" @keyup.enter="search" />
      <b-input-group-append>
        <b-button variant="primary" @click="search">Search</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  props: {
    initialQuery: {
      type: String,
      default: ''
    }
  },
  mounted() {
    if (this.initialQuery !== '') {
      this.query = this.initialQuery
      this.search()
    }
  },
  data() {
    return {
      query: '',
      searching: false,
      results: []
    }
  },
  watch: {
    results() {
      this.$emit('input', this.results)
    }
  },
  methods: {
    search() {
      this.searching = true

      this.$axios
        .get('/search', { params: { q: this.query } })
        .then((response) => {
          this.results = response.data
          this.searching = false
        })
    }
  }
}
</script>
