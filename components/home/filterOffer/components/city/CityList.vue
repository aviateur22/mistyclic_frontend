<template>
  <!-- liste de ville a selectionner -->
  <article class="city__list">
    <select-city v-for="(city) in cities" :key="city.id" :city="city.city" @selectCity="selectCity" />
  </article>  
</template>

<script>
import SelectCity from './SelectCity.vue';
export default {
    components: { SelectCity },
    props: ['cities'],
    methods: {
        /**
         * selection d'une ville pour filtrage offre
         * @param {Text} city - nom de la ville
         */
        selectCity(city){
            this.$emit('selectCity', city);
        }
    }

};
</script>

<style scoped>
  .city__list{
    position: absolute;
    top: 25px;
    right: 0px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
} 

</style>