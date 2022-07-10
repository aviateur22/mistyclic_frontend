<template>
  <!-- liste des conditions -->
  <article class="condition">
    <header class="title--header">
      <p class="detail--text">
        conditions
      </p>
    </header>
    <!-- boucle sur les conditions de disponible -->
    <main class="condition__main">
      <ul class="condition__list">
        <OfferDetailOfferComponentsCondition v-for="(condition) in conditions" :key="condition.id" :condition="condition.text" class="condition__list" />
      </ul>      
    </main>
  </article>
</template>

<script>
export default {
    props: ['conditions']
};
</script>

<style scoped>

</style>