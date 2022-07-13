<template>
  <!-- description de l'offre -->
  <article class="description">
    <header class="title--header detail--text">
      <p>description</p>
    </header>
    <main class="description__main detail--text">
      <p>
        {{ description }}
      </p>
    </main>
  </article>
</template>

<script>
export default {
    props: ['description']

};
</script>

<style scoped>

</style>