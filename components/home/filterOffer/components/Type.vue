<template>
  <!-- filtrage des offres par type de commerce-->
  <article class="filter__type">
    <main class="filter__type-main">
      <h2 class="filter__name">
        type de commerce
      </h2>
      <!-- select type de commerce -->
      <select-store-type :storeType="storeType" />
    </main>
  </article>
</template>

<script>
import SelectStoreType from './SelectStoreType.vue';
export default {
    components: { SelectStoreType },
    props: ['storeType']

};
</script>

<style>

</style>