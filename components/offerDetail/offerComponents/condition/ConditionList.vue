<template>
  <!-- liste des conditions -->
  <article class="condition">
    <header class="condition__header">
      <p>conditions</p>
    </header>
    <main class="condition__main">
      <OfferDetailOfferComponentsConditionConditions v-for="(condition) in conditions" :key="condition.id" :condition="condition.text" />
    </main>
  </article>
</template>

<script>
export default {
    props: ['conditions']
};
</script>

<style>

</style>