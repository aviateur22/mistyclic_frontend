<template>
  <!-- titre de l'offre -->
  <p class="offer__title"> 
    {{ title }} 
  </p>
</template>

<script>
export default {
    props: ['title']
};
</script>

<style scoped>
  .offer__title::first-letter{
    text-transform: capitalize;
  }

  .offer__title{
    color: var(--grn);
    padding: 0.4em 0em;

  }

  @media screen and (min-width: 768px) {
    .offer__title{
      font-size: var(--p20);
      padding: 0.5em 0em;
    }
  }

</style>