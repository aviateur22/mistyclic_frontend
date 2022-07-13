<template>
  <!-- conteneur pour la liste des offres  -->
  <article>
    <main>
      <Offer v-for="(offer, i) in offers" :key="i" :offer="offer" />
    </main>
  </article>
</template>

<script>
import Offer from './Offer.vue';
export default {
    components: { Offer},
    props: ['offers']
};
</script>

<style>

</style>