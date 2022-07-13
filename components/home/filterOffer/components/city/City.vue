<template>
  <!-- filtrage de offres -->
  <article class="filter__type">
    <main class="filter__type-main">
      <h2 class="filter__name name--small">
        ville:
      </h2>
      <!-- recherche d'une ville -->
      <section class="filter__type-city">
        <!-- input box -->
        <input id="city" v-model="city" class="filter__type-input" type="text" name="city" @keyup="updateCity">
        <!-- selection de la ville -->      
        <city-list v-if="isVisible" :cities="cities" @selectCity="selectCity" />        
      </section>      
    </main>
  </article>
</template>

<script>
import CityList from './CityList.vue';
export default {
    components: { CityList },
    props: ['cities'],
    data(){
        return {
            //model city pour l'input
            city: null,

            //visibilité liste de ville
            isVisible: false

        };
    },
    methods: {
        /**
         * selection d'une ville
         * @param {Text} city - nom de la ville
         */
        selectCity(city){
            //v-model
            this.city = city;

            //masque la liste des villes
            this.isVisible = false;
        },

        /**
         * affichage de la liste des villes
         */
        updateCity(){
            if(this.city.length > 0){
                this.isVisible = true;
            } else {
                this.isVisible = false;
            }
        }
    }
};
</script>

<style scoped>
  .name--small{   
    width: auto;
    padding-right:1em ;
  }

  .filter__type-city{
    width: 100%;
    position: relative;
    flex-grow: 3;
  }
  .filter__type-input{
    width: 100%;
    font-size: var(--p16);    
    text-transform: uppercase;
    outline: none;
    border: none;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);    
    text-align: right;
    font-size: var(--p16);
    font-weight: var(--bold);
  }

  @media screen and (min-width: 768px){
    .name--small{   
      width: 100%;
    }
     .filter__type-city{     
      flex-grow: 2;
    }    
  }

</style>