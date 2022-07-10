<template>
  <!-- image de l'offre -->
  <article class="image">
    <img class="image__img" :src="image" alt="image représentant l'offre">
  </article>
</template>

<script>
export default {
    props: ['image'],
    data(){
        return {
           
        };
    },
    methods: {
    } 
};
</script>

<style scoped>
  .image{
    width: 125px;
    height: 250px;
  }

  .image__img{
    width: 100%;
    height: 100%;
    object-position: center center;  
    object-fit: cover;     
  }

  @media screen  and (min-width: 768px){
    .image{
      width: 250px;
    }
    
  }

</style>