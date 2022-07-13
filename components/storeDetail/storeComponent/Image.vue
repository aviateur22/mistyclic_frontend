<template>
  <article class="image">
    <!-- bouton retour en arriere -->
    <CommonButtonBack class="image__back-button" @click.native="backPage" />
    <!-- image du commerce -->
    <img class="image__img" :src="imagePath" alt="image représentant le commerce">
    <!-- nom du magasin -->
    <p class="image__text">
      {{ storeName }}
    </p>
  </article>  
</template>

<script>
export default {
    props: ['imagePath', 'storeName', 'slug'],
    methods: {
        backPage(){

        }
    }
};
</script>

<style scoped>
  .image{
    width: 100%;
    position: relative;
    height: 500px;
    margin-bottom: 2em;
  }

  .image__img{
    width: 100%;
    height: 500px;
    object-position: center center;  
    object-fit: cover;  
  }

  .image__back-button{
    position: absolute;
    top: 7px;
    left:5px;
    z-index: 1;
  }

  .image__text{
    position: absolute;
    top: 0px;
    left:0px;
    right: 0px;
    border-radius:0px 0px 10px 10px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    background: white;
    padding: 1em;
    text-align: center;
    font-size: var(--p20);
    font-weight: var(--bold);
    text-transform: uppercase;
    color: var(--grn);
  }

  @media screen and (min-width:768px) {    
    
  }

</style>