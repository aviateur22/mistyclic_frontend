<template>
  <article class="filter">
    <main>
      <!-- filtrage des offres par type de commerce -->
      <section>
        <type :storeType="storeType" />
      </section>

      <!-- filtrage des offres par type de ville -->
      <section>
        <city :cities="cities" />
      </section>
    </main>
  </article>
</template>

<script>
import City from './components/city/City.vue';
import Type from './components/Type.vue';
export default {
    components: { Type, City },
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
            cities: [
                {
                    id: 1,
                    city: 'blagnac - 31700'
                },
                {
                    id: 2,
                    city: 'auterive - 31190'
                },
                {
                    id: 3,
                    city: 'muret - 31600'
                }
            ]

        };
    }
};
</script>

<style scoped>
  .filter{
    display: flex;
    flex-direction: column;
    width: 100%;
    background: var(--light-grn);
  }
</style>