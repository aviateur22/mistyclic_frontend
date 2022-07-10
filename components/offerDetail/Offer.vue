<template>
  <article class="offer">
    <!-- overlay génération code remboursement -->
    <OfferDetailRefundOverlay v-if="refundOverlayVisibility" :offer="offer" class="offer__overlay" @closeOverlay="closeOverlay" />
    
    <header class="offer__header">
      <!-- back button -->
      <CommonButtonBack class="offer__button-back" :routeName="'index'" />
      <!-- image -->
      <OfferDetailOfferComponentsImage :imagePath="offer.image" />
      <!-- bouton acces commerce -->
      <CommonButtonSecondary class="offer__button-store" :text="offer.name" :isRed="false" />
    </header>
    <main class="offer__main">
      <!-- description de l'offre -->
      <OfferDetailOfferComponentsDescription class="aera--space" :description="offer.description" />      
      <!-- remboursement -->
      <OfferDetailOfferComponentsRefund class="aera--space" :refund="offer.refund" />
      <!-- condition pour en bénéficier -->
      <OfferDetailOfferComponentsConditionList class="aera--space" :conditions="offer.conditions" />
    </main>
    <footer class="offer__footer">
      <!-- button générer code + offres du commerce -->
      <OfferDetailOfferComponentsButtonArea @click.native="refundOverlayVisibility = !refundOverlayVisibility" />
    </footer>
  </article>
</template>

<script>;
export default {
    data(){
        return {
            //données de l'offre
            offer: {
                id: 1,
                name: 'chez poupilles',
                title: 'mon bouquet de fleur',
                image: 'https://raw.githubusercontent.com/aviateur22/picture_lesson/main/bouquet.png',
                type: 'fleuriste',
                refund: '0.50',
                description: 'nous vous proposons un remboursement immédiat pour l\'achat d\'un bouqet de fleur d\'une valeur de 150 euros',
                slug: 'mon-bouquet-de-fleur',
                conditions: [
                    {
                        id: 1,
                        text: 'non cumulable avec d’autres offres'
                    },
                    {
                        id: 2,
                        text: 'a récupérer en magasin'
                    },
                    {
                        id: 3,
                        text: 'suivant disponibilité en magasin'
                    }
                ],
                informations: '',
                storeId: {
                    id: 1
                }
            },
            //affichage overlay code de remboursement
            refundOverlayVisibility: false          
        };
    },
    methods: {
        /**
         * fermeture overlay code de remboursement
         */
        closeOverlay(value){
            this.refundOverlayVisibility = value;
        },

        /**
         * modification état remboursement overlay
         */
        toggleStatusRefundOverlay(){
            this.refundStatusOverlayVisibility = !this.refundStatusOverlayVisibility;

            if(this.refundStatusOverlayVisibility){
                this.refundOverlayVisibility = false;
            } else {
                this.refundOverlayVisibility = true;
            }
        }

    }
};
</script>

<style scoped>
  .offer{
    padding-bottom: 2em;
    max-width: 768px;
    position: relative;
  }

  .offer__overlay{
    z-index: 1;
  } 

  .offer__main, .offer__footer{
   padding: 0em 1em; 
  }
  .offer__button-store{
    margin-bottom: 2.5em;  
    margin-top: 1em;
    margin-left: 1em;
    width: auto;
    padding: 0.5em 1em;
  }
  /* bouton retiur en arriere */
  .offer__button-back{
    position: fixed;
    top:95px;
    left: 5px;
  }

  @media screen and (min-width:768px) {
    .offer__button-back{
    left: 50%;
    }    
  }
</style>