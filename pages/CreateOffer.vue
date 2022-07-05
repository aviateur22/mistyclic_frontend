<template>
  <article class="offer">
    <header class="header">
      <page-title :text="'mon offre'" />
    </header>
    <main class="main">     
      <!-- renseignement offre -->
      <section>
        <offer-information-area />
      </section> 

      <!-- conditions -->
      <section>
        <condition-area :conditions="conditions" />
      </section>

      <!-- prix de l'offre -->
      <section>
        <price-area />
      </section>
    </main>
    <footer class="footer">
      <button-aera />
    </footer>
  </article>
</template>

<script>
import PageTitle from '~/components/common/PageTitle.vue';
import ButtonAera from '~/components/createOffer/ButtonAera.vue';
import ConditionArea from '~/components/createOffer/ConditionArea.vue';
import OfferInformationArea from '~/components/createOffer/OfferInformationArea.vue';
import PriceArea from '~/components/createOffer/PriceArea.vue';
export default {
    components: { ConditionArea, OfferInformationArea, ButtonAera, PriceArea, PageTitle},
    data() {        
        return {
            //conditions de l'offre
            conditions: [
                {
                    id: 1,
                    text: 'non cumulable avec d\'autres offres'
                },
                {
                    id: 2,
                    text: 'à retirer sur place'
                },
                {
                    id: 3,
                    text: 'à réserver'
                },
                {
                    id: 4,
                    text: 'fonction de la diponibilité du jour'
                },
            ]
        };
    }
};
</script>

<style scoped>

  .offer{
    width: 100%;
    background: var(--grn);  
    max-width: 768px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 5px;
  }
  
  .offer main{
    width: 100%;
    border-radius: 15px 15px 0px 0px;
    background: var(--wht);
    padding: 2em 1em;
  }

  .offer .footer{
    padding: 1.5em 1em;
    background: var(--wht);
  }

</style>