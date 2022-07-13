<template>
  <div class="overlay">
    <!-- overlay status remboursement -->
    <OfferDetailStatusOverlay v-if="refundStatusOverlayVisibility" :code="code" :refund="offer.refund" @closeStatusOverlay="closeStatusOverlay" />
    <article class="overlay__outer">      
      <!-- text de présentation + titre -->
      <header class="overlay__header">
        <OfferDetailRefundCodeOverlayComponentsPresentationtext />
      </header>
      <main class="overlay__main">
        <!-- code de remboursement -->
        <OfferDetailRefundCode :code="code" />
      </main>
      <footer class="overlay__footer">
        <!-- bouton action -->
        <OfferDetailRefundCodeOverlayComponentsButtonArea @closeOverlay="closeOverlay" @checkRefundStatus="checkRefundStatus" />
      </footer>
    </article>
  </div>
</template>

<script>
export default {
    props: ['offer'],
    data(){
        return {
            //code de remboursement
            code: 'AE3DJ',
            //affichage overlay status du rembpursement
            refundStatusOverlayVisibility: false
        };
    },
    methods: {
        //modification état overlay remboursement
        closeOverlay(value){
            this.$emit('closeOverlay', value);            
        },

        /**
         * fermeture status overlay
         */
        closeStatusOverlay(){
            this.refundStatusOverlayVisibility = false;
        },

        /**
         * vérification status du rembouresment
         */
        checkRefundStatus(){
            this.refundStatusOverlayVisibility = true;
        }
    }

};
</script>

<style scoped>
  .overlay{
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.6);
    padding: 1em 2em;
    overflow-y: scroll;
    margin-top: var(--navbar-height);
  }

  .overlay__outer{
    background: var(--wht);
    padding: 1em;
  }

</style>