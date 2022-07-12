<template>
  <!-- image poignée de main -->
  <article class="image">
    <img class="image__hand" src="~/assets/image/hand.png" alt="image d'une pair de main">
  </article>  
</template>

<script>
export default {

};
</script>

<style scoped>
  .image{
    width: 100%;
    height: 100%;  
    display: flex;  
    justify-content: center;
    align-items: center;
  }
  .image__hand{
    max-height: 100%;
    max-width: 100%;
  }

</style>