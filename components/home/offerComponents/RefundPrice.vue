<template>
  <!-- prix du remboursement -->
  <p class="offer__refund">
    {{ refund }} €
  </p>
</template>

<script>
export default {
    props: ['refund']

};
</script>

<style scoped>
  .offer__refund{
      font-size: var(--p20);
      font-weight: var(--bold);
      padding: 0.4em 0em;
    }

@media screen and (min-width: 768px) {
  .offer__refund{
    font-size: var(--p24);    
    padding: 0.5em 0em;
  }
  
}

</style>