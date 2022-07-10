<template>
  <!-- description de l'offre -->
  <article class="description">
    <header class="description__header">
      <p>description</p>
    </header>
    <main class="description__main">
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