<template>
  <!-- compsition dune offre -->
  <article class="offer" @click="displayOffer">     
    <header>
      <!-- l'image de l'offre -->
      <HomeOfferComponentsImage :image="offer.image" />
    </header>
    <main class="offer__main">          
      <!-- nom du commerce -->
      <HomeOfferComponentsStoreName :name="offer.storeName" />
      <!-- type de commerce -->
      <HomeOfferComponentsStoreType :storetype="offer.type" />
      <!-- titre de l'offre -->
      <HomeOfferComponentsTitle :title="offer.title" />
      <!-- remboursement -->
      <HomeOfferComponentsRefundPrice :refund="offer.refund" />
      <!-- bouton recherche offre commerce -->      
      <CommonButtonOfferFilterByStore />
    </main>
  </article>
</template>

<script>
export default {
    props: ['offer'],    
    methods: {
        /**
         * affichage de l'offre en détail
         */
        displayOffer(){
            this.$router.push({
                name: 'offer-id',
                params: { id: this.offer.slug }
            });
        }
    }
};
</script>

<style scoped>
  .offer{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    border-radius: 5px;
    display: flex;
    overflow: hidden;  
    height: 250px;
    width: 100%;
    margin: 1em 0em;
    cursor: pointer;
    transition: all var(--t3ms) ease-in-out;
  }

  .offer:hover{
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }

  .offer__main{
    padding: 0.5em;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>