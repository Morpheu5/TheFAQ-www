<template>
  <div>
    <b-input-group>
      <b-input v-model="query" @keyup.enter="search" placeholder="e.g., Hitchen's razor ⏎" />
      <b-input-group-append>
        <b-button @click="search" variant="primary">
          Search
        </b-button>
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
  mounted() {
    if (this.initialQuery !== '') {
      this.query = this.initialQuery
      this.search()
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
