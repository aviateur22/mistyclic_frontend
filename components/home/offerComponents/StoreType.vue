<template>
  <!-- type de commerce -->
  <p class="store__type">
    {{ storetype }}
  </p>
</template>

<script>
export default {
    props: ['storetype']

};
</script>

<style scoped>
  .store__type{
    color: var(--light-gry);
    padding: 0.4em 0em;
  }

  .store__type::first-letter{
    text-transform: capitalize;    
  }

  @media screen and (min-width: 768px) {
    .store__type{
      font-size: var(--p20);
      padding: 0.5em 0em;
    }  
  }
</style>