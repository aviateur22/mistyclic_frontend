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
      <CommonButtonSecondary class="offer__button-store" :text="offer.name" :isRed="false" @click.native="store" />
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
      <OfferDetailOfferComponentsButtonArea @setRefundOverlayVisibility="toggleStatusRefundOverlay" />
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
                store: {
                    id: 1,
                    slug: 'chez-Poupile-01'
                }
            },
            actualUrl: this.$route.path,
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
        toggleStatusRefundOverlay(value){
            //etat de l'overlay de disponible
            if(value === true){               
                this.refundOverlayVisibility = true;
            } else {
                this.refundOverlayVisibility = !this.refundOverlayVisibility;
            }            
        },

        /**
         * redirection commerce
         */
        store(){
            console.log(this.$route.path);
            this.$router.push({
                name: 'store-slug',
                params: { slug: this.offer.store.slug }
            });
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
    position: absolute;
    top:5px;
    left: 5px;
  }
</style>