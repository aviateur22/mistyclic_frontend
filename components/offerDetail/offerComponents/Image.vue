<template>
  <article class="image">
    <!-- image de l'offre -->
    <img class="image__img" :src="imagePath" alt="image représentant l'offre">
  </article>  
</template>

<script>
export default {
    props: ['imagePath']
};
</script>

<style scoped>
  .image{
    width: 100%;
  }

  .image__img{
    width: 100%;
    height: 100%;
    object-position: center center;  
    object-fit: cover;  
  }

  @media screen and (min-width:768px) {    
    
  }

</style>