<template>
  <!-- remboursement de l'offre -->
  <article class="refund">
    <header class="refund__header">
      <p>Remboursement immédiat</p>
    </header>
    <main class="refund__main">
      <p>
        {{ refund }} €
      </p>
    </main>
  </article>
</template>

<script>
export default {
    props: ['refund']

};
</script>

<style scoped>

</style>