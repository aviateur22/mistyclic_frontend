<template>
  <!-- nom du commerce -->
  <h3 class="store__name">
    {{ name }} 
  </h3>
</template>

<script>
export default {
    props: ['name']

};
</script>

<style scoped>
  .store__name{
    font-size: var(--p20);
    text-transform: uppercase;
    font-weight: var(--bold);
  }

  @media screen and (min-width: 768px) {
    .store__name{
      font-size: var(--p24);
    }    
  }

</style>