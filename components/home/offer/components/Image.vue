<template>
  <!-- image de l'offre -->
  <article>
    <img :src="image" alt="image représentant l'offre">
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
        /**
         * renvoie le path de l'image
         */
        getImagePath(){
           
        }
    } 
};
</script>

<style>

</style>