<template>
  <article class="filter">
    <main>
      <!-- filtrage des offres par type de commerce -->
      <section>
        <type :storeType="storeType" />
      </section>

      <!-- filtrage des offres par type de ville -->
      <section>
        <FormFormComponentsInputWithProposal 
          :listProposal="cities" 
          :name="'city'" 
          :text="'ville'" 
          :placeHolder="'ville recherchée'" 
          :prop="'city'"
          @updateProposalList="updateProposalList"
        />
        <!-- <city :cities="cities" /> -->
      </section>
    </main>
  </article>
</template>

<script>
import Type from './components/Type.vue';
export default {
    components: { Type },
    data(){
        return {
            // type de commerce
            storeType: [
                {
                    id: 1,
                    name: 'boucherie'
                },
                {
                    id: 2,
                    name: 'patisserie'
                },
                {
                    id: 3,
                    name: 'fleuriste'
                }
            ],
            // villes de disponible
            cities: []

        };
    },    
    methods: {
        /**
         * mise a jour des villes
         */
        async updateProposalList(name){
            if(name){
                this.cities = await this.$store.dispatch('city/getCitiesByName', name);              
            } 
        }
    }
};
</script>

<style scoped>
  .filter{
    display: flex;
    flex-direction: column;
    width: 100%;
    background: var(--light-grn);
    margin: 1em 0em;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 10px;
  }
</style>