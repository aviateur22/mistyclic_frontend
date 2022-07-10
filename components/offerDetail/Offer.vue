<template>
  <article class="offer">
    <header class="offer__header">
      <!-- back button -->
      <CommonButtonBack class="offer__button-back" :routeName="'index'" />
      <!-- image -->
      <OfferDetailOfferComponentsImage :imagePath="offer.image" />
      <!-- bouton acces commerce -->
      <CommonButtonSecondary :text="offer.name" :isRed="false" />
    </header>
    <main class="offer__main">
      <!-- description de l'offre -->
      <OfferDetailOfferComponentsDescription :description="offer.description" />      
      <!-- remboursement -->
      <OfferDetailOfferComponentsRefund :refund="offer.refund" />
      <!-- condition pour en bénéficier -->
      <OfferDetailOfferComponentsConditionList :conditions="offer.conditions" />
    </main>
    <footer class="offer__footer">
      <CommonButtonPrimary :text="'Générer un code'" :isRed="false" />
    </footer>
  </article>
</template>

<script>;
export default {
    data(){
        return {
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
                informations: ''
            }
        };
    }
};
</script>

<style scoped>
  .offer{
    position: relative;
  }

  .offer__button-back{
    position: fixed;
    top:95px;
    left: 5px;
    z-index: 3  ;
  }
</style>