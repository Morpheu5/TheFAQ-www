<template>
  <header id="site-header" class="bg-dark text-light">
    <b-container>
      <b-row align-v="center">
        <b-col>
          <h1 class="mt-3">
            <nuxt-link to="/" class="text-light">
              TheFAQ
            </nuxt-link>
          </h1>
          <p class="headline">
            <span><strong>For all your arguing needs on the Internet</strong></span>
          </p>
        </b-col>
      </b-row>
    </b-container>
    <b-navbar toggleable="md" variant="secondary" type="dark">
      <b-container>
        <b-navbar-toggle target="nav-collapse" />
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/about">
              About
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>
