<template>
  <article>
    <main>
      <!-- filtrage des offres par type de commerce -->
      <section>
        <type />
      </section>

      <!-- filtrage des offres par type de ville -->
      <section>
        <city />
      </section>
    </main>
  </article>
</template>

<script>
import City from './filter/City.vue';
import Type from './filter/Type.vue';
export default {
    components: { City, Type }

};
</script>

<style scoped>
</style>