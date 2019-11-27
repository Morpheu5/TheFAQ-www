<template>
  <b-container>
    <b-row class="mt-md-5 mt-3">
      <b-col md="8" offset-md="2">
        <div v-if="Array.isArray(data)">
          <b-row v-for="content in data" :key="content.id">
            <b-col>
              <b-card class="mb-3">
                <b-card-title>
                  <a :href="`/faq/${content['id']}`">{{ content['title'] }}</a>
                </b-card-title>
                <b-card-text>
                  <div v-html="$md.render(content['summary'])" class="mt-3" />
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </div>
        <div v-else>
          <div v-html="$md.render(data.content || '')" />
          <div v-if="data.subdocs">
            <b-row v-for="content in data.subdocs" :key="content.id">
              <b-col>
                <b-card class="mb-3">
                  <b-card-title>
                    <a :href="`/faq/${content['id']}`">{{ content['title'] }}</a>
                  </b-card-title>
                  <b-card-text>
                    <div v-html="$md.render(content['summary'])" class="mt-3" />
                  </b-card-text>
                </b-card>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Trie from 'mnemonist/trie'

export default {
  head() {
    return {
      title: this.pageTitle,
      meta: [
        { hid: 'twitter:description', name: 'twitter:description', content: this.data.summary || '' },
        { hid: 'og:description', name: 'og:description', content: this.data.summary || '' },
        { hid: 'description', name: 'description', content: this.data.summary || '' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.pageTitle },
        { hid: 'og:title', name: 'og:title', content: this.pageTitle }
      ]
    }
  },
  computed: {
    pageTitle() {
      if (Array.isArray(this.data)) {
        const trie = Trie.from(this.data.map(e => e.id))
        let longestCommonPrefix = ''
        let node = trie.root
        while (Object.keys(node).length === 1) {
          longestCommonPrefix += Object.keys(node)[0]
          node = node[Object.keys(node)[0]]
        }
        return longestCommonPrefix.split('/').slice(0, -1).join(' » ') + ' | TheFAQ'
      } else {
        return this.data.title + ' | TheFAQ'
      }
    }
  },
  async asyncData ({ app, params }) {
    const { data } = await app.$axios.get('/faq/' + (params.pathMatch || ''))
    return { data }
  },
  created() {
    if (Array.isArray(this.data) && this.data.length === 1) {
      this.$router.push('/faq/' + this.data[0].id)
    }
  }
}
</script>
