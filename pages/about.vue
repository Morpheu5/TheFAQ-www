<template>
  <b-container>
    <b-row class="mt-md-5 mt-3 mb-5">
      <b-col md="8" offset-md="2">
        <h2>What TheFAQ is this?</h2>
        <p>
          Have you ever argued with people on the Internet that make outlandish
          and unsubstantiated claims all over the place? We bet you have. We
          know we have!
        </p>
        <p>
          Just as we know you have disproven their claims with very detailed
          links to reputable sources of information, only to be told TL;DR.
        </p>
        <p>
          If only there was a handy collection of factual information suitable
          for people with the attention span of a fruit fly, yet rigorously
          referenced so that these Internet people don't have any more excuses!
          Perhaps a sort of FAQ, right?
        </p>
        <p>Well, this is TheFAQ.</p>

        <h3>Sold. How do I use this?</h3>
        <p>Easy: find what you need and share the heck out of it.</p>

        <h3>I couldn't find what I need!</h3>
        <p>Here's an excellent opportunity for contributing!</p>
        <p>
          Our <a href="https://github.com/Morpheu5/TheFAQ-content">content
            repository</a> is freely available and open to contributions. Just
          fork and PR.
        </p>

        <h3>Fork? PR? What TheFAQ?</h3>
        <p>
          Right. If you are not so technically inclined, you can still
          contribute! You can
          <a href="https://github.com/Morpheu5/TheFAQ-content/issues">open an
            issue</a>, discuss with us what you would like to contribute, and we
          will surely find a way!
        </p>

        <h3>Why is this not in my language?</h3>
        <p>
          We would LOVE for everything to be in everyone's language, but alas,
          time is a precious commodity, and there are technical and logistical
          challenges that we simply can't tackle without some massive,
          coordinated effort. Something like Wikipedia, for example.
        </p>

        <h3>Are there any other ways I can help?</h3>
        <p>We are glad you asked 😏</p>
        <p>This site runs on Open Source code.</p>
        <ul>
          <li>
            <a href="https://github.com/Morpheu5/TheFAQ-ETL">ETL</a> — the
            thing that turns the content repository into an indexed mess;
          </li>
          <li>
            <a href="https://github.com/Morpheu5/TheFAQ-API">API</a> — the
            thing that provides access to the indexed mess;
          </li>
          <li>
            <a href="https://github.com/Morpheu5/TheFAQ-WWW">WWW</a> — the
            thing you are looking at right now.
          </li>
        </ul>
        <p>
          If you are considering contributing to these, we assume you know what
          "fork" and "PR" mean 😬
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  head() {
    return {
      title: this.pageTitle,
      meta: [
        { hid: 'twitter:description', name: 'twitter:description', content: 'What TheFAQ is this?' },
        { hid: 'og:description', name: 'og:description', content: 'What TheFAQ is this?' },
        { hid: 'description', name: 'description', content: 'What TheFAQ is this?' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'About' },
        { hid: 'og:title', name: 'og:title', content: 'About' }
      ]
    }
  }
}
</script>
