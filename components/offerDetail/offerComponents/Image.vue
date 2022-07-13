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
    height: 500px;
  }

  .image__img{
    width: 100%;        
    object-fit: cover;
    height: 500px;

  }

  @media screen and (min-width:768px) {    
    
  }

</style>