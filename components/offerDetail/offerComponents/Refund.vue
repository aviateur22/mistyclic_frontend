<template>
  <!-- remboursement de l'offre -->
  <article class="refund">
    <header class="title--header detail--text">
      <p>Remboursement immédiat</p>
    </header>
    <main class="refund__main detail--text">
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